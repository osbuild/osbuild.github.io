"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[695],{860:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>d,contentTitle:()=>t,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"developer-guide/projects/osbuild-composer/index","title":"OSBuild Composer","description":"Operating System Image Composition Services","source":"@site/docs/developer-guide/02-projects/osbuild-composer/index.md","sourceDirName":"developer-guide/02-projects/osbuild-composer","slug":"/developer-guide/projects/osbuild-composer/","permalink":"/docs/developer-guide/projects/osbuild-composer/","draft":false,"unlisted":false,"editUrl":"https://github.com/osbuild/osbuild-composer/blob/main/README.md","tags":[],"version":"current","frontMatter":{"custom_edit_url":"https://github.com/osbuild/osbuild-composer/blob/main/README.md"},"sidebar":"developer","previous":{"title":"org.osbuild.zstd","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.zstd"},"next":{"title":"Contributing to osbuild-composer","permalink":"/docs/developer-guide/projects/osbuild-composer/CONTRIBUTING"}}');var n=i(4848),r=i(8453);const l={custom_edit_url:"https://github.com/osbuild/osbuild-composer/blob/main/README.md"},t="OSBuild Composer",d={},c=[{value:"Project",id:"project",level:2},{value:"Principles",id:"principles",level:3},{value:"Contributing",id:"contributing",level:3},{value:"About",id:"about",level:3},{value:"Requirements",id:"requirements",level:3},{value:"Build",id:"build",level:3},{value:"Run Tests",id:"run-tests",level:3},{value:"Repository:",id:"repository",level:3},{value:"Pull request gating",id:"pull-request-gating",level:3},{value:"License:",id:"license",level:3}];function h(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"osbuild-composer",children:"OSBuild Composer"})}),"\n",(0,n.jsx)(s.p,{children:"Operating System Image Composition Services"}),"\n",(0,n.jsxs)(s.p,{children:["The composer project is a set of HTTP services for composing operating system\nimages. It builds on the pipeline execution engine of ",(0,n.jsx)(s.em,{children:"osbuild"})," and defines\nits own class of images that it supports building."]}),"\n",(0,n.jsxs)(s.p,{children:["Multiple APIs are available to access a composer service. This includes\nsupport for the ",(0,n.jsx)(s.a,{href:"https://github.com/weldr/lorax",children:"lorax-composer"})," API, and as\nsuch can serve as drop-in replacement for lorax-composer."]}),"\n",(0,n.jsxs)(s.p,{children:["You can control a composer instance either directly via the provided APIs, or\nthrough higher-level user-interfaces from external projects. This, for\ninstance, includes a\n",(0,n.jsx)(s.a,{href:"https://github.com/osbuild/cockpit-composer",children:"Cockpit Module"})," or using the\n",(0,n.jsx)(s.a,{href:"https://weldr.io/lorax/composer-cli.html",children:"composer-cli"})," command-line tool."]}),"\n",(0,n.jsx)(s.h2,{id:"project",children:"Project"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Website"}),": ",(0,n.jsx)(s.a,{href:"https://www.osbuild.org",children:"https://www.osbuild.org"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Bug Tracker"}),": ",(0,n.jsx)(s.a,{href:"https://github.com/osbuild/osbuild-composer/issues",children:"https://github.com/osbuild/osbuild-composer/issues"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Discussions"}),": ",(0,n.jsx)(s.a,{href:"https://github.com/orgs/osbuild/discussions",children:"https://github.com/orgs/osbuild/discussions"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Matrix"}),": ",(0,n.jsx)(s.a,{href:"https://matrix.to/#/#image-builder:fedoraproject.org",children:"#image-builder on fedoraproject.org"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Changelog"}),": ",(0,n.jsx)(s.a,{href:"https://github.com/osbuild/osbuild-composer/releases",children:"https://github.com/osbuild/osbuild-composer/releases"})]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"principles",children:"Principles"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"OSBuild Composer shall only allow users to do what generally makes sense."}),"\n",(0,n.jsx)(s.li,{children:"Blueprints are the policy layer where we decide what to expose to end users."}),"\n",(0,n.jsx)(s.li,{children:"If a blueprint can be built, it should also boot."}),"\n",(0,n.jsx)(s.li,{children:"It should be obvious why a blueprint doesn\u2019t build."}),"\n",(0,n.jsxs)(s.li,{children:["The ",(0,n.jsx)(s.a,{href:"https://github.com/osbuild/osbuild-composer/tree/main/internal/cloudapi",children:"cloud API"})," is never broken."]}),"\n",(0,n.jsx)(s.li,{children:"In the hosted service, OSBuild Composer is an orchestrator of image builds."}),"\n",(0,n.jsx)(s.li,{children:"On-premises, it should be as easy as possible to run the service and build an image."}),"\n",(0,n.jsx)(s.li,{children:"OSBuild Composer needs to run on the oldest supported target distribution."}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"contributing",children:"Contributing"}),"\n",(0,n.jsxs)(s.p,{children:["Please refer to the ",(0,n.jsx)(s.a,{href:"https://osbuild.org/docs/developer-guide/index",children:"developer guide"})," to learn about our workflow, code style and more."]}),"\n",(0,n.jsx)(s.h3,{id:"about",children:"About"}),"\n",(0,n.jsxs)(s.p,{children:["Composer is a middleman between the workhorses from ",(0,n.jsx)(s.em,{children:"osbuild"})," and the\nuser-interfaces like ",(0,n.jsx)(s.em,{children:"cockpit-composer"}),", ",(0,n.jsx)(s.em,{children:"composer-cli"}),", or others. It defines\na set of high-level image compositions that it supports building. Builds of\nthese compositions can be requested via the different APIs of ",(0,n.jsx)(s.em,{children:"Composer"}),", which\nwill then translate the requests into pipeline-descriptions for ",(0,n.jsx)(s.em,{children:"osbuild"}),". The\npipeline output is then either provided back to the user, or uploaded to a user\nspecified target."]}),"\n",(0,n.jsxs)(s.p,{children:["The following image visualizes the overall architecture of the OSBuild\ninfrastructure and the place that ",(0,n.jsx)(s.em,{children:"Composer"})," takes:"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:"https://github.com/osbuild/osbuild-composer/tree/main/docs/osbuild-composer.svg",alt:"overview"})}),"\n",(0,n.jsxs)(s.p,{children:["Consult the ",(0,n.jsx)(s.code,{children:"osbuild-composer(7)"})," man-page for an introduction into composer,\ninformation on running your own composer instance, as well as details on the\nprovided infrastructure and services."]}),"\n",(0,n.jsx)(s.h3,{id:"requirements",children:"Requirements"}),"\n",(0,n.jsx)(s.p,{children:"The requirements for this project are:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"osbuild >= 26"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"systemd >= 244"})}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"At build-time, the following software is required:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"go >= 1.21"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"python-docutils >= 0.13"})}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"krb5-devel"})," for fedora/rhel or ",(0,n.jsx)(s.code,{children:"libkrb5-dev"})," for debian/ubuntu`"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"btrfs-progs-devel"})," for fedora/rhel or ",(0,n.jsx)(s.code,{children:"libbtrfs-dev"})," for debian/ubuntu"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"device-mapper-devel"})," for fedora/rhel or ",(0,n.jsx)(s.code,{children:"libdevmapper-dev"})," for debian/ubuntu"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"gpgme-devel"})," for fedora/rhel or ",(0,n.jsx)(s.code,{children:"libgpgme-dev"})," for debian/ubuntu"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"rpmdevtools"})," (only for ",(0,n.jsx)(s.code,{children:"make push-check"}),")"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"rpmlint"})," (only for ",(0,n.jsx)(s.code,{children:"make push-check"}),")"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"build",children:"Build"}),"\n",(0,n.jsx)(s.p,{children:"The standard go package system is used. Consult upstream documentation for\ndetailed help. In most situations the following commands are sufficient to\nbuild and install from source:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sh",children:"make build\n"})}),"\n",(0,n.jsxs)(s.p,{children:["The man-pages require ",(0,n.jsx)(s.code,{children:"python-docutils"})," and can be built via:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sh",children:"make man\n"})}),"\n",(0,n.jsx)(s.h3,{id:"run-tests",children:"Run Tests"}),"\n",(0,n.jsx)(s.p,{children:"To run our tests locally just call"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sh",children:"make unit-tests\n"})}),"\n",(0,n.jsx)(s.p,{children:"Before pushing something for a pull request you should run this check to avoid problems with required github actions"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sh",children:"make push-check\n"})}),"\n",(0,n.jsx)(s.h3,{id:"repository",children:"Repository:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"web"}),":   ",(0,n.jsx)(s.a,{href:"https://github.com/osbuild/osbuild-composer",children:"https://github.com/osbuild/osbuild-composer"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"https"}),": ",(0,n.jsx)(s.code,{children:"https://github.com/osbuild/osbuild-composer.git"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"ssh"}),":   ",(0,n.jsx)(s.code,{children:"git@github.com:osbuild/osbuild-composer.git"})]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"pull-request-gating",children:"Pull request gating"}),"\n",(0,n.jsxs)(s.p,{children:["Each pull request against ",(0,n.jsx)(s.code,{children:"osbuild-composer"})," starts a series of automated\ntests. Tests run via GitHub Actions and Jenkins. Each push to the pull request\nwill launch theses tests automatically."]}),"\n",(0,n.jsxs)(s.p,{children:["Jenkins only tests pull requests from members of the ",(0,n.jsx)(s.code,{children:"osbuild"})," organization in\nGitHub. A member of the ",(0,n.jsx)(s.code,{children:"osbuild"})," organization must say ",(0,n.jsx)(s.code,{children:"ok to test"})," in a pull\nrequest comment to approve testing. Anyone can ask for testing to run by\nsaying the bot's favorite word, ",(0,n.jsx)(s.code,{children:"schutzbot"}),", in a pull request comment.\nTesting will begin shortly after the comment is posted."]}),"\n",(0,n.jsxs)(s.p,{children:["Test results in Jenkins are available by clicking the ",(0,n.jsx)(s.em,{children:"Details"})," link on the\nright side of the Schutzbot check in the pull request page."]}),"\n",(0,n.jsx)(s.h3,{id:"license",children:"License:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.strong,{children:"Apache-2.0"})}),"\n",(0,n.jsx)(s.li,{children:"See LICENSE file for details."}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,s,i)=>{i.d(s,{R:()=>l,x:()=>t});var o=i(6540);const n={},r=o.createContext(n);function l(e){const s=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),o.createElement(r.Provider,{value:s},e.children)}}}]);