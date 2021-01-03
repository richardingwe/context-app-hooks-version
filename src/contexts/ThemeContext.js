import React, { Component, createContext } from "react";

export const ThemeContext = createContext();

export class ThemeProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDarkMood: true
        };
    }
    toggleTheme = () => {
        this.setState({
            isDarkMood: !this.state.isDarkMood
        });
    };
    render() {
        return (
            <ThemeContext.Provider
                value={{
                    ...this.state,
                    toggleTheme: this.toggleTheme
                }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

