import{c5 as I,aE as y,aF as i,aH as m,aY as S,a_ as z,aL as A,c6 as v,aZ as B,c7 as U,c8 as W,c9 as C,ca as T,cb as O,cc as P,aW as b,cd as F,ce as H,cf as q,cg as D,ch as E}from"./index-3JVrJPqN.js";function M(e){var l,s,d,u,x,h,f,k,w,j,r;const o=e.size==="compact",{initialScreen:t,screen:n}=I(),[g,a]=y.useState(!1),L=n===e.wallet&&t===e.wallet,c=L&&!e.isLinking?void 0:e.goBack;return i.jsxs(m,{fullHeight:!0,flex:"column",p:"lg",animate:"fadein",style:{minHeight:"250px"},children:[o&&(L?i.jsxs(i.Fragment,{children:[i.jsx(S,{onBack:c,leftAligned:!e.isLinking,title:i.jsxs(i.Fragment,{children:[(l=e.meta)!=null&&l.titleIconUrl?i.jsx(z,{src:(s=e.meta)==null?void 0:s.titleIconUrl,width:A.md,height:A.md,client:e.client}):null,i.jsx(v,{children:((d=e.meta)==null?void 0:d.title)??e.inAppWalletLocale.emailLoginScreen.title})]})}),i.jsx(B,{y:"lg"})]}):i.jsx(S,{onBack:c,title:e.inAppWalletLocale.signIn})),i.jsx(m,{expand:!0,flex:"column",center:"y",p:o?void 0:"lg",children:i.jsx(U,{...e,locale:e.inAppWalletLocale,disabled:((u=e.meta)==null?void 0:u.requireApproval)&&!g})}),o&&(((x=e.meta)==null?void 0:x.showThirdwebBranding)!==!1||((h=e.meta)==null?void 0:h.termsOfServiceUrl)||((f=e.meta)==null?void 0:f.privacyPolicyUrl))&&i.jsx(B,{y:"xl"}),i.jsxs(m,{flex:"column",gap:"lg",children:[i.jsx(W,{termsOfServiceUrl:(k=e.meta)==null?void 0:k.termsOfServiceUrl,privacyPolicyUrl:(w=e.meta)==null?void 0:w.privacyPolicyUrl,locale:e.connectLocale.agreement,requireApproval:(j=e.meta)==null?void 0:j.requireApproval,onApprove:()=>{a(!g)},isApproved:g}),((r=e.meta)==null?void 0:r.showThirdwebBranding)!==!1&&i.jsx(C,{})]})]})}function K(e){const o=T(),t=O(),n=o,g=e.connectLocale.id,a=P(g),{initialScreen:L}=I();if(!a)return i.jsx(b,{});const c=()=>{var d;L===e.wallet?t({}):((d=e.goBack)==null||d.call(e),t({}))},l=()=>{e.done(),t({})},s=n!=null&&n.emailLogin?{email:n.emailLogin}:n!=null&&n.phoneLogin?{phone:n.phoneLogin}:void 0;return s?i.jsx(F,{userInfo:s,locale:a,done:l,goBack:c,wallet:e.wallet,chain:e.chain,client:e.client,size:e.size,isLinking:e.isLinking}):n!=null&&n.passkeyLogin?i.jsx(H,{locale:e.connectLocale,wallet:e.wallet,done:l,onBack:c,chain:e.chain,client:e.client,size:e.size,isLinking:e.isLinking}):n!=null&&n.walletLogin?i.jsx(q,{meta:e.meta,inAppLocale:a,walletConnect:e.walletConnect,wallet:e.wallet,client:e.client,size:e.size,done:l,onBack:c||(()=>t({})),locale:e.connectLocale,isLinking:n.walletLogin.linking}):n!=null&&n.socialLogin?i.jsx(D,{socialAuth:n.socialLogin.type,locale:a,done:l,goBack:c,wallet:e.wallet,state:n,chain:e.chain,client:e.client,size:e.size,connectLocale:e.connectLocale,isLinking:e.isLinking}):n!=null&&n.guestLogin?i.jsx(E,{locale:a,done:l,goBack:c,wallet:e.wallet,state:n,client:e.client,size:e.size,connectLocale:e.connectLocale}):i.jsx(M,{select:()=>{},connectLocale:e.connectLocale,inAppWalletLocale:a,done:l,goBack:e.goBack,wallet:e.wallet,client:e.client,meta:e.meta,size:e.size,chain:e.chain,isLinking:e.isLinking})}export{K as default};