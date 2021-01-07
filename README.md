# React starter

[![Actions Status](https://github.com/mimanim/react-starter/workflows/build-test/badge.svg)](https://github.com/mimanim/react-starter/actions)

A simple starter application for React.

- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Scripts](#scripts)
- [Todo](#todo)

## Prerequisites

- [Node.js 12](https://nodejs.org/en/) (with latest compatible version of [npm](https://docs.npmjs.com/cli/))
- [Visual Studio Code](https://code.visualstudio.com/)

## Setup

```sh
git clone git@github.com:mimanim/react-starter.git
```

```sh
cd react-starter
```

```sh
npm install
```

## Scripts

All scripts are located in [package.json](./package.json) and can be run using `npm run <command>`.

```sh
npm run start # Starts the local development server.
```

```sh
npm run build # Builds the production bundle of the app.
```

```sh
npm run lint # Runs the linter(s) on the source code.
```

```sh
npm run format # Runs the formatter(s) on the source code.
```

```sh
npm run clean # Combines "lint", "format", and "npm audit". Called by GitHub Actions on main branch.
```

## Todo

- Add unit testing support.
- Add browser targeting with polyfills.
- Add browser testing support.
- Add GraphQL backend support.
- Add auth support.
- Add multi-window support.
- Add UI framework.
