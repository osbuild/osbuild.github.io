"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[2603],{6215:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"developer-guide/projects/osbuild/modules/stages/org.osbuild.nm.conf","title":"org.osbuild.nm.conf","description":"\x3c!--","source":"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.nm.conf.md","sourceDirName":"developer-guide/02-projects/osbuild/modules/stages","slug":"/developer-guide/projects/osbuild/modules/stages/org.osbuild.nm.conf","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.nm.conf","draft":false,"unlisted":false,"editUrl":"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.nm.conf.meta.json","tags":[],"version":"current","frontMatter":{"custom_edit_url":"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.nm.conf.meta.json"},"sidebar":"developer","previous":{"title":"org.osbuild.nginx.conf","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.nginx.conf"},"next":{"title":"org.osbuild.nm.conn","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.nm.conn"}}');var t=o(4848),i=o(8453);const r={custom_edit_url:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.nm.conf.meta.json"},a="org.osbuild.nm.conf",d={},l=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"orgosbuildnmconf",children:"org.osbuild.nm.conf"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Create NetworkManager configuration files."})}),"\n",(0,t.jsxs)(n.p,{children:["This stages allows to create NetworkManager configuration files in the\nlocation specified via ",(0,t.jsx)(n.code,{children:"path"})," with the ",(0,t.jsx)(n.code,{children:"settings"})," provided. Only a\nsubset of the all options are currently supported.\nThe stage will use ",(0,t.jsx)(n.code,{children:"true"})," and ",(0,t.jsx)(n.code,{children:"false"})," for boolean values and ",(0,t.jsx)(n.code,{children:","})," as\nlist separator.\nNetworkManger looks in the following locations for configuration files:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"/etc/NetworkManager/NetworkManager.conf"}),"\n",(0,t.jsx)(n.li,{children:"/etc/NetworkManager/conf.d/name.conf"}),"\n",(0,t.jsx)(n.li,{children:"/usr/lib/NetworkManager/conf.d/name.conf,\nand also in the following locations that very likely should not be used:"}),"\n",(0,t.jsx)(n.li,{children:"/run/NetworkManager/conf.d/name.conf\n-/var/lib/NetworkManager/NetworkManager-intern.conf"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "definitions": {\n    "device-list": {\n      "type": "array",\n      "minItems": 1,\n      "items": {\n        "type": "string"\n      }\n    },\n    "str-array": {\n      "type": "array",\n      "minItems": 1,\n      "items": {\n        "type": "string"\n      }\n    },\n    "device": {\n      "type": "object",\n      "additionalProperties": false,\n      "properties": {\n        "managed": {\n          "type": "boolean"\n        },\n        "wifi.scan-rand-mac-address": {\n          "type": "boolean"\n        }\n      }\n    },\n    "global-dns-domain": {\n      "type": "object",\n      "additionalProperties": false,\n      "required": [\n        "servers"\n      ],\n      "properties": {\n        "servers": {\n          "type": "array",\n          "minItems": 1,\n          "items": {\n            "type": "string"\n          }\n        }\n      }\n    }\n  },\n  "additionalProperties": false,\n  "required": [\n    "path",\n    "settings"\n  ],\n  "properties": {\n    "path": {\n      "type": "string"\n    },\n    "settings": {\n      "type": "object",\n      "additionalProperties": false,\n      "properties": {\n        "main": {\n          "type": "object",\n          "additionalProperties": false,\n          "properties": {\n            "no-auto-default": {\n              "$ref": "#/definitions/device-list"\n            },\n            "plugins": {\n              "$ref": "#/definitions/str-array"\n            }\n          }\n        },\n        "device": {\n          "type": "array",\n          "minItems": 1,\n          "items": {\n            "type": "object",\n            "additionalProperties": false,\n            "required": [\n              "config"\n            ],\n            "properties": {\n              "name": {\n                "type": "string"\n              },\n              "config": {\n                "$ref": "#/definitions/device"\n              }\n            }\n          }\n        },\n        "global-dns-domain": {\n          "type": "array",\n          "minItems": 1,\n          "items": {\n            "type": "object",\n            "additionalProperties": false,\n            "required": [\n              "name",\n              "config"\n            ],\n            "properties": {\n              "name": {\n                "type": "string"\n              },\n              "config": {\n                "$ref": "#/definitions/global-dns-domain"\n              }\n            }\n          }\n        },\n        "keyfile": {\n          "type": "object",\n          "additionalProperties": false,\n          "properties": {\n            "unmanaged-devices": {\n              "$ref": "#/definitions/device-list"\n            }\n          }\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"{}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>a});var s=o(6540);const t={},i=s.createContext(t);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);