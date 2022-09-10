import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h3" styles="color: white;">sunny☀</Typography>
      </Toolbar>
    </AppBar>
  )};

export default Header;