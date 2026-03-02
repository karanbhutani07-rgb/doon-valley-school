fetch('https://maps.app.goo.gl/2JA3sBbdCCndmZWf7', {redirect: 'manual'}).then(r => console.log(r.headers.get('location')))
