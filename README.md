This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, create a `.env.local` file in the root directory and add your environment variables:

```env
# Google Gemini API Key
# Get your free API key from: https://makersuite.google.com/app/apikey
GEMINI_API_KEY=your_gemini_api_key_here

# Cal.com Username (optional)
# Replace with your Cal.com username for scheduling
NEXT_PUBLIC_CAL_USERNAME=your-cal-username
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- **AI Chatbot**: Interactive chatbot powered by Google Gemini AI
  - Ask about projects, services, and pricing
  - Collect user information
  - Schedule meetings via Cal.com integration
  - Access at `/chatbot`

- **Case Studies**: Showcase of completed projects
- **Services**: Detailed service offerings
- **Contact**: Contact form and information

## AI Chatbot Setup

1. Get a free Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Add it to your `.env.local` file as `GEMINI_API_KEY`
3. (Optional) Set up Cal.com and add your username as `NEXT_PUBLIC_CAL_USERNAME`
4. Visit `/chatbot` to use the AI assistant

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Don't forget to add your environment variables in Vercel's dashboard:
- `GEMINI_API_KEY`
- `NEXT_PUBLIC_CAL_USERNAME` (optional)

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
