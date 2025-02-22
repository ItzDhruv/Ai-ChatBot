// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract AIContract {
    string public modelName;
    address public owner;

    constructor(string memory _modelName, address _owner) {
        modelName = _modelName;
        owner = _owner;
    }
}

contract AIContractFactory {
    AIContract[] public deployedContracts;
    mapping(address => AIContract[]) public userContracts;

    event AIContractDeployed(address indexed owner, address contractAddress, string modelName);

    function deployAIContract(string memory _modelName) public {
        AIContract newContract = new AIContract(_modelName, msg.sender);
        deployedContracts.push(newContract);
        userContracts[msg.sender].push(newContract);

        emit AIContractDeployed(msg.sender, address(newContract), _modelName);
    }

    function getUserContracts(address _owner) public view returns (AIContract[] memory) {
        return userContracts[_owner];
    }
}
