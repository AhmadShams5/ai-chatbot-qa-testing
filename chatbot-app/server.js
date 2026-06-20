const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// API endpoint that talks to Ollama
app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3.2',
        prompt: message,
        stream: false
      })
    });

    const data = await response.json();
    res.json({ reply: data.response });

  } catch (error) {
    res.status(500).json({ error: 'Failed to get AI response' });
  }
});

app.listen(3000, () => {
  console.log('Chatbot server running on http://localhost:3000');
});