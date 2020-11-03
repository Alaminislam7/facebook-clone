import React from 'react'
import './Feed.css'
import StoryReal from '../StoryReal/StoryReal'
import PostSender from '../PostSender/PostSender'
import Post from '../Post/Post'

function Feed() {
    return (
        <div className="feed">
            <StoryReal/>
            <PostSender/>
            <Post
                profilePic="https://images.unsplash.com/photo-1592009309602-1dde752490ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                post="WoW this works!"
                timestamp="This is a time"
                username="Alaminislam"
                image="https://images.unsplash.com/photo-1592009309602-1dde752490ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            />
            <Post
                profilePic="https://images.unsplash.com/photo-1592009309602-1dde752490ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                post="WoW this works!"
                timestamp="This is a time"
                username="Alaminislam"
                image="https://images.unsplash.com/photo-1592009309602-1dde752490ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            />
        </div>
    )
}

export default Feed
