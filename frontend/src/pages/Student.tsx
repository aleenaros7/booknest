import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import { Sidebar } from "../components";
import { Typography } from "@mui/material";

const menu = [
  { label: "Home", icon: <HomeRoundedIcon /> },
  { label: "Analytics", icon: <AnalyticsRoundedIcon /> },
  { label: "Clients", icon: <PeopleRoundedIcon /> },
  { label: "Tasks", icon: <AssignmentRoundedIcon /> },
];

export const Student = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar menu={menu} />
        <Box
          sx={{
            height: "100vh",
            flexGrow: 1,
            overflow: "auto",
          }}
        >
          <Stack
            spacing={2}
            sx={{
              alignItems: "center",
              mx: 3,
              pb: 5,
              mt: { xs: 8, md: 0 },
            }}
          >
            <Box sx={{ height: "100%" }}>
              <Typography>Hello da</Typography>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
};
