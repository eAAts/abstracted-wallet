// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

interface IBridgeMookup {
    function sendTokens(
        address tokenAddress,
        address recipient,
        uint256 amount,
        uint256 targetChainId
    ) external payable;
}
