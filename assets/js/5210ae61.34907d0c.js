"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[6508],{7499:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var o=t(5893),r=t(1151);const n={},i="org.osbuild.lorax-script",l={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.lorax-script",title:"org.osbuild.lorax-script",description:"Run a lorax template script on the tree",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.lorax-script.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.lorax-script",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.lorax-script",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/osbuild.github.io/tree/main/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.lorax-script.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"org.osbuild.locale",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.locale"},next:{title:"org.osbuild.luks2.format",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.luks2.format"}},a={},d=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function c(e){const s={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"orgosbuildlorax-script",children:"org.osbuild.lorax-script"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.strong,{children:"Run a lorax template script on the tree"})}),"\n",(0,o.jsxs)(s.p,{children:["This stage can be use to run a lorax template script on the tree.\nThe location that is specified in ",(0,o.jsx)(s.code,{children:"path"})," will be interpreted to be\nrelative to ",(0,o.jsx)(s.code,{children:"/usr/share/lorax/templates.d"})," on the build root.\nThe use case for this stage is primarily to run the post install\nscripts to create bootable isos, provided by Lorax. Depending on\nthe script, ",(0,o.jsx)(s.code,{children:"basearch"}),", ",(0,o.jsx)(s.code,{children:"product"})," or both have to be specified.\nThe stage uses the ",(0,o.jsx)(s.code,{children:"osbuild.utils.lorax"})," helpers internally, so all\noperations supported by the helpers are supported by this stage.\nNB: This is only a subset of the Lorax ones, i.e. it is missing the\ncommands to create disks and images."]}),"\n",(0,o.jsx)(s.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-json",children:'{\n  "additionalProperties": false,\n  "required": [\n    "path"\n  ],\n  "properties": {\n    "path": {\n      "type": "string"\n    },\n    "basearch": {\n      "type": "string",\n      "default": "x86_64",\n      "description": "The basic architecture param to supply to the template"\n    },\n    "product": {\n      "type": "object",\n      "additionalProperties": false,\n      "properties": {\n        "name": {\n          "type": "string"\n        },\n        "version": {\n          "type": "string"\n        }\n      },\n      "libdir": {\n        "type": "string",\n        "default": "lib64"\n      }\n    }\n  }\n}\n'})}),"\n",(0,o.jsx)(s.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-json",children:"{}\n"})})]})}function p(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,s,t)=>{t.d(s,{Z:()=>l,a:()=>i});var o=t(7294);const r={},n=o.createContext(r);function i(e){const s=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(n.Provider,{value:s},e.children)}}}]);