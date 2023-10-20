// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./AbstractedWallet.sol";
import "./interfaces/IAbstractedWallet.sol";

contract AbstractedWalletFactory {
    event WalletCreated(address indexed owner, address indexed wallet);

    bytes32 private constant INIT_CODE_HASH =
        keccak256(type(AbstractedWallet).creationCode);

    mapping(address => address) private _wallets;

    address public payer;

    constructor(address _payer) {
        payer = _payer;
    }

    function createWallet(address owner) external returns (address wallet) {
        require(
            _wallets[owner] == address(0),
            "Wallet already created for the owner"
        );

        bytes32 salt = keccak256(abi.encode(owner));
        bytes memory bytecode = type(AbstractedWallet).creationCode;
        assembly {
            wallet := create2(0, add(bytecode, 0x20), mload(bytecode), salt)
        }

        IAbstractedWallet(wallet).initialize(owner, payer);

        _wallets[owner] = wallet;
        emit WalletCreated(owner, wallet);
    }

    function getWallet(address owner) external view returns (address) {
        return _wallets[owner];
    }
}
