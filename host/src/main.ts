// import('./bootstrap')
// 	.catch(err => console.error(err));


import { loadRemoteEntry } from '@angular-architects/module-federation';

Promise.all([
    loadRemoteEntry('http://localhost:4300/remote1Entry.js', 'remote1'),
	loadRemoteEntry('http://localhost:4400/remote2Entry.js', 'remote2'),
	loadRemoteEntry('http://localhost:4500/remote3Entry.js', 'remote3'),
	loadRemoteEntry('http://localhost:4600/sideNav.js', 'sideNav'),
	loadRemoteEntry('http://localhost:4700/header.js', 'header'),
	
])
.catch(err => console.error('Error loading remote entries', err))
.then(() => import('./bootstrap'))
.catch(err => console.error(err));