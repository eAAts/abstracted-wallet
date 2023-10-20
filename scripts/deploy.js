const {
  ethers
} = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  
  const AbstractedWalletFactory = await ethers.getContractFactory("AbstractedWalletFactory");
  const factory = await AbstractedWalletFactory.deploy(deployer.address);
  
  console.log("AbstractedWalletFactory address:", factory.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
// Deploying contracts with the account: 0xcA1e82cf1174c4765A1CfF04Eb30925adF4a50A3
// AbstractedWalletFactory address: 0x2c1278b0d02d586310468652c70589e407055e0A