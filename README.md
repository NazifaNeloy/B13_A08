# SunCart

## Purpose
SunCart is a modern summer eCommerce platform designed to help users explore and purchase seasonal products like sunglasses, summer outfits, skincare, and beach accessories.

## Live URL
[https://b13-a08-five.vercel.app](https://b13-a08-five.vercel.app)

## Key Features
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop devices.
- **Product Display**: View a selection of popular summer products directly on the home page and browse the full catalog.
- **Authentication**: Secure login and registration powered by BetterAuth with email/password and Google social login options.
- **Protected Routes**: Certain pages like product details and user profile are restricted to authenticated users.
- **Profile Management**: Users can view and update their profile information, including their name and photo URL.

## NPM Packages Used
- **Next.js (App Router)**: The React framework for the application.
- **Tailwind CSS**: For utility-first styling.
- **DaisyUI**: For beautiful, pre-built, semantic UI components.
- **Better-Auth**: For comprehensive authentication and session management.
- **Better-Sqlite3**: For local database storage for authentication data.
- **Animate.css**: For adding simple, clean animations to the UI.
- **Lucide-react**: For crisp and consistent iconography.

## Getting Started
To run this project locally:
1. Clone the repository.
2. Run `npm install`.
3. Add your environment variables in `.env.local` (such as `BETTER_AUTH_SECRET`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`).
4. Run `node migrate.js` to create the SQLite database.
5. Run `npm run dev` to start the local development server.
