import React, { useState } from 'react'
import './PostSender.css';
import Videocam from '@material-ui/icons/Videocam';
import PhotoLibrary from '@material-ui/icons/PhotoLibrary';
import InsertEmoticon from '@material-ui/icons/InsertEmoticon';
import { Avatar, Button } from '@material-ui/core';
import { useStateValue } from '../stateProvider';
import db from '../firebase';
import firebase from 'firebase'




function PostSender() {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            message: input,
            timestamp: firebase.firestore.FieldValuel.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        })

        setInput("");
        setImageUrl("");
    }

    return (
        <div className="postSender">
            <div className="postSender__top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="postSender__input"
                        placeholder={`What's on your mind, ${user.displayName}? `}
                    />
                    <input
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder="Image URL (Optional)"
                    />
                    <button onClick={handleSubmit} type="submit">
                        <Button>Post</Button>
                    </button>
                </form>
            </div>
            <div className="postSender__top">
                <div className="postSender__option">
                    <Videocam style={{color: "red"}}/>
                    <h3>Live Video</h3>
                </div>

                <div className="postSender__option">
                    <PhotoLibrary style={{color: "green"}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="postSender__option">
                    <InsertEmoticon style={{color: "orange"}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default PostSender
