const app = require('./app');
const configVariables = require('./config/config');

const httpConnect = () => {
        console.log('APP LISTENING WELL AT CODE ' + configVariables.PORT);
    }

app.listen(configVariables.PORT, httpConnect());