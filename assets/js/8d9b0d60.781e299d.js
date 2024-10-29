"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[2810],{7675:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var t=i(5893),r=i(1151);const s={custom_edit_url:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.containers.unit.create.meta.json"},o="org.osbuild.containers.unit.create",a={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.containers.unit.create",title:"org.osbuild.containers.unit.create",description:"\x3c!--",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.containers.unit.create.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.containers.unit.create",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.containers.unit.create",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.containers.unit.create.meta.json",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.containers.unit.create.meta.json"},sidebar:"developer",previous:{title:"org.osbuild.containers.storage.conf",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.containers.storage.conf"},next:{title:"org.osbuild.copy",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.copy"}},l={},d=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function c(n){const e={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"orgosbuildcontainersunitcreate",children:"org.osbuild.containers.unit.create"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Create a podman systemd unit file"})}),"\n",(0,t.jsxs)(e.p,{children:["This stage allows to create Podman systemd (quadlet) unit files. The ",(0,t.jsx)(e.code,{children:"filename"})," property\nspecifies the, '.service' or '.mount' file to be added. These names are\nvalidated using the, same rules as specified by podman-systemd.unit(5) and they\nmust contain the, '.container', '.volume' or '.network' suffix (other types of unit files\nare not supported). 'unit-path' determines determine the unit load path."]}),"\n",(0,t.jsx)(e.p,{children:"The Unit configuration can currently specify the following subset\nof options:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["'Unit' section","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"'Description' - string"}),"\n",(0,t.jsx)(e.li,{children:"'ConditionPathExists' - string"}),"\n",(0,t.jsx)(e.li,{children:"'ConditionPathIsDirectory' - string"}),"\n",(0,t.jsx)(e.li,{children:"'DefaultDependencies' - bool"}),"\n",(0,t.jsx)(e.li,{children:"'Requires' - [strings]"}),"\n",(0,t.jsx)(e.li,{children:"'Wants' - [strings]"}),"\n",(0,t.jsx)(e.li,{children:"'After' - [strings]"}),"\n",(0,t.jsx)(e.li,{children:"'Before' - [strings]"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["'Service' section","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"'Restart' - string"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["'Container' section","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"'Image' - string"}),"\n",(0,t.jsx)(e.li,{children:"'Exec' - string"}),"\n",(0,t.jsx)(e.li,{children:"'Volume' - [string]"}),"\n",(0,t.jsx)(e.li,{children:"'User' - string"}),"\n",(0,t.jsx)(e.li,{children:"'Group' - string"}),"\n",(0,t.jsx)(e.li,{children:"'AddDevice' - string"}),"\n",(0,t.jsx)(e.li,{children:"'Environment' - [object]"}),"\n",(0,t.jsx)(e.li,{children:"'Network' - string"}),"\n",(0,t.jsx)(e.li,{children:"'WorkingDir' - string"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["'Volume' section","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"'VolumeName' - string"}),"\n",(0,t.jsx)(e.li,{children:"'Driver' - string"}),"\n",(0,t.jsx)(e.li,{children:"'Image' - string"}),"\n",(0,t.jsx)(e.li,{children:"'User' - string"}),"\n",(0,t.jsx)(e.li,{children:"'Group' - string"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["'Network' section","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"'Gateway' - string"}),"\n",(0,t.jsx)(e.li,{children:"'DNS' - string"}),"\n",(0,t.jsx)(e.li,{children:"'IPRange' - string"}),"\n",(0,t.jsx)(e.li,{children:"'Subnet' - string"}),"\n",(0,t.jsx)(e.li,{children:"'Driver' - string"}),"\n",(0,t.jsx)(e.li,{children:"'NetworkName' - string"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["'Install' section","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"'WantedBy' - [string]"}),"\n",(0,t.jsx)(e.li,{children:"'RequiredBy' - [string]"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n  "additionalProperties": false,\n  "required": [\n    "filename",\n    "config"\n  ],\n  "properties": {\n    "filename": {\n      "type": "string",\n      "pattern": "^[\\\\w:.\\\\\\\\-]+[@]{0,1}[\\\\w:.\\\\\\\\-]*\\\\.(container|volume|network)$"\n    },\n    "unit-path": {\n      "type": "string",\n      "enum": [\n        "usr",\n        "etc"\n      ],\n      "default": "usr",\n      "description": "Define the system load path"\n    },\n    "config": {\n      "additionalProperties": false,\n      "type": "object",\n      "oneOf": [\n        {\n          "required": [\n            "Unit",\n            "Container",\n            "Install"\n          ],\n          "not": {\n            "anyOf": [\n              {\n                "required": [\n                  "Volume"\n                ]\n              },\n              {\n                "required": [\n                  "Network"\n                ]\n              }\n            ]\n          }\n        },\n        {\n          "required": [\n            "Volume"\n          ],\n          "not": {\n            "anyOf": [\n              {\n                "required": [\n                  "Container"\n                ]\n              },\n              {\n                "required": [\n                  "Network"\n                ]\n              }\n            ]\n          }\n        },\n        {\n          "required": [\n            "Network"\n          ],\n          "not": {\n            "anyOf": [\n              {\n                "required": [\n                  "Container"\n                ]\n              },\n              {\n                "required": [\n                  "Volume"\n                ]\n              }\n            ]\n          }\n        }\n      ],\n      "description": "Configuration for a \'.container\' unit.",\n      "properties": {\n        "Unit": {\n          "additionalProperties": false,\n          "type": "object",\n          "description": "\'Unit\' configuration section of a unit file.",\n          "properties": {\n            "Description": {\n              "type": "string"\n            },\n            "Wants": {\n              "type": "array",\n              "items": {\n                "type": "string"\n              }\n            },\n            "After": {\n              "type": "array",\n              "items": {\n                "type": "string"\n              }\n            },\n            "Before": {\n              "type": "array",\n              "items": {\n                "type": "string"\n              }\n            },\n            "Requires": {\n              "type": "array",\n              "items": {\n                "type": "string"\n              }\n            },\n            "ConditionPathExists": {\n              "type": "array",\n              "items": {\n                "type": "string"\n              }\n            },\n            "ConditionPathIsDirectory": {\n              "type": "array",\n              "items": {\n                "type": "string"\n              }\n            },\n            "DefaultDependencies": {\n              "type": "boolean"\n            }\n          }\n        },\n        "Service": {\n          "additionalProperties": false,\n          "type": "object",\n          "description": "\'Service\' configuration section of a unit file.",\n          "properties": {\n            "Restart": {\n              "type": "string",\n              "enum": [\n                "no",\n                "on-success",\n                "on-failure",\n                "on-abnormal",\n                "on-watchdog",\n                "on-abort",\n                "always"\n              ]\n            }\n          }\n        },\n        "Container": {\n          "additionalProperties": false,\n          "type": "object",\n          "description": "\'Container\' configuration section of a unit file.",\n          "required": [\n            "Image"\n          ],\n          "properties": {\n            "Environment": {\n              "type": "array",\n              "description": "Sets environment variables for executed process.",\n              "items": {\n                "type": "object",\n                "description": "Sets environment variables for executed process.",\n                "additionalProperties": false,\n                "properties": {\n                  "key": {\n                    "type": "string",\n                    "pattern": "^[A-Za-z_][A-Za-z0-9_]*"\n                  },\n                  "value": {\n                    "type": "string"\n                  }\n                }\n              }\n            },\n            "Image": {\n              "description": "Container Image to use",\n              "type": "string"\n            },\n            "Exec": {\n              "description": "Command to execute in container",\n              "type": "string"\n            },\n            "Volume": {\n              "description": "Volumes to use",\n              "type": "array",\n              "items": {\n                "type": "string"\n              }\n            },\n            "User": {\n              "description": "Run as user",\n              "type": "string"\n            },\n            "Group": {\n              "description": "Run as group",\n              "type": "string"\n            },\n            "AddDevice": {\n              "description": "Add device to container",\n              "type": "string"\n            },\n            "Network": {\n              "description": "What network option to use",\n              "type": "string"\n            },\n            "WorkingDir": {\n              "description": "Working directory for initial process",\n              "type": "string"\n            }\n          }\n        },\n        "Volume": {\n          "additionalProperties": false,\n          "type": "object",\n          "description": "\'Volume\' configuration section of a unit file.",\n          "properties": {\n            "VolumeName": {\n              "description": "Override volume name",\n              "type": "string"\n            },\n            "Driver": {\n              "description": "What volume driver to use",\n              "type": "string"\n            },\n            "Image": {\n              "description": "Image to use if driver is image",\n              "type": "string"\n            },\n            "User": {\n              "description": "User to use as owner of the volume",\n              "type": "string"\n            },\n            "Group": {\n              "description": "Group to use as owner of the volume",\n              "type": "string"\n            }\n          }\n        },\n        "Network": {\n          "additionalProperties": false,\n          "type": "object",\n          "description": "\'Network\' configuration section of a unit file.",\n          "properties": {\n            "Gateway": {\n              "description": "Addres of gaterway",\n              "type": "boolean"\n            },\n            "DNS": {\n              "description": "Address of DNS server",\n              "type": "boolean"\n            },\n            "IPRange": {\n              "description": "Range to allocate IPs from",\n              "type": "boolean"\n            },\n            "Subnet": {\n              "description": "Subnet in CIDR notation",\n              "type": "boolean"\n            },\n            "Driver": {\n              "description": "What network driver to use",\n              "type": "boolean"\n            },\n            "NetworkName": {\n              "description": "Override network name",\n              "type": "boolean"\n            }\n          }\n        },\n        "Install": {\n          "additionalProperties": false,\n          "type": "object",\n          "description": "\'Install\' configuration section of a unit file.",\n          "properties": {\n            "WantedBy": {\n              "type": "array",\n              "items": {\n                "type": "string"\n              }\n            },\n            "RequiredBy": {\n              "type": "array",\n              "items": {\n                "type": "string"\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(e.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:"{}\n"})})]})}function u(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}},1151:(n,e,i)=>{i.d(e,{Z:()=>a,a:()=>o});var t=i(7294);const r={},s=t.createContext(r);function o(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);