import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import BookIcon from "@mui/icons-material/Book";
import { Books, Sidebar } from "../components";
import { Breadcrumbs, Typography } from "@mui/material";
import { Menu } from "../types";
import { useState } from "react";
import { Borrowed } from "../components/borrowed";

const menu: Menu[] = [
  { label: "Books", icon: <MenuBookIcon /> },
  { label: "Borrowed", icon: <BookIcon /> },
  { label: "History", icon: <AssignmentRoundedIcon /> },
  { label: "Notifications", icon: <NotificationsActiveIcon /> },
];

export const Student = () => {
  const [selectedMenu, setSelectedMenu] = useState(menu[0]);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar
          menu={menu}
          handleChange={(menu: Menu) => {
            setSelectedMenu(menu);
          }}
        />
        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <Stack
            spacing={2}
            sx={{
              alignItems: "center",
              mx: 3,
              pb: 5,
              mt: { xs: 8, md: 0 },
              height: "100%",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  px: 2,
                  pt: 5,
                }}
              >
                <Breadcrumbs
                  separator={<NavigateNextIcon fontSize="small" />}
                  aria-label="breadcrumb"
                >
                  <Typography>Student</Typography>
                  <Typography>{selectedMenu.label}</Typography>
                </Breadcrumbs>
              </Box>
            </Box>
            <Box sx={{ height: "100%", width: "100%" }}>
              {selectedMenu.label === "Books" ? (
                <Books />
              ) : selectedMenu.label === "Borrowed" ? (
                <Borrowed />
              ) : (
                <div style={{ color: "black" }}>Bsdfasf</div>
              )}
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
};
