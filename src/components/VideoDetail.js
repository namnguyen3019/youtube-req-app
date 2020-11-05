import React from 'react';

const VideoDetail = ({ selectedVideo }) => {
	if (selectedVideo) {
		return (
			<div className="ui relaxed divided list">
				<div className="item">
					<div className="ui embed">
						<iframe
							src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
						></iframe>
					</div>
					<div className="content">
						<a className="header">{selectedVideo.title}</a>
					</div>
				</div>
			</div>
		);
	} else {
		return null;
	}
};

export default VideoDetail;
