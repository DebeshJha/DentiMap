// GitHub Pages Configuration for DentiMap
export const githubPagesConfig = {
  // Base URL for GitHub Pages
  BASE_URL: '/DentiMap',
  
  // Backend API Configuration (Deployed)
  BACKEND_API_URL: 'https://map.paninsight.org',
  
  // DeepInfra AI API Configuration
  DEEPINFRA_API_KEY: 'W9bRJ6CQ6xjTMDzRJ8WALYMEuna0Rua1',
  DEEPINFRA_API_URL: 'https://api.deepinfra.com/v1/openai/chat/completions',
  DEEPINFRA_MODEL: 'meta-llama/Meta-Llama-3-8B-Instruct',
  
  // Google OAuth Configuration
  GOOGLE_REDIRECT_URI: 'https://map.paninsight.org/login/oauth2/code/google',
  
  // EC2 Instance (if needed for direct access)
  EC2_INSTANCE: '3.108.195.56'
};

export default githubPagesConfig;
