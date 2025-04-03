"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[1135],{2080:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"developer-guide/projects/osbuild/modules/stages/org.osbuild.hmac","title":"org.osbuild.hmac","description":"\x3c!--","source":"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.hmac.md","sourceDirName":"developer-guide/02-projects/osbuild/modules/stages","slug":"/developer-guide/projects/osbuild/modules/stages/org.osbuild.hmac","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.hmac","draft":false,"unlisted":false,"editUrl":"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.hmac.meta.json","tags":[],"version":"current","frontMatter":{"custom_edit_url":"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.hmac.meta.json"},"sidebar":"developer","previous":{"title":"org.osbuild.gzip","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.gzip"},"next":{"title":"org.osbuild.hostname","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.hostname"}}');var o=n(4848),r=n(8453);const a={custom_edit_url:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.hmac.meta.json"},i="org.osbuild.hmac",l={},c=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.header,{children:(0,o.jsx)(s.h1,{id:"orgosbuildhmac",children:"org.osbuild.hmac"})}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.strong,{children:"Generates .hmac checksum files"})}),"\n",(0,o.jsx)(s.p,{children:"Generates HMAC values for given files and stores them alongside the original\nfor later verification.\nThe stage uses the <algorithm>hmac commands (e.g. sha512hmac) which use a\nbuilt-in key when none is provided. Future extensions of this stage may\nadd a key parameter if and when it becomes a requirement.\nIn its current state, the stage can be used to replicate the generation of\nkernel hmac files [1] which are used for integrity verification when booting\nin FIPS mode.\nNotes:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["Requires hmac calc in the build root (libkcapi-hmaccalc)\nLinks:\n[1] ",(0,o.jsx)(s.a,{href:"https://gitlab.com/redhat/centos-stream/rpms/kernel/-/blob/f5b2a5f2ae8040c6072382545d302a4a936cb53c/kernel.spec?page=3#L2370",children:"https://gitlab.com/redhat/centos-stream/rpms/kernel/-/blob/f5b2a5f2ae8040c6072382545d302a4a936cb53c/kernel.spec?page=3#L2370"})]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-json",children:"{}\n"})}),"\n",(0,o.jsx)(s.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-json",children:'{\n  "options": {\n    "additionalProperties": false,\n    "required": [\n      "paths",\n      "algorithm"\n    ],\n    "properties": {\n      "paths": {\n        "type": "array",\n        "minItems": 1,\n        "items": {\n          "type": "string"\n        }\n      },\n      "algorithm": {\n        "type": "string",\n        "enum": [\n          "sha1",\n          "sha224",\n          "sha256",\n          "sha384",\n          "sha512"\n        ]\n      }\n    }\n  }\n}\n'})})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>i});var t=n(6540);const o={},r=t.createContext(o);function a(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);