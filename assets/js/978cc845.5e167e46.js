"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[1488],{3855:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>n,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"developer-guide/general/glossary","title":"Glossary","description":"| Term                 | Explanation                                                  |","source":"@site/docs/developer-guide/01-general/glossary.md","sourceDirName":"developer-guide/01-general","slug":"/developer-guide/general/glossary","permalink":"/docs/developer-guide/general/glossary","draft":false,"unlisted":false,"editUrl":"https://github.com/osbuild/osbuild.github.io/tree/main/docs/developer-guide/01-general/glossary.md","tags":[],"version":"current","frontMatter":{},"sidebar":"developer","previous":{"title":"Code style guidelines","permalink":"/docs/developer-guide/general/code-style"},"next":{"title":"Releasing","permalink":"/docs/developer-guide/general/releasing/"}}');var o=r(4848),i=r(8453);const n={},d="Glossary",l={},a=[];function c(e){const s={a:"a",h1:"h1",header:"header",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.header,{children:(0,o.jsx)(s.h1,{id:"glossary",children:"Glossary"})}),"\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Term"}),(0,o.jsx)(s.th,{children:"Explanation"})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"AMI"}),(0,o.jsx)(s.td,{children:"Amazon Machine Image (image type)"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Blueprint"}),(0,o.jsx)(s.td,{children:"Definition of customizations in the image"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Compose"}),(0,o.jsx)(s.td,{children:"Request from the user that produces one or more images. Images in a single compose are, in theory, the same, but for different platforms, such as Azure or AWS. In practice they are slightly different because every cloud platform requires a different package set and system configuration. osbuild-composer running the Weldr API can only create one image at a time, so one compose maps directly to one image build. It can map to multiple image builds when used with other APIs, such as the Koji API."})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Composer API"}),(0,o.jsx)(s.td,{children:"HTTP API meant as publicly accessible (over TCP). It was created specifically for osbuild-composer and does not support some Weldr features like blueprint management, but adds new features like building different distros and architectures."})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"GCP"}),(0,o.jsx)(s.td,{children:"Google Cloud Platform"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Image Build"}),(0,o.jsx)(s.td,{children:"One request from osbuild-composer to osbuild-worker. Its result is a single image."})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Image Type"}),(0,o.jsx)(s.td,{children:"Image file format usually associated with a specific use case. For example: AMI for AWS, qcow2 for OpenStack, etc."})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Manifest"}),(0,o.jsxs)(s.td,{children:["Input for the osbuild tool. It should be a precise definition of an image. See ",(0,o.jsx)(s.a,{href:"https://github.com/osbuild/osbuild/blob/main/docs/osbuild-manifest.5.rst",children:"https://github.com/osbuild/osbuild/blob/main/docs/osbuild-manifest.5.rst"})," for more information."]})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"osbuild"}),(0,o.jsx)(s.td,{children:"Low-level tool for building images. Not meant for end-user usage."})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"osbuild-composer"}),(0,o.jsx)(s.td,{children:"HTTP service for building OS images."})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"OSTree"}),(0,o.jsx)(s.td,{children:"Base technology for immutable OS images: Fedora IoT and RHEL Edge"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Repository overrides"}),(0,o.jsx)(s.td,{children:'osbuild-composer uses its own set of repository definitions. In case a user wants to use custom repositories, "overrides" can be created in /etc/osbuild-composer'})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Weldr API"}),(0,o.jsx)(s.td,{children:"Local HTTP API used for communication between composer-cli/cockpit-composer and osbuild-composer. It comes from the lorax-composer project."})]})]})]})]})}function u(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,s,r)=>{r.d(s,{R:()=>n,x:()=>d});var t=r(6540);const o={},i=t.createContext(o);function n(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);