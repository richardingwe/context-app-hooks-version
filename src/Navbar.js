import React, { Component } from 'react';
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Switch from "@material-ui/core/Switch";
import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/NavbarStyles";
import { ThemeContext } from "./contexts/ThemeContext";
import { withLanguageContext } from "./contexts/LanguageContext";

const content = {
    english: {
        search: "Search",
        flag: "EN"
    },
    french: {
        search: "Chercher",
        flag: "FR"
    },
    spanish: {
        search: "Buscar",
        flag: "ES"
    }
};

class Navbar extends Component {
    static contextType = ThemeContext;

    render() {
        const { isDarkMood, toggleTheme } = this.context;
        const { classes } = this.props;
        const { language } = this.props.languageContext;
        const { search, flag } = content[language];

        return (
            <div className={classes.root}>
                <AppBar postion="static" color={isDarkMood ? "default" : "primary"}>
                    <ToolBar>
                        <IconButton className={classes.newButton} color="inherit">
                            <span>{flag}</span>
                        </IconButton>
                        <Typography
                            className={classes.title}
                            variant="h6"
                            color="inherit"
                        >
                            App Title
                        </Typography>
                        <Switch onClick={toggleTheme} />
                        <div className={classes.grow} />
                        <div className={classes.search}>
                            <div className={classes.seachIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder={`${search}...`}
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput
                                }} />
                        </div>
                    </ToolBar>
                </AppBar>
            </div>
        );
    }
}
export default withLanguageContext(withStyles(styles)(Navbar));