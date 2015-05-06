var test = require('tape');
var nconf = require('nconf');
var request = require('request');

// For documentation on nconf, the tool used for configuration storage:
// https://www.npmjs.com/package/nconf 
//
// Default settings for a local, single-machine installation of AsterixDB.
nconf.defaults({
  'database': {
    'web': 'http://127.0.0.1:19001',
    'rest' : 'http://127.0.0.1:19002'
  }
});

test('test connect to local single-machine AsterixDB instance', function(t) { 
  var asterixdbHost = nconf.get('database').web;

  request
    .get(asterixdbHost)
    .on('error', function(err) {
      t.fail('Could not connect to AsterixDB instance at ' + asterixdbHost);
      t.end();
    })
    .on('response', function(res) {
      t.equal(res.statusCode, 200, 'reached AsterixDB at ' + asterixdbHost);
      t.end();
    });
});
