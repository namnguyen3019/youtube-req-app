import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, setSelectedVideo }) => {
	const renderedList = videos.map((video) => {
		return (
			<VideoItem
				key={video.id.videoId}
				video={video}
				setSelectedVideo={setSelectedVideo}
			/>
		);
	});
	return <div className="ui middle aligned divided list">{renderedList}</div>;
};

export default VideoList;
