import { Box, Grid2 as Grid } from "@mui/material";
import { HistoryItem } from "./fragments";

export const History = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid direction="column" container size={12}>
        <Grid size={12} sx={{ p: 2 }}>
          <HistoryItem />
        </Grid>
        <Grid size={12} sx={{ p: 2 }}>
          <HistoryItem />
        </Grid>
        <Grid size={12} sx={{ p: 2 }}>
          <HistoryItem />
        </Grid>
        <Grid size={12} sx={{ p: 2 }}>
          <HistoryItem />
        </Grid>
      </Grid>
    </Box>
  );
};
