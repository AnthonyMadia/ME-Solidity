var METoken = artifacts.require("METoken");
var Faucet = artifacts.require("Faucet");


module.exports = function (deployer) {
  // Deploy the METoken contract as our only task
  deployer.deploy(METoken);
  deployer.deploy(Faucet);
};
