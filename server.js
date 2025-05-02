import express from 'express';
const app = express();
app.use(express.json());
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); 
});
app.get('/', (req, res) => {
    console.log("hello world");
    res.send("hello world");
});
app.post('/', (req, res) => {
    const data = req.body;
    console.log('Received data:', data);

    res.json({
        message: 'Data received successfully!',
        yourData: data
    });
});
app.listen(3000, () => {
    console.log(`Server running at http://localhost:${3000}`);
});
