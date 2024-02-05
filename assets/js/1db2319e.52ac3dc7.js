"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[2179],{8087:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=i(5893),t=i(1151);const s={},r="Cockpit Composer",c={id:"developer-guide/projects/cockpit-composer/index",title:"Cockpit Composer",description:"codecov",source:"@site/docs/developer-guide/02-projects/cockpit-composer/index.md",sourceDirName:"developer-guide/02-projects/cockpit-composer",slug:"/developer-guide/projects/cockpit-composer/",permalink:"/docs/developer-guide/projects/cockpit-composer/",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/saurus/tree/main/docs/developer-guide/02-projects/cockpit-composer/index.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"Projects",permalink:"/docs/developer-guide/projects/"},next:{title:"Cockpit-Composer Integration Test",permalink:"/docs/developer-guide/projects/cockpit-composer/testing"}},l={},d=[{value:"Install from official repositories",id:"install-from-official-repositories",level:2},{value:"Install from source code",id:"install-from-source-code",level:2},{value:"Development instructions",id:"development-instructions",level:2},{value:"Install the development dependencies",id:"install-the-development-dependencies",level:3},{value:"Build and run",id:"build-and-run",level:3},{value:"Style linters",id:"style-linters",level:3},{value:"Build rpm",id:"build-rpm",level:3},{value:"Run integration test",id:"run-integration-test",level:3},{value:"Cockpit API",id:"cockpit-api",level:3},{value:"Automated maintenance",id:"automated-maintenance",level:2},{value:"License",id:"license",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"cockpit-composer",children:"Cockpit Composer"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://codecov.io/gh/osbuild/cockpit-composer",children:(0,o.jsx)(n.img,{src:"https://codecov.io/gh/osbuild/cockpit-composer/branch/main/graph/badge.svg",alt:"codecov"})})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"The web interface for on-premise Image Builder!"})}),"\n",(0,o.jsxs)(n.p,{children:["Image Builder generates custom images suitable for deploying systems or uploading to\nthe cloud. It integrates into ",(0,o.jsx)(n.a,{href:"https://cockpit-project.org/",children:"Cockpit"})," as a\nfrontend for ",(0,o.jsx)(n.a,{href:"https://github.com/osbuild",children:"osbuild"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"install-from-official-repositories",children:"Install from official repositories"}),"\n",(0,o.jsx)(n.p,{children:"Cockpit Composer can be installed on RHEL and Fedora systems using:"}),"\n",(0,o.jsx)(n.p,{children:"$ dnf install cockpit-composer"}),"\n",(0,o.jsxs)(n.p,{children:["Make sure to install/enable ",(0,o.jsx)(n.a,{href:"https://cockpit-project.org/",children:"Cockpit"})," with:"]}),"\n",(0,o.jsx)(n.p,{children:"$ systemctl enable --now cockpit.socket"}),"\n",(0,o.jsx)(n.h2,{id:"install-from-source-code",children:"Install from source code"}),"\n",(0,o.jsx)(n.p,{children:"First download the code from Github:"}),"\n",(0,o.jsxs)(n.p,{children:["$ git clone ",(0,o.jsx)(n.a,{href:"https://github.com/osbuild/cockpit-composer.git",children:"https://github.com/osbuild/cockpit-composer.git"}),"\n$ cd cockpit-composer/"]}),"\n",(0,o.jsx)(n.h2,{id:"development-instructions",children:"Development instructions"}),"\n",(0,o.jsx)(n.p,{children:"It's easy to set up your local machine to develop on Cockpit Composer."}),"\n",(0,o.jsx)(n.h3,{id:"install-the-development-dependencies",children:"Install the development dependencies"}),"\n",(0,o.jsx)(n.p,{children:"On Fedora or Red Hat Enterprise Linux:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["First install Cockpit on your local machine as described in: ",(0,o.jsx)(n.a,{href:"https://cockpit-project.org/running.html",children:"https://cockpit-project.org/running.html"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"Next install and start osbuild-composer:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"    $ dnf install osbuild-composer cockpit\n    $ systemctl start osbuild-composer\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Cockpit Composer uses Node.js during development. Node.js is not used at runtime. To make changes on Cockpit you'll want to install Node.js, NPM."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"    $ dnf install nodejs npm\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["In order to build an rpm, ",(0,o.jsx)(n.code,{children:"rpm-build"})," is required"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"    $ dnf install rpm-build\n"})}),"\n",(0,o.jsx)(n.h3,{id:"build-and-run",children:"Build and run"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"To build Cockpit Composer, run:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"    $ make build\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This will create a ",(0,o.jsx)(n.code,{children:"public"})," directory which can be sym-linked into Cockpit as a plugin:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"    $ mkdir -p ~/.local/share/cockpit\n    $ ln -s $(pwd)/public ~/.local/share/cockpit/composer\n"})}),"\n",(0,o.jsx)(n.p,{children:"Now you can log into Cockpit Composer on your local machine at the following address. Use the same user and password that you used to log into your local user account."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://localhost:9090/composer",children:"https://localhost:9090/composer"})}),"\n",(0,o.jsxs)(n.p,{children:["Cockpit Composer can also be built in ",(0,o.jsx)(n.code,{children:"watch"})," mode so that it will rebuild on code changes without having to manually rerun ",(0,o.jsx)(n.code,{children:"make build"}),". This can be done using:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"    npm ci\n    npm run watch\n"})}),"\n",(0,o.jsx)(n.h3,{id:"style-linters",children:"Style linters"}),"\n",(0,o.jsx)(n.p,{children:"We use eslint and prettier to enforce code style. To run the linters, run:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"    $ npm run lint\n    $ npm run prettier\n"})}),"\n",(0,o.jsx)(n.p,{children:"Any auto fixable errors can be corrected with:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"    $ npm run format\n"})}),"\n",(0,o.jsx)(n.h3,{id:"build-rpm",children:"Build rpm"}),"\n",(0,o.jsx)(n.p,{children:"$ make rpm"}),"\n",(0,o.jsx)(n.h3,{id:"run-integration-test",children:"Run integration test"}),"\n",(0,o.jsx)(n.p,{children:"Run test without visually seeing what the browser is doing:"}),"\n",(0,o.jsx)(n.p,{children:"$ make check"}),"\n",(0,o.jsxs)(n.p,{children:["To learn more about testing see our ",(0,o.jsx)(n.a,{href:"https://github.com/osbuild/cockpit-composer/tree/main/test",children:"testing docs"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"cockpit-api",children:"Cockpit API"}),"\n",(0,o.jsx)(n.p,{children:"To keep Cockpit Composer working with Cockpit API all code should follow the following rules."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"All urls in the html and javascript need to use relative paths."}),"\n",(0,o.jsxs)(n.li,{children:["All requests to the API should be made using ",(0,o.jsx)(n.code,{children:"utils.apiFetch"}),". Any non API ",(0,o.jsx)(n.code,{children:"fetch"})," requests\nmust use ",(0,o.jsx)(n.code,{children:"credentials: 'same-origin'"})," so that cookies are included with those ajax requests."]}),"\n",(0,o.jsx)(n.li,{children:"Use hashes for navigation within the SPA so that cockpit can keep the top level location display\nup to date."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"automated-maintenance",children:"Automated maintenance"}),"\n",(0,o.jsxs)(n.p,{children:["It is important to keep the ",(0,o.jsx)(n.a,{href:"https://github.com/osbuild/cockpit-composer/tree/main/package.json",children:"NPM modules"})," up to date, to keep\nup with security updates and bug fixes. This is done automatically by Dependabot.\nwhich is run daily."]}),"\n",(0,o.jsx)(n.p,{children:"Similarly, translations are refreshed automatically by Weblate."}),"\n",(0,o.jsx)(n.h2,{id:"license",children:"License"}),"\n",(0,o.jsxs)(n.p,{children:["This source code is licensed under the MIT license found in the ",(0,o.jsx)(n.a,{href:"https://github.com/osbuild/cockpit-composer/tree/main/LICENSE.txt",children:(0,o.jsx)(n.code,{children:"LICENSE.txt"})})," file."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["Made with \u2665 by the ",(0,o.jsx)(n.a,{href:"https://github.com/orgs/osbuild/people",children:"OSBuild team"}),", ",(0,o.jsx)(n.a,{href:"https://github.com/orgs/weldr/people",children:"Welder team"}),", ",(0,o.jsx)(n.a,{href:"https://github.com/orgs/cockpit-project/people",children:"Cockpit team"}),", and contributors"]})]})}function a(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>r});var o=i(7294);const t={},s=o.createContext(t);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);