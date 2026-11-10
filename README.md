# Previdenziami

Baseline for a web application that compares pension funds and provides AI-assisted strategic analysis tailored to an individual's employment situation.

## Intended capabilities

- Capture employment status, income, contribution history, retirement horizon, and personal goals.
- Compare pension funds by fees, investment options, risk, historical performance, and contribution rules.
- Model contribution and retirement scenarios with explicit assumptions.
- Explain personalized strategies using traceable data and clearly stated uncertainty.

## Project structure

- `app/` — future web application source.
- `data/` — sample fund datasets and data source definitions.
- `docs/` — product scope and implementation decisions.
- `prototype/` — use-case prototype workspace, requirements, and iteration backlog.

## Current status

A working Italian pension comparison prototype is available in [`prototype/`](prototype/README.md). It includes researched Cometa and Allianz Insieme data, deterministic projections, three break-even analyses, and automated financial/browser checks. The future application folders remain available for generalization after prototype feedback.

See [the product baseline](docs/product-baseline.md) for the initial scope and decisions to resolve before implementation.

## Run locally (Windows, macOS or Linux)

Install [Node.js 24 LTS](https://nodejs.org/) with npm. Git is optional if you download a ZIP.

Clone the private repository using your GitHub account:

```sh
git clone https://github.com/iacopocascia/Previdenziami.git
cd Previdenziami/prototype
npm ci
npm run dev -- --host 127.0.0.1
```

Alternatively, use **Code → Download ZIP** on GitHub, extract it, open a terminal in the extracted project's `prototype` folder, and run the last two commands.

Open **http://localhost:5173** in your browser, or the address Vite prints if that port is busy. Keep the terminal running; press **Ctrl+C** to stop the server. No API keys, environment variables, database or accounts are required to run the prototype.

### Build and serve the production version

From the `prototype` folder:

```sh
npm run build
npx vite preview --host 127.0.0.1
```

Open **http://localhost:4173**, or the address printed by Vite. The compiled static files are in `prototype/dist/`. Serve them through HTTP; opening `dist/index.html` directly is not supported. Vite preview is for local verification.

### Verify calculations

From the `prototype` folder:

```sh
npm test
```

The optional browser suite has additional Chromium requirements specific to the cloud environment; see [prototype instructions](prototype/README.md#run-and-verify). It is not required to run or build the app.
