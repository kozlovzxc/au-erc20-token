import hre from "hardhat";

async function main() {
  const shitCoin = await hre.viem.deployContract("FastShitCoin");

  console.log(
    `Deployed to ${shitCoin.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
