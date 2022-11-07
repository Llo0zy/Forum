//-----------EXPRESS--------------//
const express = require('express');
const app = express();
//-----------EXPRESS--------------//

//-----------OTHERS--------------//
const chalk = require('chalk');
const cors = require('cors');
const yaml = require('js-yaml');
const { existsSync, readFileSync, watchFile, writeFileSync } = require('fs');
const logger = require('./utils/logger.js');
const detectPort = require('detect-port');
//-----------OTHERS--------------//

//-----------CONFIG--------------//
const config = yaml.load(readFileSync('./config.yml'));
//-----------CONFIG--------------//

//api config
app.set('json spaces', 2);

//middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors({
    origin: '*'
}));

//routes
//app.use('/api/account/', require('./routes/account.js'));

console.log(chalk.magenta(`
________  ______   _______   __    __  __       __ 
/        |/      \\ /       \\/  |  /  |/  \\     /  |
$$$$$$$$//$$$$$$  |$$$$$$$  |$$ |  $$ |$$  \\   /$$ |
$$ |__   $$ |  $$ |$$ |__$$ |$$ |  $$ |$$$  \\ /$$$ |
$$    |  $$ |  $$ |$$    $$ \\ $$ |  $$ |$$$$  /$$$$ |
$$$$$/   $$ |  $$ |$$$$$$$  |$$ |  $$ |$$ $$ $$/$$ |
$$ |     $$ \\__$$ |$$ |  $$ |$$ \\__$$ |$$ |$$$/ $$ |
$$ |     $$    $$/ $$ |  $$ |$$    $$/ $$ | $/  $$ |
$$/       $$$$$$/  $$/   $$/  $$$$$$/  $$/      $$/ 
           ${chalk.italic.gray(`v0.0.1 - by Yoshi, Sergi, Gino & DaniGP17`)}
`));

//Start api server
app.listen(config.ports.api_primary, () => {
    logger.info(`API listening on port: ${config.ports.api_primary}`);
});

