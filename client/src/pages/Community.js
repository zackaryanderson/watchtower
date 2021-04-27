import React, { useState, useEffect } from "react"
import { useMutation, useQuery } from "@apollo/react-hooks"
import { ADD_POST } from "../utils/mutations"
import { QUERY_POSTS } from '../utils/queries';

const dummyPostData = [{ username: "John Doe", postText: "john doe says Hello World" }, { username: " Jane Doe", postText: "Jane says hello world" }]
function Community() {
    const { loading, data } = useQuery(QUERY_POSTS);
    const posts = dummyPostData;//TODO:remove dummbyPostData and replace with real data 

    const [addPost, { err }] = useMutation(ADD_POST,
        {
            refetchQueries: [
                { query: QUERY_POSTS }
            ]
        })
    /* using refetch becuase you want to keep the data on the- 
     * page and the data from the server in sync 
     */

    const [newPost, setNewPost] = useState("")
    const handleNewPost = (e) => {
        addPost({ variables: { postText: newPost } }).then(res => {
            console.log(res)
            setNewPost("")
        })
    }
    return (
        <div>
            {posts.map(post => (
                <div>
                    <h1>{post.username}</h1>
                    <h1>{post.postText}</h1>
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