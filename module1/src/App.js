import React from "react";
import Post from "./Post";
import Header from "./Header";

export default function App() {
    return (
        <>
            <Header title="Primeiro Projeto React">
                <h2>Meu primeiro projeto</h2>
            </Header>
            <hr />
            <Post
                post={{
                    title: "Olá Mundo!",
                    subtittle: "Esse e meu site!"
                }}
                likes={20}
            />
            <Post
                post={{
                    title: "Olá Mundo 1",
                    subtittle: "Esse e meu site 1"
                }}
                likes={10}
            />
            <Post
                post={{
                    title: "Olá Mundo 2",
                    subtittle: "Esse e meu site 2"
                }}
                likes={24}
            />
            <Post
                post={{
                    title: "Olá Mundo 1",
                    subtittle: "Esse e meu site 1"
                }}
                likes={4}
            />

        </>
    )
}
