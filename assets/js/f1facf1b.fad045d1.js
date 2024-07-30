"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[8804],{2737:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var n=s(5893),i=s(1151);const t={},r="Developer Guide",d={id:"developer-guide/index",title:"Developer Guide",description:"In this section, you will find a description of the source code in osbuild organization.",source:"@site/docs/developer-guide/00-index.md",sourceDirName:"developer-guide",slug:"/developer-guide/index",permalink:"/docs/developer-guide/index",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/osbuild.github.io/tree/main/docs/developer-guide/00-index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"developer",next:{title:"General",permalink:"/docs/developer-guide/general/"}},c={},l=[];function a(e){const o={code:"code",h1:"h1",img:"img",p:"p",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"developer-guide",children:"Developer Guide"}),"\n",(0,n.jsxs)(o.p,{children:["In this section, you will find a description of the source code in ",(0,n.jsx)(o.code,{children:"osbuild"})," organization."]}),"\n",(0,n.jsxs)(o.p,{children:["The following scheme describes how separate components communicate with each other:\n",(0,n.jsx)(o.img,{src:s(3892).Z+"",width:"1248",height:"528"})]}),"\n",(0,n.jsxs)(o.p,{children:["In the very basic use case where ",(0,n.jsx)(o.code,{children:"osbuild-composer"}),' is running locally, the "pool of workers" also lives on the user\'s host machine. The ',(0,n.jsx)(o.code,{children:"osbuild-composer"})," and ",(0,n.jsx)(o.code,{children:"osbuild-worker"})," processes are spawned by systemd. We don't support any other means of spawning these processes, as they rely on systemd to open sockets, create state directories etc. Additionally, ",(0,n.jsx)(o.code,{children:"osbuild-worker"})," spawns osbuild as a subprocess to create the image itself. The whole image building machinery is spawned from a user process, for example, ",(0,n.jsx)(o.code,{children:"composer-cli"}),"."]})]})}function u(e={}){const{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},3892:(e,o,s)=>{s.d(o,{Z:()=>n});const n=s.p+"assets/images/osbuild-composer-71e2d4e4e39e0f62c7b2a09795d33dd4.svg"},1151:(e,o,s)=>{s.d(o,{Z:()=>d,a:()=>r});var n=s(7294);const i={},t=n.createContext(i);function r(e){const o=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(t.Provider,{value:o},e.children)}}}]);