// pages/index.tsx

import { GetServerSideProps } from 'next';
import { fetchYouTubeVideos } from '../lib/youtube';

interface Video {
  id: string;
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
}

interface HomeProps {
  videos: Video[];
}

const YoutubeVideo: React.FC<HomeProps> = ({ videos }) => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">YouTube Videos</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {videos && videos.length > 0 ? (
          videos.map((video) => (
            <div key={video.id} className="p-4 border rounded shadow-sm">
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                className="w-full h-48 object-cover"
              />
              <h2 className="mt-4 text-xl font-semibold">{video.snippet.title}</h2>
              <p>{video.snippet.description}</p>
            </div>
          ))
        ) : (
          <p>No videos available</p>
        )}
      </div>
    </div>
  );
};

// Using TypeScript for getServerSideProps
export const getServerSideProps: GetServerSideProps = async () => {
  const apiKey = process.env.YOUTUBE_API_KEY; // Use API key from the .env.local
  const channelId = 'UC_x5XG1OV2P6uZZ5FSM9Ttw'; // Replace with your channel ID
  let videos = [];

  try {
    videos = await fetchYouTubeVideos(channelId, apiKey);
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
  }

  return {
    props: {
      videos: videos || [], // Ensure videos is always an array
    },
  };
};

export default YoutubeVideo;
