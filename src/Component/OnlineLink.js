import React from 'react';
import '../App.css';
import {  makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: "100%",
      },
    }));

function OnlineLink() {
    const classes = useStyles();
    return (
        
        <FormControl className={classes.formControl}>
        <TextField id="filled-search" label="Online Link" type="" variant="filled" />
        </FormControl>

    );
  }

export default OnlineLink;