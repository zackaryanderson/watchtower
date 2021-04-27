import React, { useState, useEffect } from "react"
import { useMutation } from "@apollo/react-hooks"
import { ADD_POST } from "../utils/mutations"
function Community() {
    const [addPost, { err }] = useMutation(ADD_POST)
    const [newPost, setNewPost] = useState("")
    const [comments, setComments] = useState([{ username: "John Doe", postText: "john doe says Hello World" }, { username: " Jane Doe", postText: "Jane says hello world" }])
    const handleNewPost = (e) => {
        addPost({ variables: { postText: newPost } }).then(res => {
            console.log(res)
            setComments([...comments, newPost])
            //possibly replace newPost with data from res (might be inside res.data.newPost)
        })
    }
    return (
        <div>
            {comments.map(comment => (
                <div>
                    <h1>{comment.username}</h1>
                    <h1>{comment.postText}</h1>
                </div>
            ))}
            <input value={newPost} onChange={e => setNewPost(e.target.value)}>
            </input>
            <button onClick={handleNewPost}>
                Add Post
                </button>
        </div >
    );
}
export default Community;