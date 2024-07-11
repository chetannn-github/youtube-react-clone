export const YT_API_KEY="AIzaSyDDdtTgX1-gFxytwRojWeiYsQR3xBFih1Q" ;
export const YT_API_LINK ="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=20&key="+YT_API_KEY;
export const YT_SEARCH_QUERY="https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
export const YT_SEARCH_VIDEO="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="
export const YT_COMMENT_API = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId="
export const YT_VIDEO_INFO_P1=`https://www.googleapis.com/youtube/v3/videos?id=`;
export const YT_VIDEO_INFO_P2=`&key=${YT_API_KEY}&part=snippet,contentDetails,statistics,status`;

export const YT_CHANNEL_INFO = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id="