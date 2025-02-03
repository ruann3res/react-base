import React, { useState } from "react";
import Header from "./Header";
import Post from "./Post";
import { ThemeProvider } from "./ThemeContext";

export default function App() {
    const [posts, setPosts] = useState([
        { id: Math.random(), title: "Post #01", subtittle: "Sub #01", likes: 20, read: false, removed: true },
        { id: Math.random(), title: "Post #02", subtittle: "Sub #02", likes: 10, read: true, removed: false },
        { id: Math.random(), title: "Post #03", subtittle: "Sub #03", likes: 40, read: false, removed: false }
    ])

    function handleUpdatePosts() {
        setPosts((prevState) => [
            ...prevState,
            {
                id: Math.random(),
                title: `Post #${prevState.length}`,
                subtittle: `Sub #${prevState.length}`,
                likes: 40
            }])
    }
    
    function handleDeletePost(postId) {
         setPosts((prevState) => prevState.map(
                 post =>  (
                     post.id === postId 
                     ? {...post, removed: true} 
                     : post 
                 )
             ))
    }

    return (
        <ThemeProvider>
            <Header
                title="Primeiro Projeto React"
            >
                <h2>Meu primeiro projeto</h2>
            </Header>
            <br />
            <button onClick={handleUpdatePosts}>
                Atualizar Posts
            </button>
            <hr />

            {posts.map(post => (
                <Post
                    key={post.title}
                    onRemove={handleDeletePost}
                    post={post}
                />
            ))}
        </ThemeProvider>
    )
}





