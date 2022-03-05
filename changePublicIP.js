const fetch = require('node-fetch');

const main = async() => {
    // 1. Get public ip
    const response = await fetch('https://api.ipify.org?format=json')
    const json = await response.json()

    const publicIp = json.ip
    console.log('--publicIp ', publicIp)
    
    // 2. Change host in OVH
    const ovh = require('ovh')({
        appKey: "xx",
        appSecret: "xx",
        consumerKey: "xx"
    });
      
    ovh.request('GET', '/me', function (err, me) {
        console.log(err || 'Welcome ' + me.firstname);
    });

    const zoneName = ".ovh"
    const id =  

    const record = {
        subDomain: '4qk29op-g',
        target: publicIp,
        ttl: 1,
    }
    
    ovh.request('GET', `/domain/zone/${zoneName}/record?subDomain=4qk29op-g`, function (err, result) {
        console.log(err || 'Result Zone ' + result);
    })

    ovh.request('PUT', `/domain/zone/${zoneName}/record/${id}`, JSON.stringify(record), function (err, result) {
        console.log(err || 'Result ' + result);
    });
    
}

main()
