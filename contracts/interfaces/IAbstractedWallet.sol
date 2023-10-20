// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

interface IAbstractedWallet {
    function initialize(address _owner, address _router) external;
}
