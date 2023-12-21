require('dotenv').config();
const MPPClient = require('mppclone-client'), MPPCLONE_TOKEN = process.env.MPPCLONE_TOKEN;
let cl = new MPPClient('wss://mppclone.com:8443', MPPCLONE_TOKEN);
cl.start(); cl.setChannel('✧𝓓𝓔𝓥 𝓡𝓸𝓸𝓶✧');
cl.on('hi', msg => { cl.sendArray([{ m: 'userset', set: { name: 'hug bot', color: '#9900ff' } }]); });

    let args = msg.a.split(' '), argcat = msg.a.substring(args[0].length).trim();
    if (msg.a.startsWith('!help')) {
     
        cl.sendArray([{m: 'a', message: `Commands: (none)`}]);
    }
});
