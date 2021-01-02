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

class Navbar extends Component {
    // constructor(props) {
    // super(props);
    // }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar postion="static" color="primary">
                    <ToolBar>
                        <IconButton className={classes.newButton} color="inherit">
                            <span>*</span>
                        </IconButton>
                        <Typography
                            className={classes.title}
                            variant="h6"
                            color="inherit"
                        >
                            App Title
                        </Typography>
                        <Switch />
                        <div className={classes.grow} />
                        <div className={classes.search}>
                            <div className={classes.seachIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder="search..."
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
export default withStyles(styles)(Navbar);