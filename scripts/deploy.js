const {
  ethers
} = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const AbstractedWalletFactory = await ethers.getContractFactory("AbstractedWalletFactory");
  const factory = await AbstractedWalletFactory.deploy(
    deployer.address,
    "0xa61164Ba924dDAa711DC8e9A121CfB8FdF680Aef",
    "0xa40aa030A3ba4f42FDCd2B7bC33d5B03770290ea"
  );

  console.log("AbstractedWalletFactory address:", factory.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
// Deploying contracts with the account: 0xcA1e82cf1174c4765A1CfF04Eb30925adF4a50A3
// AbstractedWalletFactory address: 0xfdf3446d470d4fc21aBD7443d7b52D4c2c8ED3d4