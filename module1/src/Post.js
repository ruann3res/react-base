import React from "react";
import PropTypes from "prop-types";

export default function Post(props) {
    // if (props.post.read) {
    //     return <h2><s>{props.post.title}</s></h2>
    // }

    return (
        <>
            <article>
                <strong>
                    {/* {props.post.read && <s>{props.post.title}</s>}
                    {!props.post.read && <s>{props.post.title}</s>} */}

                    {props.post.read ? <s>{props.post.title}</s> : props.post.title}
                </strong>
                <br />
                <small>{props.post.subtittle}</small>
                <p>Likes: {props.post.likes / 2}</p>
                <button onClick={() => props.onRemove(props.post.id)}>Remover</button>
                <br />
            </article>
            <br />
        </>
    );
}

Post.propTypes = {

    onRemove: PropTypes.func.isRequired,
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        subtittle: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        read: PropTypes.bool.isRequired
    }).isRequired,
};