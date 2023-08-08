## Description

[Ramsley](https://github.com/prince-curie/ramsley) test demo.

## Installation

### Prerequisite

- Ensure you have node.js and postgres SQL running on your system

### Main
- Create a `.env` file 
- Copy over the data from the `.env.example` file
- Update the values to the keys in the `.env` file
- Install dependencies
```bash
$ npm install
```
- Run migration and seeds
```bash
$ npm run migration:dev
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Documentation
Documentation can be found [here](http://127.0.0.1:3000/doc). Note that documentation runs locally wherever the API is hosted.

## Notes
For the purpose of testing the app, credentials has been set
### Credentials
```json
  "username": "last_born_001"
  "password": "P@5sword"
```
