const {BrowserWindow} = require('electron');

let mainWindow;

mainWindow = new BrowserWindow({
	width: 1280,
	height: 720,
	titleBarStyle: 'hidden',
	webPreferences: {
		nodeIntegration: true,
		contextIsolation: false
	},
	titleBarOverlay: {
		color: '#f8f9fa',
		symbolColor: '#E0040B'
	}, icon: __dirname + '/icon.ico'
});

module.exports = mainWindow;