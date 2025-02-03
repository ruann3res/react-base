import PropTypes from "prop-types";
import React, { useContext } from "react";
import Button from "./Button";

import { ThemeContext } from "./ThemeContext";

import styles from './Header.scss';


export default function Header({ title, children }) {
    const { onToggleTheme } = useContext(ThemeContext)
    return (
        <div className={styles.title}>
            <h1>{title}</h1>
            <Button onClick={onToggleTheme} >Atualizar Thema</Button>
            {children}
        </div>
    )
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

Header.defaultProps = {
    title: 'Meu Primeiro '
};