"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[9129],{1942:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"developer-guide/projects/osbuild/modules/stages/org.osbuild.machine-id","title":"org.osbuild.machine-id","description":"\x3c!--","source":"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.machine-id.md","sourceDirName":"developer-guide/02-projects/osbuild/modules/stages","slug":"/developer-guide/projects/osbuild/modules/stages/org.osbuild.machine-id","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.machine-id","draft":false,"unlisted":false,"editUrl":"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.machine-id.meta.json","tags":[],"version":"current","frontMatter":{"custom_edit_url":"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.machine-id.meta.json"},"sidebar":"developer","previous":{"title":"org.osbuild.lvm2.metadata","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.lvm2.metadata"},"next":{"title":"org.osbuild.mkdir","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.mkdir"}}');var n=s(4848),o=s(8453);const r={custom_edit_url:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.machine-id.meta.json"},d="org.osbuild.machine-id",l={},a=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function c(e){const i={code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"orgosbuildmachine-id",children:"org.osbuild.machine-id"})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Deal with /etc/machine-id"})}),"\n",(0,n.jsx)(i.p,{children:"Explicitly define the state to /etc/machine-id. The possible values for\nfirst-boot are:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:'yes: This sets the machine-id to "uninitialized" and this will trigger\nContidionFirstBoot in systemd'}),"\n",(0,n.jsxs)(i.li,{children:["no: This creates an empty machine-id. It will trigger the generation\nof a new machine-id but ",(0,n.jsx)(i.em,{children:"not"})," the ConditionFirstBoot"]}),"\n",(0,n.jsx)(i.li,{children:"preserve: Leave the existing machine-id in place. Not having a machine-id\nwith that set is an error."}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-json",children:'{\n  "additionalProperties": false,\n  "required": [\n    "first-boot"\n  ],\n  "properties": {\n    "first-boot": {\n      "enum": [\n        "yes",\n        "no",\n        "preserve"\n      ],\n      "description": "Set the first boot behavior of the /etc/machine-id file in the tree"\n    }\n  }\n}\n'})}),"\n",(0,n.jsx)(i.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-json",children:"{}\n"})})]})}function u(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,i,s)=>{s.d(i,{R:()=>r,x:()=>d});var t=s(6540);const n={},o=t.createContext(n);function r(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);