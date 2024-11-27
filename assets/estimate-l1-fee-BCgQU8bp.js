import{B as l,co as E,h as P,N as K,cq as J,v as w,F as z,d5 as Q,d6 as X,S as a,d7 as I,d8 as M,aa as Z,ag as ee,U as te}from"./index-3JVrJPqN.js";import{s as se,b as A,t as p}from"./sha256-CNxY8UhP.js";const oe={ether:-9,wei:9};function ne(e,t){let s=e.toString();const o=s.startsWith("-");o&&(s=s.slice(1)),s=s.padStart(t,"0");let[n,i]=[s.slice(0,s.length-t),s.slice(s.length-t)];return i=i.replace(/(0+)$/,""),`${o?"-":""}${n||"0"}${i?`.${i}`:""}`}function L(e,t="wei"){return ne(e,oe[t])}function ie(e){const t=Object.entries(e).map(([o,n])=>n===void 0||n===!1?null:[o,n]).filter(Boolean),s=t.reduce((o,[n])=>Math.max(o,n.length),0);return t.map(([o,n])=>`  ${`${o}:`.padEnd(s+1)}  ${n}`).join(`
`)}class re extends l{constructor({transaction:t}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",ie(t),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or","- an EIP-7702 Transaction with `authorizationList`, or","- a Legacy Transaction with `gasPrice`"],name:"InvalidSerializableTransactionError"})}}class ae extends l{constructor({storageKey:t}){super(`Size for storage key "${t}" is invalid. Expected 32 bytes. Got ${Math.floor((t.length-2)/2)} bytes.`,{name:"InvalidStorageKeySizeError"})}}class F extends l{constructor({cause:t,maxFeePerGas:s}={}){super(`The fee cap (\`maxFeePerGas\`${s?` = ${L(s)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:t,name:"FeeCapTooHighError"})}}Object.defineProperty(F,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class O extends l{constructor({cause:t,maxPriorityFeePerGas:s,maxFeePerGas:o}={}){super([`The provided tip (\`maxPriorityFeePerGas\`${s?` = ${L(s)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${o?` = ${L(o)} gwei`:""}).`].join(`
`),{cause:t,name:"TipAboveFeeCapError"})}}Object.defineProperty(O,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});function _(e){const{kzg:t}=e,s=e.to??(typeof e.blobs[0]=="string"?"hex":"bytes"),o=typeof e.blobs[0]=="string"?e.blobs.map(i=>E(i)):e.blobs,n=[];for(const i of o)n.push(Uint8Array.from(t.blobToKzgCommitment(i)));return s==="bytes"?n:n.map(i=>P(i))}function R(e){const{kzg:t}=e,s=e.to??(typeof e.blobs[0]=="string"?"hex":"bytes"),o=typeof e.blobs[0]=="string"?e.blobs.map(r=>E(r)):e.blobs,n=typeof e.commitments[0]=="string"?e.commitments.map(r=>E(r)):e.commitments,i=[];for(let r=0;r<o.length;r++){const c=o[r],f=n[r];i.push(Uint8Array.from(t.computeBlobKzgProof(c,f)))}return s==="bytes"?i:i.map(r=>P(r))}function ce(e){const{commitment:t,version:s=1}=e,o=e.to??(typeof t=="string"?"hex":"bytes"),n=se(t,"bytes");return n.set([s],0),o==="bytes"?n:P(n)}function fe(e){const{commitments:t,version:s}=e,o=e.to??(typeof t[0]=="string"?"hex":"bytes"),n=[];for(const i of t)n.push(ce({commitment:i,to:o,version:s}));return n}const U=6,D=32,B=4096,N=D*B,j=N*U-1-1*B*U,q=1;class de extends l{constructor({maxSize:t,size:s}){super("Blob size is too large.",{metaMessages:[`Max: ${t} bytes`,`Given: ${s} bytes`],name:"BlobSizeTooLargeError"})}}class W extends l{constructor(){super("Blob data must not be empty.",{name:"EmptyBlobError"})}}class le extends l{constructor({hash:t,size:s}){super(`Versioned hash "${t}" size is invalid.`,{metaMessages:["Expected: 32",`Received: ${s}`],name:"InvalidVersionedHashSizeError"})}}class ue extends l{constructor({hash:t,version:s}){super(`Versioned hash "${t}" version is invalid.`,{metaMessages:[`Expected: ${q}`,`Received: ${s}`],name:"InvalidVersionedHashVersionError"})}}function he(e){const t=e.to??(typeof e.data=="string"?"hex":"bytes"),s=typeof e.data=="string"?E(e.data):e.data,o=K(s);if(!o)throw new W;if(o>j)throw new de({maxSize:j,size:o});const n=[];let i=!0,r=0;for(;i;){const c=J(new Uint8Array(N));let f=0;for(;f<B;){const d=s.slice(r,r+(D-1));if(c.pushByte(0),c.pushBytes(d),d.length<31){c.pushByte(128),i=!1;break}f++,r+=31}n.push(c)}return t==="bytes"?n.map(c=>c.bytes):n.map(c=>P(c.bytes))}function be(e){const{data:t,kzg:s,to:o}=e,n=e.blobs??he({data:t,to:o}),i=e.commitments??_({blobs:n,kzg:s,to:o}),r=e.proofs??R({blobs:n,commitments:i,kzg:s,to:o}),c=[];for(let f=0;f<n.length;f++)c.push({blob:n[f],commitment:i[f],proof:r[f]});return c}function me(e){if(e.type)return e.type;if(typeof e.authorizationList<"u")return"eip7702";if(typeof e.blobs<"u"||typeof e.blobVersionedHashes<"u"||typeof e.maxFeePerBlobGas<"u"||typeof e.sidecars<"u")return"eip4844";if(typeof e.maxFeePerGas<"u"||typeof e.maxPriorityFeePerGas<"u")return"eip1559";if(typeof e.gasPrice<"u")return typeof e.accessList<"u"?"eip2930":"legacy";throw new re({transaction:e})}class G extends l{constructor({chainId:t}){super(typeof t=="number"?`Chain ID "${t}" is invalid.`:"Chain ID is invalid.",{name:"InvalidChainIdError"})}}function xe(e){const{authorizationList:t}=e;if(t)for(const s of t){const{contractAddress:o,chainId:n}=s;if(!w(o))throw new z({address:o});if(n<0)throw new G({chainId:n})}S(e)}function pe(e){const{blobVersionedHashes:t}=e;if(t){if(t.length===0)throw new W;for(const s of t){const o=K(s),n=Q(X(s,0,1));if(o!==32)throw new le({hash:s,size:o});if(n!==q)throw new ue({hash:s,version:n})}}S(e)}function S(e){const{chainId:t,maxPriorityFeePerGas:s,maxFeePerGas:o,to:n}=e;if(t<=0)throw new G({chainId:t});if(n&&!w(n))throw new z({address:n});if(o&&o>A)throw new F({maxFeePerGas:o});if(s&&o&&s>o)throw new O({maxFeePerGas:o,maxPriorityFeePerGas:s})}function ye(e){const{chainId:t,maxPriorityFeePerGas:s,gasPrice:o,maxFeePerGas:n,to:i}=e;if(t<=0)throw new G({chainId:t});if(i&&!w(i))throw new z({address:i});if(s||n)throw new l("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");if(o&&o>A)throw new F({maxFeePerGas:o})}function ge(e){const{chainId:t,maxPriorityFeePerGas:s,gasPrice:o,maxFeePerGas:n,to:i}=e;if(i&&!w(i))throw new z({address:i});if(typeof t<"u"&&t<=0)throw new G({chainId:t});if(s||n)throw new l("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");if(o&&o>A)throw new F({maxFeePerGas:o})}function Pe(e){if(!e||e.length===0)return[];const t=[];for(const s of e){const{contractAddress:o,chainId:n,nonce:i,...r}=s;t.push([n?a(n):"0x",o,i?a(i):"0x",...T({},r)])}return t}function $(e){if(!e||e.length===0)return[];const t=[];for(let s=0;s<e.length;s++){const{address:o,storageKeys:n}=e[s];for(let i=0;i<n.length;i++)if(n[i].length-2!==64)throw new ae({storageKey:n[i]});if(!w(o,{strict:!1}))throw new z({address:o});t.push([o,n])}return t}function we(e,t){const s=me(e);return s==="eip1559"?ve(e,t):s==="eip2930"?Ee(e,t):s==="eip4844"?Te(e,t):s==="eip7702"?ze(e,t):Ie(e)}function ze(e,t){const{authorizationList:s,chainId:o,gas:n,nonce:i,to:r,value:c,maxFeePerGas:f,maxPriorityFeePerGas:d,accessList:b,data:m}=e;xe(e);const h=$(b),u=Pe(s);return I(["0x04",p([a(o),i?a(i):"0x",d?a(d):"0x",f?a(f):"0x",n?a(n):"0x",r??"0x",c?a(c):"0x",m??"0x",h,u,...T(e,t)])])}function Te(e,t){const{chainId:s,gas:o,nonce:n,to:i,value:r,maxFeePerBlobGas:c,maxFeePerGas:f,maxPriorityFeePerGas:d,accessList:b,data:m}=e;pe(e);let h=e.blobVersionedHashes,u=e.sidecars;if(e.blobs&&(typeof h>"u"||typeof u>"u")){const x=typeof e.blobs[0]=="string"?e.blobs:e.blobs.map(g=>P(g)),v=e.kzg,y=_({blobs:x,kzg:v});if(typeof h>"u"&&(h=fe({commitments:y})),typeof u>"u"){const g=R({blobs:x,commitments:y,kzg:v});u=be({blobs:x,commitments:y,proofs:g})}}const Y=$(b),H=[a(s),n?a(n):"0x",d?a(d):"0x",f?a(f):"0x",o?a(o):"0x",i??"0x",r?a(r):"0x",m??"0x",Y,c?a(c):"0x",h??[],...T(e,t)],V=[],C=[],k=[];if(u)for(let x=0;x<u.length;x++){const{blob:v,commitment:y,proof:g}=u[x];V.push(v),C.push(y),k.push(g)}return I(["0x03",u?p([H,V,C,k]):p(H)])}function ve(e,t){const{chainId:s,gas:o,nonce:n,to:i,value:r,maxFeePerGas:c,maxPriorityFeePerGas:f,accessList:d,data:b}=e;S(e);const m=$(d),h=[a(s),n?a(n):"0x",f?a(f):"0x",c?a(c):"0x",o?a(o):"0x",i??"0x",r?a(r):"0x",b??"0x",m,...T(e,t)];return I(["0x02",p(h)])}function Ee(e,t){const{chainId:s,gas:o,data:n,nonce:i,to:r,value:c,accessList:f,gasPrice:d}=e;ye(e);const b=$(f),m=[a(s),i?a(i):"0x",d?a(d):"0x",o?a(o):"0x",r??"0x",c?a(c):"0x",n??"0x",b,...T(e,t)];return I(["0x01",p(m)])}function Ie(e,t){const{chainId:s=0,gas:o,data:n,nonce:i,to:r,value:c,gasPrice:f}=e;ge(e);let d=[i?a(i):"0x",f?a(f):"0x",o?a(o):"0x",r??"0x",c?a(c):"0x",n??"0x"];return s>0&&(d=[...d,a(s),"0x","0x"]),p(d)}function T(e,t){const s=t??e,{v:o,yParity:n}=s;if(typeof s.r>"u")return[];if(typeof s.s>"u")return[];if(typeof o>"u"&&typeof n>"u")return[];const i=M(s.r),r=M(s.s);return[typeof n=="number"?n?a(1):"0x":o===0n?"0x":o===1n?a(1):o===27n?"0x":a(1),i==="0x00"?"0x":i,r==="0x00"?"0x":r]}const Fe="0x420000000000000000000000000000000000000F";async function Le(e){const{transaction:t,gasPriceOracleAddress:s}=e,o=Z({client:t.client,address:s||Fe,chain:t.chain}),{gasPrice:n,...i}=await ee({transaction:t}),r=we({...i,type:"eip1559"});return te({contract:o,method:"function getL1Fee(bytes memory _data) view returns (uint256)",params:[r]})}export{Le as estimateL1Fee};