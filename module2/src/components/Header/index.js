import PropTypes from "prop-types";
import React, { useContext } from "react";
import Button from "../Button";

import { ThemeContext } from "../../context/ThemeContext";
import Title from "../Title";


export default function Header({ title, children }) {
    const { onToggleTheme } = useContext(ThemeContext)
    return (
        <>
            <Title>{title}</Title>
            <Button onClick={onToggleTheme} >Atualizar Thema</Button>
            {children}
        </>
    )
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

Header.defaultProps = {
    title: 'Meu Primeiro '
};