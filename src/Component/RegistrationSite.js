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

function RegistrationSite() {
    const classes = useStyles();
    return (
        
        <FormControl className={classes.formControl}>
        <TextField
          id="standard-helperText"
          label="Registration Site *"
          defaultValue=""
          helperText="(0/500)"
        />
        </FormControl>

    );
  }

export default RegistrationSite;