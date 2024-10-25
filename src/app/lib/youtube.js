// lib/youtube.js

import axios from 'axios';

const YOUTUBE_API_URL = 'https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=25&key=AIzaSyAD3sQkcwWjZkAXqWyVBVetPJyu0I5ylNo HTTP/1.1';

export const fetchYouTubeVideos = async (channelId, apiKey) => {
  try {
    const response = await axios.get(YOUTUBE_API_URL, {
      params: {
        part: 'snippet,contentDetails',
        channelId,
        maxResults: 25,
        key: apiKey,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return [];
  }
};
