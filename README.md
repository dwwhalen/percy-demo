# initially created with

```sh
npm init vue@latest
```

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Link describing the steps to add Percy to Cypress tests

https://docs.percy.io/docs/cypress  
 
### Running Percy tests locally

1. Set the PERCY_TOKEN environment variable

2. Run: 
    ```sh
    npm run test:e2e:percy
    ```

3. View results at https://percy.io/

