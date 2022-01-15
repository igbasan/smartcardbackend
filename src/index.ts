import app from './app';

const port = process.env.PORT || 8100;

app.listen(port, () => console.log(`server running on port ${port}`))