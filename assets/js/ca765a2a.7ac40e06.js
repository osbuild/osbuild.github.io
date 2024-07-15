"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[1609],{1077:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=i(5893),t=i(1151);const r={},d="Image Builder Frontend",l={id:"developer-guide/projects/image-builder-frontend/index",title:"Image Builder Frontend",description:"Principles",source:"@site/docs/developer-guide/02-projects/image-builder-frontend/index.md",sourceDirName:"developer-guide/02-projects/image-builder-frontend",slug:"/developer-guide/projects/image-builder-frontend/",permalink:"/docs/developer-guide/projects/image-builder-frontend/",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/saurus/tree/main/docs/developer-guide/02-projects/image-builder-frontend/index.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"Image Builder contributing guide",permalink:"/docs/developer-guide/projects/image-builder/HACKING"},next:{title:"Images",permalink:"/docs/developer-guide/projects/images/"}},o={},c=[{value:"Principles",id:"principles",level:2},{value:"Table of Contents",id:"table-of-contents",level:2},{value:"How to build and run image-builder-frontend",id:"how-to-build-and-run-image-builder-frontend",level:2},{value:"Frontend Development",id:"frontend-development",level:3},{value:"Nodejs and npm version",id:"nodejs-and-npm-version",level:4},{value:"Webpack proxy",id:"webpack-proxy",level:4},{value:"Webpack proxy (staging) -- <em>Runs with image-builder&#39;s stage deployment</em>",id:"webpack-proxy-staging----runs-with-image-builders-stage-deployment",level:4},{value:"Insights proxy (deprecated)",id:"insights-proxy-deprecated",level:4},{value:"API endpoints",id:"api-endpoints",level:4},{value:"Add a new API",id:"add-a-new-api",level:5},{value:"Add a new endpoint",id:"add-a-new-endpoint",level:5},{value:"Unleash feature flags",id:"unleash-feature-flags",level:4},{value:"Mocking flags for tests",id:"mocking-flags-for-tests",level:5},{value:"Cleaning the flags",id:"cleaning-the-flags",level:5},{value:"Backend Development",id:"backend-development",level:3},{value:"File Structure",id:"file-structure",level:2},{value:"Quick Reference",id:"quick-reference",level:3},{value:"Style Guidelines",id:"style-guidelines",level:2},{value:"Additional eslint rules",id:"additional-eslint-rules",level:3},{value:"Test Guidelines",id:"test-guidelines",level:2},{value:"Running the tests",id:"running-the-tests",level:3},{value:"Using MSW data in development",id:"using-msw-data-in-development",level:3},{value:"Enabling MSW",id:"enabling-msw",level:4},{value:"Mac Configuration",id:"mac-configuration",level:4}];function a(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"image-builder-frontend",children:"Image Builder Frontend"}),"\n",(0,s.jsx)(n.h2,{id:"principles",children:"Principles"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"We want to use the latest and greatest web technologies."}),"\n",(0,s.jsx)(n.li,{children:"We want to expose all the options and customizations possible, even if not all are visible by default."}),"\n",(0,s.jsx)(n.li,{children:"The default path should be \u2018short(est)\u2019 clickpath, which should be determined in a data-driven way."}),"\n",(0,s.jsxs)(n.li,{children:["This is an ",(0,s.jsx)(n.a,{href:"https://github.com/RedHatInsights/",children:"Insights application"}),", so it abides by some rules and standards of Insights."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#frontend-development",children:"How to build and run image-builder-frontend"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#frontend-development",children:"Frontend Development"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#api-endpoints",children:"API"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#unleash-feature-flags",children:"Unleash feature flags"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#backend-development",children:"Backend Development"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#file-structure",children:"File structure"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#style-guidelines",children:"Style Guidelines"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#test-guidelines",children:"Test Guidelines"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"how-to-build-and-run-image-builder-frontend",children:"How to build and run image-builder-frontend"}),"\n",(0,s.jsx)(n.h3,{id:"frontend-development",children:"Frontend Development"}),"\n",(0,s.jsx)(n.p,{children:"To develop the frontend you can use a proxy to run image-builder-frontend locally\nagainst the chrome and backend at console.redhat.com."}),"\n",(0,s.jsx)(n.p,{children:"Working against the production environment is preferred, as any work can be released without\nworrying if a feature from stage has been released yet."}),"\n",(0,s.jsx)(n.h4,{id:"nodejs-and-npm-version",children:"Nodejs and npm version"}),"\n",(0,s.jsxs)(n.p,{children:["Make sure you have npm@10 and node 18+ installed. If you need multiple versions of nodejs check out ",(0,s.jsx)(n.a,{href:"https://github.com/nvm-sh/nvm",children:"nvm"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"webpack-proxy",children:"Webpack proxy"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["run ",(0,s.jsx)(n.code,{children:"npm ci"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["run ",(0,s.jsx)(n.code,{children:"npm run prod-beta"}),". This command uses a prod-beta env by default. Configure your\nenvironment by the ",(0,s.jsx)(n.code,{children:"env"})," attribute in ",(0,s.jsx)(n.code,{children:"dev.webpack.config.js"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Secondly redirect a few ",(0,s.jsx)(n.code,{children:"prod.foo.redhat.com"})," to localhost, if this has not been done already."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'echo "127.0.0.1 prod.foo.redhat.com" >> /etc/hosts\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["open browser at ",(0,s.jsx)(n.code,{children:"https://prod.foo.redhat.com:1337/beta/insights/image-builder"})]}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"webpack-proxy-staging----runs-with-image-builders-stage-deployment",children:["Webpack proxy (staging) -- ",(0,s.jsx)(n.em,{children:"Runs with image-builder's stage deployment"})]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["run ",(0,s.jsx)(n.code,{children:"npm ci"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["run ",(0,s.jsx)(n.code,{children:"npm run stage-beta"}),". This command uses a stage-beta env by default. Configure your\nenvironment by the ",(0,s.jsx)(n.code,{children:"env"})," attribute in ",(0,s.jsx)(n.code,{children:"dev.webpack.config.js"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Secondly redirect a few ",(0,s.jsx)(n.code,{children:"stage.foo.redhat.com"})," to localhost, if this has not been done already."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'echo "127.0.0.1 stage.foo.redhat.com" >> /etc/hosts\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["open browser at ",(0,s.jsx)(n.code,{children:"https://stage.foo.redhat.com:1337/beta/insights/image-builder"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"insights-proxy-deprecated",children:"Insights proxy (deprecated)"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Clone the insights proxy: ",(0,s.jsx)(n.a,{href:"https://github.com/RedHatInsights/insights-proxy",children:"https://github.com/RedHatInsights/insights-proxy"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Setting up the proxy"}),"\n",(0,s.jsxs)(n.p,{children:["Choose a runner (podman or docker), and point the SPANDX_CONFIG variable to\n",(0,s.jsx)(n.code,{children:"profile/local-frontend.js"})," included in image-builder-frontend."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'    sudo insights-proxy/scripts/patch-etc-hosts.sh\n    export RUNNER="podman"\n    export SPANDX_CONFIG=$PATH_TO/image-builder-frontend/profiles/local-frontend.js\n    sudo -E insights-proxy/scripts/run.sh\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Starting up image-builder-frontend"}),"\n",(0,s.jsx)(n.p,{children:"In the image-builder-frontend checkout directory"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    npm install\n    npm start\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The UI should be running on\n",(0,s.jsx)(n.a,{href:"https://prod.foo.redhat.com:1337/beta/insights/image-builder/landing",children:"https://prod.foo.redhat.com:1337/beta/insights/image-builder/landing"}),".\nNote that this requires you to have access to either production or stage (plus VPN and proxy config) of insights."]}),"\n",(0,s.jsx)(n.h4,{id:"api-endpoints",children:"API endpoints"}),"\n",(0,s.jsxs)(n.p,{children:["API slice definitions are programmatically generated using the ",(0,s.jsx)(n.a,{href:"https://redux-toolkit.js.org/rtk-query/usage/code-generation",children:"@rtk-query/codegen-openapi"})," package."]}),"\n",(0,s.jsxs)(n.p,{children:["OpenAPI schema for the endpoints are stored in ",(0,s.jsx)(n.code,{children:"/api/schema"}),". Their\ncorresponding configuration files are stored in ",(0,s.jsx)(n.code,{children:"/api/config"}),". Each endpoint\nhas a corresponding empty API slice and generated API slice which are stored in\n",(0,s.jsx)(n.code,{children:"/src/store"}),"."]}),"\n",(0,s.jsx)(n.h5,{id:"add-a-new-api",children:"Add a new API"}),"\n",(0,s.jsx)(n.p,{children:"For a hypothetical API called foobar"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Download the foobar API OpenAPI json or yaml representation under\n",(0,s.jsx)(n.code,{children:"api/schema/foobar.json"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:['Create a new "empty" API file under ',(0,s.jsx)(n.code,{children:"src/store/emptyFoobarApi.ts"})," that has following\ncontent:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-{ts}",children:"import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';\n\nimport { FOOBAR_API } from '../constants';\n\n// initialize an empty api service that we'll inject endpoints into later as needed\nexport const emptyFoobarApi = createApi({\n  reducerPath: 'foobarApi',\n  baseQuery: fetchBaseQuery({ baseUrl: FOO_BAR }),\n  endpoints: () => ({}),\n});\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["Declare new constant ",(0,s.jsx)(n.code,{children:"FOOBAR_API"})," with the API url in ",(0,s.jsx)(n.code,{children:"src/constants.ts"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"export const FOOBAR_API = 'api/foobar/v1'\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["Create the config file for code generation in ",(0,s.jsx)(n.code,{children:"api/config/foobar.ts"})," containing:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"import type { ConfigFile } from '@rtk-query/codegen-openapi';\n\nconst config: ConfigFile = {\n  schemaFile: '../schema/foobar.json',\n  apiFile: '../../src/store/emptyFoobarApi.ts',\n  apiImport: 'emptyEdgeApi',\n  outputFile: '../../src/store/foobarApi.ts',\n  exportName: 'foobarApi',\n  hooks: true,\n  filterEndpoints: ['getFoo', 'getBar', 'getFoobar'],\n};\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsxs)(n.li,{children:["Update the ",(0,s.jsx)(n.code,{children:"api.sh"})," script by adding a new line for npx to generate the code:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"npx @rtk-query/codegen-openapi ./api/config/foobar.ts &\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsxs)(n.li,{children:["Update the ",(0,s.jsx)(n.code,{children:".eslintignore"})," file by adding a new line for the generated code:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"foobarApi.ts\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"7",children:["\n",(0,s.jsx)(n.li,{children:"run api generation"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"npm run api\n"})}),"\n",(0,s.jsx)(n.p,{children:"And voil\xe0!"}),"\n",(0,s.jsx)(n.h5,{id:"add-a-new-endpoint",children:"Add a new endpoint"}),"\n",(0,s.jsxs)(n.p,{children:["To add a new endpoint, simply update the ",(0,s.jsx)(n.code,{children:"api/config/foobar.ts"})," file with new\nendpoints in the ",(0,s.jsx)(n.code,{children:"filterEndpoints"})," table."]}),"\n",(0,s.jsx)(n.h4,{id:"unleash-feature-flags",children:"Unleash feature flags"}),"\n",(0,s.jsxs)(n.p,{children:["Your user needs to have the corresponding rights, do the\nsame as this MR in internal gitlab ",(0,s.jsx)(n.a,{href:"https://gitlab.cee.redhat.com/service/app-interface/-/merge_requests/79225",children:"https://gitlab.cee.redhat.com/service/app-interface/-/merge_requests/79225"}),"\nyou can ask on the slack channel ",(0,s.jsx)(n.a,{href:"https://redhat-internal.slack.com/archives/C023YSA47A4",children:"https://redhat-internal.slack.com/archives/C023YSA47A4"})," for a merge if your MR stays unchecked for a little while."]}),"\n",(0,s.jsx)(n.p,{children:"Then connect to the following platforms:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://insights-stage.unleash.devshift.net/",children:"https://insights-stage.unleash.devshift.net/"})," for stage"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://insights.unleash.devshift.net",children:"https://insights.unleash.devshift.net"})," prod"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Once you have a toggle to work with, on the frontend code there's just need to\nimport the ",(0,s.jsx)(n.code,{children:"useFlag"})," hook and to use it. You can get some inspiration from\nexisting flags:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/RedHatInsights/image-builder-frontend/blob/c84b493eba82ce83a7844943943d91112ffe8322/src/Components/ImagesTable/ImageLink.js#L99",children:"https://github.com/RedHatInsights/image-builder-frontend/blob/c84b493eba82ce83a7844943943d91112ffe8322/src/Components/ImagesTable/ImageLink.js#L99"})}),"\n",(0,s.jsx)(n.h5,{id:"mocking-flags-for-tests",children:"Mocking flags for tests"}),"\n",(0,s.jsxs)(n.p,{children:["Flags can be mocked for the unit tests to access some feature. Checkout:\n",(0,s.jsx)(n.a,{href:"https://github.com/osbuild/image-builder-frontend/blob/9a464e416bc3769cfc8e23b62f1dd410eb0e0455/src/test/Components/CreateImageWizardV2/CreateImageWizard.test.tsx#L49",children:"https://github.com/osbuild/image-builder-frontend/blob/9a464e416bc3769cfc8e23b62f1dd410eb0e0455/src/test/Components/CreateImageWizardV2/CreateImageWizard.test.tsx#L49"})]}),"\n",(0,s.jsx)(n.p,{children:"If the two possible code path accessible via the toggles are defined in the code\nbase, then it's good practice to test the two of them. If not, only test what's\nactually owned by the frontend project."}),"\n",(0,s.jsx)(n.h5,{id:"cleaning-the-flags",children:"Cleaning the flags"}),"\n",(0,s.jsx)(n.p,{children:"Unleash toggles are expected to live for a limited amount of time, documentation\nspecify 40 days for a release, we should keep that in mind for each toggle\nwe're planning on using."}),"\n",(0,s.jsx)(n.h3,{id:"backend-development",children:"Backend Development"}),"\n",(0,s.jsxs)(n.p,{children:["To develop both the frontend and the backend you can again use the proxy to run both the\nfrontend and backend locally against the chrome at cloud.redhat.com. For instructions\nsee the ",(0,s.jsx)(n.a,{href:"https://github.com/osbuild/osbuild-getting-started",children:"osbuild-getting-started project"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"file-structure",children:"File Structure"}),"\n",(0,s.jsx)(n.h3,{id:"quick-reference",children:"Quick Reference"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Directory"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://github.com/RedHatInsights/image-builder-frontend/tree/main/api",children:(0,s.jsx)(n.code,{children:"/api"})})}),(0,s.jsx)(n.td,{children:"API schema and config files"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://github.com/RedHatInsights/image-builder-frontend/tree/main/config",children:(0,s.jsx)(n.code,{children:"/config"})})}),(0,s.jsx)(n.td,{children:"webpack configuration"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://github.com/RedHatInsights/image-builder-frontend/tree/main/devel",children:(0,s.jsx)(n.code,{children:"/devel"})})}),(0,s.jsx)(n.td,{children:"tools for local development"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://github.com/RedHatInsights/image-builder-frontend/tree/main/src",children:(0,s.jsx)(n.code,{children:"/src"})})}),(0,s.jsx)(n.td,{children:"source code"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://github.com/RedHatInsights/image-builder-frontend/tree/main/src/Components",children:(0,s.jsx)(n.code,{children:"/src/Components"})})}),(0,s.jsx)(n.td,{children:"source code split by individual components"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://github.com/RedHatInsights/image-builder-frontend/tree/main/src/test",children:(0,s.jsx)(n.code,{children:"/src/test"})})}),(0,s.jsx)(n.td,{children:"test utilities"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://github.com/RedHatInsights/image-builder-frontend/tree/main/src/test/mocks",children:(0,s.jsx)(n.code,{children:"/src/test/mocks"})})}),(0,s.jsx)(n.td,{children:"mock handlers and server config for MSW"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://github.com/RedHatInsights/image-builder-frontend/tree/main/src/store",children:(0,s.jsx)(n.code,{children:"/src/store"})})}),(0,s.jsx)(n.td,{children:"Redux store"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"style-guidelines",children:"Style Guidelines"}),"\n",(0,s.jsxs)(n.p,{children:["This project uses eslint's recommended styling guidelines. These rules can be found here:\n",(0,s.jsx)(n.a,{href:"https://eslint.org/docs/rules/",children:"https://eslint.org/docs/rules/"})]}),"\n",(0,s.jsx)(n.p,{children:"To run the linter, use:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run lint\n"})}),"\n",(0,s.jsx)(n.p,{children:"Any errors that can be fixed automatically, can be corrected by running:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run lint --fix\n"})}),"\n",(0,s.jsxs)(n.p,{children:["All the linting rules and configuration of eslint can be found in ",(0,s.jsx)(n.a,{href:"https://github.com/RedHatInsights/image-builder-frontend/blob/main/.eslintrc.yml",children:(0,s.jsx)(n.code,{children:".eslintrc.yml"})}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"additional-eslint-rules",children:"Additional eslint rules"}),"\n",(0,s.jsx)(n.p,{children:"There are also additional rules added to enforce code style. Those being:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"import/order"})," -> enforces the order in import statements and separates them into groups based on their type"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"prefer-const"})," -> enforces use of ",(0,s.jsx)(n.code,{children:"const"})," declaration for variables that are never reassigned"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"no-console"})," -> throws an error for any calls of ",(0,s.jsx)(n.code,{children:"console"})," methods leftover after debugging"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"test-guidelines",children:"Test Guidelines"}),"\n",(0,s.jsxs)(n.p,{children:["This project is tested using the ",(0,s.jsx)(n.a,{href:"https://jestjs.io/docs/getting-started",children:"Jest"})," framework, ",(0,s.jsx)(n.a,{href:"https://testing-library.com/docs/react-testing-library/intro",children:"React Testing Library"}),", and the ",(0,s.jsx)(n.a,{href:"https://mswjs.io/docs/",children:"Mock Service Worker"})," library."]}),"\n",(0,s.jsx)(n.p,{children:"All UI contributions must also include a new test or update an existing test in order to maintain code coverage."}),"\n",(0,s.jsx)(n.h3,{id:"running-the-tests",children:"Running the tests"}),"\n",(0,s.jsx)(n.p,{children:"To run the unit tests, the linter, and the code coverage check run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run test\n"})}),"\n",(0,s.jsx)(n.p,{children:"These tests will also be run in our CI when a PR is opened."}),"\n",(0,s.jsx)(n.h3,{id:"using-msw-data-in-development",children:"Using MSW data in development"}),"\n",(0,s.jsxs)(n.p,{children:["If you want to develop in environment with mocked data, run the command ",(0,s.jsx)(n.code,{children:"npm run stage-beta:msw"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"enabling-msw",children:"Enabling MSW"}),"\n",(0,s.jsxs)(n.p,{children:["In a case you're seeing ",(0,s.jsx)(n.code,{children:"Error: [MSW] Failed to register the Service Worker"})," in console, you might also need to configure SSL certification on your computer."]}),"\n",(0,s.jsxs)(n.p,{children:["In order to do this install ",(0,s.jsx)(n.a,{href:"https://github.com/FiloSottile/mkcert",children:"mkcert"})]}),"\n",(0,s.jsxs)(n.p,{children:["After the installation, go to the ",(0,s.jsx)(n.code,{children:"/node_modules/.cache/webpack-dev-server"})," folder and run following commands:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"mkcert -install"}),"\xa0 to create a new certificate authority on your machine"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"mkcert prod.foo.redhat.com"}),"\xa0 to create the actual signed certificate"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"mac-configuration",children:"Mac Configuration"}),"\n",(0,s.jsx)(n.p,{children:"Follow these steps to find and paste the certification file into the 'Keychain Access' application:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Open the 'Keychain Access' application."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Select 'login' on the left side."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Navigate to the 'Certificates' tab."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Drag the certification file (located at /image-builder-frontend/node_modules/.cache/webpack-dev-server/server.pem) to the certification list."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Double-click on the added certificate (localhost certificate) to open the localhost window."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Open the 'Trust' dropdown menu."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Set all options to 'Always Trust'."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Close the localhost screen."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.code,{children:"npm run stage-beta:msw"})," and open the Firefox browser to verify that it is working as expected."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>d});var s=i(7294);const t={},r=s.createContext(t);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);