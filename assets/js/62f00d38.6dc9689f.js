"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[6043],{7693:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var t=n(5893),s=n(1151);const r={},i="Deploying osbuild-composer",c={id:"developer-guide/projects/osbuild-composer/DEPLOYING",title:"Deploying osbuild-composer",description:"osbuild-composer has currently has to be deployed in a virtual machine. The",source:"@site/docs/developer-guide/02-projects/osbuild-composer/DEPLOYING.md",sourceDirName:"developer-guide/02-projects/osbuild-composer",slug:"/developer-guide/projects/osbuild-composer/DEPLOYING",permalink:"/docs/developer-guide/projects/osbuild-composer/DEPLOYING",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/osbuild.github.io/tree/main/docs/developer-guide/02-projects/osbuild-composer/DEPLOYING.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"Contributing to osbuild-composer",permalink:"/docs/developer-guide/projects/osbuild-composer/CONTRIBUTING"},next:{title:"Hacking on osbuild-composer",permalink:"/docs/developer-guide/projects/osbuild-composer/HACKING"}},d={},a=[{value:"Target: QEMU",id:"target-qemu",level:2},{value:"Target: OpenStack",id:"target-openstack",level:2}];function l(e){const o={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"deploying-osbuild-composer",children:"Deploying osbuild-composer"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.em,{children:"osbuild-composer"})," has currently has to be deployed in a virtual machine. The\n",(0,t.jsx)(o.a,{href:"https://github.com/osbuild/osbuild-composer/tree/main/tools",children:"tools"})," subdirectory contains various scripts (those starting with\n",(0,t.jsx)(o.code,{children:"deploy-"}),") to deploy it into cloud-init-enabled environemnts. These scripts all\ntake the form:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:" ./tools/deploy-<target> <config> <userdata>\n"})}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"<config>"})," depends on the target (see below). ",(0,t.jsx)(o.code,{children:"<userdata>"})," is either a\ncloud-init ",(0,t.jsx)(o.a,{href:"https://cloudinit.readthedocs.io/en/latest/topics/format.html#cloud-config-data",children:"cloud-config file"}),", or a directory containing\nthis configuration, as documented by ",(0,t.jsx)(o.a,{href:"https://github.com/osbuild/osbuild-composer/tree/main/tools/gen-user-data",children:"./tools/gen-user-data"}),"."]}),"\n",(0,t.jsx)(o.h2,{id:"target-qemu",children:"Target: QEMU"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"tools/deploy-qemu"})," takes as ",(0,t.jsx)(o.code,{children:"<config>"})," the path to a qcow2 image and starts a\nephemeral virtual machine using qemu. The qcow2 file is not changed and all\nchanges to the virtual machine are lost after stopping qemu."]}),"\n",(0,t.jsxs)(o.p,{children:["Two ports are forwarded to the host via qemu's ",(0,t.jsx)(o.a,{href:"https://wiki.qemu.org/Documentation/Networking#User_Networking_.28SLIRP.29",children:"user networking"}),":\n22 \u2192 2222 and 443 \u2192 4430."]}),"\n",(0,t.jsxs)(o.p,{children:["See ",(0,t.jsx)(o.a,{href:"/docs/developer-guide/projects/osbuild-composer/HACKING",children:"HACKING.md"})," for how to use this target for running\nintegration tests locally."]}),"\n",(0,t.jsx)(o.h2,{id:"target-openstack",children:"Target: OpenStack"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"tools/deploy-openstack"})," uses the ",(0,t.jsx)(o.code,{children:"openstack"})," tool (from ",(0,t.jsx)(o.code,{children:"python3-openstack"}),")\nto deploy a machine in an OpenStack cluster. It expects that an ",(0,t.jsx)(o.a,{href:"https://docs.openstack.org/newton/admin-guide/common/cli-set-environment-variables-using-openstack-rc.html",children:"OpenStack RC\nfile"})," was sourced into the running shell:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:". openstackrc.sh\n"})}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"<config>"})," has to be a JSON-file containing configuration about what kind of\nmachine to create. For example:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-json",children:'{\n  "name": "composer-instance",\n  "image": "fedora-32-x86_64",\n  "flavor": "m1.small",\n  "network": "my-network-id"\n}\n'})})]})}function p(e={}){const{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,o,n)=>{n.d(o,{Z:()=>c,a:()=>i});var t=n(7294);const s={},r=t.createContext(s);function i(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);