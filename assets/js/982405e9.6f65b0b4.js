"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[2038],{4813:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>l,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var i=o(5893),s=o(1151);const t={},a="Uploading an image to an AWS S3 Bucket",r={id:"user-guide/uploading-cloud-images/uploading-to-aws-s3",title:"Uploading an image to an AWS S3 Bucket",description:"osbuild-composer provides the users with a convenient way to upload images, of all sorts, directly to an AWS S3 bucket right after the image is built.",source:"@site/docs/user-guide/04-uploading-cloud-images/02-uploading-to-aws-s3.md",sourceDirName:"user-guide/04-uploading-cloud-images",slug:"/user-guide/uploading-cloud-images/uploading-to-aws-s3",permalink:"/docs/user-guide/uploading-cloud-images/uploading-to-aws-s3",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/saurus/tree/main/docs/user-guide/04-uploading-cloud-images/02-uploading-to-aws-s3.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"userguide",previous:{title:"Uploading an image to AWS",permalink:"/docs/user-guide/uploading-cloud-images/uploading-to-aws"},next:{title:"Uploading an image to Microsoft Azure",permalink:"/docs/user-guide/uploading-cloud-images/uploading-to-azure"}},u={},c=[];function d(e){const n={blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"uploading-an-image-to-an-aws-s3-bucket",children:"Uploading an image to an AWS S3 Bucket"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"osbuild-composer"})," provides the users with a convenient way to upload images, of all sorts, directly to an AWS S3 bucket right after the image is built."]}),"\n",(0,i.jsx)(n.p,{children:"Using a text editor of your choice, create a configuration file with the following content:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'provider = "aws.s3"\n\n[settings]\naccessKeyID = "AWS_ACCESS_KEY_ID"\nsecretAccessKey = "AWS_SECRET_ACCESS_KEY"\nbucket = "AWS_BUCKET"\nregion = "AWS_REGION"\nkey = "OBJECT_KEY"\n'})}),"\n",(0,i.jsx)(n.p,{children:"There are several considerations when filling values in this file:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"AWS_BUCKET"})," must be in the ",(0,i.jsx)(n.code,{children:"AWS_REGION"})]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["If your authentication method requires you to also specify a session token, you can put it in the ",(0,i.jsx)(n.code,{children:"settings"})," section of the configuration file in a field named ",(0,i.jsx)(n.code,{children:"sessionToken"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Once everything is configured, you can trigger a compose as usual with additional image name and cloud provider profile:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ sudo composer-cli compose start base-image-with-tmux qcow2 IMAGE_KEY aws-s3-config.toml\n"})})]})}function l(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>r,a:()=>a});var i=o(7294);const s={},t=i.createContext(s);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);