var test = require('tape');
var nconf = require('nconf');
var request = require('request');

// nconf is a handy key-value store for node.js configurations.
// https://www.npmjs.com/package/nconf 
//
// These are default settings for a local, single-machine installation of AsterixDB.
nconf.defaults({
    'database': {
        'web': 'http://127.0.0.1:19001',
        'rest' : 'http://127.0.0.1:19002'
    }
});

test('test connection to local single-machine AsterixDB instance', function(t) {   
    var asterixdb_host = nconf.get('database').web;
    
    request
        .get(asterixdb_host)
        .on('error', function(err) {
            t.fail('Error: could not connect to AsterixDB instance at ' + asterixdb_host);
            t.end();
        })
        .on('response', function(res) {
            t.equal(res.statusCode, 200, 'successfully reached AsterixDB at ' + asterixdb_host);
            t.end(); 
        });
});
