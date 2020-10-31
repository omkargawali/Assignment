import React from 'react';
import '../App.css';
import {  makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: "100%",
      },
    }));

    function Timezone() {
        const classes = useStyles();
        const [select, setAge] = React.useState('');

        const handleChange = (event) => {
          setAge(event.target.value);
        };    

    return (
        <FormControl className={classes.formControl}>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          Select Timezone *
        </InputLabel>
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={select}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>Select...</em>
          </MenuItem>
          <MenuItem value={10}>India/Mumbai</MenuItem>
          <MenuItem value={20}>India/NewDelhi</MenuItem>
          <MenuItem value={30}>United Kingdom/London</MenuItem>
        </Select>
      </FormControl>
    );
  }

export default Timezone;