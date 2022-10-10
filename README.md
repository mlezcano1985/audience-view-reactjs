# AudienceView ReactJS

Small e-commerce using as a data source the API <https://us-central1-techtaskapi.cloudfunctions.net/offers>. It's a basic example, that only fetches all offers and adds or removes items to the shopping cart.

## Features

- List all products from the API.
- Add products to the shopping cart.
- Remove products from the shopping cart.
- Clear the shopping cart.
- Show total amount.

## Start application on a local environment

### NodeJS

1. Install [NodeJS](https://nodejs.org/en/).
2. Clone de repository.
3. Open a terminal on the root of the repository and install it's depencencies:

   ```bash
   npm i
   ```

Run the app in development mode:

```bash
npm run dev
```

Or in production mode:

```bash
npm run build
```

```bash
npm start
```

After the app is running, open the link <http://localhost:3000>.

### Docker

1. Install [Docker](https://www.docker.com/).
2. Open a terminal on the root of the repository and run these commands:

   ```bash
   docker build --force-rm -t audience-view-reactjs .
   ```

   ```bash
   docker run --rm -it -p 3000:3000 audience-view-reactjs
   ```

After the app is running, open the link <http://localhost:3000>.

## Feedbacks

Some bug? Let me know here :point_right: [Twitter](https://twitter.com/mlezcano1985).
