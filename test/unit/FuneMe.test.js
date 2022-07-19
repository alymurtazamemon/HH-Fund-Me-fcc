//const { inputToConfig } = require("@ethereum-waffle/compiler")
const { assert, expect } = require("chai")
const {deployments, ethers, getNamedAccounts} = require("hardhat")

describe("FundMe", function () {
    
    let fundMe
    
    beforeEach(async function () { // deploy FundMe contract using Hardhat-deploy => FundMe deployment will come along with our 00 and 01 deploy scripts in deploy folder.
        
        let fundMe
        let deployer    //July 19
        let mockV3Aggregator

        //const accounts = await ethers.getSigners()    // July 19
        //const accountZero = accounts[0]               //July 19

        deployer = (await getNamedAccounts()).deployer // line expl. in July 18, 2022 + updated July 19
        await deployments.fixture(["all"]) // eveyrthing gets executed in the deploy folder with this.
        fundMe = await ethers.getContract("FundMe", deployer) //export ethers from HH, HH-deploy wraps ethers with getContract function, as Patrick said it verbose.
        //getContract()returns the most recent deployed instance of the contract
        mockV3Aggregator = await ethers.getContract("MockV3Aggregator", deployer) //address where this gets deployed
    })
    
    describe("Constructor", function () {
        it("Should check that Aggregator addreses are set correctly", async function () {
            const response = await fundMe.priceFeed()
            assert.equal(response, mockV3Aggregator.address)
        })

    })
})