import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import DraftsIcon from '@material-ui/icons/Drafts';

const heading3 = {
	margin: '20px auto',
	textAlign: 'center',
}
const spacing = {
	margin: '0 20px 10px',
}
const draftsIcon = {
	textAlign: 'center',
	marginTop: '40px',
}
const form = {
	width: '80%',
	margin: '0 auto',
}

class PostForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			body: ''
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit(e) {
		e.preventDefault();

		const post = {
			title: this.state.title,
			body: this.state.body
		}
	}

	render() {
		return (
			<Container component="main" maxWidth="md">
				<div>
					<Grid item xs={12} sm={12} style={draftsIcon}>
						<DraftsIcon />
					</Grid>
					<Typography component="h1" variant="h3" style={heading3}>
						ASK US A QUESTION
					</Typography>
					<form onSubmit={this.onSubmit} style={form}>
						<Grid item xs={12} sm={12}>
							<FormControlLabel 
								style={spacing}
								control={<Checkbox value="allowExtraEmails" color="primary" />}
                				label="Checkbox box"
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={8}>	
							<TextField id="standard-basic" label="First Name" style={spacing} />
							<TextField id="standard-basic" label="Phone Number" style={spacing} />
						</Grid>
						<br />
						<Grid item xs={12} sm={6} md={7}>
							<TextField
								style={spacing}
				                variant="outlined"
				                required
				                fullWidth
				                id="email"
				                label="Email Address"
				                name="email"
				                autoComplete="email"
				              />
						</Grid>
						<br />
						<Button style={spacing} variant="contained" color="primary" type="submit">Submit</Button>
					</form>
				</div>
			</Container>
			
		)
	}
}

export default PostForm;