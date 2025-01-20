import React from "react";
import Post from "./Post";
import Header from "./Header";

const posts = [
    { title: "Post #01", subtittle: "Sub #01", likes: 20, },
    { title: "Post #02", subtittle: "Sub #02", likes: 10 },
    { title: "Post #03", subtittle: "Sub #03", likes: 40 }


]

export default function App() {
    return (
        <>
            <Header title="Primeiro Projeto React">
                <h2>Meu primeiro projeto</h2>
            </Header>
            <hr />
            {posts.map(post => (
                <Post
                    key={post.title}
                    likes={post.likes}
                    post={{
                        title: post.title,
                        subtittle: post.subtittle
                    }}
                />
            ))}

        </>
    )
}
