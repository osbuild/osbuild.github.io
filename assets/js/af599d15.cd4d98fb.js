"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[3978],{1480:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var t=o(5893),s=o(1151);const r={},i="org.osbuild.cpio.out",d={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.cpio.out",title:"org.osbuild.cpio.out",description:"Assembles the tree into a CPIO archive.",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.cpio.out.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.cpio.out",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.cpio.out",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/osbuild.github.io/tree/main/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.cpio.out.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"org.osbuild.coreos.platform",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.coreos.platform"},next:{title:"org.osbuild.cron.script",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.cron.script"}},c={},l=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"orgosbuildcpioout",children:"org.osbuild.cpio.out"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Assembles the tree into a CPIO archive."})}),"\n",(0,t.jsxs)(n.p,{children:["Uses the buildhost's ",(0,t.jsx)(n.code,{children:"cpio"})," command, to create an archive\nat ",(0,t.jsx)(n.code,{children:"filename"})," with the contents of the input ",(0,t.jsx)(n.code,{children:"tree"}),". If\n",(0,t.jsx)(n.code,{children:"append"})," is ",(0,t.jsx)(n.code,{children:"true"}),", its files will be added to an existing\narchive. The default format is ",(0,t.jsx)(n.code,{children:"newc"}),' , the "new (SVR4)\nportable format", which is also used by ',(0,t.jsx)(n.code,{children:"dracut"}),"(8).\nBuildhost commands used: ",(0,t.jsx)(n.code,{children:"cpio"})]}),"\n",(0,t.jsx)(n.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"{}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "options": {\n    "additionalProperties": false,\n    "required": [\n      "filename"\n    ],\n    "properties": {\n      "filename": {\n        "description": "Filename for tar archive",\n        "type": "string"\n      },\n      "append": {\n        "type": "boolean",\n        "description": "Append to an existing archive.",\n        "default": false\n      },\n      "format": {\n        "description": "Archive format to use",\n        "type": "string",\n        "enum": [\n          "bin",\n          "odc",\n          "newc",\n          "crc",\n          "tar",\n          "ustar"\n        ],\n        "default": "newc"\n      },\n      "root-node": {\n        "description": "How to handle the root node: include or omit",\n        "enum": [\n          "include",\n          "omit"\n        ],\n        "default": "include"\n      },\n      "reproducible": {\n        "type": "boolean",\n        "description": "Produce device-independent, reproducible archives.",\n        "default": true\n      },\n      "owner": {\n        "type": "object",\n        "additionalProperties": false,\n        "required": [\n          "user"\n        ],\n        "properties": {\n          "user": {\n            "type": "string"\n          },\n          "group": {\n            "type": "string"\n          }\n        }\n      }\n    }\n  },\n  "inputs": {\n    "type": "object",\n    "additionalProperties": false,\n    "required": [\n      "tree"\n    ],\n    "properties": {\n      "tree": {\n        "type": "object",\n        "additionalProperties": true\n      }\n    }\n  }\n}\n'})})]})}function a(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>d,a:()=>i});var t=o(7294);const s={},r=t.createContext(s);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);