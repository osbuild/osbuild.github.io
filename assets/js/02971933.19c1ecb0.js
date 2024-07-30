"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[8477],{4476:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=t(5893),r=t(1151);const s={},o="Building OSTree image",a={id:"on-premises/commandline/building-ostree-images",title:"Building OSTree image",description:'This section contains a guide for building OSTree commits. As opposed to the "traditional" image types, these commits are not directly bootable so although they basically contain a full operating system, in order to boot them, they need to be deployed. This can, for example, be done via the  Fedora installer (Anaconda).',source:"@site/docs/on-premises/02-commandline/building-ostree-images.md",sourceDirName:"on-premises/02-commandline",slug:"/on-premises/commandline/building-ostree-images",permalink:"/docs/on-premises/commandline/building-ostree-images",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/osbuild.github.io/tree/main/docs/on-premises/02-commandline/building-ostree-images.md",tags:[],version:"current",frontMatter:{},sidebar:"onPremises",previous:{title:"Using the commandline",permalink:"/docs/on-premises/commandline/"},next:{title:"Building a RHEL for Edge Installer",permalink:"/docs/on-premises/commandline/edge-container+installer"}},d={},l=[{value:"Overview of the intended result",id:"overview-of-the-intended-result",level:2},{value:"Building an OSTree commit",id:"building-an-ostree-commit",level:2},{value:"Writing a Kickstart file",id:"writing-a-kickstart-file",level:2},{value:"Setting up an HTTP server",id:"setting-up-an-http-server",level:2},{value:"Running a VM and applying the OSTree commit",id:"running-a-vm-and-applying-the-ostree-commit",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"building-ostree-image",children:"Building OSTree image"}),"\n",(0,i.jsx)(n.p,{children:'This section contains a guide for building OSTree commits. As opposed to the "traditional" image types, these commits are not directly bootable so although they basically contain a full operating system, in order to boot them, they need to be deployed. This can, for example, be done via the  Fedora installer (Anaconda).'}),"\n",(0,i.jsxs)(n.p,{children:["OSTree is a technology for creating immutable operating system images and it is a base for Fedora CoreOS, Fedora IoT, Fedora Silverblue, and RHEL for Edge. For more information on OSTree, see ",(0,i.jsx)(n.a,{href:"https://ostreedev.github.io/ostree/",children:"their website"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"overview-of-the-intended-result",children:"Overview of the intended result"}),"\n",(0,i.jsx)(n.p,{children:"As mentioned above, osbuild-composer produces OSTree commits which are not directly bootable. The commits are inside a tarball to make their usage more convenient. In order to deploy them, you will need:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Fedora installation ISO - such as netinst (",(0,i.jsx)(n.a,{href:"https://getfedora.org/en/server/download/",children:"https://getfedora.org/en/server/download/"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"HTTP server to serve the content of the tarball to the Fedora virtual machine booted from the ISO"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Kickstart file that instructs Anaconda (Fedora installer) to use the OSTree commit from the HTTP server"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In this guide, a container running Apache ",(0,i.jsx)(n.code,{children:"httpd"})," will be used as the HTTP server."]}),"\n",(0,i.jsx)(n.p,{children:"The result will look like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:" _________________          ____________________________\n|                 |        |                            |\n|                 |-------\x3e| Fedora VM with mounted ISO |\n|                 |        |  - Anaconda                |\n|  Fedora Host OS |        |____________________________|\n|                 |                |\n|                 |         _______|________________________\n|                 |        |                                |\n|                 |-------\x3e| Fedora container running httpd |\n|_________________|        |  serving content of the tarball|\n                           |  and the kickstart file        |\n                           |________________________________|\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Note: If you would like to understand what is inside the tarball, read the upstream OSTree documentation."})}),"\n",(0,i.jsx)(n.h2,{id:"building-an-ostree-commit",children:"Building an OSTree commit"}),"\n",(0,i.jsxs)(n.p,{children:["Start by creating a blueprint for your commit. Using your favorite text editor, ",(0,i.jsx)(n.code,{children:"vi"}),", create a file named ",(0,i.jsx)(n.code,{children:"fishy.toml"})," with this content:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'name = "fishy-commit"\ndescription = "Fishy OSTree commit"\nversion = "0.0.1"\n\n[[packages]]\nname = "fish"\nversion = "*"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Now push the blueprint to osbuild-composer using ",(0,i.jsx)(n.code,{children:"composer-cli"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ composer-cli blueprints push fishy.toml\n"})}),"\n",(0,i.jsx)(n.p,{children:"And start a build:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ composer-cli compose start fishy-commit fedora-iot-commit\nCompose 8e8014f8-4d15-441a-a26d-9ed7fc89e23a added to the queue\n"})}),"\n",(0,i.jsx)(n.p,{children:"Monitor the build status using:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ composer-cli compose status\n"})}),"\n",(0,i.jsx)(n.p,{children:"And finally when the compose is complete, download the result:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ composer-cli compose image 8e8014f8-4d15-441a-a26d-9ed7fc89e23a\n8e8014f8-4d15-441a-a26d-9ed7fc89e23a-commit.tar: 670.45 MB\n"})}),"\n",(0,i.jsx)(n.h2,{id:"writing-a-kickstart-file",children:"Writing a Kickstart file"}),"\n",(0,i.jsx)(n.p,{children:"As mentioned above, the Kickstart file is meant for the Anaconda installer. It contains instructions on how to install the system."}),"\n",(0,i.jsxs)(n.p,{children:["Create a file named ",(0,i.jsx)(n.code,{children:"ostree.ks"})," with this content:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"lang en_US.UTF-8\nkeyboard us\ntimezone UTC\nzerombr\nclearpart --all --initlabel\nautopart\nreboot\nuser --name=core --groups=wheel --password=foobar\nostreesetup --nogpg --url=http://10.0.2.2:8000/repo/ --osname=iot --remote=iot --ref=fedora/33/x86_64/iot\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For those interested in all the options, you can read ",(0,i.jsx)(n.a,{href:"https://anaconda-installer.readthedocs.io/en/latest/index.html",children:"Anaconda\u2019s documentation"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The crucial part is on the last line. Here, ",(0,i.jsx)(n.code,{children:"ostreesetup"})," command is used to fetch the OSTree commit. Now for those wondering about the IP address, this tutorial uses ",(0,i.jsx)(n.code,{children:"qemu"})," to boot the virtual machine and ",(0,i.jsx)(n.code,{children:"10.0.2.2"})," is an address which you can use to reach the host system from the guest: ",(0,i.jsx)(n.a,{href:"https://wiki.qemu.org/Documentation/Networking#User_Networking_.28SLIRP.29",children:"User Networking"}),".\nAlso consider:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["the ",(0,i.jsx)(n.code,{children:"osname"})," is a given, based on the underlying OS,"]}),"\n",(0,i.jsxs)(n.li,{children:["the remote name can be any ",(0,i.jsx)(n.a,{href:"https://ostreedev.github.io/ostree/man/ostree-remote.html",children:"valid ostree remote name"}),","]}),"\n",(0,i.jsxs)(n.li,{children:["and the reference is the default coming from the underlying OS, based on the pattern ",(0,i.jsx)(n.code,{children:"<os>/<major version>/<architecture>/<product>"})," (we could have overwritten it as we created our commit, by using the ",(0,i.jsx)(n.code,{children:"start-ostree"})," sub-command and its options)."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"setting-up-an-http-server",children:"Setting up an HTTP server"}),"\n",(0,i.jsx)(n.p,{children:"Now that the kickstart file and OSTree commit are ready, create a container running HTTP server and serving those file. Start by creating a Dockerfile:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dockerfile",children:'FROM fedora:latest\nRUN dnf -y install httpd && dnf clean all\nADD *.tar *.ks /var/www/html\nEXPOSE 80\nCMD ["/usr/sbin/httpd", "-D", "FOREGROUND"]\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Remember that ",(0,i.jsx)(n.code,{children:"ADD *.tar"})," will unpack the tarball file and that this tarball contains a ",(0,i.jsx)(n.code,{children:"/repo/"})," containing the commit data.\nThis explains why the ",(0,i.jsx)(n.code,{children:"ostreesetup"})," command in the above kickstart can grab it from an URL ending in ",(0,i.jsx)(n.code,{children:"/repo/"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Make sure you have everything in the build directory (keep in mind that the UUID is random, so it will be different in your case):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ ls\n8e8014f8-4d15-441a-a26d-9ed7fc89e23a-commit.tar\nDockerfile\nostree.ks\n"})}),"\n",(0,i.jsx)(n.p,{children:"Build the container image:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ podman build -t ostree .\n"})}),"\n",(0,i.jsx)(n.p,{children:"And run it:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ podman run --rm -p 8000:80 ostree\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:'Note: You might be wondering why to bother with a container when you can just use "python -m http.server". The problem is that OSTree produces way too many requests and the Python HTTP server simply fails to keep up with OSTree.'})}),"\n",(0,i.jsx)(n.h2,{id:"running-a-vm-and-applying-the-ostree-commit",children:"Running a VM and applying the OSTree commit"}),"\n",(0,i.jsxs)(n.p,{children:["Start with downloading the Netinstall image from here: ",(0,i.jsx)(n.a,{href:"https://getfedora.org/en/server/download/",children:"https://getfedora.org/en/server/download/"})]}),"\n",(0,i.jsx)(n.p,{children:"Create an empty qcow2 image. That is an image of a hard drive for the virtual machine (VM)."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ qemu-img create -f qcow2 disk-image.img 5G\n"})}),"\n",(0,i.jsx)(n.p,{children:"Run a VM using the hard drive and mount the installation ISO:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ qemu-system-x86_64 \\\n          -enable-kvm \\\n          -m 3000 \\\n          -snapshot \\\n          -cpu host \\\n          -net nic,model=virtio \\\n          -net user,hostfwd=tcp::2223-:22 \\\n          -cdrom $HOME/Downloads/Fedora-Server-netinst-x86_64-33-1.2.iso \\\n          disk-image.img\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Note: To prevent any issue, use the latest stable Fedora host OS for this tutorial."})}),"\n",(0,i.jsx)(n.p,{children:"This command instructs qemu (the hypervisor) to:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use KVM virtualization (makes the VM faster)."}),"\n",(0,i.jsxs)(n.li,{children:["Increase memory to 3000MB (some processes can get memory hungry, for example ",(0,i.jsx)(n.code,{children:"dnf"}),")."]}),"\n",(0,i.jsx)(n.li,{children:"Snapshot the hard drive image, don't override its content."}),"\n",(0,i.jsx)(n.li,{children:"Use the same CPU type as the host uses."}),"\n",(0,i.jsx)(n.li,{children:"Connect the guest to a virtual network bridge on the host and forward TCP port 2223 from the host to the SSH port (22) on the guest (makes it easier to connect to the guest system)."}),"\n",(0,i.jsx)(n.li,{children:"Mount the installation ISO."}),"\n",(0,i.jsx)(n.li,{children:"Use the hard drive image created above."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:'At the initial screen, use arrow keys to select the "Install Fedora 33" line and press TAB key. You\u2019ll see a line of kernel command line options appear below. Something like:'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(6943).Z+"",width:"692",height:"596"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"vmlinuz initrd=initrd.img inst.stage2=hd:LABEL=Fedora quiet\n"})}),"\n",(0,i.jsx)(n.p,{children:"Add a space and this string:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"inst.ks=http://10.0.2.2:8000/ostree.ks\n"})}),"\n",(0,i.jsx)(n.p,{children:"Resulting in this kernel command line:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"vmlinuz initrd=initrd.img inst.stage2=hd:LABEL=Fedora quiet inst.ks=http://10.0.2.2:8000/ostree.ks\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The IP address ",(0,i.jsx)(n.code,{children:"10.0.2.2"})," is again used here, because the VM is running inside Qemu."]}),"\n",(0,i.jsx)(n.p,{children:'Press "Enter", the Anaconda GUI will show up and automatically install the OSTree commit created above.'}),"\n",(0,i.jsx)(n.p,{children:'Once the system is installed and rebooted, use username "core" and password "foobar" to login. You can change the credentials in the kickstart file.'})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},6943:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/ostree-in-anaconda-5a61adde62c07ecf829a1c5601a1a9c6.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var i=t(7294);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);