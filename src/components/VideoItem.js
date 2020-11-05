import React from 'react';

const VideoItem = ({ video, setSelectedVideo }) => {
	return (
		<div className="item">
			<img
				src={video.snippet.thumbnails.default.url}
				onClick={() => setSelectedVideo(video)}
			/>
			<div className="content">{video.snippet.title}</div>
		</div>
	);
};

export default VideoItem;
