import PropTypes from "prop-types";
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function Button(props) {
    const { theme } = useContext(ThemeContext)
    return (
        <button
            onClick={props.onClick}
            style={{
                color: theme === "dark" ? '#fff' : '#000',
                background: theme === "dark" ? '#000' : '#fff'
            }}
        >{props.children}</button>
    );
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};