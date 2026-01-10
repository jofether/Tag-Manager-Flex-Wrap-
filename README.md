# Tag Manager - Flex Wrap

A layout demonstration project testing the wrapping behavior of inline elements (Chips/Tags). This project forces elements to flow to the next line when they run out of space.

## Purpose

**ViT Training Goal:** Learn to detect when a row of items correctly breaks into multiple lines vs. when they overflow off the screen.

## Features

- Responsive tag/chip layout with flex-wrap
- Interactive tag selection with visual states
- Tailwind CSS styling
- Add/Remove tag functionality UI
- Save changes workflow

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Project Structure

```
├── src/
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # React entry point
│   └── index.css         # Tailwind CSS styles
├── index.html            # HTML template
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
└── package.json          # Project dependencies
```

## Key Component: Tag Container

The main flex-wrap container demonstrates proper wrapping behavior:
- Uses `flex flex-wrap` to enable wrapping
- Tags break to new lines when space runs out
- Each tag is interactive with hover states
- Includes selected/unselected visual states

**Future Bug Test:** Remove `flex-wrap` class to test overflow detection (tags will overflow horizontally instead of wrapping).

## Technologies

- React 18.2
- Vite 5.0
- Tailwind CSS 3.4
- PostCSS & Autoprefixer

