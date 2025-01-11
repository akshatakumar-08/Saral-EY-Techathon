# Saral: Government Schemes Access Platform

A mobile application built with NativeScript-React that helps rural citizens discover, understand, and apply for government schemes and services.

## Features

- 🌐 **Multilingual Support**
  - English
  - Hindi (हिंदी)
  - Marathi (मराठी)

- 👤 **User Management**
  - Personalized user profiles
  - Detailed questionnaire for scheme eligibility
  - Document management system

- 💡 **Smart Scheme Discovery**
  - AI-powered scheme recommendations
  - Eligibility verification
  - Application status tracking

- 🤖 **AI Assistant**
  - Interactive chatbot for scheme guidance
  - Application process assistance
  - Query resolution


## Tech Stack

- NativeScript
- React
- TypeScript
- Tailwind CSS
- React Navigation

## Prerequisites

- Node.js (v14 or higher)
- NativeScript CLI
```bash
npm install -g nativescript
```

## Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/schemesathi.git
cd schemesathi
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
ns preview
```

## Project Structure

```
src/
├── app.ts                 # Application entry point
├── app.css               # Global styles
├── components/           # Reusable components
├── screens/              # Application screens
│   ├── Login.tsx
│   ├── Signup.tsx
│   ├── Home.tsx
│   ├── Dashboard.tsx
│   ├── Profile.tsx
│   ├── SchemeDetails.tsx
│   ├── ChatBot.tsx
│   └── LanguageSelect.tsx
├── utils/               # Utility functions
└── NavigationParamList.ts # Navigation types

```

## Key Features

### 1. Multilingual Support
- Language selection on first launch
- Complete UI translation in three languages
- Persistent language preferences

### 2. Scheme Discovery
- Personalized scheme recommendations
- Detailed eligibility criteria
- Step-by-step application process
- Document upload functionality

### 3. Application Tracking
- Real-time application status
- Progress visualization
- Document verification status
- Application history

### 4. AI Chatbot Assistant
- Natural language query processing
- Scheme eligibility assessment
- Application process guidance
- Document requirement clarification

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

