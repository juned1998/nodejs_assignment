const app = require("./app");

// Starting Server
const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
    console.log("Listening...");
});
