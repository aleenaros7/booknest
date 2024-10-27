import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { Box, Button } from "@mui/material";

export const BorrowedItem = () => {
  return (
    <Card sx={{ boxShadow: "0px 0px 14px 0px #00000040" }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500] }}
            aria-label="book"
            src={
              "https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg"
            }
          />
        }
        title="Soul"
        subheader="Stephen Hawking"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg"
        alt="Paella dish"
        sx={{
          objectFit: "contain",
        }}
      />
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Issued on :
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", fontWeight: "bold" }}
          >
            14/03/2024
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontWeight: "bold",
          }}
        >
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Return by
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", fontWeight: "bold" }}
          >
            15/03/2024
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ px: 2, pb: 2 }}>
        <Button variant="contained" fullWidth>
          Return
        </Button>
      </CardActions>
    </Card>
  );
};
