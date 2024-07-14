"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[1329],{9201:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var t=o(5893),n=o(1151);const r={},d="org.osbuild.btrfs.subvol",i={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.btrfs.subvol",title:"org.osbuild.btrfs.subvol",description:"Create subvolumes on a mounted btrfs partition.",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.btrfs.subvol.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.btrfs.subvol",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.btrfs.subvol",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/saurus/tree/main/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.btrfs.subvol.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"org.osbuild.bootupd",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.bootupd"},next:{title:"org.osbuild.buildstamp",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.buildstamp"}},l={},u=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function a(e){const s={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"orgosbuildbtrfssubvol",children:"org.osbuild.btrfs.subvol"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Create subvolumes on a mounted btrfs partition."})}),"\n",(0,t.jsxs)(s.p,{children:["See ",(0,t.jsx)(s.code,{children:"btrfs"}),"(8).\nBuildhost commands used: ",(0,t.jsx)(s.code,{children:"btrfs"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:"{}\n"})}),"\n",(0,t.jsx)(s.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "options": {\n    "additionalProperties": false,\n    "properties": {\n      "subvolumes": {\n        "type": "array",\n        "items": {\n          "type": "object",\n          "additionalProperties": false,\n          "required": [\n            "name"\n          ],\n          "properties": {\n            "name": {\n              "type": "string"\n            }\n          }\n        }\n      }\n    }\n  },\n  "devices": {\n    "type": "object",\n    "additionalProperties": true\n  },\n  "mounts": {\n    "type": "array"\n  }\n}\n'})})]})}function c(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1151:(e,s,o)=>{o.d(s,{Z:()=>i,a:()=>d});var t=o(7294);const n={},r=t.createContext(n);function d(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);