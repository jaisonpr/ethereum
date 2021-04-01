const Adoption = artifacts.require('Adoption');

const assert = require('assert');

const BN = web3.utils.BN;

contract('Adoption', (accounts) => {

  it('user can adopt pet', async () => {
    const adoption = await Adoption.deployed();

    const adopterAccount = accounts[5];
    const expectedPetId = new BN(8);
    const adoptTxInfo = await adoption.adopt(
      expectedPetId,
      {
        from: adopterAccount,
      },
    );

    assert.equal(
      adoptTxInfo.receipt.status,
      true,
      'adoption transaction failed',
    );
  });

  it('remembers adopter account', async () => {
    adoption = await Adoption.deployed();
    
    //adoption = await Adoption.new();


    const adopterAccount = accounts[5];
    const expectedPetId = new BN(8);

    // const adoptTxInfo = await adoption.adopt(
    //   expectedPetId,
    //   {
    //     from: adopterAccount,
    //   },
    // );

    const returnedAccount = await adoption.adopters(
      expectedPetId,
    );

    assert.equal(
      returnedAccount,
      adopterAccount,
      'returned adopter account mismatch',
    );
  });

});