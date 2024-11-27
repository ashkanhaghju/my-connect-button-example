import{cH as e,cI as a,cJ as c,R as i}from"./index-BUbiDIUQ.js";const o=`Ethereum Signed Message:
`;function u(t,n){const r=typeof t=="string"?e(t):t.raw instanceof Uint8Array?t.raw:a(t.raw),s=e(`${o}${r.length}`);return c(i([s,r]),n)}export{u as hashMessage};
