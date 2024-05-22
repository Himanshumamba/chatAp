import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

const MessageBox = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <Box position="relative" sx={{  backgroundColor: '#f5f5f5', height: 'fit-content', width: '100%' }}>
      <TextField
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        label="Type a message"
        variant="outlined"
        fullWidth
        multiline
        rows={8}
        sx={{ width: '100%' }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSend}
        sx={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          margin: '10px',
          backgroundColor: 'purple'
        }}
      >
        Send
      </Button>
    </Box>
  );
};

export default MessageBox;
