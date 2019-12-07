import React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import InfoPage from './components/InfoPage';
import Navigation from './components/Navigation';
import WordCloud from './components/WordCloud';
function AuthenticatedRoute({ component: Component, authenticated, logout, ...rest }) {
	return (
		<Route
			{...rest}
			render={(routeProps) =>
				authenticated ? (
					<div className="main">
						<Navigation logout={logout}> </Navigation>
						<Component {...routeProps} {...rest} />
						<footer className="footer">
							<div className="container">
								<span className="text-muted">
									Made with{' '}
									<span role="img" aria-label="love">
										❤️
									</span>{' '}
									in LA by{' '}
									<a href="https://github.com/anthonypreza" target="_other">
										ap.
									</a>
								</span>
							</div>
						</footer>
					</div>
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: routeProps.location }
						}}
					/>
				)}
		/>
	);
}

export default ({ authenticated, currentUser, setCurrentUser, topTracks, logout, getWordCloud }) => (
	<HashRouter>
		<AuthenticatedRoute
			exact
			path="/"
			component={Home}
			authenticated={authenticated}
			currentUser={currentUser}
			topTracks={topTracks}
			logout={logout}
		/>
		<AuthenticatedRoute
			exact
			path="/wordcloud"
			component={WordCloud}
			authenticated={authenticated}
			currentUser={currentUser}
			topTracks={topTracks}
			logout={logout}
			getWordCloud={getWordCloud}
		/>
		{topTracks ? (
			topTracks.items.map((dat) => (
				<AuthenticatedRoute
					exact
					path={`/genius/${dat.id}`}
					key={dat.id}
					component={InfoPage}
					authenticated={authenticated}
					currentUser={currentUser}
					topTracks={topTracks}
					logout={logout}
					currentTrack={dat}
				/>
			))
		) : null}
		<Route
			exact
			path="/login"
			render={(routeProps) => (
				<Login {...routeProps} authenticated={authenticated} setCurrentUser={setCurrentUser} />
			)}
		/>
	</HashRouter>
);
