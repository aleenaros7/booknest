import {
  Box,
  CircularProgress,
  Grid2 as Grid,
  Typography,
} from "@mui/material";
import { BookItem } from "./fragments";
import { Book, DropdownItem } from "../../types";
import { useEffect, useState } from "react";
import { SelectBox } from "../select-box";
import { Genre } from "../../enums";
import { useFetchBooksQuery } from "../../api";
import { toastOptionsAtom } from "../../store";
import { useAtom } from "jotai";

const dropdown: DropdownItem[] = [
  { key: "All", value: "all" },
  { key: "Fiction", value: Genre.Fiction },
  { key: "Non-Fiction", value: Genre.NonFiction },
  { key: "Mystery", value: Genre.Mystery },
  { key: "Thriller", value: Genre.Thriller },
  { key: "Romance", value: Genre.Romance },
  { key: "Science Fiction", value: Genre.ScienceFiction },
  { key: "Fantasy", value: Genre.Fantasy },
  { key: "Biography", value: Genre.Biography },
  { key: "History", value: Genre.History },
];

export const Books = () => {
  const [genre, setGenre] = useState("all");
  const [books, setBooks] = useState<Book[]>();
  const [, setToastOptions] = useAtom(toastOptionsAtom);
  const fetchBooksQuery = useFetchBooksQuery();

  useEffect(() => {
    if (fetchBooksQuery.isSuccess) {
      setBooks(fetchBooksQuery.data);
    }

    if (fetchBooksQuery.isError) {
      setToastOptions({
        open: true,
        message: "Cannot fetch books at this moment",
        severity: "error",
      });
    }
  }, [
    fetchBooksQuery.isSuccess,
    fetchBooksQuery.isLoading,
    fetchBooksQuery.isError,
    fetchBooksQuery.data,
    fetchBooksQuery.error,
  ]);

  return fetchBooksQuery.isLoading ? (
    <Box
      sx={{
        px: 2,
        pb: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <CircularProgress />
    </Box>
  ) : fetchBooksQuery.isError || !books ? (
    <Box
      sx={{
        px: 2,
        pb: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Typography>Something went wrong</Typography>
    </Box>
  ) : (
    <>
      <Box
        sx={{
          px: 2,
          pb: 1,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Box>
          <SelectBox
            sx={{
              width: "200px",
            }}
            label="Genre"
            name="genre"
            dropdown={dropdown}
            value={genre}
            onChange={(event: any) => {
              setGenre(event.target.value);
            }}
          />
        </Box>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Grid direction="row" container size={12}>
          {books.map((book) => (
            <Grid size={3} sx={{ p: 2 }}>
              <BookItem book={book} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};
