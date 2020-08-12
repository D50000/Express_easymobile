# Express EasyMobile
This is for the API forward base on the Express node framework.

## Set the entry point
```
const  express = require("express");
const  app = express();
app.get("/api", (req, res) => {
  res.send("Hello !");
});

app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
```

## Config the server environment prot
```
export PORT=8000  //Mac 
set PORT=8000     //Windows
```

## Useful Library
- **Express**:  
Back-end API framework
- **nodemon**:  
```npx nodemon FILENAME.js``` for watch the changes and run the sercice.
- **joi**:  
The request validation check package.


### Reference
Official Library:  
- https://www.npmjs.com/package/express

Request Document:  
- http://expressjs.com/en/4x/api.html#req