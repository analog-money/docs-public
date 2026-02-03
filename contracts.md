# Working with Contracts

This guide explains how to compile, test, and work with the Analog Money smart contracts.

## Prerequisites

- **Foundry**: You need to have Foundry installed. See the [Foundry Book](https://book.getfoundry.sh/getting-started/installation) for installation instructions.

## Setup

1.  Clone the repository (if you haven't already).
2.  Navigate to the contracts directory:
    ```bash
    cd apps/contracts2
    ```
3.  Install dependencies:
    ```bash
    forge install
    ```

## Compilation

To compile the smart contracts:

```bash
forge build
```

## Testing

To run the test suite:

```bash
forge test
```

## Deployment

To deploy contracts to a local node or testnet, refer to the Foundry documentation on [Solidity Scripting](https://book.getfoundry.sh/tutorials/solidity-scripting).
