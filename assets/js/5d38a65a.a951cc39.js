"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[2712],{6193:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var s=t(5893),r=t(1151);const o={},i="org.osbuild.fstab",d={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.fstab",title:"org.osbuild.fstab",description:"Create /etc/fstab entries for filesystems",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.fstab.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.fstab",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.fstab",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/osbuild.github.io/tree/main/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.fstab.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"org.osbuild.fix-bls",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.fix-bls"},next:{title:"org.osbuild.gcp.guest-agent.conf",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.gcp.guest-agent.conf"}},a={},l=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"orgosbuildfstab",children:"org.osbuild.fstab"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Create /etc/fstab entries for filesystems"})}),"\n",(0,s.jsxs)(n.p,{children:["Each filesystem item must have at least the fs_spec, i.e ",(0,s.jsx)(n.code,{children:"uuid"}),",\n",(0,s.jsx)(n.code,{children:"label"}),", ",(0,s.jsx)(n.code,{children:"partlabel"})," or ",(0,s.jsx)(n.code,{children:"device"})," and a ",(0,s.jsx)(n.code,{children:"path"})," (mount point).\nThis stage replaces /etc/fstab, removing any existing entries.\nNB: The ostree configuration options are experimental and might\nbe replaced with a different mechanism in the near future."]}),"\n",(0,s.jsx)(n.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "additionalProperties": false,\n  "required": [\n    "filesystems"\n  ],\n  "properties": {\n    "ostree": {\n      "type": "object",\n      "additionalProperties": false,\n      "required": [\n        "deployment"\n      ],\n      "properties": {\n        "deployment": {\n          "type": "object",\n          "additionalProperties": false,\n          "oneOf": [\n            {\n              "properties": {\n                "default": {\n                  "enum": [\n                    false\n                  ]\n                }\n              },\n              "required": [\n                "osname",\n                "ref"\n              ]\n            },\n            {\n              "properties": {\n                "default": {\n                  "enum": [\n                    true\n                  ]\n                }\n              },\n              "not": {\n                "anyOf": [\n                  {\n                    "required": [\n                      "osname"\n                    ]\n                  },\n                  {\n                    "required": [\n                      "ref"\n                    ]\n                  },\n                  {\n                    "required": [\n                      "serial"\n                    ]\n                  }\n                ]\n              }\n            }\n          ],\n          "properties": {\n            "osname": {\n              "description": "Name of the stateroot to be used in the deployment",\n              "type": "string"\n            },\n            "ref": {\n              "description": "OStree ref to create and use for deployment",\n              "type": "string"\n            },\n            "serial": {\n              "description": "The deployment serial (usually \'0\')",\n              "type": "number",\n              "default": 0\n            },\n            "default": {\n              "description": "Find and use the default ostree deployment",\n              "type": "boolean",\n              "default": false\n            }\n          }\n        }\n      }\n    },\n    "filesystems": {\n      "type": "array",\n      "description": "array of filesystem objects",\n      "items": {\n        "type": "object",\n        "oneOf": [\n          {\n            "required": [\n              "device",\n              "path"\n            ]\n          },\n          {\n            "required": [\n              "uuid",\n              "path"\n            ]\n          },\n          {\n            "required": [\n              "label",\n              "path"\n            ]\n          },\n          {\n            "required": [\n              "partlabel",\n              "path"\n            ]\n          }\n        ],\n        "properties": {\n          "device": {\n            "description": "Device node",\n            "type": "string"\n          },\n          "uuid": {\n            "description": "Filesystem UUID",\n            "type": "string"\n          },\n          "label": {\n            "description": "Filesystem label",\n            "type": "string"\n          },\n          "partlabel": {\n            "description": "Partition label.",\n            "type": "string"\n          },\n          "path": {\n            "description": "Filesystem mountpoint",\n            "type": "string"\n          },\n          "vfs_type": {\n            "description": "Filesystem type",\n            "type": "string",\n            "default": "none"\n          },\n          "options": {\n            "description": "Filesystem options (comma-separated)",\n            "type": "string",\n            "default": "defaults"\n          },\n          "freq": {\n            "description": "dump(8) period in days",\n            "type": "number",\n            "default": 0\n          },\n          "passno": {\n            "description": "pass number on parallel fsck(8)",\n            "type": "number",\n            "default": 0\n          }\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:"{}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>i});var s=t(7294);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);