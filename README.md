# Shopco

Web application for creating shopping lists and searching for delivery person.


## Running app

To run app you should go here:https://github.com/arekgofi/inzynierka-rest-api download backend part and follow steps to run it. 

Then make sure that file environment.ts is pointing to proper URL for backend:

```
export const environment = {
  production: false,
  api: 'http://localhost:8082' <--- your URL to backend server
};
```
When you are running your app for the first time make sure you installed dependencies via running command:
```
npm install
```

Run `npm start` for a dev server. Navigate to `http://localhost:4204/`. The app will automatically reload if you change any of the source files.
