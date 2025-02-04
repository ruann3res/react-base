import PropTypes from "prop-types";
import React from "react";
import PostHeader from "./PostHeader";


import { Container, Likes, SubTitle } from "./styles";


export default function Post(props) {
    return (
        <Container removed={props.post.removed}>
            <PostHeader
                onRemove={props.onRemove}
                post={{
                    id: props.post.id,
                    title: props.post.title,
                    read: props.post.read
                }}
            />
            <SubTitle >{props.post.subtittle}</SubTitle>
            <Likes>Likes: {props.post.likes / 2}</Likes>
        </Container>
    );
}

Post.propTypes = {
    onRemove: PropTypes.func.isRequired,
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        subtittle: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        read: PropTypes.bool.isRequired,
        removed: PropTypes.bool.isRequired,
    }).isRequired,
};