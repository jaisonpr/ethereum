const fs = require('fs');
const HDWalletProvider = require('@truffle/hdwallet-provider');

const mnemonic = fs.readFileSync(".secret").toString().trim();
 if (!mnemonic || mnemonic.split(' ').length !== 12) {
  console.log('unable to retrieve mnemonic from .secret');
}

module.exports = {
  networks: {
    develop: {
      port: 8545
    },
    goerli: {
      provider: () => new HDWalletProvider(mnemonic, 'https://rpc.goerli.mudit.blog/', 0, 10),
      network_id: 5,
      networkCheckTimeout: 1e9
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {  },
  
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.2",
    }
  }
}