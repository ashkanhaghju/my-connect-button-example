import{U as t}from"./index-DbAt9A43.js";const n="0x3e429396",a=[],o=[{type:"tuple[]",components:[{type:"address",name:"implementation"},{type:"tuple",name:"config",components:[{type:"bool",name:"registerInstallationCallback"},{type:"bytes4[]",name:"requiredInterfaces"},{type:"bytes4[]",name:"supportedInterfaces"},{type:"tuple[]",name:"callbackFunctions",components:[{type:"bytes4",name:"selector"}]},{type:"tuple[]",name:"fallbackFunctions",components:[{type:"bytes4",name:"selector"},{type:"uint256",name:"permissionBits"}]}]}]}];async function p(e){return t({contract:e.contract,method:[n,a,o],params:[]})}export{n as FN_SELECTOR,p as getInstalledModules};
