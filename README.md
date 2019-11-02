auroracoin Node
============

[![NPM Package](https://img.shields.io/npm/v/auroracoin-node.svg?style=flat-square)](https://www.npmjs.org/package/auroracoin-node)
[![Build Status](https://img.shields.io/travis/auroracoin-project/auroracoin-node.svg?branch=master&style=flat-square)](https://travis-ci.org/auroracoin-project/auroracoin-node)
[![Coverage Status](https://img.shields.io/coveralls/auroracoin-project/auroracoin-node.svg?style=flat-square)](https://coveralls.io/r/auroracoin-project/auroracoin-node)

A Auroracoin full node for building applications and services with Node.js. A node is extensible and can be configured to run additional services. At the minimum a node has an interface to [Auroracoin Core with additional indexing](https://github.com/auroracoin/auroracoin) for more advanced address queries. Additional services can be enabled to make a node more useful such as exposing new APIs, running a block explorer and wallet service.

## Install

```bash
npm install -g auroracoin-node
auroracoin-node start
```

Note: For your convenience, we distribute auroracoind binaries for x86_64 Linux and x86_64 Mac OS X. Upon npm install, the binaries for your platform will be downloaded. For more detailed installation instructions, or if you want to compile the project yourself, then please see the Bitcore branch of [Auroracoin Core](https://github.com/auroracoin/auroracoin).

## Prerequisites

- GNU/Linux x86_32/x86_64, or OSX 64bit *(for auroracoind distributed binaries)*
- Node.js v0.10, v0.12 or v4
- ZeroMQ *(libzmq3-dev for Ubuntu/Debian or zeromq on OSX)*
- ~200GB of disk storage
- ~8GB of RAM

## Configuration

auroracoin includes a Command Line Interface (CLI) for managing, configuring and interfacing with your auroracoin Node.

```bash
auroracoin-node create -d <auroracoin-data-dir> mynode
cd mynode
auroracoin-node install <service>
auroracoin-node install https://github.com/yourname/helloworld
```

This will create a directory with configuration files for your node and install the necessary dependencies. For more information about (and developing) services, please see the [Service Documentation](docs/services.md).

## Add-on Services

There are several add-on services available to extend the functionality of Bitcore:

- [Insight API](https://github.com/auroracoin/insight-auroracoin-api)
- [Insight UI](https://github.com/auroracoin/insight-auroracoin-ui)
- [Bitcore Wallet Service](https://github.com/auroracoin/bitcore-wallet-service)

## Documentation

- [Upgrade Notes](docs/upgrade.md)
- [Services](docs/services.md)
  - [auroracoind](docs/services/auroracoind.md) - Interface to Auroracoin Core
  - [Web](docs/services/web.md) - Creates an express application over which services can expose their web/API content
- [Development Environment](docs/development.md) - Guide for setting up a development environment
- [Node](docs/node.md) - Details on the node constructor
- [Bus](docs/bus.md) - Overview of the event bus constructor
- [Release Process](docs/release.md) - Information about verifying a release and the release process.

## Contributing

Please send pull requests for bug fixes, code optimization, and ideas for improvement. For more information on how to contribute, please refer to our [CONTRIBUTING](https://github.com/auroracoin/auroracoin/blob/master/CONTRIBUTING.md) file.

## License

Code released under [the MIT license](https://github.com/auroracoin/auroracoin-node/blob/master/LICENSE).

Copyright 2016 The Auroracoin Core Developers

- bitcore: Copyright (c) 2013-2015 BitPay, Inc. (MIT License)
- auroracoin: Copyright (c) 2009-2015 Auroracoin Core Developers (MIT License)
- auroracoin: Copyright (C) 2017 Auroracoin Core Developers
