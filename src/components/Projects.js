import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Box,
	Grid,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
} from '@material-ui/core';
import project1 from '../images/html-css.jpg';
import project2 from '../images/javascript.jpg';
import project3 from '../images/react-redux.jpg';
import project4 from '../images/node.png';
import project5 from '../images/python.jpg';

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		height: '100%',
	},
	cardContainer: {
		maxWidth: 345,
		margin: '5rem auto',
	},
	header: {
		display: 'flex',
		justifyContent: 'center',
		fontSize: '1.5rem',
	},
}));

function Projects() {
	const classes = useStyles();

	return (
		<Box id="projects" component="div" className={classes.mainContainer}>
			<h1 className={classes.header}>SOME OF MY PROJECTS</h1>
			<Grid container justify="center" alignItems="center">
				{/* Project 1 */}
				<Grid item xs={12} sm={4} md={4}>
					<Card className={classes.cardContainer}>
						<CardActionArea>
							<CardMedia
								component="img"
								alt="Project 1"
								height="140"
								image={project1}
							/>
							<CardContent>
								<Typography gutterBottom variant="h5">
									Project 1
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									lorem basketball beast yessir
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button size="small" color="primary">
								Share
							</Button>
							<Button size="small" color="primary">
								Live Demo
							</Button>
						</CardActions>
					</Card>
				</Grid>
				{/* Project 2 */}
				<Grid item xs={12} sm={4} md={4}>
					<Card className={classes.cardContainer}>
						<CardActionArea>
							<CardMedia
								component="img"
								alt="Project 2"
								height="140"
								image={project2}
							/>
							<CardContent>
								<Typography gutterBottom variant="h5">
									Project 2
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									lorem basketball beast yessir
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button size="small" color="primary">
								Share
							</Button>
							<Button size="small" color="primary">
								Live Demo
							</Button>
						</CardActions>
					</Card>
				</Grid>
				{/* Project 3 */}
				<Grid item xs={12} sm={4} md={4}>
					<Card className={classes.cardContainer}>
						<CardActionArea>
							<CardMedia
								component="img"
								alt="Project 2"
								height="140"
								image={project3}
							/>
							<CardContent>
								<Typography gutterBottom variant="h5">
									Project 3
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									lorem basketball beast yessir
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button size="small" color="primary">
								Share
							</Button>
							<Button size="small" color="primary">
								Live Demo
							</Button>
						</CardActions>
					</Card>
				</Grid>
				{/* Project 4 */}
				{/* <Grid item xs={12} sm={4} md={4}>
					<Card className={classes.cardContainer}>
						<CardActionArea>
							<CardMedia
								component="img"
								alt="Project 2"
								height="140"
								image={project4}
							/>
							<CardContent>
								<Typography gutterBottom variant="h5">
									Project 4
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									lorem basketball beast yessir
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button size="small" color="primary">
								Share
							</Button>
							<Button size="small" color="primary">
								Live Demo
							</Button>
						</CardActions>
					</Card>
				</Grid>
				Project 5
				<Grid item xs={12} sm={4} md={4}>
					<Card className={classes.cardContainer}>
						<CardActionArea>
							<CardMedia
								component="img"
								alt="Project 2"
								height="140"
								image={project5}
							/>
							<CardContent>
								<Typography gutterBottom variant="h5">
									Project 5
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									lorem basketball beast yessir
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button size="small" color="primary">
								Share
							</Button>
							<Button size="small" color="primary">
								Live Demo
							</Button>
						</CardActions>
					</Card>
				</Grid> */}
			</Grid>
		</Box>
	);
}

export default Projects;
