const GOOGLE_API_KEY = "AIzaSyDDWiBImUomWPbuGfi3nJ52OcuZ0s8eYQA";

export const LIVE_CHAT_COUNT = 30;

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
