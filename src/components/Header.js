import React from 'react';
import steve from '../images/steve.jpg';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Avatar, Box, Grid } from '@material-ui/core';
import Typed from 'react-typed';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	avatar: {
		width: theme.spacing(25),
		height: theme.spacing(25),
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
		marginTop: theme.spacing(5),
	},
	intro: {
		display: 'flex',
		justifyContent: 'center',
		textAlign: 'center',
		margin: theme.spacing(5),
	},
}));

function Header() {
	const classes = useStyles();
	return (
		<Box className={classes.typedContainer}>
			<Grid container justify="center" className={classes.title}>
				<Typography variant="h3">
					<Typed
						className={classes.subName}
						strings={['Steve Dole']}
						typeSpeed={20}
					/>
				</Typography>
				<br />
				<Grid container justify="center">
					<Avatar className={classes.avatar} src={steve} alt="Steve" />
				</Grid>
				<br />
				<Typography variant="h4">
					<Typed strings={['Full Stack Web Developer']} typeSpeed={40} />
				</Typography>
				<Typography className={classes.intro} variant="h5">
					<Typed
						strings={[
							'Welcome to my Portfolio! I am a Full Stack Web Developer who has attended Lambda School. During my time there, I learned HTML, CSS, Javascript, React.js, Node.js, and Python. Please check out my projects and feel free to contact me! I currently reside in Oahu, Hawaii and relocation is always up for discussion, but if not I would be able to work remotely as well!',
						]}
					/>
				</Typography>
				<Button>View My Work!</Button>
			</Grid>
		</Box>
	);
}

export default Header;
