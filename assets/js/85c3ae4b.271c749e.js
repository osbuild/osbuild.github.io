"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[4758],{5782:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>d,toc:()=>u});var o=s(5893),t=s(1151);const r={},i="org.osbuild.ostree.selinux",d={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.ostree.selinux",title:"org.osbuild.ostree.selinux",description:"Fix SELinux labels for an OSTree deployment\\[1\\].",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.ostree.selinux.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.ostree.selinux",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.ostree.selinux",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/osbuild.github.io/tree/main/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.ostree.selinux.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"org.osbuild.ostree.remotes",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.ostree.remotes"},next:{title:"org.osbuild.ostree.sign",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.ostree.sign"}},l={},u=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"orgosbuildostreeselinux",children:"org.osbuild.ostree.selinux"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Fix SELinux labels for an OSTree deployment[1]."})}),"\n",(0,o.jsxs)(n.p,{children:["[1] ",(0,o.jsx)(n.a,{href:"https://ostree.readthedocs.io/en/latest/manual/deployment/",children:"https://ostree.readthedocs.io/en/latest/manual/deployment/"})]}),"\n",(0,o.jsx)(n.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "additionalProperties": false,\n  "required": [\n    "deployment"\n  ],\n  "properties": {\n    "deployment": {\n      "additionalProperties": false,\n      "oneOf": [\n        {\n          "properties": {\n            "default": {\n              "enum": [\n                false\n              ]\n            }\n          },\n          "required": [\n            "osname",\n            "ref"\n          ]\n        },\n        {\n          "properties": {\n            "default": {\n              "enum": [\n                true\n              ]\n            }\n          },\n          "not": {\n            "anyOf": [\n              {\n                "required": [\n                  "osname"\n                ]\n              },\n              {\n                "required": [\n                  "ref"\n                ]\n              },\n              {\n                "required": [\n                  "serial"\n                ]\n              }\n            ]\n          }\n        }\n      ],\n      "properties": {\n        "osname": {\n          "description": "Name of the stateroot to be used in the deployment",\n          "type": "string"\n        },\n        "ref": {\n          "description": "OStree ref to create and use for deployment",\n          "type": "string"\n        },\n        "serial": {\n          "description": "The deployment serial (usually \'0\')",\n          "type": "number",\n          "default": 0\n        },\n        "default": {\n          "description": "Find and use the default ostree deployment",\n          "type": "boolean",\n          "default": false\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:"{}\n"})})]})}function c(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>i});var o=s(7294);const t={},r=o.createContext(t);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);