// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./interfaces/IBridgeMookup.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract AbstractedWallet {
    address public owner;
    address public payer;
    address public bridge;
    address public eAAts;
    address public factory;

    bool public init;

    receive() external payable {}

    constructor() {
        factory = msg.sender;
    }

    function initialize(
        address _owner,
        address _payer,
        address _bridge,
        address _eAAts
    ) external {
        require(msg.sender == factory, "Only Factory can call this function.");
        require(!init, "Contract is already initialized.");
        owner = _owner;
        payer = _payer;
        bridge = _bridge;
        eAAts = _eAAts;

        init = true;
    }

    function pay(
        address tokenAddress,
        uint256 amount,
        uint256 targetChainId
    ) external onlyPayer {
        IERC20(tokenAddress).approve(bridge, type(uint256).max);

        IBridgeMookup(bridge).sendTokens(
            tokenAddress,
            eAAts,
            amount,
            targetChainId
        );
    }

    modifier onlyPayer() {
        require(msg.sender == payer, "Only the payer can call this");
        _;
    }
}
