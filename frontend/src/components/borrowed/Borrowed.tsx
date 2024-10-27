import { Box, Grid2 as Grid } from "@mui/material";
import { BorrowedItem } from "./fragments";

export const Borrowed = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid direction="row" container size={12}>
        <Grid size={3} sx={{ p: 2 }}>
          <BorrowedItem />
        </Grid>
        <Grid size={3} sx={{ p: 2 }}>
          <BorrowedItem />
        </Grid>
      </Grid>
    </Box>
  );
};
