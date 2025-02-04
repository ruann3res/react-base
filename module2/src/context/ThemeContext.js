import React, { createContext, useState } from "react"

export const ThemeContext = createContext('dark')

export function ThemeProvider(props) {
    const [theme, setTheme] = useState('dark')

    function handleToggleTheme() {
        setTheme((prevState) => (
            prevState === 'dark'
                ? 'ligth'
                : 'dark'
        ))
    }

    return (
        <ThemeContext.Provider value={{ onToggleTheme: handleToggleTheme, theme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}