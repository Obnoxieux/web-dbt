## web-dbt
by [this guy aka me](https://github.com/Obnoxieux)

## Project description
This repository contains my personal website, built with some amazing tools I always wanted to try out.

I doubt there is much value to be gained for anyone here, but feel free to get inspired anyway.

## Who this project is for
This project is intended for myself as a coding practice and to have a nice looking website free from BS.

## Project dependencies

* a reasonably fast computer for development
* basic familiarity with TypeScript/JavaScript/Svelte
* a GitHub OAuth access token for API requests to increase rate limit
* an SMTP mail server to send contact form data

## Instructions for using web-dbt

### Install
1. Clone the repository locally
2. ```npm install```

### Configure
1. Copy `env.dist` to `.env` and fill out values
2. (optional) adjust Tailwind and DaisyUI theme settings to your liking (in`tailwind.config.js`)

### Run

```bash
npm run dev
```

### Build

To create a production version:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) 
> for your target environment.

## Contributing guidelines
With this being a personal website, I doubt anyone would bother writing pull requests.


## Terms of use
This code is licensed under the GPL v3.