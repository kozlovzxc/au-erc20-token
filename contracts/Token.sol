// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;
import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract FastShitCoin is ERC20 {
    uint constant _initial_supply = 100 * (10**18);

    constructor() ERC20("FastShitCoin", "FSC") {
        _mint(msg.sender, _initial_supply);
    }
}
