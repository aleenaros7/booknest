import { Box, Grid2 as Grid } from "@mui/material";
import { BookItem } from "./fragments";
import { DropdownItem } from "../../types";
import { useState } from "react";
import { SelectBox } from "../select-box";
import { Genre } from "../../enums";

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
  return (
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
          <Grid size={3} sx={{ p: 2 }}>
            <BookItem />
          </Grid>
          <Grid size={3} sx={{ p: 2 }}>
            <BookItem />
          </Grid>
          <Grid size={3} sx={{ p: 2 }}>
            <BookItem />
          </Grid>
          <Grid size={3} sx={{ p: 2 }}>
            <BookItem />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
