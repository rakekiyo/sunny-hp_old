import React from "react";
import { AppBar, ButtonGroup, Button, Toolbar, Box, Typography, Container } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar position="static" color="primary">
      {/* <Toolbar>
        <Typography variant="h3">sunny☀</Typography>
      </Toolbar> */}
      <Toolbar color='primary'>
        <ButtonGroup variant="text" color="secondary" size="large">
          <Button>Home</Button>
          <Button>ご予約・問合せ</Button>
        </ButtonGroup>
      </Toolbar>
        <Container>
          <Typography variant='h4'>
            女性による女性のための骨盤専門店
          </Typography>
          <Typography variant='h3'>
            カイロ＆エステ
          </Typography>
          <Typography variant='h1'>
            sunny☀
          </Typography>
        </Container>
    </AppBar>
  )
};

export default Header;