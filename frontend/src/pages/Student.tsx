import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import { Sidebar } from "../components";

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
          component="main"
          sx={{
            flexGrow: 1,
            backgroundColor: "red",
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
            {/* <MainGrid /> */}
          </Stack>
        </Box>
      </Box>
    </>
  );
};
