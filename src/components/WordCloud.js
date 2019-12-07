import React from 'react';
import { Jumbotron, Container, Spinner } from 'reactstrap';
import ReactWordcloud from 'react-wordcloud';

class WordCloud extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			wordCloud: null
		};
	}

	componentDidMount() {
		const { getWordCloud } = this.props;
		getWordCloud().then((res) => {
			this.setState({
				wordCloud: res.data,
				loading: false
			});
		});
	}

	render() {
		const { loading, wordCloud } = this.state;
		return loading ? (
			<Spinner />
		) : (
			<Jumbotron className="text-white" style={{ backgroundColor: 'inherit' }}>
				<h1> Your Wordcloud</h1>
				<p className="lead">The words that appear most in your top tracks. Sound like you?</p>
				<div style={{ width: '100%', height: '100%' }}>
					<ReactWordcloud words={wordCloud} />
				</div>
			</Jumbotron>
		);
	}
}

export default WordCloud;
