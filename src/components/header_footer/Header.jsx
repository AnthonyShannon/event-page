import React, { Component } from 'react';
import { AppBar, Toolbar, MenuIcon, IconButton } from '@material-ui/core';

class Header extends Component {
    render() {
        return (
            <div>
                <AppBar 
                    position="fixed"
                >
                    Header
                </AppBar>
            </div>
        );
    }
}

export default Header;