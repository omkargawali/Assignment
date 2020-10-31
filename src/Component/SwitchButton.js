import React from 'react';
import '../App.css';
import {  makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Switch from '@material-ui/core/Switch';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: "100%",
      },
    }));

function SwitchButton() {
    const classes = useStyles();

    const [state, setState] = React.useState({
      checkedA: true,
      checkedB: true,
    });
    
      const handleChange1 = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
    return (
        
        <FormControl className={classes.formControl}>
        <div> Is this a virtual event?
        <Switch
          checked={state.checkedB}
          onChange={handleChange1}
          color="primary"
          name="checkedB"
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        </div>
        </FormControl>
  
    );
  }

export default SwitchButton;