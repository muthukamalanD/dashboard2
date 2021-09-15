import {
  IconButton,
  makeStyles,
  Typography,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemAvatar,
  Avatar,
  ListItemText
} from "@material-ui/core";
import { Create } from "@material-ui/icons";
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

export default function Profile({ profileData, setProfileData }) {
  const classes = useStyles();
  const history = useHistory();
  const editProfile = (id) => {
    history.push(`/edit-profile/${id}`);
  };
  return (
    <List className={classes.root}>
      <ListItem button>
        <ListItemAvatar>
          <Avatar
            variant="rounded"
            alt="https://astrolinked.com/media/avatars/876/resized/500/tc.png"
            src={profileData.profPic}
            className={classes.large}
          />
        </ListItemAvatar>
        <ListItemText
          primary={
            <>
              <Typography
                component="h4"
                variant="h4"
                className={classes.inline}
                color="primary"
              >
                {profileData.name}
              </Typography>
            </>
          }
          secondary={profileData.mobile}
          className={classes.title}
        />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="delete"
            color="primary"
            onClick={() => editProfile(profileData.id)}
          >
            <Create />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Typography
        component="h6"
        variant="h6"
        className={classes.title}
        color="textSecondary"
        style={{ padding: "16px", textAlign: "left" }}
      >
        {profileData.txt}
      </Typography>
    </List>
  );
}
