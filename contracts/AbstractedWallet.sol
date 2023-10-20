// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract AbstractedWallet {
    address public owner;
    address public payer;
    address public factory;

    bool public init;

    receive() external payable {}

    constructor() {
        factory = msg.sender;
    }

    function initialize(address _owner, address _payer) external {
        require(
            msg.sender == factory,
            "Only Factory can call this function."
        );
        require(!init, "Contract is already initialized.");
        owner = _owner;
        payer = _payer;

        init = true;
    }

    function execute(
        address targetAddress,
        uint256 value,
        bytes memory messageBody
    ) external onlyPayer {
        (bool success, ) = address(targetAddress).call{value: value}(
            messageBody
        );
        require(success, "Execution failed");
    }

    modifier onlyPayer() {
        require(msg.sender == payer, "Only the payer can call this");
        _;
    }
}
