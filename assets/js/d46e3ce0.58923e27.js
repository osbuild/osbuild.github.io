"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[5435],{755:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>t,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var o=n(5893),r=n(1151);const i={},t="org.osbuild.pacman-keyring",d={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.pacman-keyring",title:"org.osbuild.pacman-keyring",description:"Initialize the Arch Linux keyring for Arch based distributions",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.pacman-keyring.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.pacman-keyring",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.pacman-keyring",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/saurus/tree/main/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.pacman-keyring.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"org.osbuild.ovf",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.ovf"},next:{title:"org.osbuild.pacman.conf",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.pacman.conf"}},a={},c=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function l(e){const s={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"orgosbuildpacman-keyring",children:"org.osbuild.pacman-keyring"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.strong,{children:"Initialize the Arch Linux keyring for Arch based distributions"})}),"\n",(0,o.jsxs)(s.p,{children:["WARNING: This stage uses chroot() to run the ",(0,o.jsx)(s.code,{children:"archlinux-keyring"})," binary\nfrom inside the tree."]}),"\n",(0,o.jsx)(s.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-json",children:'{\n  "additionalProperties": false,\n  "properties": {\n    "keyrings": {\n      "type": "array",\n      "description": "keyrings",\n      "default": "archlinux"\n    }\n  }\n}\n'})}),"\n",(0,o.jsx)(s.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-json",children:"{}\n"})})]})}function u(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>d,a:()=>t});var o=n(7294);const r={},i=o.createContext(r);function t(e){const s=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),o.createElement(i.Provider,{value:s},e.children)}}}]);