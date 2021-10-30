import React from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Badge,
    MenuItem,
    Menu,
    Typography,
    Icon,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import Logo from "../../images/commerce.png";

import useStyles from './styles';


const Navbar = ({ totalItems }) => {
    const classes = useStyles()
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img
                            src={Logo}
                            alt="commerce.js"
                            height="25px"
                            className={classes.image}
                        />
                        ZEUS PHONES
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label="Show cart item" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar;
