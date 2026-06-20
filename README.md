# AI Chatbot QA Testing Framework

![Tests](https://github.com/AhmadShams5/ai-chatbot-qa-testing/actions/workflows/full-stack-tests.yml/badge.svg)

A full-stack AI-powered chatbot application with comprehensive automated testing across UI, API, and LLM quality layers — running 100% locally with Ollama, no external API keys required.

## What This Project Demonstrates

- **Full-stack development**: Built an AI chatbot from scratch (Node.js + Express backend, vanilla JS frontend)
- **UI Testing**: Playwright tests validating chat interface behavior
- **API Testing**: Playwright tests validating backend `/api/chat` endpoint
- **LLM Quality Testing**: PromptFoo tests evaluating AI response quality and relevance
- **CI/CD Automation**: GitHub Actions pipeline that installs Ollama, pulls a local LLM, starts the app, and runs all three test layers automatically on every push

## Tech Stack

| Layer | Tools |
| AI Model | Ollama + Llama3.2 (local, private, no API key) |
| Backend | Node.js, Express |
| Frontend | HTML, vanilla JavaScript |
| UI/API Testing | Playwright |
| LLM Testing | PromptFoo |
| CI/CD | GitHub Actions |

## Architecture

## Test Coverage

- ✅ UI loads correctly and elements are visible
- ✅ Chatbot responds to user messages
- ✅ User messages display correctly in chat
- ✅ API returns valid AI response
- ✅ API returns correct JSON structure
- ✅ API response time is within acceptable range
- ✅ AI responses are relevant to QA-related questions
- ✅ AI handles unrelated questions gracefully

## Running Locally

```bash
# Start Ollama
ollama run llama3.2

# Start the chatbot server
cd chatbot-app
npm install
node server.js

# Run Playwright tests (new terminal)
npx playwright test

# Run PromptFoo LLM quality tests
promptfoo eval -c promptfoo-tests/chatbot-quality.yaml
```

## Author = Ahmad Shams

QA Automation Engineer specializing in AI/LLM testing, building practical projects that combine traditional QA skills with modern AI evaluation techniques.