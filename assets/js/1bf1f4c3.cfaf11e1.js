"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[8247],{3994:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>d,default:()=>c,frontMatter:()=>t,metadata:()=>i,toc:()=>l});var o=n(5893),r=n(1151);const t={custom_edit_url:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.dnf4.mark.meta.json"},d="org.osbuild.dnf4.mark",i={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.dnf4.mark",title:"org.osbuild.dnf4.mark",description:"\x3c!--",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.dnf4.mark.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.dnf4.mark",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.dnf4.mark",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.dnf4.mark.meta.json",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.dnf4.mark.meta.json"},sidebar:"developer",previous:{title:"org.osbuild.dnf.config",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.dnf.config"},next:{title:"org.osbuild.dnf4.sbom.spdx",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.dnf4.sbom.spdx"}},a={},l=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function u(e){const s={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.header,{children:(0,o.jsx)(s.h1,{id:"orgosbuilddnf4mark",children:"org.osbuild.dnf4.mark"})}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.strong,{children:"Mark packages in the DNF state database."})}),"\n",(0,o.jsx)(s.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-json",children:"{}\n"})}),"\n",(0,o.jsx)(s.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-json",children:'{\n  "options": {\n    "additionalProperties": false,\n    "properties": {\n      "packages": {\n        "type": "array",\n        "minItems": 1,\n        "description": "Packages and their marks.",\n        "items": {\n          "type": "object",\n          "additionalProperties": false,\n          "required": [\n            "name",\n            "mark"\n          ],\n          "properties": {\n            "name": {\n              "type": "string",\n              "description": "Package name."\n            },\n            "mark": {\n              "type": "string",\n              "enum": [\n                "install",\n                "group"\n              ],\n              "description": "Package mark."\n            }\n          }\n        }\n      }\n    }\n  }\n}\n'})})]})}function c(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>i,a:()=>d});var o=n(7294);const r={},t=o.createContext(r);function d(e){const s=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),o.createElement(t.Provider,{value:s},e.children)}}}]);