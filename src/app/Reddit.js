export const API_ROOT = 'https://www.reddit.com/';

// * getting the subreddits
export const getSubreddit = async () =>{
    const response = await fetch(`${API_ROOT}subreddits.json`);
    const json = await response.json();
    const subredditList = json.data.children.map(subreddit => subreddit.data);
    return subredditList;
}

// * getting the posts in a specific subreddit
export const getSubredditPosts = async (subreddit) =>{
    const response = await fetch(`${API_ROOT}${subreddit}.json`);
    const json = await response.json();
    const subredditPosts = json.data.children.map((post) => post.data);
    return subredditPosts;

}

// * getting the comments for a specific post
export const getCommentsForPost = async (permalink) =>{
    const response = await fetch(`${API_ROOT}${permalink}.json`);
    const json = await response.json();
    const postComments = json[1].data.children.map(subreddit => subreddit.data);
    return postComments;
}