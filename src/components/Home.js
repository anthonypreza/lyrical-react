import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'reactstrap';
import Table from './Table';
import Player from './Player';

const Home = ({ currentUser, topTracks }) => {
	const columns = [
		{
			Header: 'Name',
			accessor: 'name'
		},
		{
			Header: 'Artist',
			accessor: 'artists[0].name'
		},

		{
			Header: 'Album',
			accessor: 'album.name'
		},
		{
			Header: 'Popularity',
			accessor: 'popularity',
			width: 100
		},
		{
			Header: 'Play',
			width: 325,
			sortable: false,
			Cell: ({ row }) => {
				return row ? <Player url={'https://open.spotify.com/embed/track/' + row._original.id} /> : null;
			}
		},
		{
			Header: 'Genius',
			width: 100,
			sortable: false,
			Cell: ({ row }) => {
				return row ? (
					<Link className="text-info" to={`/genius/${row._original.id}`}>
						View lyrics
					</Link>
				) : null;
			}
		}
	];

	return (
		<Jumbotron style={{ backgroundColor: '#fff' }}>
			<h1>Hey, {currentUser ? currentUser.display_name.split(' ')[0] : null}! </h1>
			<p className="lead">How about some music?</p>
			<p>
				Here are your top 50 streamed songs on Spotify. You can click the columns to sort your tracks, directly
				preview your tracks, or view them on Spotify. Lyrics are also available!
			</p>
			{topTracks ? <Table data={topTracks.items} columns={columns} /> : null}
		</Jumbotron>
	);
};

export default Home;
