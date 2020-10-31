import React from 'react';
import '../App.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { CancelScheduleSend } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    button: {
      '& > *': {
        margin: theme.spacing(1),
        float: "left",
      },
    },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
   
  }));

function Heading() {
    function Create() {
        alert('Successfully Created Event!');
      }

      function Cancel() {
        alert('Press ok to Cancel Event');
      }

    const classes = useStyles();
    return (
        
        <div className = "text" >Create Event 
            <div className={classes.button}>
                <Button variant="contained" color="primary" onClick={Create} >Create</Button>
                <Button variant="contained" onClick={Cancel}>Cancel</Button>
            </div> 
        </div> 
    );
  }

export default Heading;