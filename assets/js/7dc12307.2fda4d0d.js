"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[2501],{819:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>l,frontMatter:()=>r,metadata:()=>d,toc:()=>p});var i=t(5893),o=t(1151);const r={},s="org.osbuild.qemu",d={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.qemu",title:"org.osbuild.qemu",description:"Convert a disk image to a different format.",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.qemu.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.qemu",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.qemu",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/saurus/tree/main/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.qemu.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"org.osbuild.pwquality.conf",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.pwquality.conf"},next:{title:"org.osbuild.resolv-conf",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.resolv-conf"}},a={},p=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"orgosbuildqemu",children:"org.osbuild.qemu"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Convert a disk image to a different format."})}),"\n",(0,i.jsxs)(n.p,{children:["Convert the disk image specified via the ",(0,i.jsx)(n.code,{children:"image"})," input to the\nformat specified in ",(0,i.jsx)(n.code,{children:"format"}),". Currently supported types are:\nqcow2, vdi, vmdk, vpc, vhdx.\nSome formats support format specific options:\nqcow2: The compatibility version can be specified via ",(0,i.jsx)(n.code,{children:"compat"}),".\nBuildhost commands used: ",(0,i.jsx)(n.code,{children:"qemu-img"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:"{}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "definitions": {\n    "qcow2": {\n      "description": "Create a qcow2 image",\n      "type": "object",\n      "required": [\n        "type"\n      ],\n      "additionalProperties": false,\n      "properties": {\n        "type": {\n          "description": "The type of the format, here \'qcow2\'",\n          "type": "string",\n          "enum": [\n            "qcow2"\n          ]\n        },\n        "compression": {\n          "description": "Enable/disable compression of the qcow2 image",\n          "type": "boolean",\n          "default": true\n        },\n        "compat": {\n          "description": "The qcow2-compatibility-version to use",\n          "type": "string"\n        }\n      }\n    },\n    "vdi": {\n      "description": "Create a vdi image",\n      "type": "object",\n      "required": [\n        "type"\n      ],\n      "additionalProperties": false,\n      "properties": {\n        "type": {\n          "description": "The type of the format, here \'vdi\'",\n          "type": "string",\n          "enum": [\n            "vdi"\n          ]\n        }\n      }\n    },\n    "vmdk": {\n      "description": "Create a vmdk image",\n      "type": "object",\n      "required": [\n        "type"\n      ],\n      "additionalProperties": false,\n      "properties": {\n        "type": {\n          "description": "The type of the format, here \'vmdk\'",\n          "type": "string",\n          "enum": [\n            "vmdk"\n          ]\n        },\n        "compression": {\n          "description": "Enable/disable compression of the vmdk image",\n          "type": "boolean",\n          "default": true\n        },\n        "subformat": {\n          "description": "VMDK flat extent format",\n          "type": "string",\n          "enum": [\n            "monolithicSparse",\n            "monolithicFlat",\n            "twoGbMaxExtentSparse",\n            "twoGbMaxExtentFlat",\n            "streamOptimized"\n          ]\n        }\n      }\n    },\n    "vpc": {\n      "description": "Create a vpc image",\n      "type": "object",\n      "required": [\n        "type"\n      ],\n      "additionalProperties": false,\n      "properties": {\n        "type": {\n          "description": "The type of the format, here \'vpc\'",\n          "type": "string",\n          "enum": [\n            "vpc"\n          ]\n        },\n        "force_size": {\n          "description": "Force disk size calculation to use the actual size specified, rather than using the nearest CHS-based calculation",\n          "type": "boolean",\n          "default": true\n        },\n        "subformat": {\n          "description": "Type of virtual hard disk format",\n          "type": "string",\n          "default": "fixed",\n          "enum": [\n            "fixed",\n            "dynamic"\n          ]\n        }\n      }\n    },\n    "vhdx": {\n      "description": "Create a vhdx image",\n      "type": "object",\n      "required": [\n        "type"\n      ],\n      "additionalProperties": false,\n      "properties": {\n        "type": {\n          "description": "The type of the format, here \'vhdx\'",\n          "type": "string",\n          "enum": [\n            "vhdx"\n          ]\n        }\n      }\n    }\n  },\n  "inputs": {\n    "type": "object",\n    "additionalProperties": false,\n    "required": [\n      "image"\n    ],\n    "properties": {\n      "image": {\n        "type": "object",\n        "additionalProperties": true\n      }\n    }\n  },\n  "options": {\n    "additionalProperties": false,\n    "required": [\n      "filename",\n      "format"\n    ],\n    "properties": {\n      "filename": {\n        "description": "Filename for resulting image",\n        "type": "string"\n      },\n      "format": {\n        "oneOf": [\n          {\n            "$ref": "#/definitions/qcow2"\n          },\n          {\n            "$ref": "#/definitions/vdi"\n          },\n          {\n            "$ref": "#/definitions/vmdk"\n          },\n          {\n            "$ref": "#/definitions/vpc"\n          },\n          {\n            "$ref": "#/definitions/vhdx"\n          }\n        ]\n      }\n    }\n  }\n}\n'})})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>s});var i=t(7294);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);