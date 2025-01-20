"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[5769],{6356:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"user-guide/introduction","title":"Introduction","description":"With the Image Builder tool, you can create customized system images. Image builder automatically handles the setup details for each output type and is therefore easier to use and faster to work with than manual methods of image creation. You can access the Image Builder functionalities by using the command-line interface, or the Web UI interface. With Image Builder, you can create system images that are prepared for deployment, including system images prepared for clouds, and also images optimized for deployment on edge servers.","source":"@site/docs/user-guide/00-introduction.md","sourceDirName":"user-guide","slug":"/user-guide/introduction","permalink":"/docs/user-guide/introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/osbuild/osbuild.github.io/tree/main/docs/user-guide/00-introduction.md","tags":[],"version":"current","sidebarPosition":0,"frontMatter":{},"sidebar":"userguide","next":{"title":"Blueprint Reference","permalink":"/docs/user-guide/blueprint-reference"}}');var r=i(4848),n=i(8453);const d={},l="Introduction",o={},c=[{value:"Image Builder terminology",id:"image-builder-terminology",level:3},{value:"Image Builder output formats",id:"image-builder-output-formats",level:3}];function a(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,r.jsxs)(t.p,{children:["With the Image Builder tool, you can create customized system images. Image builder automatically handles the setup details for each output type and is therefore easier to use and faster to work with than manual methods of image creation. You can access the Image Builder functionalities by using the ",(0,r.jsx)(t.a,{href:"https://osbuild.org/docs/on-premises/commandline/",children:"command-line interface"}),", or the ",(0,r.jsx)(t.a,{href:"https://osbuild.org/docs/on-premises/installation/#web-ui",children:"Web UI"})," interface. With Image Builder, you can create system images that are prepared for deployment, including system images prepared for ",(0,r.jsx)(t.a,{href:"https://osbuild.org/docs/user-guide/uploading-cloud-images/",children:"clouds"}),", and also images optimized for deployment on ",(0,r.jsx)(t.a,{href:"https://osbuild.org/docs/on-premises/commandline/building-ostree-images",children:"edge"})," servers."]}),"\n",(0,r.jsxs)(t.p,{children:["This user guide refers primarily to the on ",(0,r.jsx)(t.a,{href:"/docs/on-premises/overview/",children:"premises version of Image Builder"}),". While many of the concepts are transferable to the service, at this point please refer to Red Hat's official documentation."]}),"\n",(0,r.jsx)(t.h3,{id:"image-builder-terminology",children:"Image Builder terminology"}),"\n",(0,r.jsx)(t.p,{children:"Image Builder uses the following concepts:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Blueprint"})}),"\n",(0,r.jsx)(t.p,{children:"A blueprint is a description of a customized system image. It lists the packages and customizations that will be part of the system. You can edit blueprints with customizations and save them as a particular version. When you create a system image from a blueprint, the image is associated with the blueprint in the image builder interface.\nCreate blueprints in the TOML format."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Compose"})}),"\n",(0,r.jsx)(t.p,{children:"Composes are individual builds of a system image, based on a specific version of a particular blueprint. Compose as a term refers to the system image, the logs from its creation, inputs, metadata, and the process itself."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Customizations"})}),"\n",(0,r.jsx)(t.p,{children:"Customizations are specifications for the image that are not packages. This includes users, groups, and SSH keys."}),"\n",(0,r.jsx)(t.h3,{id:"image-builder-output-formats",children:"Image Builder output formats"}),"\n",(0,r.jsx)(t.p,{children:"Image Builder can create images in multiple output formats shown in the following table."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Table 1. Image Builder output formats"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"CLI name"}),(0,r.jsx)(t.th,{children:"File extension"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"QEMU Image"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"qcow2"}),(0,r.jsx)(t.td,{children:".qcow2"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Disk Archive"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"tar"}),(0,r.jsx)(t.td,{children:".tar"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Amazon Web Services"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"raw"}),(0,r.jsx)(t.td,{children:".raw"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Microsoft Azure"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"vhd"}),(0,r.jsx)(t.td,{children:".vhd"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Google Cloud Platform"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"gce"}),(0,r.jsx)(t.td,{children:".tar.gz"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"VMware vSphere"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"vmdk"}),(0,r.jsx)(t.td,{children:".vmdk"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"VMware vSphere"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"ova"}),(0,r.jsx)(t.td,{children:".ova"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Openstack"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"openstack"}),(0,r.jsx)(t.td,{children:".qcow2"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"IoT Commit"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"iot-commit"}),(0,r.jsx)(t.td,{children:".tar"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"IoT Container"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"iot-container"}),(0,r.jsx)(t.td,{children:".tar"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"IoT Installer"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"iot-installer"}),(0,r.jsx)(t.td,{children:".iso"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"IoT Raw Image"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"iot-raw-image"}),(0,r.jsx)(t.td,{children:".raw.xz"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"IoT Simplified Installer"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"iot-simplified-installer"}),(0,r.jsx)(t.td,{children:".iso"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"IoT AMI"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"iot-ami"}),(0,r.jsx)(t.td,{children:".ami"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"IoT VMDK"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"iot-vmdk"}),(0,r.jsx)(t.td,{children:".vmdk"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Installer"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"image-installer"}),(0,r.jsx)(t.td,{children:"iso"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Installer"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"live-installer"}),(0,r.jsx)(t.td,{children:"iso"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Oracle Cloud Infrastructure"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"oci"}),(0,r.jsx)(t.td,{children:".qcow2"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"To check the supported types, run the command:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"$ composer-cli compose types\n"})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>d,x:()=>l});var s=i(6540);const r={},n=s.createContext(r);function d(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);