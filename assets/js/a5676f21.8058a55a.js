"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[6956],{1606:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var t=o(5893),n=o(1151);const r={},i="org.osbuild.tuned",l={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.tuned",title:"org.osbuild.tuned",description:"Sets active TuneD profile.",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.tuned.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.tuned",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.tuned",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/osbuild.github.io/tree/main/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.tuned.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"org.osbuild.truncate",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.truncate"},next:{title:"org.osbuild.udev.rules",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.udev.rules"}},d={},u=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function a(e){const s={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"orgosbuildtuned",children:"org.osbuild.tuned"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Sets active TuneD profile."})}),"\n",(0,t.jsx)(s.p,{children:"The stage calls sets active TuneD profile to 'profiles' as if one called\n'tuned-adm profile <profile>'. In the most usual case, only one active profile\nis set. However in case multiple profiles are provided, then TuneD tries to\nmerge all profiles into active configuration. In case of conflicting values,\nthe value from the latest profile is used."}),"\n",(0,t.jsx)(s.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "additionalProperties": false,\n  "required": [\n    "profiles"\n  ],\n  "description": "Manually set TuneD profile.",\n  "properties": {\n    "profiles": {\n      "type": "array",\n      "description": "TuneD profile to activate. If multiple profiles are provided, TuneD will try to merge them.",\n      "minItems": 1,\n      "items": {\n        "type": "string"\n      }\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(s.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:"{}\n"})})]})}function c(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1151:(e,s,o)=>{o.d(s,{Z:()=>l,a:()=>i});var t=o(7294);const n={},r=t.createContext(n);function i(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);