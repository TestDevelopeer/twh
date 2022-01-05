const configApi = {
    dev: {
        SERVER_URI: 'http://127.0.0.1'
    },
    prod: {
        SERVER_URI: 'http://testdeveloper.ru/tarkovappsapi'
    }
};
if (process.env.NODE_ENV === 'dev') {module.exports = configApi['dev']}
else {module.exports = configApi['prod'];}