"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[9899],{1180:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>i,default:()=>c,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var o=n(5893),r=n(1151);const t={},i="org.osbuild.squashfs",d={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.squashfs",title:"org.osbuild.squashfs",description:"Create a squashfs named filename.",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.squashfs.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.squashfs",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.squashfs",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/osbuild.github.io/tree/main/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.squashfs.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"org.osbuild.skopeo",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.skopeo"},next:{title:"org.osbuild.sshd.config",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.sshd.config"}},a={},l=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function u(e){const s={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"orgosbuildsquashfs",children:"org.osbuild.squashfs"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsxs)(s.strong,{children:["Create a squashfs named ",(0,o.jsx)(s.code,{children:"filename"}),"."]})}),"\n",(0,o.jsxs)(s.p,{children:["Buildhost commands used: ",(0,o.jsx)(s.code,{children:"mksquashfs"})," and any needed compression program."]}),"\n",(0,o.jsx)(s.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-json",children:"{}\n"})}),"\n",(0,o.jsx)(s.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-json",children:'{\n  "options": {\n    "additionalProperties": false,\n    "required": [\n      "filename"\n    ],\n    "properties": {\n      "filename": {\n        "description": "Filename for tar archive",\n        "type": "string"\n      },\n      "compression": {\n        "type": "object",\n        "additionalProperties": false,\n        "required": [\n          "method"\n        ],\n        "properties": {\n          "method": {\n            "enum": [\n              "gzip",\n              "lz4",\n              "xz",\n              "zstd"\n            ]\n          },\n          "options": {\n            "type": "object",\n            "additionalProperties": false,\n            "properties": {\n              "bcj": {\n                "enum": [\n                  "x86",\n                  "arm",\n                  "armthumb",\n                  "powerpc",\n                  "sparc",\n                  "ia64"\n                ]\n              }\n            }\n          }\n        }\n      }\n    }\n  },\n  "inputs": {\n    "type": "object",\n    "additionalProperties": false,\n    "required": [\n      "tree"\n    ],\n    "properties": {\n      "tree": {\n        "type": "object",\n        "additionalProperties": true\n      }\n    }\n  }\n}\n'})})]})}function c(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>d,a:()=>i});var o=n(7294);const r={},t=o.createContext(r);function i(e){const s=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(t.Provider,{value:s},e.children)}}}]);