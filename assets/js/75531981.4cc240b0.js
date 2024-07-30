"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[2894],{1327:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var o=n(5893),i=n(1151);const s={},r="org.osbuild.parted",d={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.parted",title:"org.osbuild.parted",description:"Partition a target using parted(8)",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.parted.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.parted",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.parted",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/osbuild.github.io/tree/main/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.parted.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"org.osbuild.pam.limits.conf",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.pam.limits.conf"},next:{title:"org.osbuild.pwquality.conf",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.pwquality.conf"}},a={},p=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"orgosbuildparted",children:"org.osbuild.parted"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Partition a target using parted(8)"})}),"\n",(0,o.jsxs)(t.p,{children:["Use the ",(0,o.jsx)(t.code,{children:"parted"}),"(8) command line utility to partition the specified\n",(0,o.jsx)(t.code,{children:"device"}),".\nBuildhost commands used: ",(0,o.jsx)(t.code,{children:"parted"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:"{}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n  "devices": {\n    "type": "object",\n    "additionalProperties": true,\n    "required": [\n      "device"\n    ],\n    "properties": {\n      "device": {\n        "type": "object",\n        "additionalProperties": true\n      }\n    }\n  },\n  "options": {\n    "additionalProperties": false,\n    "required": [\n      "label"\n    ],\n    "properties": {\n      "label": {\n        "description": "The type of the partition table",\n        "type": "string",\n        "enum": [\n          "gpt"\n        ]\n      },\n      "partitions": {\n        "description": "Partition layout ",\n        "type": "array",\n        "required": [\n          "start",\n          "size",\n          "name"\n        ],\n        "items": {\n          "description": "Description of one partition",\n          "type": "object",\n          "properties": {\n            "bootable": {\n              "description": "Mark the partition as bootable",\n              "type": "boolean"\n            },\n            "name": {\n              "description": "The partition name (GPT)",\n              "type": "string"\n            },\n            "size": {\n              "description": "The size of this partition",\n              "type": "integer"\n            },\n            "start": {\n              "description": "The start offset of this partition",\n              "type": "integer"\n            },\n            "type": {\n              "description": "The partition type",\n              "type": "string"\n            }\n          }\n        }\n      }\n    }\n  }\n}\n'})})]})}function c(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>r});var o=n(7294);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);