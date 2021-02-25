import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Button from '@material-ui/core/Button';
import Principal from './Principal'
import {BrowserRouter as Router, Route, Link, useLocation} from 'react-router-dom'
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
	  root: {
		flexGrow: 1,
	  },
	  paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	  },
	}));	

/*
constructor(props) {
        super(props);
    }

    render() {
        const todoList = this.props.todoList.map((todo, i) => {
            return (
                <Todo key={i} text={todo.text} priority={todo.priority} dueDate={todo.dueDate}/>
            );
        });

        return (
            <table>
                <thead>
                <tr>
                    <th>Task</th>
                    <th>Priority</th>
                    <th>Due Date</th>
                </tr>
                </thead>
                <tbody>
                {todoList}
                </tbody>
            </table>
        );


    }

*/

export class Login extends React.Component{
	
	render(){
		return(
			<CenteredGrid />
		);
	}
}

const PrincipalView = () => (
	<Principal />
	);
	

function CenteredGrid(){	
	const classes = useStyles();
	const historia = useHistory();
	const [username, setUsername] = useState(0);
	const [password, setPassword] = useState(0);
	
	
	function handleClick(){
		let isLogin = localStorage.getItem(username) === password;
		if(isLogin){
			historia.push("/inicio?username="+username);
		}else{
			alert("Usuario no registrado, oprima el botón Create Account");
		}
	}
	
	function handleTextChange(e){
		setUsername(e.target.value);
	}

	function handlePasswordChange(e){
		setPassword(e.target.value);
	}
	
	function makeRegistro(){
		localStorage.setItem(username,password);
		alert("Usuario registrado satisfactoriamente");
	}
	
		return(
			  <Container maxWidth="sm">
				
				  <div className={classes.root}>
					   <Grid container
							  direction="column"
							  justify="center"
							  alignItems="center"
							  spacing={3}>
						<Grid item xs={12}>
							<h1>Task Planner</h1>
						</Grid>
					
					</Grid>
					<Grid container
						  direction="column"
						  justify="space-evenly"
						  alignItems="stretch"
						  spacing={3}>
						<Grid item xs={12}>
							<TextField
							  required
							  id="standard-required"
							  //label="Label"
							  style={{ margin: 8 }}
							  placeholder="Username"
							  onChange={handleTextChange}
							  //helperText="Full width!"
							  fullWidth
							  margin="normal"
							  InputLabelProps={{
								shrink: true,
							  }}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
							  required
							  id="standard-full-width"
							  //label="Label"
							  type="password"
							  style={{ margin: 8 }}
							  placeholder="Password"
							  onChange={handlePasswordChange}
							  //helperText="Full width!"
							  fullWidth
							  margin="normal"
							  InputLabelProps={{
								shrink: true,
							  }}
							/>

						</Grid>
					</Grid>
					<Grid
					  container
					  direction="column"
					  justify="center"
					  alignItems="center"
					  spacing={3}>
						<Grid item xs={12}>
							<Router>
									<div>
										<Button variant="contained" color="white" style={{width:550}} to="/inicio" onClick={handleClick}>
										  Login
										</Button>
										<Route path="/inicio" component={PrincipalView} />
									</div>
							</Router>
						</Grid>
						<Grid item xs={12}>
							<Router>
								<div>
									<Link onClick = {makeRegistro}>
										  <h1>Create Account</h1>
										</Link>
									
								</div>
							</Router>
						</Grid>
					</Grid>
					</div>
				</Container>

		);
	}