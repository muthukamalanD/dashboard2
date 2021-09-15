import React, { useEffect, useState } from "react";
import {
  IconButton,
  makeStyles,
  Typography,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText
} from "@material-ui/core";
import { Delete, Create } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 480,
    backgroundColor: theme.palette.background.paper,
    margin: "auto"
  },
  large: {
    width: theme.spacing(24),
    height: theme.spacing(24),
    marginLeft: theme.spacing(1),
    borderRadius: "32px"
  },
  title: {
    marginLeft: theme.spacing(2)
  }
}));

export default function Users() {
  const classes = useStyles();
  const history = useHistory();
  const [users, setUsers] = useState([]);

  function getUser() {
    fetch("https://60c83b2fafc88600179f660c.mockapi.io/user/users", {
      method: "GET"
    })
      .then((data) => data.json())
      .then((data) => setUsers(data))
      .catch((e) => console.log(e));
  }
  useEffect(() => {
    getUser();
  }, []);
  function deleteUser(id) {
    setUsers([]); // given for deletion ->  Loading... content to display
    fetch(`https://60c83b2fafc88600179f660c.mockapi.io/user/users/${id}`, {
      method: "DELETE"
    })
      .then((data) => data.json()) // inside 'then' means it is delete sucessfully
      .then((data) => alert("Deleted successfully"))
      .then((data) => getUser())
      .catch((e) => console.log(e));
  }

  function editUser(id) {
    history.push(`/edit-user/${id}`);
  }

  return (
    <>
      {!users.length ? <h1>Loading ..... </h1> : ""}
      <List className={classes.root}>
        {users.map((data) => {
          return (
            <ListItem key={data.id} button>
              <ListItemText
                primary={
                  <>
                    <Typography
                      component="h4"
                      variant="h5"
                      className={classes.inline}
                      color="primary"
                    >
                      {data.name}
                    </Typography>
                    <Typography
                      component="h6"
                      variant="h6"
                      className={classes.title}
                      color="textSecondary"
                    >
                      {data.email}
                    </Typography>
                    <Typography className={classes.title} color="textSecondary">
                      {data.phone}
                    </Typography>
                  </>
                }
                secondary={new Date(data.createdAt).toDateString()}
                className={classes.title}
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  color="secondary"
                  onClick={() => deleteUser(data.id)}
                >
                  <Delete />
                </IconButton>
                <IconButton
                  edge="end"
                  className={classes.title}
                  aria-label="delete"
                  color="primary"
                  onClick={() => editUser(data.id)}
                >
                  <Create />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}
