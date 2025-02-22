const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("AIContractFactory", function () {
  let AIContractFactory, aiContractFactory, owner, addr1;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();
    AIContractFactory = await ethers.getContractFactory("AIContractFactory");
    aiContractFactory = await AIContractFactory.deploy();
    await aiContractFactory.deployed();
  });

  it("Should deploy a new AIContract", async function () {
    const modelName = "AI Model 1";
    await expect(aiContractFactory.deployAIContract(modelName))
      .to.emit(aiContractFactory, "AIContractDeployed")
      .withArgs(owner.address, ethers.constants.AddressZero, modelName);
  });

  it("Should store deployed AI contracts per user", async function () {
    const modelName1 = "AI Model 1";
    const modelName2 = "AI Model 2";

    await aiContractFactory.deployAIContract(modelName1);
    await aiContractFactory.deployAIContract(modelName2);

    const contracts = await aiContractFactory.getUserContracts(owner.address);
    expect(contracts.length).to.equal(2);
  });

  it("Should allow different users to deploy their own AI contracts", async function () {
    await aiContractFactory.connect(addr1).deployAIContract("Addr1 AI Model");

    const ownerContracts = await aiContractFactory.getUserContracts(owner.address);
    const addr1Contracts = await aiContractFactory.getUserContracts(addr1.address);

    expect(ownerContracts.length).to.equal(0);
    expect(addr1Contracts.length).to.equal(1);
  });
});
