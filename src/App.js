import React, { useState } from 'react';
import youtube from './api/youtube';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';

const App = () => {
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);
	const onSubmit = async (term) => {
		const res = await youtube.get('/search', {
			params: {
				q: term,
			},
		});

		setVideos(res.data.items);
		setSelectedVideo(res.data.items[0]);
	};
	return (
		<div className="ui container">
			{' '}
			Hello, Nam
			<SearchBar onSubmit={onSubmit} />
			<VideoDetail selectedVideo={selectedVideo} />
			<VideoList videos={videos} setSelectedVideo={setSelectedVideo} />
		</div>
	);
};

export default App;
