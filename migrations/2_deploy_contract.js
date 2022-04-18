const Wallet = artifacts.require("Migrations");

module.exports = function (deployer) {
    deployer.deploy(Wallet, [], 2);
};
