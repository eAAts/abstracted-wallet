const {
    ethers
} = require("hardhat");

async function main() {
    // const [deployer] = await ethers.getSigners();
    const deployer = await ethers.getImpersonatedSigner("0xcA1e82cf1174c4765A1CfF04Eb30925adF4a50A3");
    console.log("Deploying contracts with the account:", deployer.address);

    const wallet = await ethers.getContractAt("AbstractedWallet", "0x251c5d3ebd1A25B4F8ea318266c72F64dd4d6301");
    const bridge = await ethers.getContractAt("IBridgeMookup", "0xa61164Ba924dDAa711DC8e9A121CfB8FdF680Aef");
    tx = await bridge.connect(deployer).sendTokens(
        "0xbe1c5D13Fab6bF8bf7cD1868EB064d17855944c0",
        deployer.address,
        "1" + "0".repeat(6),
        1
    );
    await tx.wait();
    console.log("tx hash:", tx.hash);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });