This is a [Next.js](https://nextjs.org/) project with using Firebase as a hosting service.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
## Deploy on Firebase
- Install `firebase-tools` to the global
- Log in to firebase with `firebase login`
- Set up your project to use
- Select the project wtih `firebase use`
- Build the production mode app with `yarn build or npm run build`

### Hosting only
- Export the static HTML Site with `yarn export or npm run export`
- Excute deploy command `firebase deploy --only:hosting`

### With Functions
- Excute deploy command `firebase deploy --only:nextServer,hosting`
