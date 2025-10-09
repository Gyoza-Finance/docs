---
sidebar_position: 1
---

# Technical Docs & Code

Technical documentation and code repository information for developers.

## Primary Core Repository

https://github.com/Gyoza-Finance/Gyoza

Contains the core contracts and libraries for the Gyoza Protocol. Also includes the front end and everything you need to run your own instance of the app.

The ReadMe also has more design and architecture information.

## Tech spec changes on Gyoza from Liquity V2

### Delegation
`ActivePool.sol` now has `delegateTokens` funtion. Any tokens can be delegated to the `delegate` role. The role can be update by governance. Anyone can call delegate function safely since it always delegates to the `delegate` role. 

Also remaps OZ in many places because of circular dependencies. 

### More collaterals and debt limits
`BorrowOperations` handles minting new stablecoins. Debt can be minted in `withdrawBold`, `_openTrove` (which is used in the batch manager and elsewhere too, so be careful), and `_moveTokensFromAdjustment`. Simple debt limit is just a uint256 stored in the `TroveManager` of each branch, and accessable to the `CollateralRegistry` via the index of the collateral. Getters and setters are added.

Does not handle the situation where interest accrued goes over the debt limit. 

Debt limit can be raised by `governance` by a max factor of 2 at a time, by calling the `CollateralRegistry` which then calls the `TroveManager` for that collateral branch.

Debt limit can be lowered to any amount at any time. (Still must use the timelock)