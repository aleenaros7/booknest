import {
  Box,
  Button,
  Card,
  CircularProgress,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { TextField } from "../text-field";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { SelectBox } from "../select-box";
import { Book, DropdownItem } from "../../types";
import { useFetchBorrowRequestCodesQuery } from "../../api";

type Props = {};

export const IssueBook = (props: Props) => {
  const [borrowRequestsDropdown, setBorrowRequestsDropdown] =
    useState<DropdownItem[]>();
  const fetchBorrowRequestCodesQuery = useFetchBorrowRequestCodesQuery();

  useEffect(() => {
    if (fetchBorrowRequestCodesQuery.isSuccess) {
      const borrowRequestsDropdown: DropdownItem[] =
        fetchBorrowRequestCodesQuery.data.map((e) => ({
          key: e,
          value: e,
        }));
      setBorrowRequestsDropdown(borrowRequestsDropdown);
    }
  }, [
    fetchBorrowRequestCodesQuery.isSuccess,
    fetchBorrowRequestCodesQuery.isLoading,
    fetchBorrowRequestCodesQuery.isError,
    fetchBorrowRequestCodesQuery.data,
    fetchBorrowRequestCodesQuery.error,
  ]);

  return fetchBorrowRequestCodesQuery.isLoading ? (
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
  ) : fetchBorrowRequestCodesQuery.isError || !borrowRequestsDropdown ? (
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
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        variant="outlined"
        sx={{ p: 6, width: "500px", boxShadow: "0px 0px 14px 0px #00000040" }}
      >
        <Box>
          <Typography
            sx={{ width: "100%", fontSize: "1.3rem", textAlign: "center" }}
          >
            Issue Book
          </Typography>
        </Box>
        <Divider sx={{ mt: 3, mb: 4 }} />
        <Box
          component={"form"}
          id="createBookForm"
          // onSubmit={handleSubmit(handleClickSubmit)}
          sx={{
            minWidth: "500px",
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <SelectBox
            fullWidth
            label="Borrow request code"
            name="code"
            dropdown={borrowRequestsDropdown}
            // register={register}
            // error={errors["genre"]}
          />
          <Button sx={{ mt: 2 }} type="submit" fullWidth variant="contained">
            Issue
          </Button>
        </Box>
      </Card>
    </Box>
  );
};
