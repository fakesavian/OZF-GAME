# OZF: The Lawless Lands

OZF is an RPG prototype featuring browser-based, turn-based combat. The project is split into two parts:

- **Front-end** – A React + TypeScript client located at the project root.
- **Back-end** – An Express and WebSocket server inside the `backend/` folder.

## Requirements

- Node.js 18 or later
- npm

## Front-end Setup

```bash
# install dependencies
npm install

# start the development server
npm start
```

Build a production bundle with:

```bash
npm run build
```

Run the front-end unit tests using [Vitest](https://vitest.dev/):

```bash
npm test
```

Available root scripts can be listed with `npm run`, but the main ones are:

- `npm start` – start the React dev server
- `npm run build` – create a production build
- `npm test` / `npm run test:frontend` – run Vitest
- `npm run eject` – eject Create React App (not reversible)

## Back-end Setup

```bash
cd backend

# install dependencies
npm install

# start the TypeScript server in watch mode
npm run dev
```

You can also build and run the compiled server:

```bash
npm run build
npm start
```

To try the command line simulator, run:

```bash
npm run start:cli
```

Current back-end scripts are:

- `npm run dev` – run the server with nodemon
- `npm start` – run `ts-node` directly
- `npm run build` – compile TypeScript to `dist`
- `npm test` – (placeholder)
- `npm run start:cli` – start a CLI match simulator

## Running Tests

All tests across the project are executed with Vitest. Run them from the project root:

```bash
npm test
```

Vitest will watch for changes and report results for both the front-end and back-end test files.

