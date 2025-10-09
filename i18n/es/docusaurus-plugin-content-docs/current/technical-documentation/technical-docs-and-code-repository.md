---
sidebar_position: 1
---

# Documentación técnica y código

Documentación técnica e información sobre repositorios de código para desarrolladores.

## Repositorio principal

https://github.com/Gyoza-Finance/Gyoza

Contiene el núcleo de contratos y librerías para el Protocolo Gyoza. También incluye el front-end y todo lo necesario para ejecutar su propia instancia de la aplicación.

El ReadMe también tiene más información sobre diseño y arquitectura.

## Cambios en las especificaciones técnicas de Gyoza desde Liquity V2

### Delegación
`ActivePool.sol` ahora tiene la función `delegateTokens`. Cualquier token puede ser delegado al rol `delegate`. El papel puede ser actualizado por governance. Cualquiera puede llamar a la función de delegación de forma segura, ya que siempre delega en el papel `delegado`.

También remaps OZ en muchos lugares debido a las dependencias circulares. 

### Más colaterales y límites de deuda
`BorrowOperations` maneja la acuñación de nuevas stablecoins. La deuda puede ser acuñada en `withdrawBold`, `_openTrove` (que se utiliza en el gestor de lotes y en otros lugares también, así que ten cuidado), y `_moveTokensFromAdjustment`. El límite de deuda simple es sólo un uint256 almacenado en el `TroveManager` de cada sucursal, y accesible al `CollateralRegistry` a través del índice de la garantía. Se añaden getters y setters.

No gestiona la situación en la que los intereses devengados superan el límite de deuda. 

El límite de deuda puede ser incrementado por el `governance` en un factor máximo de 2 a la vez, llamando al `CollateralRegistry` que entonces llama al `TroveManager` para esa rama colateral.

El límite de deuda puede reducirse a cualquier cantidad en cualquier momento. (Todavía debe utilizar el timelock)