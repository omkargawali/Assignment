import React from 'react';
import Heading from './Heading';
import Event from './Event';
import Upload from './Upload';
import Title from './Title';
import Categories from './Categories';
import Summary from './Summary';
import Type from './Type';
import RegistrationSite from './RegistrationSite';
import SwitchButton from './SwitchButton';
import OnlineLink from './OnlineLink';
import TimeZone from './TimeZone';
import DateTime from './DateTime';
import TextArea from './TextArea';
import UploadFile from './UploadFile';
import TopButton from './TopButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


function Form() {
  return (
    <React.Fragment>  
   
    <Typography variant="h6" gutterBottom>
      <Heading/>
    </Typography> 

    <div className= "hr">
      <hr/>
    </div>
    
    <div className="form">
      <Grid item xs={12}>
        <Event/>
      </Grid>

      <Grid item xs={12}>
        <Upload/>
      </Grid>

      <Grid item xs={12}>
        <Title/>
      </Grid>

      <Grid item xs={12}>
        <Categories/>
      </Grid>

      <Grid item xs={12}>
        <Summary/>
      </Grid>

      <Grid item xs={12}>
        <Type/>
      </Grid>

      <Grid item xs={12}>
        <RegistrationSite/>
      </Grid>

      <Grid item xs={12}>
        <SwitchButton/>
      </Grid>

      <Grid item xs={12}>
        <OnlineLink/>
      </Grid>

      <Grid item xs={12}>
        <TimeZone/>
      </Grid>


      <Grid item xs={12}>
        <DateTime/>
      </Grid> 

      <Grid item xs={12}>
        <TextArea/>
      </Grid>

      <Grid item xs={12}>
        <UploadFile/>
      </Grid>

      <TopButton/>

    </div>
    </React.Fragment>
  );
}

export default Form;