import { Grid, Paper, Avatar, TextField,Button, Link } from '@material-ui/core';
import React, {useState} from 'react';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Typography } from '@material-ui/core';



const Login=() =>{
    const paperStyle={padding :20,height:'60vh',width:280, margin:"40px auto"}
    const avatarStyle={backgroundColor:'black'}
    const btnStyle={margin:'8px 0'}
    const [adminId,setAdminId] = useState("");
    const [admPassword,setadmPassword] = useState("");

    function saveUser()
    {
      console.warn(adminId,admPassword);
      let data={adminId,admPassword}
      fetch("https://194.195.113.128:8085/login/admin",{
        method:'POST',
        headers:{
          'Accept' :'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
      }).then((result)=>{
        console.warn("result",result);
      })
    }

    return(
        <Grid style={{backgroundColor :'#f5f5f5', height : '800px'}}>
            <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
            <Avatar style={avatarStyle}>
            <AccountCircleIcon /></Avatar>
               <h2> Sign in</h2>
               </Grid>
               <TextField
               value={adminId} onChange={(e)=>{setAdminId(e.target.value)}}
          id="filled-full-width"
          label="Email-id"
          
          placeholder="Enter Your adminId"
          
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
            <TextField
                   value={admPassword} onChange={(e)=>{setadmPassword(e.target.value)}}
            
          id="filled-full-width"
          label="Password"
          
          placeholder="Enter your Password"
          type="password"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
            
            <FormControlLabel
        control={
          <Checkbox
           
            name="checkedB"
            color="primary"
          />
        }
        label="Remember Me"
      />

       <Button type="submitt" onClick={saveUser} color="primary" variant="contained" style={btnStyle} fullWidth>Log In</Button>
       <Typography>
       <Link href="#">
    Forgot Password?
  </Link>
  </Typography>
  <Typography>
      
  </Typography>

            </Paper>
        </Grid>
    )
}
export default Login;

