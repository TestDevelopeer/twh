const axios = require('axios');
const api = require('../config/api');

const instance = axios.create({
    baseURL: api.SERVER_URI,
    withCredentials: true,
    headers: {
        "User-Agent": "Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion"
    }
});

const setLastActivity = (licKey, isLaunch, version = '', callback = function(){}) => {
	instance.post(`/user/setlastactivity/`, {
		licKey,
		type: 'whusers',
		isLaunch,
		version
	}).then(function (res) {
		callback();
	}).catch(function (err) {
		
	});
};

module.exports = setLastActivity;