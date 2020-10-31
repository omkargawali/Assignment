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

function Title() {
    const classes = useStyles();
    return (
        
        <FormControl className={classes.formControl}>
        <TextField
          id="standard-helperText"
          label="Title *"
          defaultValue=""
          helperText="(0/250)"
        />
        </FormControl>

    );
  }

export default Title;