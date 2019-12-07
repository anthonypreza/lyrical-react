import React from 'react';
import { Jumbotron, Container, Spinner } from 'reactstrap';

const axios = require('axios');
const API_URL = process.env.REACT_APP_API_URL;

class InfoPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lyrics: null,
			embedded: null,
			loading: true
		};
	}

	componentDidMount() {
		const { currentTrack } = this.props;
		axios
			.post(API_URL + '/get_lyrics', {
				track_name: currentTrack.name,
				artists: currentTrack.artists
			})
			.then((res) => {
				this.setState({
					embedded: res.data,
					loading: false
				});
			})
			.catch((err) => {
				console.error(err);
			});
	}

	render() {
		const { currentTrack } = this.props;
		const { loading, embedded } = this.state;
		return currentTrack && !loading ? (
			<Jumbotron className="text-white" style={{ backgroundColor: 'inherit' }}>
				<h1>{currentTrack.name}</h1>
				<p className="lead">
					{currentTrack.artists[0].name}
					<br />
					{currentTrack.album.name}
				</p>
				{!embedded.startsWith('<div') ? (
					embedded.split('\n').map(function(item, idx) {
						return (
							<span key={idx}>
								{item}
								<br />
							</span>
						);
					})
				) : (
					<div className="linkedLyrics">
						<p className="lead">
							<span className="embedded" dangerouslySetInnerHTML={{ __html: embedded }} />
						</p>
						<p>
							Unfortunately, the free production server{' '}
							<a href="https://pythonanywhere.com">pythonanywhere.com</a> used for this project does not
							allow making requests to genius.com :( <br /> Please consider{' '}
							<a href="https://paypal.me/anthonypreza?locale.x=en_US" target="_other">
								donating to the developer
							</a>{' '}
							to buy him coffee and hosting :)
						</p>
					</div>
				)}
				<iframe
					title="play"
					src={'https://open.spotify.com/embed/track/' + currentTrack.id}
					width="300"
					height="380"
					frameborder="0"
					allowtransparency="true"
					allow="encrypted-media"
				/>
			</Jumbotron>
		) : (
			<Container style={{ marginTop: 30 }}>
				<p className="text-white lead">Calling Genius...</p>
				<Spinner className="text-white" />
			</Container>
		);
	}
}

export default InfoPage;
