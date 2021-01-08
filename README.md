# Utah IRI Dashboard

[![Actions Status](https://github.com/mimanim/utah-iri-dashboard/workflows/build-test/badge.svg)](https://github.com/mimanim/utah-iri-dashboard/actions)

A dashboard for visualizing the results of UDOT's 2018 [International Roughness Index](https://en.wikipedia.org/wiki/International_roughness_index) road segment survey.

**Source:** [UDOT, Deighton Total Infrastructure Management System](https://digitaldelivery.udot.utah.gov/datasets/9a7f3dfbda7f4921a71154eae6bac867_0?orderBy=Field14&orderByAsc=false)

- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Scripts](#scripts)
- [Todo](#todo)

## Prerequisites

- [Node.js 12](https://nodejs.org/en/) (with latest compatible version of [npm](https://docs.npmjs.com/cli/))
- [Visual Studio Code](https://code.visualstudio.com/)

## Setup

```sh
git clone git@github.com:mimanim/utah-iri-dashboard.git
```

```sh
cd utah-iri-dashboard
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
