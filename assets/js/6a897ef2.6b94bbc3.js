"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[2782],{3485:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var n=t(5893),o=t(1151);const i={},l="org.osbuild.selinux",r={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.selinux",title:"org.osbuild.selinux",description:"Set SELinux file contexts",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.selinux.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.selinux",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.selinux",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/osbuild.github.io/tree/main/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.selinux.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"org.osbuild.selinux.config",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.selinux.config"},next:{title:"org.osbuild.sfdisk",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.sfdisk"}},d={},c=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function u(e){const s={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"orgosbuildselinux",children:"org.osbuild.selinux"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Set SELinux file contexts"})}),"\n",(0,n.jsxs)(s.p,{children:["Sets correct SELinux labels for every file in the tree, according to the\nSELinux policy installed inside the tree.\nUses the host's ",(0,n.jsx)(s.code,{children:"setfiles"})," program and the tree's ",(0,n.jsx)(s.code,{children:"file_contexts"}),', usually\n/etc/selinux/<SELINUXTYPE>/contexts/files/file_contexts\nwhere <SELINUXTYPE> is the value set in /etc/selinux/config (usually "targeted"\nbut may also be "minimum" or "mls").\nThis stage may set or modify xattrs for any file inside the tree, but should\nnot need to create files, modify file contents, or read any files other than\n',(0,n.jsx)(s.code,{children:"file_contexts"}),".\nThis stage should run after all other stages that create (or move) files, since\nlabels for newly-created files are determined by the host's SELinux policy and\nmay not match the tree's policy."]}),"\n",(0,n.jsx)(s.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:"{}\n"})}),"\n",(0,n.jsx)(s.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'{\n  "options": {\n    "additionalProperties": false,\n    "required": [\n      "file_contexts"\n    ],\n    "properties": {\n      "file_contexts": {\n        "type": "string",\n        "description": "Path to the active SELinux policy\'s `file_contexts`"\n      },\n      "exclude_paths": {\n        "type": "array",\n        "description": "Paths to exclude when setting labels via file_contexts",\n        "items": {\n          "type": "string"\n        }\n      },\n      "labels": {\n        "type": "object",\n        "description": "Labels to set of the specified files or folders",\n        "items": {\n          "type": "object"\n        }\n      },\n      "force_autorelabel": {\n        "type": "boolean",\n        "description": "Do not use. Forces auto-relabelling on first boot.",\n        "default": false\n      }\n    }\n  },\n  "devices": {\n    "type": "object",\n    "additionalProperties": true\n  },\n  "mounts": {\n    "type": "array"\n  }\n}\n'})})]})}function a(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},1151:(e,s,t)=>{t.d(s,{Z:()=>r,a:()=>l});var n=t(7294);const o={},i=n.createContext(o);function l(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);