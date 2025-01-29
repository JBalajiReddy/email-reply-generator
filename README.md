# NeuraReply - AI-Powered Email Reply Assistant

NeuraReply is a Chrome extension that leverages Google's Gemini API to generate intelligent email replies seamlessly. Built with a **React** frontend, a **Spring Boot** backend, and integrated extension code, NeuraReply enhances your email productivity with AI-powered suggestions.

## Features
- 🚀 **AI-Powered Replies**: Generates professional email responses instantly.
- 🎨 **Modern UI**: Built with React for a smooth user experience.
- 🔗 **Seamless Gmail Integration**: Works directly within Gmail's compose window.
- 🛠 **Spring Boot Backend**: Handles AI processing and API requests efficiently.
- ☁ **Google Gemini API**: Ensures high-quality AI-generated replies.

## Tech Stack
- **Frontend**: React (for the popup UI and settings page)
- **Backend**: Spring Boot (REST API for AI processing)
- **AI Model**: Google's Gemini API
- **Browser Extension**: JavaScript, HTML, CSS

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/NeuraReply.git
   cd NeuraReply
   ```
2. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```
3. Run the frontend:
   ```bash
   npm start
   ```
4. Set up the backend:
   ```bash
   cd ../backend
   mvn clean install
   mvn spring-boot:run
   ```
5. Load the Chrome extension:
   - Open Chrome and go to `chrome://extensions/`
   - Enable **Developer Mode** (top-right corner)
   - Click **Load Unpacked** and select the `extension` folder

## Usage
- Open Gmail and compose a new email.
- Click the **NeuraReply** button to generate an AI-powered response.
- Review and modify the suggested reply before sending.

## Configuration
- Update the `config.js` file in the extension folder with your **Google Gemini API key**.
- Modify `application.properties` in the backend to customize server settings.

## License
This project is licensed under the MIT License.

---
🚀 **Boost your email productivity with NeuraReply!**

