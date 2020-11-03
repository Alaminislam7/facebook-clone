import { Avatar, Button } from '@material-ui/core';
import React from 'react'
import ThumbUp from '@material-ui/icons/ThumbUp'
import ChatBubbleOutline from '@material-ui/icons/ChatBubbleOutline'
import NearMe from '@material-ui/icons/NearMe'
import AccountCircle from '@material-ui/icons/AccountCircle'
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'
import './Post.css';


function Post({ profilePic, image, username, timestamp, post }) {
    return (
        <div>
            <div className='post'>
                <div className="post__top">
                    <Avatar src={profilePic} className="post__avatar" />
                    <div className="post__topInfo">
                        <h3>{username}</h3>
                        <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                    </div>
                </div>
                <div className="post__bottom">
                    <p>{post}</p>
                </div>
                <div className="post__image">
                    <img src={image} alt="" />
                </div>
                <div className="post__options">
                    <div className="post__option">
                        <Button>
                            <ThumbUp />
                            <p>Like</p>
                        </Button>
                    </div>
                    <div className="post__option">
                        <Button>
                            <ChatBubbleOutline />
                            <p>Comment</p>
                        </Button>
                    </div>
                    <div className="post__option">
                        <Button>
                            <NearMe />
                            <p>Share</p>
                        </Button>
                    </div>
                    <div className="post__option">
                        <Button>
                            <AccountCircle />
                            <ExpandMoreOutlined />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Post
