import React, { useState } from "react";
import Post from "./Post";
import Header from "./Header";

export default function App() {
    const [posts, setPosts] = useState([
        { id: Math.random(), title: "Post #01", subtittle: "Sub #01", likes: 20, read: false },
        { id: Math.random(), title: "Post #02", subtittle: "Sub #02", likes: 10, read: true },
        { id: Math.random(), title: "Post #03", subtittle: "Sub #03", likes: 40, read: false }
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
        setPosts((prevState) => (
            prevState.filter(post => post.id !== postId)
        ))
    }

    return (
        <>
            <Header title="Primeiro Projeto React">
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
        </>
    )
}




