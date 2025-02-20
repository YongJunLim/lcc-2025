# LCC 2025

## About
The Learning Celebration Carnival (LCC) is an annual event in SUTD with a long history, organised by ROOT in collaboration with the Office of Education, for SUTDents.
This was the event website created for 2025 to display the countdown and event information as well as host an API for a lucky draw game made specially for the event.

## Technical Details
This is based on a version deployed on [https://lcc.sutd.edu.sg](https://lcc.sutd.edu.sg), with improvements such as:
- `MDsveX` for rendering page content
- `Drizzle` for connecting to a Postgres database hosted on Supabase

### Frontend
Developed with SvelteKit (Svelte 5) and Tailwind CSS.

### Backend
Developed with Sveltekit, Drizle, Supabase and Microsoft Power Automate

#### How it works
1. Participants vote for their favourite poster via a Microsoft Form.
2. After submitting the form, their student ID and a randomly generated passcode is stored in a database hosted on Supabase.
3. They will be emailed the passcode and told to login into the lucky draw game with that passcode as well as their student ID.
4. After completing the game, their lucky draw chances will be added based on their final score as well as if they were the first 50 participants who registered early.


## Developing

Once you've created a project and installed dependencies with `bun install`, start a development server:

```bash
bun run dev

# or start the server and open the app in a new browser tab
bun run dev -- --open
```

## Building

To create a production version of your app:

```bash
bun run build
```

You can preview the production build with `bun run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
