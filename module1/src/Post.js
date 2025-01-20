import React from "react";

export default function (props) {
    const { title, subtittle } = props

    return (
        <>
            <article>
                <strong>{title}</strong><br />
                <small>{subtittle}</small>
            </article>
            <br />
        </>
    )
}