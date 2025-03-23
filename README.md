# Homewise Vision

<div align="center">
  <img src="public/hero demo-1.png" alt="Homewise Vision Blueprint View" width="80%" />
  <p><em>Interactive Blueprint Visualization</em></p>
  
  <img src="public/hero demo-2.png" alt="Homewise Vision 3D View" width="80%" />
  <p><em>3D Model Visualization</em></p>
</div>

## Overview

Homewise Vision is an innovative web application that transforms standard 2D blueprints into interactive 3D models and AR experiences. It helps homeowners, architects, and construction professionals visualize spaces before they're built, improving decision-making and reducing costly changes during construction.

## Features

- **Blueprint to 3D Conversion**: Upload blueprint files and convert them into detailed 3D models
- **Interactive Visualization**: Explore models in both 2D blueprint and 3D view with interactive elements
- **AR Preview**: Experience your future space in augmented reality through our mobile app
- **Component Details**: View detailed information about doors, walls, rooms, and furniture
- **Modern UI**: Clean, responsive interface built with the latest web technologies
- **Enhanced Interior Design**: More detailed and customizable interior elements and finishes
- **Expanded AR Models**: Additional augmented reality model options for a wider range of architectural styles
- **AI-Based Cost Estimation**: Intelligent cost calculation based on your design choices and local pricing data
- **Structural Integrity Testing**: Virtual analysis of the structural soundness of your design before construction

## Technologies Used

- **Frontend**:
  - [Next.js 15](https://nextjs.org/) (React 19)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [Framer Motion](https://www.framer.com/motion/) for animations
  - [Radix UI](https://www.radix-ui.com/) for accessible components
  - [Lucide React](https://lucide.dev/) for icons

- **3D Visualization**:
  - [Three.js](https://threejs.org/)
  - [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
  - [React Three Drei](https://github.com/pmndrs/drei)
  - [Unity](https://unity.com/) for advanced 3D modeling and interactions
  - [Vuforia](https://developer.vuforia.com/) for AR functionality

- **Backend & Data**:
  - [Firebase Firestore](https://firebase.google.com/products/firestore) for database and storage

- **Development Tools**:
  - [Node.js](https://nodejs.org/)
  - [pnpm](https://pnpm.io/) (package manager)

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/homewise-vision-website.git
   cd homewise-vision-website
   ```

2. Install dependencies:
   ```bash
   pnpm install
   # or
   npm install
   ```

3. Run the development server:
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
homewise-vision-website/
├── app/                    # Next.js app router pages
│   ├── dashboard/          # Dashboard views
│   ├── demo/               # Interactive demo page
│   ├── features/           # Features showcase
│   ├── modern-house/       # Modern house 3D model viewer
│   ├── unity-link/         # Unity integration
│   ├── page.tsx            # Homepage
│   ├── layout.tsx          # Root layout
│   └── globals.css         # Global styles
├── components/             # Reusable UI components
│   ├── ui/                 # Shadcn UI components
│   ├── blueprint-visualizer.tsx # Interactive blueprint viewer
│   ├── ModernHouseModel.tsx     # 3D house model
│   ├── team-section.tsx         # Team members showcase
│   └── ...                 # Other components
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions and shared logic
├── public/                 # Static assets
├── styles/                 # Component-specific styles
├── next.config.mjs         # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── package.json            # Project dependencies and scripts
```

## Usage

### Blueprint Visualization

1. Navigate to the Demo page
2. Use the tabs to switch between 3D View, Blueprint View, and AR Preview
3. Click on different elements (doors, walls, rooms, furniture) to see detailed information
4. Use zoom controls to adjust the view

### AR Preview

1. Download the Homewise Vision mobile app (coming soon)
2. Scan the QR code displayed in the AR Preview tab
3. Experience your blueprint in augmented reality in real-world scale

## Team

- **Chinmay Sawant** - [GitHub](https://github.com/Chinmay-HS) | [LinkedIn](https://www.linkedin.com/in/chinmay-sawant-8b3282266/)
- **Bhargav Gajare** - [GitHub](https://github.com/bhargavgajare1479) | [LinkedIn](https://www.linkedin.com/in/bhargavsg/)
- **Aryan Yadav** - [GitHub](https://github.com/aryanyadav-dev) | [LinkedIn](https://www.linkedin.com/in/-aryanyadav/)
- **Jash Damania** - [GitHub](https://github.com/Intr0vert1648) | [LinkedIn](https://www.linkedin.com/in/jash-damania-a61281266/)

