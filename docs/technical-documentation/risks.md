---
sidebar_position: 6
---

# Audits & Risk Disclosure

Detailed disclosures of protocol risks and user considerations. Gyoza code has been audited several times by top firms.

## Contract Risk 

Underlying Liquity contracts are audited and secure. Gyoza Protocol is a fork of Liquity and inherits most of the same risks and security considerations, but with several differences.

Gyoza protocol contracts (and all changes from the Liquity core contracts) are audited by Sherlock, 0xSimao and other independent auditors.

Gyoza audits: 
- [Report: Sherlock audit with 0xSimao](https://drive.google.com/file/d/1knlIgoEGv5x33n9mhTLRqJe8T55r3HCy/view?usp=sharing)
- Gyoza also underwent extensive testing with automated vulnerability testing with [Octane](https://octane.security/), with reports available for each pull request on our Github.


## Centralization Risk

### Gyoza Governance
Gyoza Protocol is designed to be as limited, decentralized, and immutable as possible. The only parameters in the protocol which can be updated or changed by Gyoza governance are:
1. Debt limits for each collateral type, which can be lowered at any time but only raised by a factor of 2x with a 7 day timelock.
2. How to direct 25% of protocol revenue. 

New collateral types can NOT be added by Gyoza governance. 
gyUSD can NEVER be minted by Gyoza governance.
The percentage of fees that are directed to the stability pool can NOT be changed by Gyoza governance.

### Arbitrum Network
Arbitrum is a decentralized network, but still relies on an emergency upgrade mechanism. For more information on this, see the [L2 Beat](https://l2beat.com/scaling/projects/arbitrum) tracker for Arbitrum decentralization.

### Collaterals

It is possible that some collateral tokens could be upgraded by respective DAOs or groups in the future. Conservative debt limits and over-collateralization ratios have been chosen to limit risks of this posing any issues.











