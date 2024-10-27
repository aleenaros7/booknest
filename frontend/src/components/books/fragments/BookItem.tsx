import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { Badge, Button } from "@mui/material";

export const BookItem = () => {
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
        action={
          <IconButton aria-label="settings">
            <Badge badgeContent={4} color="error">
              <LibraryBooksIcon />
            </Badge>
          </IconButton>
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
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions sx={{ px: 2, pb: 2 }}>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        <Button variant="contained" fullWidth>
          Borrow
        </Button>
      </CardActions>
    </Card>
  );
};
