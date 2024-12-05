"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[1353],{5325:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"developer-guide/projects/osbuild/modules/stages/org.osbuild.containers.storage.conf","title":"org.osbuild.containers.storage.conf","description":"\x3c!--","source":"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.containers.storage.conf.md","sourceDirName":"developer-guide/02-projects/osbuild/modules/stages","slug":"/developer-guide/projects/osbuild/modules/stages/org.osbuild.containers.storage.conf","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.containers.storage.conf","draft":false,"unlisted":false,"editUrl":"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.containers.storage.conf.meta.json","tags":[],"version":"current","frontMatter":{"custom_edit_url":"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.containers.storage.conf.meta.json"},"sidebar":"developer","previous":{"title":"org.osbuild.container-deploy","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.container-deploy"},"next":{"title":"org.osbuild.containers.unit.create","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.containers.unit.create"}}');var s=o(4848),r=o(8453);const i={custom_edit_url:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.containers.storage.conf.meta.json"},a="org.osbuild.containers.storage.conf",c={},d=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"orgosbuildcontainersstorageconf",children:"org.osbuild.containers.storage.conf"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Edit containers-storage.conf(5) files."})}),"\n",(0,s.jsxs)(n.p,{children:["This stage can be used to create or modify ",(0,s.jsx)(n.code,{children:"containers-storage.conf"}),"\nconfiguration files. The default strategy is to merge the specified\noptions with the existing options."]}),"\n",(0,s.jsx)(n.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "definitions": {\n    "storage": {\n      "type": "object",\n      "additionalProperties": false,\n      "minProperties": 1,\n      "properties": {\n        "driver": {\n          "description": "container storage driver.",\n          "type": "string",\n          "enum": [\n            "overlay",\n            "vfs",\n            "devmapper",\n            "aufs",\n            "btrfs",\n            "zfs"\n          ]\n        },\n        "graphroot": {\n          "description": "container storage graph directory.",\n          "type": "string"\n        },\n        "runroot": {\n          "description": "container storage run directory.",\n          "type": "string"\n        },\n        "transient_store": {\n          "description": "Make the container store not persist across reboot.",\n          "type": "boolean"\n        },\n        "options": {\n          "$ref": "#/definitions/storage-options"\n        }\n      }\n    },\n    "storage-options": {\n      "type": "object",\n      "additionalProperties": false,\n      "minProperties": 1,\n      "properties": {\n        "additionalimagestores": {\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "pull_options": {\n          "$ref": "#/definitions/storage-options-pulloptions"\n        },\n        "overlay": {\n          "$ref": "#/definitions/storage-options-overlay"\n        }\n      }\n    },\n    "storage-options-pulloptions": {\n      "type": "object",\n      "additionalProperties": false,\n      "minProperties": 1,\n      "properties": {\n        "enable_partial_images": {\n          "type": "string",\n          "enum": [\n            "true",\n            "false"\n          ]\n        },\n        "use_hard_links": {\n          "type": "string",\n          "enum": [\n            "true",\n            "false"\n          ]\n        },\n        "convert_images": {\n          "type": "string",\n          "enum": [\n            "true",\n            "false"\n          ]\n        }\n      }\n    },\n    "storage-options-overlay": {\n      "type": "object",\n      "additionalProperties": false,\n      "minProperties": 1,\n      "properties": {\n        "mountopt": {\n          "type": "string"\n        }\n      }\n    }\n  },\n  "additionalProperties": false,\n  "required": [\n    "config"\n  ],\n  "properties": {\n    "filename": {\n      "type": "string",\n      "description": "location of the configuration file.",\n      "default": "/etc/containers/storage.conf",\n      "enum": [\n        "/etc/containers/storage.conf",\n        "/usr/share/containers/storage.conf"\n      ]\n    },\n    "filebase": {\n      "type": "string",\n      "description": "Read the base configuration from this file."\n    },\n    "comment": {\n      "type": "array",\n      "items": {\n        "type": "string"\n      }\n    },\n    "config": {\n      "additionalProperties": false,\n      "type": "object",\n      "description": "storage configuration",\n      "minProperties": 1,\n      "properties": {\n        "storage": {\n          "$ref": "#/definitions/storage"\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:"{}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>a});var t=o(6540);const s={},r=t.createContext(s);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);