import { css, styled } from 'styled-components';

export const Container = styled.article`
    margin-bottom: 24px;

    /* opacity: ${(props) => (props.removed ? 0.5 : 1)}; */

    ${(props) => css`
        opacity: ${props.removed ? 0.5 : 1};
    `}
`;

export const SubTitle = styled.small`
    color: #7D3EA6;
    display: block;
`;

export const Likes = styled.p`
    font-size: 10px;
    opacity: 0.8;
`;
