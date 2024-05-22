import React from 'react';
import { List, ListItem, ListItemText, Paper } from '@mui/material';

const ChatArea = ({ messages }) => (
  <List>
    {messages.map((msg, index) => (
      <ListItem key={index}>
        <Paper sx={{ padding: '5px', backgroundColor: msg.isUser ? '#d0efff' : '#b8b8b8', color: 'white' }}>
          <ListItemText primary={msg.text} secondary={msg.createdAt} />
        </Paper>
      </ListItem>
    ))}
  </List>
);

export default ChatArea;
