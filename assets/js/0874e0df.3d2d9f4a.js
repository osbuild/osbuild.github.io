"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[402],{1726:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=t(5893),o=t(1151);const r={},s="Container registry credentials",a={id:"on-premises/installation/container-auth",title:"Container registry credentials",description:"All communication with container registries is done by the osbuild-worker",source:"@site/docs/on-premises/01-installation/container-auth.md",sourceDirName:"on-premises/01-installation",slug:"/on-premises/installation/container-auth",permalink:"/docs/on-premises/installation/container-auth",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/osbuild.github.io/tree/main/docs/on-premises/01-installation/container-auth.md",tags:[],version:"current",frontMatter:{},sidebar:"onPremises",previous:{title:"Installation and configuration",permalink:"/docs/on-premises/installation/"},next:{title:"Managing repositories",permalink:"/docs/on-premises/installation/managing-repositories"}},c={},l=[];function d(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"container-registry-credentials",children:"Container registry credentials"}),"\n",(0,i.jsxs)(n.p,{children:["All communication with container registries is done by the ",(0,i.jsx)(n.code,{children:"osbuild-worker"}),"\nservice. It can be configured via the ",(0,i.jsx)(n.code,{children:"/etc/osbuild-worker/osbuild-worker.toml"}),"\nconfiguration file. It is read only once at service start, so the service\nneeds to be restarted after making any changes."]}),"\n",(0,i.jsxs)(n.p,{children:["The configuration file has a ",(0,i.jsx)(n.code,{children:"containers"})," section with an ",(0,i.jsx)(n.code,{children:"auth_file_path"}),"\nfield that is a string referring to a path of a ",(0,i.jsx)(n.code,{children:"containers-auth.json(5)"})," file\nto be used for accessing protected resources. An example configuration could\nlook like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Toml",children:'[containers]\nauth_file_path = "/etc/osbuild-worker/containers-auth.json"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["For detailed information on the format of the authorization file itself,\nrefer to the corresponding man page: ",(0,i.jsx)(n.code,{children:"man 5 containers-auth.json"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var i=t(7294);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);