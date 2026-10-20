# 🔐 Random Password Generator

A simple, responsive **Random Password Generator** built with HTML, Tailwind CSS, and JavaScript. Customize the character types and password length, generate a password instantly, and copy it to your clipboard.

**[🚀 Live Demo](https://sahil-verma77.github.io/Random-Password-Generator/)** · **[📂 GitHub Repository](https://github.com/sahil-verma77/Random-Password-Generator)**

## ✨ Features

- 🎚️ **Adjustable password length:** Choose a length between 6 and 50 characters.
- 🔤 **Character selection:** Include uppercase letters, lowercase letters, numbers, and symbols.
- ⚡ **One-click generation:** Generate a password using your selected character options.
- 📋 **Copy to clipboard:** Copy the generated password with a single click.
- 💬 **Helpful feedback:** Get a message when no character type is selected or when copying succeeds or fails.
- 📱 **Responsive design:** A compact interface with an emerald-green theme, styled using Tailwind CSS.

## 🛠️ Tech Stack

- **HTML5** — page structure
- **Tailwind CSS** — styling and responsive layout, loaded through the Tailwind browser CDN
- **JavaScript** — password generation, range updates, validation, and clipboard interaction
- **Font Awesome** — interface icons

## 🚀 Getting Started

### Run locally

1. Clone the repository:

   ```bash
   git clone https://github.com/sahil-verma77/Random-Password-Generator.git
   ```

2. Open the project folder:

   ```bash
   cd Random-Password-Generator
   ```

3. Open `index.html` in your browser, or run it using a local development server such as the **Live Server** extension in Visual Studio Code.

> 💡 Using a local server is recommended for clipboard functionality, since browsers may restrict clipboard access outside secure contexts.

## 📁 Project Structure

```text
Random-Password-Generator/
├── index.html   # Interface and Tailwind CSS classes
├── script.js    # Password generation and interaction logic
└── README.md    # Project documentation
```

## 🧭 How to Use

1. Open the [live demo](https://sahil-verma77.github.io/Random-Password-Generator/).
2. 🎚️ Set the desired password length using the slider.
3. ☑️ Select one or more character types.
4. ⚡ Click **Generate Password**.
5. 📋 Use the copy icon to copy the generated password.

## 📌 Note

This is a learning project created to practice JavaScript and DOM manipulation. Its current password-generation logic uses `Math.random()`, which is not designed for cryptographically secure password generation. For important accounts, use a trusted password manager or a generator that uses a cryptographically secure random number source.
