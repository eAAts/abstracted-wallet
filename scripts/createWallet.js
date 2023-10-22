const {
    ethers
} = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const factory = await ethers.getContractAt("AbstractedWalletFactory", "0xfdf3446d470d4fc21aBD7443d7b52D4c2c8ED3d4");
    tx = await factory.createWallet("0xa40aa030A3ba4f42FDCd2B7bC33d5B03770290ea");
    await tx.wait();
    console.log("tx hash:", tx.hash);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });