const {
    ethers
} = require("hardhat");

async function main() {
    const factory = await ethers.getContractAt("AbstractedWalletFactory", "0x2c1278b0d02d586310468652c70589e407055e0A");
    const wallet = await factory.getWallet("0xa40aa030A3ba4f42FDCd2B7bC33d5B03770290ea");
    console.log("wallet:", wallet);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });