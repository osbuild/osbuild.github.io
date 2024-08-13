"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[1639],{5329:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var n=o(5893),s=o(1151);const r={},i="org.osbuild.mkdir",d={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.mkdir",title:"org.osbuild.mkdir",description:"Create directories within the tree.",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.mkdir.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.mkdir",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.mkdir",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/osbuild.github.io/tree/main/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.mkdir.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"org.osbuild.machine-id",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.machine-id"},next:{title:"org.osbuild.mkfs.btrfs",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.mkfs.btrfs"}},a={},l=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"orgosbuildmkdir",children:"org.osbuild.mkdir"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Create directories within the tree."})}),"\n",(0,n.jsxs)(t.p,{children:["Can create one or more directories, optionally also the\nintermediate directories. The stage can gracefully handle\ndirectories that already exist.\nPlease note that the stage won't change the mode of existing\ndirectories. If you want to change the mode of an existing\ndirectory, you need to use the ",(0,n.jsx)(t.code,{children:"org.osbuild.chmod"})," stage.\nMode is applied only to newly created directories and umask\nvalue is taken into account.\nIn the initial version of this stage, there was a bug that caused\nthe stage to accept relative paths. This behaviour is kept for\nbackward compatibility, thus the following paths are equal:\n/path/to/directory\npath/to/directory\nHowever, using relative paths is strongly discouraged."]}),"\n",(0,n.jsx)(t.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:"{}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "options": {\n    "additionalProperties": false,\n    "properties": {\n      "paths": {\n        "type": "array",\n        "additionalItems": false,\n        "items": {\n          "type": "object",\n          "additionalProperties": false,\n          "required": [\n            "path"\n          ],\n          "properties": {\n            "path": {\n              "type": "string",\n              "pattern": "^\\\\/?(?!\\\\.\\\\.)((?!\\\\/\\\\.\\\\.\\\\/).)+$"\n            },\n            "mode": {\n              "type": "number",\n              "description": "Numeric octal mode"\n            },\n            "parents": {\n              "type": "boolean",\n              "description": "Create intermediate directories",\n              "default": false\n            },\n            "exist_ok": {\n              "type": "boolean",\n              "description": "Do not fail if the directory already exists",\n              "default": false\n            }\n          }\n        }\n      }\n    }\n  },\n  "devices": {\n    "type": "object",\n    "additionalProperties": true\n  },\n  "mounts": {\n    "type": "array"\n  }\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>d,a:()=>i});var n=o(7294);const s={},r=n.createContext(s);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);