# Make First BackEnd Code / App

## Create In Locale

### $Steps$

1.  `npm init` in terminal
    -   initialise package from node pakaged manager
    -   input some data then make a **package.json** file
2.  make `index.js` (or your entry point)
    -   that run with **node index.js**
3.  Run index.js with Backend
    -   goto **package.json -> "scripts"** and add item `"start" : "node index.js"`
    -   to **Start the server**
4.  install Express Package
    -   `npm install express`
    -   after that a `node_modules` folder added in project
5.  **sample code of Express**
    ```js
    const express = require('express')
    const app = express()
    const port = 3000

    app.get('/', (req, res) => {
    res.send('Hello World!')
    })

    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })
    ```
6. start server `npm run start`
    - then click this ->[**`http://localhost:3000/`**](http://localhost:3000/)
    - stop and run the server after every update
7. install `dotenv`
    - run `npm i dotenv`