"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[6128],{663:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>u,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"developer-guide/projects/osbuild/modules/stages/org.osbuild.selinux.config","title":"org.osbuild.selinux.config","description":"\x3c!--","source":"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.selinux.config.md","sourceDirName":"developer-guide/02-projects/osbuild/modules/stages","slug":"/developer-guide/projects/osbuild/modules/stages/org.osbuild.selinux.config","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.selinux.config","draft":false,"unlisted":false,"editUrl":"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.selinux.config.meta.json","tags":[],"version":"current","frontMatter":{"custom_edit_url":"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.selinux.config.meta.json"},"sidebar":"developer","previous":{"title":"org.osbuild.rpmkeys.import","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.rpmkeys.import"},"next":{"title":"org.osbuild.selinux","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.selinux"}}');var i=n(4848),t=n(8453);const r={custom_edit_url:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.selinux.config.meta.json"},l="org.osbuild.selinux.config",u={},c=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function d(e){const s={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"orgosbuildselinuxconfig",children:"org.osbuild.selinux.config"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Configure the SELinux state on the system."})}),"\n",(0,i.jsx)(s.p,{children:"The stage configures the SELinux state on the system in /etc/selinux/config.\nThe policy enforcement state and active policy type can be configured."}),"\n",(0,i.jsx)(s.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-json",children:'{\n  "additionalProperties": false,\n  "description": "SELinux state configuration.",\n  "properties": {\n    "state": {\n      "type": "string",\n      "description": "The active policy enforcement state.",\n      "enum": [\n        "enforcing",\n        "permissive",\n        "disabled"\n      ]\n    },\n    "type": {\n      "type": "string",\n      "description": "The active policy type.",\n      "enum": [\n        "targeted",\n        "minimum",\n        "mls"\n      ]\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(s.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-json",children:"{}\n"})})]})}function a(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>l});var o=n(6540);const i={},t=o.createContext(i);function r(e){const s=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(t.Provider,{value:s},e.children)}}}]);