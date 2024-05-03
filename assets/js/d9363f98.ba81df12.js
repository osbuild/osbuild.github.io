"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[8492],{9680:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var l=o(5893),n=o(1151);const t={},r="org.osbuild.locale",i={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.locale",title:"org.osbuild.locale",description:"Set system language.",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.locale.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.locale",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.locale",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/saurus/tree/main/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.locale.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"org.osbuild.livesys",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.livesys"},next:{title:"org.osbuild.lorax-script",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.lorax-script"}},d={},c=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function a(e){const s={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h1,{id:"orgosbuildlocale",children:"org.osbuild.locale"}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Set system language."})}),"\n",(0,l.jsxs)(s.p,{children:["Sets the system language to the given ",(0,l.jsx)(s.code,{children:"language"}),', which must be a valid locale\nidentifier, like "en_US.UTF-8".\nRemoves ',(0,l.jsx)(s.code,{children:"/etc/locale.conf"})," and then uses ",(0,l.jsx)(s.code,{children:"systemd-firstboot"})," from the buildhost,\nwith the ",(0,l.jsx)(s.code,{children:"--locale"})," flag, which will write a new ",(0,l.jsx)(s.code,{children:"/etc/locale.conf"})," in the\ntarget system with ",(0,l.jsx)(s.code,{children:"LANG=\\{language\\}"}),"."]}),"\n",(0,l.jsx)(s.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-json",children:'{\n  "additionalProperties": false,\n  "required": [\n    "language"\n  ],\n  "properties": {\n    "language": {\n      "type": "string",\n      "description": "Locale identifier (like \'en_US.UTF-8\') for system LANG"\n    }\n  }\n}\n'})}),"\n",(0,l.jsx)(s.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-json",children:"{}\n"})})]})}function u(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},1151:(e,s,o)=>{o.d(s,{Z:()=>i,a:()=>r});var l=o(7294);const n={},t=l.createContext(n);function r(e){const s=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),l.createElement(t.Provider,{value:s},e.children)}}}]);