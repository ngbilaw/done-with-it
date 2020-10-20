# done-with-it

## Local Setup

1. Setup backend API local server. See https://github.com/ngbilaw/done-with-it-api.

2. In app/config/settings.js, change the backend API url into the URL of the 
   local server for the backend API.

```
1   import Constants from 'expo-constants';
2 
3   const settings = {
4     dev: {
5       apiUrl: 'http://<your_ip_address>:9000/api',
```

3. Install dev dependencies
 ```
$ npm install
```

4. Start dev server

```
$ npm start
```
