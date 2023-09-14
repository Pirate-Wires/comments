# pirate wires comments

## Local Development

`pnpm install`

`pnpm dev`



This repo, 'main' branch, is compatible with older versions of Next.js only. 

For the latest version (13+) of Next.js, see the 'next-13' branch:
https://github.com/Pirate-Wires/comments/tree/next-13

Both branches are deployed to Vercel. 

Both branches are connected to the Pirate Wires Supabase project.

Environment variables to be stored in .env.local and can be found in both Vercel and Doppler:

- https://vercel.com/pirate-wires
- https://dashboard.doppler.com/

Contact [@whaleen](https://github.com/whaleen) for access to Vercel and Doppler.

## Usage

The next-13 branch should be made compatible for integration with the pirate-wires project as this comments repo will not be used in isolation as part of the live website. 

## Features

UI/UX
- [ ] Truncation - After a certain nesting level, truncate the comment thread and show a "See more comments" link that expands to show more. Prevent the UI from getting too cramped.
- [x] Indentation - Indent nested comments visually to show the hierarchy. Reduce indentation spacing for deeper nesting levels to save space.
- [ ] Collapsing - Allow users to collapse comment sub-threads to hide them. This cleans up the UI.
- [ ] Breadcrumbs - Show a breadcrumb trail of parent comments above a deeply nested comment, allowing users to quickly navigate up the hierarchy.
- [ ] Hybrid threaded/flat - After a certain nesting level, show comments in a flat, chronological structure instead of indented. Reduces clutter.
- [ ] Limit nesting - Only allow comments to be nested up to a certain level, after which new replies appear flat chronologically. Prevents infinite nesting.
- [ ] Top-level pop outs - When clicking a deeply nested comment, pop it out to the top level temporarily to make it more readable.
- [x] Pagination - Use pagination for comment threads that exceed a certain number of comments. Prevents huge walls of text.


Functionality
- [ ] Edit / Delete comment
- [ ] Markdown limited support (*italics*, **bold**)
- [ ] @ users in comments. Defaults to suggested list of users already in the thread. Supports system-wide users.
