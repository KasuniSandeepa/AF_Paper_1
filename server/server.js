const PORT = process.env.PORT || 8087;
const app = require('./app');

app.listen(PORT, () => {
    console.log(`Server is up and running on PORT ${PORT}`);
});




