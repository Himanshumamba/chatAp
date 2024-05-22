import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = ({ caseDetails }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">{caseDetails.productName}</Typography>
      <Typography variant="subtitle1" sx={{ marginLeft: 'auto' }}>
        {caseDetails.status}
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
