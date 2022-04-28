//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MKDUMToken is ERC20 {
    constructor() ERC20("Makedonium Coin", "MAKEDONIUM") {
        _mint(msg.sender, 100000 * (10 ** 18));
        console.log(msg.sender);
    }
}
