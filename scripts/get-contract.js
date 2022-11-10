const { ethers } = require("hardhat")

async function mintAndList() {
    const nftMarketplace = await ethers.getContract("NftMarketplace")
    const basicNft = await ethers.getContract("BasicNft")

    console.log(`NftMarketplace address: ${nftMarketplace.address}`)
    console.log(`BasicNft address: ${basicNft.address}`)
}

mintAndList()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        console.exit(1)
    })
