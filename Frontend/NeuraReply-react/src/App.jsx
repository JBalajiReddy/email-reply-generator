import React, { useState } from 'react';
import { Container, Box, TextField, Typography, MenuItem, FormControl, InputLabel, Select, Button, CircularProgress } from '@mui/material';
import './App.css';
import axios from 'axios';

function App() {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setError(''); // Reset error message
    try{
      const response = await axios.post("http://localhost:8064/api/email/generate", {
        emailContent,
        tone
      });
      setGeneratedReply(typeof response.data === 'string' ? response.data : JSON.stringify(response.data));

    }catch(error){
      setError('Something went wrong. Please try again later.');
      console.error(error);
    }finally{
      setLoading(false);
    }

  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Email Reply Assistant
      </Typography>

      <Box sx={{ mt: 3 }}>
        <TextField 
          fullWidth
          multiline
          rows={6}
          variant="outlined"
          label="Original Email Content"
          onChange={(e) => setEmailContent(e.target.value)}
          sx={{ mb: 2 }}
        />
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Tone (Optional)</InputLabel>
          <Select
            value={tone || ''}
            label="Tone (Optional)"
            onChange={(e) => setTone(e.target.value)}
          >
            <MenuItem value="none">None</MenuItem>
            <MenuItem value="formal">Formal</MenuItem>
            <MenuItem value="casual">Informal</MenuItem>
            <MenuItem value="friendly">Friendly</MenuItem> 
          </Select>
        </FormControl>

        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={!emailContent || loading} // Disable button if email content is empty or loading
          fullWidth
        >
          {loading ? <CircularProgress size={24} /> : 'Generate Reply'}
        </Button>
      </Box>

      {error && (
         <Typography color='error' sx={{ mb: 2 }}>
        {error}
       </Typography>
      )}

      {generatedReply && (
        <Box sx={{ mt: 3 }}>
          <Typography variant='h6' gutterBottom>
            Generated Reply
          </Typography>
          <TextField 
            multiline
            rows={6}
            fullWidth
            variant="outlined"
            value={generatedReply || ''}
            inputProps={{ readOnly: true }}
          />
          <Button
          variant='outlined'
          sx={{ mt: 2 }}
          //Copy text to clipboard
          onClick={() => { 
            navigator.clipboard.writeText(generatedReply);
          }
        }>
        Copy to Clipboard
          </Button>
        </Box>
      )}
    </Container>
  );
}

export default App;
