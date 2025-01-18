"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[8984],{3382:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"developer-guide/projects/osbuild/modules/stages/org.osbuild.mkdir","title":"org.osbuild.mkdir","description":"\x3c!--","source":"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.mkdir.md","sourceDirName":"developer-guide/02-projects/osbuild/modules/stages","slug":"/developer-guide/projects/osbuild/modules/stages/org.osbuild.mkdir","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.mkdir","draft":false,"unlisted":false,"editUrl":"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.mkdir.meta.json","tags":[],"version":"current","frontMatter":{"custom_edit_url":"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.mkdir.meta.json"},"sidebar":"developer","previous":{"title":"org.osbuild.machine-id","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.machine-id"},"next":{"title":"org.osbuild.mkfs.btrfs","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.mkfs.btrfs"}}');var o=n(4848),r=n(8453);const i={custom_edit_url:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.mkdir.meta.json"},a="org.osbuild.mkdir",d={},l=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"orgosbuildmkdir",children:"org.osbuild.mkdir"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Create directories within the tree or mount."})}),"\n",(0,o.jsxs)(t.p,{children:["Can create one or more directories, optionally also the\nintermediate directories. The stage can gracefully handle\ndirectories that already exist.\nPlease note that the stage won't change the mode of existing\ndirectories. If you want to change the mode of an existing\ndirectory, you need to use the ",(0,o.jsx)(t.code,{children:"org.osbuild.chmod"})," stage.\nMode is applied only to newly created directories and umask\nvalue is taken into account.\nIn the initial version of this stage, there was a bug that caused\nthe stage to accept relative paths. This behaviour is kept for\nbackward compatibility, thus the following paths are equal:\n/path/to/directory\npath/to/directory\nHowever, using relative paths is strongly discouraged."]}),"\n",(0,o.jsx)(t.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:"{}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n  "options": {\n    "additionalProperties": false,\n    "properties": {\n      "paths": {\n        "type": "array",\n        "additionalItems": false,\n        "items": {\n          "type": "object",\n          "additionalProperties": false,\n          "required": [\n            "path"\n          ],\n          "properties": {\n            "path": {\n              "anyOf": [\n                {\n                  "type": "string",\n                  "description": "Target path, if a tree",\n                  "pattern": "^\\\\/?(?!\\\\.\\\\.)((?!\\\\/\\\\.\\\\.\\\\/).)+$"\n                },\n                {\n                  "type": "string",\n                  "description": "Target path, if a mount",\n                  "pattern": "^mount://.+"\n                },\n                {\n                  "type": "string",\n                  "description": "Target path, if a tree",\n                  "pattern": "^tree://.+"\n                }\n              ]\n            },\n            "mode": {\n              "type": "number",\n              "description": "Numeric octal mode"\n            },\n            "parents": {\n              "type": "boolean",\n              "description": "Create intermediate directories",\n              "default": false\n            },\n            "exist_ok": {\n              "type": "boolean",\n              "description": "Do not fail if the directory already exists",\n              "default": false\n            }\n          }\n        }\n      }\n    }\n  },\n  "devices": {\n    "type": "object",\n    "additionalProperties": true\n  },\n  "mounts": {\n    "type": "array"\n  }\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var s=n(6540);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);