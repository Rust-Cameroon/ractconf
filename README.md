# Conference Webpage

A modern React + Vite conference webpage built with TypeScript, TailwindCSS, shadcn/ui, and Framer Motion.

## Tech Stack

- **React 19** - Frontend framework
- **Vite** - Build tool and development server
- **TypeScript** - Type safety
- **TailwindCSS** - Utility-first CSS framework
- **shadcn/ui** - Component library
- **Framer Motion** - Animation library

## Project Structure

```
src/
├── components/          # Reusable UI components
│   └── ui/             # shadcn/ui style components
├── data/               # Data files and interfaces
├── pages/              # Page components
├── lib/                # Utility functions
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles with TailwindCSS
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Features

- ✅ TypeScript for type safety
- ✅ TailwindCSS for styling
- ✅ shadcn/ui components
- ✅ Framer Motion animations
- ✅ Responsive design
- ✅ Modern React patterns

## Customization

### Adding New Components

1. Create your component in the appropriate directory under `src/components/`
2. Follow the existing patterns for consistency
3. Use TypeScript interfaces for props

### Adding New Pages

1. Create a new file in `src/pages/`
2. Import and use it in your routing setup
3. Follow the existing page structure

### Styling

- Use TailwindCSS utility classes for styling
- Follow the design system established in the project
- Use the `cn` utility function for conditional classes

## License

MIT