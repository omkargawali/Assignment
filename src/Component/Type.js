import React from 'react';
import '../App.css';
import {  makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: "100%",
      },
    }));

function Type() {
    const classes = useStyles();
    return (
        
        <FormControl className={classes.formControl}>
        <div>Type: Public</div>
        </FormControl>

    );
  }

export default Type;