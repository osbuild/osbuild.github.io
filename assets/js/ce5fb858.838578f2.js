"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[8438],{504:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var o=s(5893),r=s(1151);const t={},i="org.osbuild.grub2.iso",d={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.grub2.iso",title:"org.osbuild.grub2.iso",description:"Create a boot filesystem tree, can be consumed to create",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.grub2.iso.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.grub2.iso",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.grub2.iso",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/osbuild.github.io/tree/main/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.grub2.iso.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"org.osbuild.grub2.inst",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.grub2.inst"},next:{title:"org.osbuild.grub2.legacy",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.grub2.legacy"}},u={},l=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"orgosbuildgrub2iso",children:"org.osbuild.grub2.iso"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Create a boot filesystem tree, can be consumed to create\nan efiboot.img."})}),"\n",(0,o.jsx)(n.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:"{}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "options": {\n    "additionalProperties": false,\n    "required": [\n      "product",\n      "kernel",\n      "isolabel"\n    ],\n    "properties": {\n      "product": {\n        "type": "object",\n        "additionalProperties": false,\n        "required": [\n          "name",\n          "version"\n        ],\n        "properties": {\n          "name": {\n            "type": "string"\n          },\n          "version": {\n            "type": "string"\n          }\n        }\n      },\n      "kernel": {\n        "type": "object",\n        "required": [\n          "dir"\n        ],\n        "properties": {\n          "dir": {\n            "type": "string"\n          },\n          "opts": {\n            "description": "Array of group names for this user",\n            "type": "array",\n            "items": {\n              "type": "string"\n            }\n          }\n        }\n      },\n      "isolabel": {\n        "type": "string"\n      },\n      "architectures": {\n        "type": "array",\n        "items": {\n          "type": "string"\n        }\n      },\n      "vendor": {\n        "type": "string"\n      },\n      "config": {\n        "description": "Configuration options for grub itself",\n        "type": "object",\n        "additionalProperties": false,\n        "properties": {\n          "timeout": {\n            "description": "Timeout in seconds",\n            "type": "integer",\n            "minimum": 0,\n            "default": 60\n          }\n        }\n      }\n    }\n  }\n}\n'})})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>i});var o=s(7294);const r={},t=o.createContext(r);function i(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);