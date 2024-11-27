# Next.js Blog with Strapi CMS

A modern blog application built with Next.js 14 and Strapi CMS, featuring a beautiful UI powered by Shadcn UI components and Tailwind CSS.

## Features

- 🚀 Next.js 14 with App Router
- 📝 Strapi CMS for content management
- 🎨 Modern UI with Shadcn UI components
- 🎯 TypeScript for type safety
- 💅 Tailwind CSS for styling
- 📱 Fully responsive design
- ⚡ Fast page loads with Server Components
- 🔍 SEO friendly

## Prerequisites

Before you begin, ensure you have installed:

- Node.js 18 or later
- npm or yarn
- Git

## Tech Stack

- **Frontend:**
  - Next.js 14
  - TypeScript
  - Tailwind CSS
  - Shadcn UI
  - Axios for API calls

- **Backend:**
  - Strapi CMS
  - SQLite (default database)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/jorsisu/next-strapi.git
cd next-strapi
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_STRAPI_URL=http://127.0.0.1:1337
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Available Commands

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
next-strapi/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── blog/           # Blog pages
│   │   └── page.tsx        # Home page
│   ├── components/         # UI components
│   └── lib/               # Utilities and API functions
├── public/                # Static files
└── package.json          # Project dependencies
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Strapi](https://strapi.io/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/) 