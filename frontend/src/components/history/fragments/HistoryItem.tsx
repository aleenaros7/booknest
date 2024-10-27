import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";

export const HistoryItem = () => {
  return (
    <Card
      sx={{
        display: "flex",
        width: "100%",
        maxHeight: "90px",
        boxShadow: "0px 0px 14px 0px #00000040",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: 80,
          objectFit: "contain",
          display: "flex",
          justifyContent: "flex-start",
          objectPosition: "left",
        }}
        image="https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg"
        alt="Book"
      />
      <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <CardContent sx={{ width: "300px" }}>
          <Typography component="div" variant="body1">
            Soul
          </Typography>
          <Typography
            variant="body2"
            component="div"
            sx={{ color: "text.secondary", width: "100%" }}
          >
            Stephen Hawking
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <Divider orientation="vertical" flexItem />
          <CardContent sx={{ px: 6 }}>
            <Typography component="div" variant="caption">
              Issued On
            </Typography>
            <Typography
              variant="caption"
              component="div"
              sx={{ color: "text.secondary" }}
            >
              14/03/2000
            </Typography>
          </CardContent>
          <Divider orientation="vertical" flexItem />
          <CardContent sx={{ px: 6 }}>
            <Typography component="div" variant="caption">
              Returned On
            </Typography>
            <Typography
              variant="caption"
              component="div"
              sx={{ color: "text.secondary" }}
            >
              15/03/2000
            </Typography>
          </CardContent>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}></Box>
      </Box>
    </Card>
  );
};
