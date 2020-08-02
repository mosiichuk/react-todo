import React from 'react';
import { Typography } from '@material-ui/core';

export default function Title(props) {
  return (
    <Typography align="center" variant="h3">
        {props.children}
    </Typography>
  );
}