const { expect } = require("chai");

describe("Register contract", function() {
  it("Deployment should no have info", async function() {
    const [owner] = await ethers.getSigners();

    const Register = await ethers.getContractFactory("Register");

    const register = await Register.deploy();

    await register.setInfo("Sol");
    await register.setInfo("Lua");
    const info = await register.getInfo();
    expect(info).to.equal("Lua");
  });
  
});