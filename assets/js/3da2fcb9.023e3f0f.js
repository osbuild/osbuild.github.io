"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[3841],{7423:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>d,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"developer-guide/projects/osbuild/modules/stages/org.osbuild.dnf.module-config","title":"org.osbuild.dnf.module-config","description":"\x3c!--","source":"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.dnf.module-config.md","sourceDirName":"developer-guide/02-projects/osbuild/modules/stages","slug":"/developer-guide/projects/osbuild/modules/stages/org.osbuild.dnf.module-config","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.dnf.module-config","draft":false,"unlisted":false,"editUrl":"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.dnf.module-config.meta.json","tags":[],"version":"current","frontMatter":{"custom_edit_url":"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.dnf.module-config.meta.json"},"sidebar":"developer","previous":{"title":"org.osbuild.dnf.config","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.dnf.config"},"next":{"title":"org.osbuild.dnf4.mark","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.dnf4.mark"}}');var t=n(4848),i=n(8453);const d={custom_edit_url:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.dnf.module-config.meta.json"},r="org.osbuild.dnf.module-config",l={},u=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function c(e){const o={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.header,{children:(0,t.jsx)(o.h1,{id:"orgosbuilddnfmodule-config",children:"org.osbuild.dnf.module-config"})}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.strong,{children:"Write DNF module configuration."})}),"\n",(0,t.jsx)(o.p,{children:"This stage allows writing DNF module configurations. These files are\nwhich are used by DNF to determine enabled modules."}),"\n",(0,t.jsx)(o.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-json",children:"{}\n"})}),"\n",(0,t.jsx)(o.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-json",children:'{\n  "options": {\n    "additionalProperties": false,\n    "description": "DNF configuration.",\n    "properties": {\n      "conf": {\n        "additionalProperties": false,\n        "type": "object",\n        "description": "DNF module configuration values.",\n        "properties": {\n          "name": {\n            "type": "string"\n          },\n          "stream": {\n            "type": "string"\n          },\n          "state": {\n            "type": "string"\n          },\n          "profiles": {\n            "type": "array",\n            "items": {\n              "type": "string"\n            }\n          }\n        }\n      }\n    }\n  }\n}\n'})})]})}function a(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,o,n)=>{n.d(o,{R:()=>d,x:()=>r});var s=n(6540);const t={},i=s.createContext(t);function d(e){const o=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:o},e.children)}}}]);