import React from "react";
import Post from "./Post";
import Header from "./Header";

export default function App() {
    return (
        <>
            <Header>
                <h2>Meu primeiro projeto</h2>
            </Header>
            <hr />
            <Post title="Olá Mundo" subtittle="Esse e meu site" />
            <Post title="Olá Mundo 1" subtittle="Esse e meu site 1" />
            <Post title="Olá Mundo 2" subtittle="Esse e meu site 2" />
            <Post title="Olá Mundo 3" subtittle="Esse e meu site 3" />
        </>
    )
}
