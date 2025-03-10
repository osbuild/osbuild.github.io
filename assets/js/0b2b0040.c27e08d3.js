"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[6633],{4097:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"developer-guide/projects/image-builder/usage","title":"Usage","description":"After installation you probably want to use image-builder. A general workflow would be to find the image type you want to build and then build it.","source":"@site/docs/developer-guide/02-projects/image-builder/01-usage.md","sourceDirName":"developer-guide/02-projects/image-builder","slug":"/developer-guide/projects/image-builder/usage","permalink":"/docs/developer-guide/projects/image-builder/usage","draft":false,"unlisted":false,"editUrl":"https://github.com/osbuild/osbuild.github.io/tree/main/docs/developer-guide/02-projects/image-builder/01-usage.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"developer","previous":{"title":"Installation","permalink":"/docs/developer-guide/projects/image-builder/installation"},"next":{"title":"Frequently Asked Questions","permalink":"/docs/developer-guide/projects/image-builder/faq"}}');var a=n(4848),s=n(8453);const t={},l="Usage",o={},d=[{value:"<code>image-builder list-images</code>",id:"image-builder-list-images",level:2},{value:"Format",id:"format",level:3},{value:"Filtering",id:"filtering",level:3},{value:"Distribution",id:"distribution",level:3},{value:"Type",id:"type",level:3},{value:"Architecture",id:"architecture",level:3},{value:"Combinations",id:"combinations",level:3},{value:"<code>image-builder build</code>",id:"image-builder-build",level:2}];function c(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.header,{children:(0,a.jsx)(i.h1,{id:"usage",children:"Usage"})}),"\n",(0,a.jsxs)(i.p,{children:["After ",(0,a.jsx)(i.a,{href:"/docs/developer-guide/projects/image-builder/installation",children:"installation"})," you probably want to use ",(0,a.jsx)(i.code,{children:"image-builder"}),". A general workflow would be to find the image type you want to build and then build it."]}),"\n",(0,a.jsxs)(i.p,{children:["Let's take a look at the available ",(0,a.jsx)(i.code,{children:"x86_64"})," image types for Fedora 41 and build one of them."]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-console",children:"$ image-builder list-images --filter arch:x86_64 --filter distro:fedora-41\nfedora-41 type:ami arch:x86_64\nfedora-41 type:container arch:x86_64\nfedora-41 type:image-installer arch:x86_64\nfedora-41 type:iot-bootable-container arch:x86_64\nfedora-41 type:iot-commit arch:x86_64\nfedora-41 type:iot-container arch:x86_64\nfedora-41 type:iot-installer arch:x86_64\nfedora-41 type:iot-qcow2-image arch:x86_64\nfedora-41 type:iot-raw-image arch:x86_64\nfedora-41 type:iot-simplified-installer arch:x86_64\nfedora-41 type:live-installer arch:x86_64\nfedora-41 type:minimal-raw arch:x86_64\nfedora-41 type:oci arch:x86_64\nfedora-41 type:openstack arch:x86_64\nfedora-41 type:ova arch:x86_64\nfedora-41 type:qcow2 arch:x86_64\nfedora-41 type:vhd arch:x86_64\nfedora-41 type:vmdk arch:x86_64\nfedora-41 type:wsl arch:x86_64\n$ sudo image-builder build --distro fedora-41 qcow2\n# ...\n"})}),"\n",(0,a.jsx)(i.h2,{id:"image-builder-list-images",children:(0,a.jsx)(i.code,{children:"image-builder list-images"})}),"\n",(0,a.jsxs)(i.p,{children:["The ",(0,a.jsx)(i.code,{children:"list-images"})," command for ",(0,a.jsx)(i.code,{children:"image-builder"})," lists the available built-in image types that can be built for the ",(0,a.jsx)(i.a,{href:"/docs/developer-guide/projects/image-builder/faq#built-in-distributions",children:"built-in distributions"}),"."]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-console",children:"$ image-builder list-images\n# ... long list ...\n"})}),"\n",(0,a.jsx)(i.h3,{id:"format",children:"Format"}),"\n",(0,a.jsxs)(i.p,{children:["The output format used by ",(0,a.jsx)(i.code,{children:"list-images"})," can be swapped with the ",(0,a.jsx)(i.code,{children:"--format"})," flag. Available types are ",(0,a.jsx)(i.code,{children:"text"})," (for display in a terminal) and ",(0,a.jsx)(i.code,{children:"json"})," which can be useful to consume programmatically:"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-console",children:'$ image-builder list-images --format=json | jq \'.[0]\'\n{\n  "distro": {\n    "name": "centos-9"\n  },\n  "arch": {\n    "name": "aarch64"\n  },\n  "image_type": {\n    "name": "ami"\n  }\n}\n'})}),"\n",(0,a.jsx)(i.h3,{id:"filtering",children:"Filtering"}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.code,{children:"list-images"})," output can be filtered with the ",(0,a.jsx)(i.code,{children:"--filter"})," argument."]}),"\n",(0,a.jsx)(i.h3,{id:"distribution",children:"Distribution"}),"\n",(0,a.jsxs)(i.p,{children:["To filter on a given distribution, one can use ",(0,a.jsx)(i.code,{children:"--filter"})," with the ",(0,a.jsx)(i.code,{children:"distro:"})," prefix:"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-console",children:"$ image-builder list-images --filter distro:fedora-41\n# ... long list ...\n"})}),"\n",(0,a.jsx)(i.h3,{id:"type",children:"Type"}),"\n",(0,a.jsxs)(i.p,{children:["To filter on a given ",(0,a.jsx)(i.a,{href:"/docs/developer-guide/projects/image-builder/faq#image-types",children:"image type"})," the ",(0,a.jsx)(i.code,{children:"type:"})," prefix:"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-console",children:"$ image-builder list-images --filter type:qcow2\n# ... long list ...\n"})}),"\n",(0,a.jsx)(i.h3,{id:"architecture",children:"Architecture"}),"\n",(0,a.jsxs)(i.p,{children:["To filter on a given architecture use the ",(0,a.jsx)(i.code,{children:"arch:"})," prefix:"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-console",children:"$ image-builder list-images --filter arch:aarch64\n# ... long list ...\n"})}),"\n",(0,a.jsx)(i.h3,{id:"combinations",children:"Combinations"}),"\n",(0,a.jsx)(i.p,{children:"Filters can be combined to narrow the list further."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-console",children:"$ image-builder list-images --filter type:qcow2 --filter distro:fedora-41\n# ... list ...\n"})}),"\n",(0,a.jsx)(i.h2,{id:"image-builder-build",children:(0,a.jsx)(i.code,{children:"image-builder build"})}),"\n",(0,a.jsxs)(i.p,{children:["The ",(0,a.jsx)(i.code,{children:"build"})," command builds images of a given ",(0,a.jsx)(i.a,{href:"/docs/developer-guide/projects/image-builder/faq#image-types",children:"image type"}),", for example:"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-console",children:"$ sudo image-builder build minimal-raw\n# ... progress ...\n"})}),"\n",(0,a.jsxs)(i.p,{children:["By default the ",(0,a.jsx)(i.code,{children:"build"})," command uses the same distribution and version as the host system, you can pass another distribution and version with the ",(0,a.jsx)(i.code,{children:"--distro"})," argument:"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-console",children:"$ sudo image-builder build --distro fedora-43 minimal-raw\n# ... progress ...\n"})}),"\n",(0,a.jsx)(i.h1,{id:"blueprints",children:"Blueprints"}),"\n",(0,a.jsxs)(i.p,{children:["Images can be customized with ",(0,a.jsx)(i.a,{href:"https://osbuild.org/docs/user-guide/blueprint-reference",children:"blueprints"}),". For example we could build the ",(0,a.jsx)(i.code,{children:"qcow2"})," we built above with some customizations applied."]}),"\n",(0,a.jsxs)(i.p,{children:["We'll be adding the ",(0,a.jsx)(i.code,{children:"nginx"}),", and ",(0,a.jsx)(i.code,{children:"haproxy"})," packages and enabling their services so they start on boot. We'll also add a user by the name ",(0,a.jsx)(i.code,{children:"user"})," with an ssh key and set the hostname of the machine:"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-console",children:'$ cat blueprint.toml\npackages = [\n    { name = "nginx" },\n    { name = "haproxy" },\n]\n\n[customizations]\nhostname = "mynewmachine.home.arpa"\n\n[customizations.services]\nenabled = ["nginx", "haproxy"]\n\n[[customizations.user]]\nname = "user"\nkey = "ssh-ed25519 AAAAC..."\n$ sudo image-builder build --blueprint blueprint.toml --distro fedora-41 qcow2\n# ...\n'})})]})}function u(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>t,x:()=>l});var r=n(6540);const a={},s=r.createContext(a);function t(e){const i=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),r.createElement(s.Provider,{value:i},e.children)}}}]);