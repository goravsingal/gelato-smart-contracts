// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MockERC20 is ERC20, Ownable {
    address public bridgeOperator;

    event TokensBurned(address indexed user, uint256 amount);
    event TokensMinted(address indexed user, uint256 amount);

    constructor() ERC20("MockToken", "MTK") Ownable(msg.sender) {}

    function setBridgeOperator(address _operator) external onlyOwner {
        bridgeOperator = _operator;
    }

    function mint(address to, uint256 amount) external {
        // require(msg.sender == bridgeOperator, "Only bridge operator can mint");
        _mint(to, amount);
        emit TokensMinted(to, amount);
    }

    function burnFrom(address user, uint256 amount) external {
        // require(msg.sender == bridgeOperator, "Only bridge operator can burn for users");
        _burn(user, amount);
        emit TokensBurned(user, amount);
    }
}
