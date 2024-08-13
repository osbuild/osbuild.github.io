"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[8059],{3684:(e,i,o)=>{o.r(i),o.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var n=o(5893),t=o(1151);const s={},r="org.osbuild.ignition",d={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.ignition",title:"org.osbuild.ignition",description:"Setup ignition so it will be triggered on first boot.",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.ignition.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.ignition",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.ignition",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/osbuild.github.io/tree/main/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.ignition.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"org.osbuild.hostname",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.hostname"},next:{title:"org.osbuild.implantisomd5",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.implantisomd5"}},l={},u=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function a(e){const i={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"orgosbuildignition",children:"org.osbuild.ignition"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Setup ignition so it will be triggered on first boot."})}),"\n",(0,n.jsxs)(i.p,{children:["Create the file '/boot/ignition.firstboot' that will be used by grub,\nif the necessary ignition support is enabled, to create a variable to\nbe used in the kernel command line ('ignition_firstboot'). Via this\nvariable, if included in the actual kernel command line, the run of\nignition during early boot can be controlled: if grub detects the\naforementioned file to be present it will set 'ignition_firstboot'\nto \"ignition.firstboot\" which is the trigger for ignition to run.\nThe \"ignition-firstboot-complete.service\" will remove said file and\nthus preventing ignition to be run on the next boot.\nThe ",(0,n.jsx)(i.code,{children:"network"})," option can be used to overwrite the default network\nconfiguration, in case that ignition is run."]}),"\n",(0,n.jsx)(i.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-json",children:'{\n  "additionalProperties": false,\n  "properties": {\n    "network": {\n      "type": "array",\n      "description": "Overwrite default network connection",\n      "items": {\n        "type": "string"\n      }\n    }\n  }\n}\n'})}),"\n",(0,n.jsx)(i.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-json",children:"{}\n"})})]})}function c(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},1151:(e,i,o)=>{o.d(i,{Z:()=>d,a:()=>r});var n=o(7294);const t={},s=n.createContext(t);function r(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);