'use strict';

var path = require('path');
var should = require('chai').should();
var sinon = require('sinon');
var proxyquire = require('proxyquire');

describe('#defaultConfig', function() {
  var expectedExecPath = path.resolve(__dirname, '../../bin/auroracoind');

  it('will return expected configuration', function() {
    var config = JSON.stringify({
      network: 'livenet',
      port: 3001,
      services: [
        'auroracoind',
        'web'
      ],
      servicesConfig: {
        auroracoind: {
          spawn: {
            datadir: process.env.HOME + '/.auroracoin/data',
            exec: expectedExecPath
          }
        }
      }
    }, null, 2);
    var defaultConfig = proxyquire('../../lib/scaffold/default-config', {
      fs: {
        existsSync: sinon.stub().returns(false),
        writeFileSync: function(path, data) {
          path.should.equal(process.env.HOME + '/.auroracoin/auroracoin-node.json');
          data.should.equal(config);
        },
        readFileSync: function() {
          return config;
        }
      },
      mkdirp: {
        sync: sinon.stub()
      }
    });
    var home = process.env.HOME;
    var info = defaultConfig();
    info.path.should.equal(home + '/.auroracoin');
    info.config.network.should.equal('livenet');
    info.config.port.should.equal(3001);
    info.config.services.should.deep.equal(['auroracoind', 'web']);
    var auroracoind = info.config.servicesConfig.auroracoind;
    should.exist(auroracoind);
    auroracoind.spawn.datadir.should.equal(home + '/.auroracoin/data');
    auroracoind.spawn.exec.should.equal(expectedExecPath);
  });
  it('will include additional services', function() {
    var config = JSON.stringify({
      network: 'livenet',
      port: 3001,
      services: [
        'auroracoind',
        'web',
        'insight-api',
        'insight-ui'
      ],
      servicesConfig: {
        auroracoind: {
          spawn: {
            datadir: process.env.HOME + '/.auroracoin/data',
            exec: expectedExecPath
          }
        }
      }
    }, null, 2);
    var defaultConfig = proxyquire('../../lib/scaffold/default-config', {
      fs: {
        existsSync: sinon.stub().returns(false),
        writeFileSync: function(path, data) {
          path.should.equal(process.env.HOME + '/.auroracoin/auroracoin-node.json');
          data.should.equal(config);
        },
        readFileSync: function() {
          return config;
        }
      },
      mkdirp: {
        sync: sinon.stub()
      }
    });
    var home = process.env.HOME;
    var info = defaultConfig({
      additionalServices: ['insight-api', 'insight-ui']
    });
    info.path.should.equal(home + '/.auroracoin');
    info.config.network.should.equal('livenet');
    info.config.port.should.equal(3001);
    info.config.services.should.deep.equal([
      'auroracoind',
      'web',
      'insight-api',
      'insight-ui'
    ]);
    var auroracoind = info.config.servicesConfig.auroracoind;
    should.exist(auroracoind);
    auroracoind.spawn.datadir.should.equal(home + '/.auroracoin/data');
    auroracoind.spawn.exec.should.equal(expectedExecPath);
  });
});
