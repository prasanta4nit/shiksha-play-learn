export type YoutubeVideo = {
  id: string; // YouTube video ID
  title: string;
};

// Add real video IDs from https://www.youtube.com/@playschooldugda once
// specific videos are chosen for the homepage. Left empty by default rather
// than inventing IDs — the section falls back to a channel-highlight card.
export const featuredYoutubeVideos: YoutubeVideo[] = [];

export const youtubeChannelUrl = "https://www.youtube.com/@playschooldugda";
