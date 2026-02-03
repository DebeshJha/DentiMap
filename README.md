# DentiMap - AI-Powered Dental Diagnostics Platform

## What is DentiMap?

DentiMap is an innovative web application that uses artificial intelligence to help people understand and monitor their dental health. Simply upload a panoramic dental X-ray image, and our AI will analyze it to detect potential dental issues, providing you with instant insights and recommendations.

Dr. Debesh Jha, Assistant Professor of Computer Science at the University of South Dakota, has led the development of DentiMap, a working AI platform that analyzes panoramic dental X-rays and automatically generates segmentation masks and structured diagnostic reports in seconds.

DentiMap demonstrates strong early performance, delivering pixel-level localization and confidence-scored findings through a fully automated pipeline. Built for scalability, the platform is expected to improve further with additional clinical data, positioning it for commercial deployment.

Developed with USD students Harshith Reddy Nalla and Sai Shankar Swarna, DentiMap supports clinicians by enabling faster and more consistent X-ray interpretation and supports the general public through an integrated AI-powered chatbot that accurately answers dental-related questions, improving access to and understanding of oral health.

## Our Mission

Dental health problems often go unnoticed until they become serious and expensive to treat. Many people do not have easy access to dental care or cannot afford regular checkups. DentiMap was created to bridge this gap by making advanced dental diagnostics accessible to everyone, anywhere, at any time.

Our goal is simple: Help people catch dental problems early, understand their oral health better, and make informed decisions about their dental care through the power of AI.

## What DentiMap Does

### 1. AI-Powered Dental Scan Analysis
   - Upload panoramic X-rays - Upload panoramic dental X-ray images for analysis
   - Instant AI analysis - Our advanced AI model examines the X-ray image to identify potential issues
   - Detailed results - Get a visual breakdown showing:
     - Areas with tooth decay (cavities)
     - Signs of gum inflammation (gingivitis)
     - Plaque and tartar buildup
     - Overall dental health status
   - Downloadable reports - Receive a comprehensive PDF report with your analysis results

### 2. 24/7 AI Dental Assistant (Denti Jha)
   - Ask questions anytime - Chat with our AI assistant about dental health concerns
   - Get instant answers - Receive guidance on:
     - Dental hygiene tips
     - Common dental problems
     - Oral care recommendations
     - Treatment suggestions
   - No appointment needed - Get help whenever you need it, day or night

### 3. Easy-to-Understand Results
   - Visual feedback - See exactly where problems are detected on your teeth
   - Confidence scores - Understand how certain the AI is about each finding
   - Severity ratings - Know which issues need immediate attention
   - Clear explanations - Get descriptions of what each condition means

## Why DentiMap Matters

### For Patients:
- Early Detection - Catch dental problems before they become serious and costly
- Accessibility - Get dental insights without leaving your home
- Education - Learn about your oral health and what different conditions mean
- Cost Savings - Identify issues early when treatment is simpler and less expensive
- Peace of Mind - Get quick answers to dental health questions anytime

### For Healthcare Providers:
- Support Tool - Use AI analysis to assist in diagnosis and patient communication
- Time Efficiency - Get preliminary analysis to help focus examinations
- Patient Education - Help patients understand their conditions with visual results
- Documentation - Generate professional reports for patient records

## Key Features

- Upload and Analyze - Simply upload a dental image and get instant AI-powered analysis
- Smart Detection - Automatically identifies tooth decay, gum disease, and plaque buildup
- AI Chat Assistant - Get answers to dental health questions 24/7
- Detailed Reports - Download comprehensive PDF reports with your analysis
- Visual Results - See highlighted areas showing detected problems
- Fast Results - Get analysis results in seconds
- Easy to Use - Simple, intuitive interface that anyone can use

## Technology Stack

### Frontend
- React (Under Development)
- TypeScript
- Tailwind CSS
- Vite
- React Router

### Backend
- Spring Boot
- RESTful API Architecture

### AI/ML Model Deployment
- Hugging Face Spaces
- Model API hosted on Hugging Face infrastructure (We are retraining model with more data for increasing accuracy)

## System Architecture and Workflow

The DentiMap platform follows a three-tier architecture with clear separation between frontend, backend, and AI model services:

```
┌─────────────────────────────────────────────────────────────────┐
│                         USER INTERFACE                          │
│                    (React Frontend Application)                 │
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐           │
│  │   Upload     │  │   Chatbot    │  │   Reports    │           │
│  │   Interface  │  │   Interface  │  │   Viewer     │           │ 
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘           │
│         │                 │                  │                  │
└─────────┼─────────────────┼──────────────────┼──────────────────┘
          │                 │                  │
          │                 │                  │
          ▼                 ▼                  ▼
┌───────────────────────────────────────────────────────────┐
│                      FRONTEND API LAYER                   │
│                    (React Service Layer)                  │
│                                                           │
│  ┌──────────────────┐  ┌──────────────────┐               │
│  │  dentimapService │  │   chatService    │               │
│  │  (Image Upload)  │  │   (Chat API)     │               │
│  └────────┬─────────┘  └────────┬─────────┘               │
│           │                      │                        │
└───────────┼──────────────────────┼────────────────────────┘
            │                      │
            │                      │
            ▼                      ▼
┌────────────────────────────────────────────────────────────┐
│                      BACKEND API LAYER                     │
│                    (Spring Boot Server)                    │
│                                                            │
│  ┌───────────────────────────────────────────┐             │
│  │         REST API Endpoints                │             │
│  │  - /api/auth/* (Authentication)           │             │
│  │  - /api/users/* (User Management)         │             │
│  │  - /api/scans/* (Scan Management)         │             │
│  └──────────────────┬────────────────────────┘             │
│                     │                                      │
└─────────────────────┼──────────────────────────────────────┘
                      │
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│                      MODEL API LAYER                        │
│              (Hugging Face Spaces Deployment)               │
│                                                             │
│  ┌────────────────────────────────────────────┐             │
│  │  Hugging Face Space:                       │             │
│  │  HarshithReddy01/Dentimap                  │             │             │
│  │                                            │             │
│  │  Endpoints:                                │             │
│  │  - /api/v1/inference/predict-with-metadata │             │
│  │  - /api/v1/health                          │             │
│  │                                            │             │
│  │  AI Model:                                 │             │
│  │  - Dental Image Segmentation               │             │
│  │  - Class Distribution Analysis             │             │
│  │  - Confidence Scoring                      │             │
│  └────────────────────────────────────────────┘             │
└─────────────────────────────────────────────────────────────┘
```

### Workflow Process

1. **User Uploads Image**
   - User selects dental X-ray image through React frontend
   - Frontend API (dentimapService) prepares image for upload
   - Image is sent to Backend API (Spring Boot)

2. **Backend Processing**
   - Spring Boot backend receives image upload request
   - Backend validates and processes the request
   - Backend forwards image to Model API (Hugging Face)

3. **AI Model Analysis**
   - Hugging Face Spaces receives image
   - AI model performs segmentation and analysis
   - Model returns segmentation mask, class distribution, and metadata

4. **Response Flow**
   - Model API returns results to Backend API
   - Backend API processes and stores results
   - Backend API returns structured response to Frontend API
   - Frontend displays results to user

5. **Chatbot Interaction**
   - User interacts with chatbot interface
   - Frontend API (chatService) sends message to Backend API
   - Backend API processes chat request
   - Response returned to user through frontend

## Who We Are

DentiMap was developed by a team from the University of South Dakota, dedicated to making advanced healthcare technology accessible to everyone. We believe that AI can democratize healthcare by providing tools that help people take better care of themselves.

**Development Team:**
- **Dr. Debesh Jha** - Technical Lead & Machine Learning Engineer, Assistant Professor of Computer Science at University of South Dakota
- **Harshith Reddy Nalla** - AI/ML Engineer (Model Development, API development, FastAPI, Model Deployment, Hugging Face Spaces and model workflow)
- **Sai Sankar Swarna** - Full Stack Developer (Backend, API design & Orchestration)

**Institution:**
University of South Dakota, Vermillion, SD

## How It Works

1. **Upload** - Upload a panoramic dental X-ray image for analysis
2. **AI Analysis** - Our AI model analyzes the image to detect dental conditions
3. **View Results** - See visual highlights and detailed findings
4. **Get Recommendations** - Receive guidance on next steps and care recommendations
5. **Download Report** - Save your analysis as a PDF for your records or to share with your dentist

## Important Note

DentiMap is designed to be an informational and educational tool to help you understand your dental health. While our AI provides valuable insights, it is not a replacement for professional dental care. Always consult with a licensed dentist for diagnosis and treatment decisions.

## Links and Resources

- **Live Application:** https://debeshjha.github.io/DentiMap/
- **About Page:** https://debeshjha.github.io/DentiMap/about
- **Hugging Face Model:** https://huggingface.co/spaces/HarshithReddy01/Dentimap
- **GitHub Repository:** https://github.com/DebeshJha/DentiMap

Check out our product and team members in the deployed version of our product on the about page.

## Get in Touch

Have questions or feedback? We would love to hear from you.

- **Email:** dentimap527@gmail.com
- **Phone:** +1 605 202 7777
- **Location:** University of South Dakota, Vermillion, SD

## Try DentiMap

Ready to take control of your dental health? Visit our application and start your first scan today. Please try the platform using the provided example images.

**Remember:** Early detection is key to maintaining good dental health. DentiMap helps you stay informed, but regular visits to your dentist are essential for complete oral care.

## License

This project is developed by Dr. Debesh Jha and team at the University of South Dakota.
