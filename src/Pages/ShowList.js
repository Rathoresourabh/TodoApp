import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowUserData from "../components/ShowUserData";
import List from "@material-ui/core/List";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
  },
}));

function ShowTodo() {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const [showData, setShowData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users?page=${page}`)
      .then((response) => {
        console.log(response);
        setShowData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <h1>Here's your List 😃</h1>
      </div>

      <List
        style={{
          height: "100%",
          overflow: "auto",
        }}
      >
        {showData.map(function (items, index) {
          return <ShowUserData items={items} />;
        })}
      </List>
      <div className={classes.root}>
        <Pagination
          count={4}
          variant="outlined"
          color="primary"
          onChange={(e, value) => setPage(value)}
        />
      </div>
    </div>
  );
}

export default ShowTodo;
