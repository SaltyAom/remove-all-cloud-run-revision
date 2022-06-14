# Remove All Cloud Run Revision
Since Cloud Run CLI only allows only 1 revision delete per command.

This scripts automate the process of deleting all the revision except the lastest (active) one.

## Prerequisted
- GCP CLI
- Node.js 16+

## Installation
Install dependencies
```bash
pnpm install
```

## Execute the script
```bash
pnpm start
```

The scripts will then ask for the service name to be deleted.

If you're not sure which service, you run to see active all services:
```bash
gcloud run services list
```