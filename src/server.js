const { app } = require(".");
const { connectDb } = require("./config/db");

const PORT=8484;
const server = app.listen(PORT, async () => {
    try {
        await connectDb();
        console.log("Ecommerce API listening on port ", PORT);
    } catch (error) {
        console.error("Failed to connect to the database:", error);
        process.exit(1); // Exit the process if database connection fails
    }
});

server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use`);
    } else {
        console.error('An error occurred:', error);
    }
});