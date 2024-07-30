"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[8153],{3584:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var r=t(5893),i=t(1151);const s={},d="Backporting simple fixes",l={id:"developer-guide/general/releasing/backporting",title:"Backporting simple fixes",description:"Overview",source:"@site/docs/developer-guide/01-general/releasing/backporting.md",sourceDirName:"developer-guide/01-general/releasing",slug:"/developer-guide/general/releasing/backporting",permalink:"/docs/developer-guide/general/releasing/backporting",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/osbuild.github.io/tree/main/docs/developer-guide/01-general/releasing/backporting.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"Releasing",permalink:"/docs/developer-guide/general/releasing/"},next:{title:"Latest RPM builds",permalink:"/docs/developer-guide/general/releasing/latest-rpm-builds"}},o={},a=[{value:"Overview",id:"overview",level:2},{value:"How to",id:"how-to",level:2},{value:"COPR",id:"copr",level:3},{value:"Unsigned RPM",id:"unsigned-rpm",level:3}];function c(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"backporting-simple-fixes",children:"Backporting simple fixes"}),"\n",(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Method"}),(0,r.jsx)(n.th,{children:"Complexity"}),(0,r.jsx)(n.th,{children:"Time"}),(0,r.jsx)(n.th,{children:"Notes"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://copr.fedorainfracloud.org/coprs/g/osbuild/",children:"COPR"})}),(0,r.jsx)(n.td,{children:"Easy"}),(0,r.jsx)(n.td,{children:"Immediate"}),(0,r.jsx)(n.td,{children:"Unofficial, but the fix is already there"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Unsigned RPM"}),(0,r.jsx)(n.td,{children:"Easy"}),(0,r.jsx)(n.td,{children:"1 week"}),(0,r.jsx)(n.td,{children:"Unofficial in that it's unsigned"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Async Update to z-stream"}),(0,r.jsx)(n.td,{children:"Difficult"}),(0,r.jsx)(n.td,{children:"2 weeks"}),(0,r.jsx)(n.td,{children:"Requires sign-off from many and could be rejected"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Batch Update to z-stream"}),(0,r.jsx)(n.td,{children:"Medium"}),(0,r.jsx)(n.td,{children:"up to 8 weeks"}),(0,r.jsx)(n.td,{children:"Red Hat's preferred method"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"how-to",children:"How to"}),"\n",(0,r.jsx)(n.h3,{id:"copr",children:"COPR"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Share the correct COPR package version and URL"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"unsigned-rpm",children:"Unsigned RPM"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Take the latest spec file from downstream"}),"\n",(0,r.jsx)(n.li,{children:"Create a downstream patch and add it"}),"\n",(0,r.jsx)(n.li,{children:"Create a scratch build in Brew"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>d});var r=t(7294);const i={},s=r.createContext(i);function d(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);