"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[6650],{5667:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>n,metadata:()=>d,toc:()=>a});var s=t(5893),i=t(1151);const n={custom_edit_url:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.first-boot.meta.json"},r="org.osbuild.first-boot",d={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.first-boot",title:"org.osbuild.first-boot",description:"\x3c!--",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.first-boot.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.first-boot",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.first-boot",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.first-boot.meta.json",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.first-boot.meta.json"},sidebar:"developer",previous:{title:"org.osbuild.firewall",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.firewall"},next:{title:"org.osbuild.fix-bls",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.fix-bls"}},l={},a=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function u(e){const o={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.header,{children:(0,s.jsx)(o.h1,{id:"orgosbuildfirst-boot",children:"org.osbuild.first-boot"})}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.strong,{children:"Execute commands on first-boot"})}),"\n",(0,s.jsx)(o.p,{children:"Sequentially execute a list of commands on first-boot / instantiation.\nThis stage uses a logic similar to systemd's first-boot to execute a given\nscript only the first time the image is booted.\nAn empty flag file /etc/osbuild-first-boot is written to /etc and a systemd\nservice is enabled that is only run when the file exits, and will remove it\nbefore executing the given commands.\nIf the flag-file cannot be removed, the service fails without executing\nany further first-boot commands."}),"\n",(0,s.jsx)(o.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-json",children:'{\n  "additionalProperties": false,\n  "required": [\n    "commands"\n  ],\n  "properties": {\n    "commands": {\n      "type": "array",\n      "description": "The command lines to execute",\n      "items": {\n        "type": "string"\n      }\n    },\n    "wait_for_network": {\n      "type": "boolean",\n      "description": "Wait for the network to be up before executing",\n      "default": false\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(o.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-json",children:"{}\n"})})]})}function c(e={}){const{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},1151:(e,o,t)=>{t.d(o,{Z:()=>d,a:()=>r});var s=t(7294);const i={},n=s.createContext(i);function r(e){const o=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(n.Provider,{value:o},e.children)}}}]);