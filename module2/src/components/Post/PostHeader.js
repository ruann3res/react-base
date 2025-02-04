import PropTypes from "prop-types";
import React from "react";
import Button from "../Button";

export default function PostHeader(props) {
    return (
        <>
            <strong>
                {props.post.read ? <s>{props.post.title}</s> : props.post.title}
            </strong>
            <br />
            <Button onClick={() => props.onRemove(props.post.id)}>Remover</Button>
            <br />
        </>
    );
}

PostHeader.propTypes = {
    onRemove: PropTypes.func.isRequired,
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        read: PropTypes.bool.isRequired
    }).isRequired,
};