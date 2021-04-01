const fs = require('fs');
const path = require("path");
const HDWalletProvider = require('@truffle/hdwallet-provider');

const mnemonic = fs.readFileSync(".secret").toString().trim();
 if (!mnemonic || mnemonic.split(' ').length !== 12) {
  console.log('unable to retrieve mnemonic from .secret');
}


const ROPSTEN_PRIVATE_KEY = "6721c4f80f8376429513b05763d9beffe8003b976fff77592b02c67291e8b96d";
const INFURA_PROJECT_ID = "0d396f81074c4474bf6b064c0b6f0d6e";


module.exports = {
    
contracts_build_directory: path.join(__dirname, "app/src/contracts"),

  networks: {
    develop: {
      port: 8545
    },  
    ropsten: {
      provider: new HDWalletProvider(mnemonic, 'https://ropsten.infura.io/v3/' + INFURA_PROJECT_ID, 0),
      network_id: 3
    },
    goerli: {
      provider: () => new HDWalletProvider(mnemonic, 'https://rpc.goerli.mudit.blog/', 0, 10),
      network_id: 5,
      networkCheckTimeout: 1e9
    },
  },
  
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.7",
    }
  }
}