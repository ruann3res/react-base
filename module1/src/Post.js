import React from "react";
import PropTypes from "prop-types";

export default function Post(props) {
    return (
        <>
            <article>
                <strong>{props.post.title}</strong><br />
                <small>{props.post.subtittle}</small>
                <p>Likes: {props.likes / 2}</p>
            </article>
            <br />
        </>
    );
}

Post.propTypes = {
    likes: PropTypes.number.isRequired,
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtittle: PropTypes.string.isRequired
    }).isRequired,
};