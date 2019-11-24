import React from 'react';
const Player = ({ url }) => {
	return (
		<iframe
			title="play"
			src={url}
			width="300"
			height="80"
			frameborder="0"
			allowtransparency="true"
			allow="encrypted-media"
		/>
	);
};

export default Player;
