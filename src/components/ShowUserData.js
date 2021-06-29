import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "20px",

    maxWidth: "800px",
    margin: "0 auto",
  },

  avatar: {
    display: "flex",
    justifyContent: "left",
    backgroundColor: red[500],
  },
}));

export default function ShowUserDat({ items }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Avatar
          alt={items.first_name}
          className={classes.avatar}
          src={items.avatar}
        />

        <Typography
          align="right"
          variant="body2"
          color="textSecondary"
          component="p"
          style={{ fontWeight: "bold" }}
        >
          Email-{items.email}
        </Typography>
        <Typography
          align="right"
          variant="body2"
          color="textSecondary"
          component="p"
          style={{ fontWeight: "bold" }}
        >
          First Name-{items.first_name}
        </Typography>
        <Typography
          align="right"
          variant="body2"
          color="textSecondary"
          component="p"
          style={{ fontWeight: "bold" }}
        >
          Last Name -{items.last_name}
        </Typography>
      </CardContent>
    </Card>
  );
}
