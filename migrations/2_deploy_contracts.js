var ETHERCToken = artifacts.require("./ETHERCToken.sol");
var ETHERCFeeModifiers = artifacts.require("./ETHERCFeeModifiers.sol");
var ETHERCExchange = artifacts.require("./ETHERCExchange.sol");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(ETHERCToken);
  deployer.deploy(ETHERCFeeModifiers);
  deployer.deploy(ETHERCExchange);
};
