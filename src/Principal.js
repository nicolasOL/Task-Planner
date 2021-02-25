import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import clsx from 'clsx';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { Avatar } from '@material-ui/core';
import {Login} from "./Login"
import { useHistory } from "react-router-dom";
import {BrowserRouter as Router, Route, Link, useLocation} from 'react-router-dom'
import CardHeader from '@material-ui/core/CardHeader';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';



const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(5),
  },
  heroContent: {
    backgroundColor: "white",
    padding: theme.spacing(6, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
	align: "left",
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(7),
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(5),
    right: theme.spacing(5),
  }
}));

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Principal(props){
	const classes = useStyles();
	const historia = useHistory();
	
	const LoginView = () => (
		<Login />	
	);
	
	let query = useQuery();

	
	const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
	});
	/*
	
export default function register() {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
        // The URL constructor is available in all browsers that support SW.
        const publicUrl = new URL(process.env.PUBLIC_URL, window.location);
        if (publicUrl.origin !== window.location.origin) {
            // Our service worker won't work if PUBLIC_URL is on a different origin
            // from what our page is served on. This might happen if a CDN is used to
            // serve assets; see https://github.com/facebookincubator/create-react-app/issues/2374
            return;
        }

        window.addEventListener('load', () => {
            const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

            if (isLocalhost) {
                // This is running on localhost. Lets check if a service worker still exists or not.
                checkValidServiceWorker(swUrl);

                // Add some additional logging to localhost, pointing developers to the
                // service worker/PWA documentation.
                navigator.serviceWorker.ready.then(() => {
                    console.log(
                        'This web app is being served cache-first by a service ' +
                        'worker. To learn more, visit https://goo.gl/SC7cgQ'
                    );
                });
            } else {
                // Is not local host. Just register service worker
                registerValidSW(swUrl);
            }
        });
    }
}

function registerValidSW(swUrl) {
    navigator.serviceWorker
        .register(swUrl)
        .then(registration => {
            registration.onupdatefound = () => {
                const installingWorker = registration.installing;
                installingWorker.onstatechange = () => {
                    if (installingWorker.state === 'installed') {
                        if (navigator.serviceWorker.controller) {
                            // At this point, the old content will have been purged and
                            // the fresh content will have been added to the cache.
                            // It's the perfect time to display a "New content is
                            // available; please refresh." message in your web app.
                            console.log('New content is available; please refresh.');
                        } else {
                            // At this point, everything has been precached.
                            // It's the perfect time to display a
                            // "Content is cached for offline use." message.
                            console.log('Content is cached for offline use.');
                        }
                    }
                };
            };
        })
        .catch(error => {
            console.error('Error during service worker registration:', error);
        });
}

function checkValidServiceWorker(swUrl) {
    // Check if the service worker can be found. If it can't reload the page.
    fetch(swUrl)
        .then(response => {
            // Ensure service worker exists, and that we really are getting a JS file.
            if (
                response.status === 404 ||
                response.headers.get('content-type').indexOf('javascript') === -1
            ) {
                // No service worker found. Probably a different app. Reload the page.
                navigator.serviceWorker.ready.then(registration => {
                    registration.unregister().then(() => {
                        window.location.reload();
                    });
                });
            } else {
                // Service worker found. Proceed as normal.
                registerValidSW(swUrl);
            }
        })
        .catch(() => {
            console.log(
                'No internet connection found. App is running in offline mode.'
            );
        });
}
*/
	
	const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
	  setState({ ...state, [anchor]: open });
	}
	
	const list = (anchor) => (
		<div
		  className={clsx(classes.list, {
			[classes.fullList]: anchor === 'top' || anchor === 'bottom',
		  })}
		  role="presentation"
		  onClick={toggleDrawer(anchor, false)}
		  onKeyDown={toggleDrawer(anchor, false)}
		>
		  <List>
			  <ListItem button>
				<ListItemAvatar>
				  <Avatar />
				</ListItemAvatar>
				<ListItemText
				  primary={query.get("username")}
				  secondary={
					<React.Fragment>
					  <Typography
						component="span"
						variant="body2"
						className={classes.inline}
						color="textPrimary"
					  >
					  {query.get("username")}@mail.escuelaing.edu.co
					  </Typography>
					</React.Fragment>
				  }
				/>
			  </ListItem>
		  </List>
		  <Divider />
		  <Divider />
		  <Divider />
		  <Divider />
		  <Divider />
		  
		  
		  <Router>
		  <List alignItems="bottom">
				  <div>
							  <ListItem alignItems="center" button >
								<ListItemIcon></ListItemIcon>
								<ListItemText primary="Nueva tarea" />
							  </ListItem>
					</div>
				  <div>
					  <ListItem alignItems="center" button onClick={handleLogOut}>
						<ListItemIcon><ExitToAppIcon /></ListItemIcon>
						<ListItemText primary="Logout" />
					  </ListItem>
				  </div>
			  </List>
		  </Router>
		</div>
	);

	
	function handleLogOut(){
		historia.push("/");
	}
	
	
	
	return (
		<React.Fragment>
				<CssBaseline />
						<div align="left">
						<Button onClick={toggleDrawer("left", true)}>Menu</Button>
							<SwipeableDrawer
							  anchor={"left"}
							  open={state["left"]}
							  onClose={toggleDrawer("left", false)}
							  onOpen={toggleDrawer("left", true)}
							>
								{list("left")}
							</SwipeableDrawer>
						</div>
					<div className={useStyles().heroContent}>
						<Container>
							<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
							  Due Tasks          
							</Typography>						
						</Container>
					</div>
						<Container className={useStyles().cardGrid} maxWidth="md">
							<Grid container spacing={4}>
								<Grid item key="1" xs={12} sm={6} md={4}>
									<Card className={useStyles().card} variant="outlined">
										<CardContent className={useStyles().cardContent}>
											<Typography variant="h5" component="h2">
												Description
											</Typography>
											<Typography variant="body2" component="p">
												<br></br>
												status - dueDate
											</Typography>
												<br></br>
											<Typography variant="h5" component="h2">
												In Charge
											</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid item key="1" xs={12} sm={6} md={4}>
									<Card className={useStyles().card} variant="outlined">
										<CardContent className={useStyles().cardContent}>
											<Typography variant="h5" component="h2">
												Description
											</Typography>
											<Typography variant="body2" component="p">
												<br></br>
												status - dueDate
											</Typography>
												<br></br>
											<Typography variant="h5" component="h2">
												In Charge
											</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid item key="1" xs={12} sm={6} md={4}>
									<Card className={useStyles().card} variant="outlined">
										<CardContent className={useStyles().cardContent}>
											<Typography variant="h5" component="h2">
												Description
											</Typography>
											<Typography variant="body2" component="p">
												<br></br>
												status - dueDate
											</Typography>
												<br></br>
											<Typography variant="h5" component="h2">
												In Charge
											</Typography>
										</CardContent>
									</Card>
								</Grid>
							</Grid>
							<br></br>
							<Grid
								container
								direction="column"
								justify="flex-end"
								alignItems="flex-end">
								<Fab color="secondary" aria-label="add" className="useStyles().fab">
								  <AddIcon />
								</Fab>
							</Grid>
						</Container>
			</React.Fragment>
	);
}

export default Principal;