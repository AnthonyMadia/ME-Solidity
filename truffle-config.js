module.exports = {
  networks: {
    develop: {
      port: 5777,
      network_id: 20,
      accounts: 5,
      defaultEtherBalance: 500,
      blockTime: 3,
    },
    development: {
      host: "localhost",
      port: 8545,
      network_id: "9545", // Match any network id
      gas: 5000000,
    },
    ganache: {
      // Ganache local test RPC blockchain
      network_id: "5777",
      host: "localhost",
      port: 8545,
      gas: 6721975,
    },
  },
  compilers: {
    solc: {
      version: "^0.6.4",
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200, // Default: 200
        },
      },
    },
  },
};
