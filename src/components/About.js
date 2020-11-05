import React from 'react';
import steve from '../images/steve.jpg';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Avatar, Box, Grid } from '@material-ui/core';
import Typed from 'react-typed';
import { Button } from '@material-ui/core';
import Video from '../video/video.mp4';

const useStyles = makeStyles((theme) => ({
	avatar: {
		width: theme.spacing(50),
		height: theme.spacing(50),
		display: 'flex',
		alignContent: 'center',
	},
	title: {
		display: 'flex',
		alignContent: 'center',
		textAlign: 'center',
		flexDirection: 'column',
	},
	typedContainer: {
		display: 'flex',
		margin: theme.spacing(1),
		marginTop: theme.spacing(10),
		position: 'absolute',
		top: 0,
		width: '100%',
	},
	intro: {
		display: 'flex',
		justifyContent: 'center',
		textAlign: 'center',
		margin: '2rem auto',
		color: 'black',
		width: '60%',
	},
	video: {
		width: '100%',
		height: '100%',
		objectFit: 'cover',
		OObjectFit: 'cover',
		position: 'relative',
		overflow: 'hid',
	},
	subName: {
		transform: 'translate(20px, 85px) rotate(-30deg)',
	},
}));

function About() {
	const classes = useStyles();
	return (
		<Box id="about" className={classes.home}>
			<video className={classes.video} autoPlay loop muted>
				<source src={Video} type="video/mp4" />
			</video>
			<Box className={classes.typedContainer}>
				<Grid container justify="center" className={classes.title}>
					<Typography variant="h3">
						<Typed
							className={classes.subName}
							strings={['STEVE DOLE']}
							typeSpeed={20}
						/>
					</Typography>
					<br />
					<Grid container justify="center">
						<Avatar className={classes.avatar} src={steve} alt="Steve" />
					</Grid>
					<br />
					<Typography variant="h4">
						<Typed strings={['FULL STACK WEB DEVELOPER']} typeSpeed={40} />
					</Typography>
					{/* <Typography className={classes.intro} variant="h5">
						{[
							'Welcome to my Portfolio! I am a Full Stack Web Developer who has attended Lambda School. During my time there, I learned HTML, CSS, Javascript, React.js, Node.js, and Python. Please check out my projects and feel free to contact me! I currently reside in Oahu, Hawaii and relocation is always up for discussion, but if not I would be able to work remotely as well!',
						]}
					</Typography> */}
					<Button>View My Work!</Button>
				</Grid>
			</Box>
		</Box>
	);
}

export default About;
