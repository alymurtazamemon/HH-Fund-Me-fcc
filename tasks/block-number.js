const {task} = require("hardhat/config")

task("block-number", "Prints the current block nunber").setAction(

    async (taskArgs, hre) => { //Anonymous function in JS
        const blockNumber = await hre.ethers.provider.getBlockNumber()
        console.log(`Current Block Number is : ${blockNumber}`)
    }
)