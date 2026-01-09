# Helio Coach

A modern landing page and website for HelioCoach - a supplement compliance app designed for real life. This website features a clean, responsive design with optimized performance and a waitlist signup system.

## About

HelioCoach is a supplement compliance app designed for real life - missed days, travel, and all. The website serves as a landing page to introduce the product and collect early access signups through a waitlist.


## Tech Stack

- **Frontend Framework:** React 18.3.1
- **Build Tool:** Vite 5.4.2
- **Routing:** React Router DOM 6.26.0
- **Styling:** Bootstrap 5.3.3 + Custom CSS
- **Backend:** Supabase
- **Deployment:** Vercel

## Pages

- `/` - Alternate landing page (default)
- `/landing-alt` - Original landing page
- `/waitlist` - Waitlist signup page
- `/blog` - Blog page
- `/about` - About page
- `/contact` - Contact page
- `/privacy-policy` - Privacy policy
- `/terms-of-use` - Terms of use
- `/refunds-and-support` - Refunds and support information

## Project Structure

```
├── api/                    # API routes
│   └── waitlist.js        # Waitlist API endpoint
├── src/
│   ├── assets/            # Images and static assets
│   ├── components/        # Reusable React components
│   │   ├── CTA.jsx
│   │   ├── Features.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── HeroAlt.jsx
│   │   ├── Intro.jsx
│   │   ├── Navbar.jsx
│   │   ├── ScrollToTop.jsx
│   │   └── Testimonials.jsx
│   ├── lib/               # Utility libraries
│   │   └── supabase.js   # Supabase client configuration
│   ├── pages/             # Page components
│   ├── App.jsx            # Main app component with routing
│   ├── index.css          # Global styles
│   └── main.jsx           # Entry point
├── supabase/
│   └── functions/         # Supabase Edge Functions
│       └── send-waitlist-email/
├── index.html
├── package.json
├── rulebook.md            # Design standards and rules
└── vercel.json            # Vercel deployment configuration
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd helio-coach
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
   - Create a `.env` file in the root directory
   - Add your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Start the development server
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment

The project is configured for Vercel deployment. The `vercel.json` file handles routing for the SPA.

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

## Supabase Setup

The waitlist functionality uses Supabase:

1. Create a Supabase project
2. Set up the `waitlist` table with appropriate schema
3. Configure the Edge Function `send-waitlist-email` if email notifications are needed
4. Add your Supabase credentials to environment variables

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private project - All rights reserved

---
