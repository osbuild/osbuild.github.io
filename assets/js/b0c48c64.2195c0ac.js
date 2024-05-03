"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[5062],{1346:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var t=s(5893),r=s(1151);const n={},i="org.osbuild.ostree.pull",l={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.ostree.pull",title:"org.osbuild.ostree.pull",description:"Pull OSTree commits into an existing repo",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.ostree.pull.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.ostree.pull",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.ostree.pull",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/saurus/tree/main/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.ostree.pull.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"org.osbuild.ostree.preptree",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.ostree.preptree"},next:{title:"org.osbuild.ostree.remotes",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.ostree.remotes"}},d={},u=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function c(e){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"orgosbuildostreepull",children:"org.osbuild.ostree.pull"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.strong,{children:"Pull OSTree commits into an existing repo"})}),"\n",(0,t.jsxs)(o.p,{children:["This stage pulls one or more commits, provided via\nthe ",(0,t.jsx)(o.code,{children:"commits"})," input into an existing repository at\na location specified via ",(0,t.jsx)(o.code,{children:"repo"}),".\nIf the returned a reference via ",(0,t.jsx)(o.code,{children:"ref"})," it will use\nthat to pull the commits."]}),"\n",(0,t.jsx)(o.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-json",children:"{}\n"})}),"\n",(0,t.jsx)(o.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-json",children:'{\n  "options": {\n    "additionalProperties": false,\n    "required": [\n      "repo"\n    ],\n    "properties": {\n      "repo": {\n        "description": "Location of the OSTree repo.",\n        "type": "string"\n      },\n      "remote": {\n        "description": "Add the \'remote\' to the ref spec",\n        "type": "string"\n      }\n    }\n  },\n  "inputs": {\n    "type": "object",\n    "additionalProperties": false,\n    "required": [\n      "commits"\n    ],\n    "properties": {\n      "commits": {\n        "type": "object",\n        "additionalProperties": true\n      }\n    }\n  }\n}\n'})})]})}function p(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,o,s)=>{s.d(o,{Z:()=>l,a:()=>i});var t=s(7294);const r={},n=t.createContext(r);function i(e){const o=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(n.Provider,{value:o},e.children)}}}]);