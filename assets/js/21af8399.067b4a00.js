"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[9963],{6910:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var n=s(5893),t=s(1151);const r={},i="Local Cloud API Development",c={id:"developer-guide/projects/osbuild-composer/localcloud",title:"Local Cloud API Development",description:"The following instructions assume you are running osbuild-composer in a local",source:"@site/docs/developer-guide/projects/osbuild-composer/localcloud.md",sourceDirName:"developer-guide/projects/osbuild-composer",slug:"/developer-guide/projects/osbuild-composer/localcloud",permalink:"/docs/developer-guide/projects/osbuild-composer/localcloud",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/saurus/tree/main/docs/developer-guide/projects/osbuild-composer/localcloud.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"osbuild-composer",permalink:"/docs/developer-guide/projects/osbuild-composer/"},next:{title:"RPM Repository Snapshots",permalink:"/docs/developer-guide/projects/rpmrepo/"}},l={},a=[{value:"Setup Local API Access",id:"setup-local-api-access",level:2},{value:"Skip upload and save locally",id:"skip-upload-and-save-locally",level:2}];function d(e){const o={code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"local-cloud-api-development",children:"Local Cloud API Development"}),"\n",(0,n.jsxs)(o.p,{children:["The following instructions assume you are running osbuild-composer in a local\nVM on some version of Fedora and that you have the osbuild-composer github\nrepository available.  The VM should have ssh access from the host system. In\nthese examples I use ",(0,n.jsx)(o.code,{children:"localvm"})," as an alias for the VM's ssh settings in my\n",(0,n.jsx)(o.code,{children:"~/.ssh/config"})," file."]}),"\n",(0,n.jsx)(o.h2,{id:"setup-local-api-access",children:"Setup Local API Access"}),"\n",(0,n.jsxs)(o.p,{children:["The osbuild-composer cloud api listens to port 443, but it requires SSL\ncertificates in order to authenticate the requests.  You can generate the\nneeded certificates using a slightly modified script from the ",(0,n.jsx)(o.code,{children:"./tools/"}),"\ndirectory, and the system running the script needs to have ",(0,n.jsx)(o.code,{children:"openssl"})," installed\non it."]}),"\n",(0,n.jsx)(o.p,{children:"These changes will let you use curl on the VM to POST the composer api json\nrequest files to the service listening on 127.0.0.1:443."}),"\n",(0,n.jsxs)(o.p,{children:["From the osbuild-composer git repo copy ",(0,n.jsx)(o.code,{children:"./tools/gen-certs.sh"})," and\n",(0,n.jsx)(o.code,{children:"./test/data/x509/openssl.cnf"})," to a temporary directory.  Edit the\n",(0,n.jsx)(o.code,{children:"gen-certs.sh"})," script and replace all of the ",(0,n.jsx)(o.code,{children:"subjectAltName="})," entries with\n",(0,n.jsx)(o.code,{children:"subjectAltName=IP:127.0.0.1"})," and generate new certs like so:"]}),"\n",(0,n.jsx)(o.p,{children:"./gen-certs.sh /tmp/openssl.cnf /tmp/local-certs/ /tmp/working-certs/"}),"\n",(0,n.jsx)(o.p,{children:"Copy the new certs to the VM:"}),"\n",(0,n.jsx)(o.p,{children:"scp /tmp/local-certs/* localvm:/etc/osbuild-composer/"}),"\n",(0,n.jsx)(o.p,{children:"ssh into the VM and stop any currently running osbuild services and then start\nthe cloud api socket service by running:"}),"\n",(0,n.jsxs)(o.p,{children:["systemctl stop '",(0,n.jsx)(o.em,{children:"osbuild"}),"'\nsystemctl start osbuild-composer-api.socket osbuild-remote-worker.socket"]}),"\n",(0,n.jsxs)(o.p,{children:["Make a helper script to POST json cloud api requests to the service.  Save this\nin a file named ",(0,n.jsx)(o.code,{children:"start-cloudapi"})," on the VM:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"#!/usr/bin/sh\ncurl -v -k --cert /etc/osbuild-composer/client-crt.pem \\\n--cacert /etc/osbuild-composer/ca-crt.pem \\\n--key /etc/osbuild-composer/client-key.pem \\\nhttps://localhost/api/image-builder-composer/v2/compose \\\n--header 'Content-Type: application/json' \\\n--data @$1\n"})}),"\n",(0,n.jsxs)(o.p,{children:["Now you need a simple request to create a guest (qcow2) image.  This uses Fedora 38, and\ndoesn't include gpg key checking.  Save this as ",(0,n.jsx)(o.code,{children:"simple-guest.json"}),":"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-json",children:'{\n  "distribution": "fedora-38",\n  "image_request":\n    {\n      "architecture": "x86_64",\n      "image_type": "guest-image",\n      "repositories": [\n          {\n            "name": "fedora",\n            "metalink": "https://mirrors.fedoraproject.org/metalink?repo=fedora-38&arch=x86_64",\n            "check_gpg": false\n          },\n          {\n            "name": "updates",\n            "metalink": "https://mirrors.fedoraproject.org/metalink?repo=updates-released-f38&arch=x86_64",\n            "check_gpg": false\n          },\n          {\n            "name": "fedora-modular",\n            "metalink": "https://mirrors.fedoraproject.org/metalink?repo=fedora-modular-38&arch=x86_64",\n            "check_gpg": false\n          },\n          {\n            "name": "updates-modular",\n            "metalink": "https://mirrors.fedoraproject.org/metalink?repo=updates-released-modular-f38&arch=x86_64",\n            "check_gpg": false\n          }\n      ]\n    }\n}\n'})}),"\n",(0,n.jsxs)(o.p,{children:["Use ",(0,n.jsx)(o.code,{children:"./start-cloudapi simple-guest.json"})," start the build.  You should get a JSON response similar to this:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-json",children:'{"href":"/api/image-builder-composer/v2/compose","kind":"ComposeId","id":"f3ac9290-23c0-47b4-bb9e-cadee85d1340"}\n'})}),"\n",(0,n.jsxs)(o.p,{children:["This will run the build, but since it doesn't have any upload instructions it\nwill fail at the upload step and delete the image from the local system.\n",(0,n.jsx)(o.code,{children:"journalctl -f"})," will show the progress and the upload error."]}),"\n",(0,n.jsx)(o.p,{children:"If you want to upload results to a service include the upload details in the request.  If you\nwant to save the results locally continue to the next section."}),"\n",(0,n.jsx)(o.h2,{id:"skip-upload-and-save-locally",children:"Skip upload and save locally"}),"\n",(0,n.jsx)(o.p,{children:"You can configure osbuild-composer to save the image locally and not try to\nupload it.  This allows you to examine the image, or copy it somewhere to do a\ntest boot of it.  This is not enabled normally because there are no provisions\nfor cleaning up the images -- you need to do that manually before your disk\nruns out of space."}),"\n",(0,n.jsxs)(o.p,{children:["The ",(0,n.jsx)(o.code,{children:"local_save"})," upload option is enabled by setting an environmental variable\nin the ",(0,n.jsx)(o.code,{children:"osbuild-composer.service"})," file.  You can either edit the file directly,\nwhich will need to be replaced every time you update the osbuild-composer rpm,\nor you can create a drop-in file by running ",(0,n.jsx)(o.code,{children:"systemctl edit osbuild-composer.service"})," and adding these lines:"]}),"\n",(0,n.jsx)(o.p,{children:'[Service]\nEnvironment="OSBUILD_LOCALSAVE=1"'}),"\n",(0,n.jsxs)(o.p,{children:["You can confirm the change by running ",(0,n.jsx)(o.code,{children:"systemctl cat osbuild-composer.service"}),".\nNow stop the local osbuild-composer services and start the cloudapi service by\nrunning:"]}),"\n",(0,n.jsxs)(o.p,{children:["systemctl stop '",(0,n.jsx)(o.em,{children:"osbuild"}),"'\nsystemctl start osbuild-composer-api.socket osbuild-remote-worker.socket"]}),"\n",(0,n.jsxs)(o.p,{children:["Make a new composer api request json file with the ",(0,n.jsx)(o.code,{children:"local_save"})," upload option\nset to true.  Copy the ",(0,n.jsx)(o.code,{children:"simple-guest.json"})," example to ",(0,n.jsx)(o.code,{children:"local-guest.json"})," and add\nthe ",(0,n.jsx)(o.code,{children:"upload_options"})," section:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-json",children:'{\n  "distribution": "fedora-38",\n  "image_request":\n    {\n      "architecture": "x86_64",\n      "image_type": "guest-image",\n      "upload_options": {\n          "local_save": true\n      },\n      "repositories": [ ... SAME AS PREVIOUS EXAMPLE ... ]\n    }\n}\n'})}),"\n",(0,n.jsxs)(o.p,{children:["You can now run ",(0,n.jsx)(o.code,{children:"./start-cloudapi local-guest.json"})," to start the build.  You\nshould get a JSON response similar to this:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:'{"href":"/api/image-builder-composer/v2/compose","kind":"ComposeId","id":"4674e0d3-ecb3-4cbe-9c31-ca14b7425eaa"}\n'})}),"\n",(0,n.jsxs)(o.p,{children:["and monitor the progress with ",(0,n.jsx)(o.code,{children:"journalctl -f"}),".  When the compose is finished the\nresult will be saved in\n",(0,n.jsx)(o.code,{children:"/var/lib/osbuild-composer/artifacts/4674e0d3-ecb3-4cbe-9c31-ca14b7425eaa"})]}),"\n",(0,n.jsxs)(o.p,{children:["Remember to monitor your disk usage, it can fill up quickly if you do not delete old artifact\nentries.  These are un-managed, unlike the store used with the weldr api, so they can be removed manually with a simple ",(0,n.jsx)(o.code,{children:"rm -rf /var/lib/osbuild-composer/artifacts/*"})]})]})}function p(e={}){const{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,o,s)=>{s.d(o,{Z:()=>c,a:()=>i});var n=s(7294);const t={},r=n.createContext(t);function i(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);