"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[4541],{9696:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var s=o(5893),t=o(1151);const r={},i="org.osbuild.lvm2.create",l={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.lvm2.create",title:"org.osbuild.lvm2.create",description:"Create LVM2 physical volumes, volume groups and logical volumes",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.lvm2.create.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.lvm2.create",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.lvm2.create",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/osbuild.github.io/tree/main/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.lvm2.create.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"org.osbuild.luks2.remove-key",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.luks2.remove-key"},next:{title:"org.osbuild.lvm2.metadata",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.lvm2.metadata"}},d={},a=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"orgosbuildlvm2create",children:"org.osbuild.lvm2.create"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Create LVM2 physical volumes, volume groups and logical volumes"})}),"\n",(0,s.jsxs)(n.p,{children:["For the logical volumes ",(0,s.jsx)(n.code,{children:"name"})," and ",(0,s.jsx)(n.code,{children:"size"})," need to be provided.\nNB: The name of the volume group is chosen at random and should\nbe changed via the ",(0,s.jsx)(n.code,{children:"org.osbuild.lvm2.metadata"})," stage after the\nimage has been completely assembled."]}),"\n",(0,s.jsx)(n.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:"{}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "devices": {\n    "type": "object",\n    "additionalProperties": true,\n    "required": [\n      "device"\n    ],\n    "properties": {\n      "device": {\n        "type": "object",\n        "additionalProperties": true\n      }\n    }\n  },\n  "options": {\n    "additionalProperties": true,\n    "required": [\n      "volumes"\n    ],\n    "properties": {\n      "volumes": {\n        "type": "array",\n        "minItems": 1,\n        "items": {\n          "description": "Logical volume",\n          "type": "object",\n          "required": [\n            "name"\n          ],\n          "oneOf": [\n            {\n              "required": [\n                "size"\n              ]\n            },\n            {\n              "required": [\n                "extents"\n              ]\n            }\n          ],\n          "properties": {\n            "name": {\n              "description": "The logical volume name",\n              "type": "string",\n              "pattern": "[a-zA-Z09+_.][a-zA-Z0-9+_.-]*"\n            },\n            "extents": {\n              "description": "The logical extents of the volume",\n              "type": "string",\n              "pattern": "[1-9][0-9]*(%(VG|PVS|FREE|ORIGIN))?"\n            },\n            "size": {\n              "description": "The size of the logical volume",\n              "type": "string",\n              "pattern": "[1-9][0-9]*[bBsSkKmMgGtTpPeE]?"\n            }\n          }\n        }\n      }\n    }\n  }\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>l,a:()=>i});var s=o(7294);const t={},r=s.createContext(t);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);