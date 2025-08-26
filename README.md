# DentAI Vision AI Web Application

A modern web application for dental healthcare powered by artificial intelligence and machine learning.

## Overview

DentAI Vision is a cutting-edge platform that combines dental healthcare with artificial intelligence to provide advanced diagnostic tools and solutions for dental professionals and patients.

## Features

- 🦷 AI-powered dental health assistant (Denti Jha)
- 💻 Modern, responsive user interface
- 🔒 Secure authentication system (optional for chat)
- 📊 Real-time chat responses
- 📱 Cross-platform compatibility
- 🤖 Frontend-only AI chat (no backend required)

## Tech Stack

- **Frontend:**
  - React.js
  - TypeScript
  - Tailwind CSS
  - Shadcn UI Components

- **Backend:**
  - SpringBoot (Authentication & User Management)
  - RESTful API Architecture
  - MySQL Database

- **AI Integration:**
  - DeepInfra API (Meta-Llama-3-8B-Instruct)
  - Frontend-only chat service
  - No backend authentication required for chat

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/dentai-vision-ai-web.git

# Navigate to project directory
cd dentai-vision-ai-web

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Variables

Create a `.env` file in the root directory:

```env
# DeepInfra AI API Configuration
VITE_DEEPINFRA_API_KEY=your_deepinfra_api_key_here
VITE_DEEPINFRA_API_URL=https://api.deepinfra.com/v1/openai/chat/completions
VITE_DEEPINFRA_MODEL=meta-llama/Meta-Llama-3-8B-Instruct

# Backend API Configuration (optional)
VITE_BACKEND_API_URL=http://localhost:8080
```



## Project Structure

```
dentai-vision-ai-web/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── asserts/       # Static assets and images
│   ├── lib/           # Utility functions
│   └── app/           # App configuration
├── public/            # Public assets
└── package.json       # Project dependencies
```

## Team

- **Technical Lead & Machine Learning Engineer:** Dr. Debesh Jha
- **Backend & MLOps:** Sai Sankar Swarna
- **Frontend & UI:** Harshith Reddy Nalla

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Example Commit'`)
4. Push to the branch (`git push origin Main`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any queries or support, please contact:
- Email: debeshjha1@gmail.com
- Project Link: https://github.com/Swarna7414/DentiMap
