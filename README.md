# Project Email Reviewers

This app takes a list of students who will submit a project and students who may submit one, along with email addresses, an email template with token placeholders, and a link to detailed project instructions. It randomly distributes peers to review across students and generates emails to send them.

## Use it online

[GitHub Pages](https://majchrzakt.github.io/Project-Email-Reviewers/)

## Prerequisites

- Node.js v18+
- npm v9+

## Run it locally

Clone the repo, then run these commands in the root directory.

```
npm install
npm run dev
```

## Deploy to your own GitHub Pages

1. Fork the repo
2. Update `base` in `vite.config.js` to `/your-repo-name/`
3. Run `npm run deploy`

## Tech stack

- React, Vite, Tailwind
