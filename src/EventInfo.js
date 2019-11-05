import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import {Typography} from "@material-ui/core";
import {Box} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  progressBar: {
    width: '100%'
  },
  eventDescription: {
    width: '60%',
    margin: '0 auto'
  }
}));

export default function EventInfo() {
  const classes = useStyles();
  const completed = 60;

  return (
    <div className={classes.root}>
      
      <Box my={2}>
        <Typography component="h2" variant="h4" my={3} align="center">
          MyLiveEvent
        </Typography>
      </Box>
      <Box className={classes.eventDescription} my={2}>
        <Typography color="textSecondary" align="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </Box>
      <div className={classes.progressBar}>
        <LinearProgress variant="determinate" value={completed} />
      </div>
    </div>
  );
}