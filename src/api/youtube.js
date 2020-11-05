import axios from 'axios';

const KEY = 'AIzaSyARLaWZwjafcGnTrB8GypwLDdXyDiJryxw';
export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3/',
	Authorization: KEY,
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 5,
		key: KEY,
	},
});
