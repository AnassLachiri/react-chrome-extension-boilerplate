
# Chrome Extension with React, TypeScript, and Webpack  

This is a Chrome extension built using **React**, **TypeScript**, and **Webpack**.  

## Getting Started  

### Installation  

1. Clone the repository:  

   ```bash
   git clone <repository-url>  
   cd <project-directory>
   ```
2. Install dependencies:  

   ```bash
   npm install
   ```

### Running the Extension  

#### Development Mode  

To run the extension in development mode with hot reloading:  
```bash
npm run start
```

After running the command, load the unpacked extension in Chrome:  
1. Open `chrome://extensions/` in your browser.  
2. Enable **Developer mode** (toggle in the top right).  
3. Click **Load unpacked** and select the `dist` folder.  

#### Production Build  

To create an optimized production build:  
```bash
npm run build
```

This generates the necessary files in the `dist` directory, ready for publishing.  

## Technologies Used  

- **React** – UI library  
- **TypeScript** – Static typing  
- **Webpack** – Module bundler  
- **Chrome Extension API** – For browser interactions  
 
