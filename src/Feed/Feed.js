import React, { useEffect, useState } from 'react'
import './Feed.css'
import StoryReal from '../StoryReal/StoryReal'
import PostSender from '../PostSender/PostSender'
import Post from '../Post/Post'
import db from '../firebase';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
        );
    }, []);

    return (
        <div className="feed">
            <StoryReal />
            <PostSender />
            {posts.map((post) => (
                <Post
                    key={post.id}
                    profilePic={post.data.profilePic}
                    post={post.data.post}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                />
            ))}

        </div>
    )
}

export default Feed
