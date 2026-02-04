# Running the Frontend

This guide explains how to run the Analog Money self-hosted frontend locally.

## Prerequisites

- **Node.js**: Version 20 or higher is recommended.
- **Package Manager**: pnpm is recommended.

## Setup

1.  Clone the repository.
2.  Navigate to the `apps/self-hosted` directory (or root if running from monorepo):
    ```bash
    cd apps/self-hosted
    ```
3.  Install dependencies:
    ```bash
    pnpm install
    ```

## Configuration

Copy the example environment file (if available) or ensure the following environment variables are set:

- `NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID`: Your WalletConnect Project ID (required for RainbowKit).
- `NEXT_PUBLIC_ALCHEMY_ID`: Your Alchemy API key (optional, for RPC providers).

## Running Locally

To start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Building for Production

To create a production build:

```bash
pnpm build
```

To start the production server:

```bash
pnpm start
```
