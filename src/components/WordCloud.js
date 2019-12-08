import React from 'react';
import { Jumbotron, Spinner } from 'reactstrap';
import ReactWordcloud from 'react-wordcloud';

class WordCloud extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			wordcloud: null
		};
	}

	componentDidMount() {
		const { getWordCloud } = this.props;
		getWordCloud().then((res) => {
			this.setState({
				wordcloud: res.data,
				loading: false
			});
		});
	}

	render() {
		const { loading, wordcloud } = this.state;
		const options = {
			colors: [ '#fffa27' ],
			enableTooltip: true,
			deterministic: false,
			fontFamily: 'impact',
			fontSizes: [ 5, 60 ],
			fontStyle: 'normal',
			fontWeight: 'normal',
			padding: 1,
			rotations: 3,
			rotationAngles: [ 0, 90 ],
			scale: 'sqrt',
			spiral: 'archimedean',
			transitionDuration: 1000
		};
		return (
			<Jumbotron className="text-white" style={{ backgroundColor: 'inherit' }}>
				{loading ? (
					<div>
						<p className="lead">Casting a spell...</p>
						<Spinner />
					</div>
				) : (
					<div>
						<h1> Your Wordcloud</h1>
						<p className="lead">The words that appear most in your top tracks. Sound like you?</p>
						<div style={{ height: '500px', width: '100%' }}>
							{' '}
							<ReactWordcloud words={wordcloud} options={options} />
						</div>
					</div>
				)}
			</Jumbotron>
		);
	}
}

export default WordCloud;
