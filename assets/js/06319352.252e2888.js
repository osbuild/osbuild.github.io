"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[8101],{3553:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=i(5893),s=i(1151);const r={},o="bootc-image-builder",l={id:"bootc/index",title:"bootc-image-builder",description:"A container to create disk images from bootc container inputs,",source:"@site/docs/bootc/index.md",sourceDirName:"bootc",slug:"/bootc/",permalink:"/docs/bootc/",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/osbuild.github.io/tree/main/docs/bootc/index.md",tags:[],version:"current",frontMatter:{},sidebar:"bootc"},c={},d=[{value:"\ud83d\udd28 Installation",id:"-installation",level:2},{value:"\u270d Prerequisites",id:"-prerequisites",level:2},{value:"\ud83d\ude80 Examples",id:"-examples",level:2},{value:"Running the resulting QCOW2 file on Linux (x86_64)",id:"running-the-resulting-qcow2-file-on-linux-x86_64",level:3},{value:"qemu-system-x86_64",id:"qemu-system-x86_64",level:4},{value:"virt-install",id:"virt-install",level:4},{value:"Running the resulting QCOW2 file on macOS (aarch64)",id:"running-the-resulting-qcow2-file-on-macos-aarch64",level:3},{value:"\ud83d\udcdd Arguments",id:"-arguments",level:2},{value:"Detailed description of optional flags",id:"detailed-description-of-optional-flags",level:3},{value:"\ud83d\udcbe Image types",id:"-image-types",level:2},{value:"\ud83d\udcbe Target architecture",id:"-target-architecture",level:2},{value:"\u2601\ufe0f Cloud uploaders",id:"\ufe0f-cloud-uploaders",level:2},{value:"Amazon Machine Images (AMIs)",id:"amazon-machine-images-amis",level:3},{value:"Prerequisites",id:"prerequisites",level:4},{value:"Flags",id:"flags",level:4},{value:"AWS credentials file",id:"aws-credentials-file",level:4},{value:"AWS credentials via environment",id:"aws-credentials-via-environment",level:4},{value:"\ud83d\udcbd Volumes",id:"-volumes",level:2},{value:"\ud83d\udcdd Build config",id:"-build-config",level:2},{value:"Users (<code>user</code>, array)",id:"users-user-array",level:3},{value:"Kernel Arguments (<code>kernel</code>, mapping)",id:"kernel-arguments-kernel-mapping",level:3},{value:"Anaconda ISO (installer) options (<code>installer</code>, mapping)",id:"anaconda-iso-installer-options-installer-mapping",level:3},{value:"Building",id:"building",level:2},{value:"Accessing the system",id:"accessing-the-system",level:3},{value:"\ud83d\udcca Project",id:"-project",level:2},{value:"Contributing",id:"contributing",level:3},{value:"\ud83d\uddc4\ufe0f Repository",id:"\ufe0f-repository",level:2},{value:"\ud83e\uddfe License",id:"-license",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"bootc-image-builder",children:"bootc-image-builder"}),"\n",(0,t.jsxs)(n.p,{children:["A container to create disk images from ",(0,t.jsx)(n.a,{href:"https://github.com/containers/bootc",children:"bootc"})," container inputs,\nespecially oriented towards ",(0,t.jsx)(n.a,{href:"https://docs.fedoraproject.org/en-US/bootc/",children:"Fedora/CentOS bootc"})," or\nderivatives."]}),"\n",(0,t.jsx)(n.h2,{id:"-installation",children:"\ud83d\udd28 Installation"}),"\n",(0,t.jsxs)(n.p,{children:["Have ",(0,t.jsx)(n.a,{href:"https://podman.io/",children:"podman"})," installed on your system. Either through your systems package manager if you're on\nLinux or through ",(0,t.jsx)(n.a,{href:"https://podman.io/",children:"Podman Desktop"})," if you are on macOS or Windows. If you want to run the resulting\nvirtual machine(s) or installer media you can use ",(0,t.jsx)(n.a,{href:"https://www.qemu.org/",children:"qemu"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["A very nice GUI extension for Podman Desktop is also\n",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop-extension-bootc",children:"available"}),".\nThe command line examples below can be all handled by\nPodman Desktop."]}),"\n",(0,t.jsx)(n.p,{children:"On macOS, the podman machine must be running in rootful mode:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'$ podman machine stop   # if already running\nWaiting for VM to exit...\nMachine "podman-machine-default" stopped successfully\n$ podman machine set --rootful\n$ podman machine start\n'})}),"\n",(0,t.jsx)(n.h2,{id:"-prerequisites",children:"\u270d Prerequisites"}),"\n",(0,t.jsxs)(n.p,{children:["The package ",(0,t.jsx)(n.code,{children:"osbuild-selinux"})," or equivalent osbuild SELinux policies must be installed in the system running\n",(0,t.jsx)(n.code,{children:"bootc-image-builder"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"-examples",children:"\ud83d\ude80 Examples"}),"\n",(0,t.jsxs)(n.p,{children:["The following example builds a ",(0,t.jsx)(n.code,{children:"centos-bootc:stream9"})," bootable container into a QCOW2 image for the architecture you're running\nthe command on.  However, be sure to see the ",(0,t.jsx)(n.a,{href:"https://docs.fedoraproject.org/en-US/bootc/",children:"upstream documentation"}),"\nfor more general information!  Note that outside of initial experimentation, it's recommended to build a ",(0,t.jsx)(n.em,{children:"derived"})," container image\n(or reuse a derived image built via someone else) and then use this project to make a disk image from your custom image."]}),"\n",(0,t.jsxs)(n.p,{children:["The generic base images do not include a default user. This example injects a ",(0,t.jsx)(n.a,{href:"#-build-config",children:"user configuration file"}),"\nby adding a volume-mount for the local file to the bootc-image-builder container."]}),"\n",(0,t.jsxs)(n.p,{children:["The following command will create a QCOW2 disk image. First, create ",(0,t.jsx)(n.code,{children:"./config.toml"})," as described above to configure user access."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Ensure the image is fetched\nsudo podman pull quay.io/centos-bootc/centos-bootc:stream9\nsudo podman run \\\n    --rm \\\n    -it \\\n    --privileged \\\n    --pull=newer \\\n    --security-opt label=type:unconfined_t \\\n    -v $(pwd)/config.toml:/config.toml:ro \\\n    -v $(pwd)/output:/output \\\n    -v /var/lib/containers/storage:/var/lib/containers/storage \\\n    quay.io/centos-bootc/bootc-image-builder:latest \\\n    --type qcow2 \\\n    --local \\\n    quay.io/centos-bootc/centos-bootc:stream9\n"})}),"\n",(0,t.jsx)(n.h3,{id:"running-the-resulting-qcow2-file-on-linux-x86_64",children:"Running the resulting QCOW2 file on Linux (x86_64)"}),"\n",(0,t.jsxs)(n.p,{children:["A virtual machine can be launched using ",(0,t.jsx)(n.code,{children:"qemu-system-x86_64"})," or with ",(0,t.jsx)(n.code,{children:"virt-install"})," as shown below;\nhowever there is more information about virtualization and other\nchoices in the ",(0,t.jsx)(n.a,{href:"https://docs.fedoraproject.org/en-US/bootc/",children:"Fedora/CentOS bootc documentation"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"qemu-system-x86_64",children:"qemu-system-x86_64"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"qemu-system-x86_64 \\\n    -M accel=kvm \\\n    -cpu host \\\n    -smp 2 \\\n    -m 4096 \\\n    -bios /usr/share/OVMF/OVMF_CODE.fd \\\n    -serial stdio \\\n    -snapshot output/qcow2/disk.qcow2\n"})}),"\n",(0,t.jsx)(n.h4,{id:"virt-install",children:"virt-install"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo virt-install \\\n    --name fedora-bootc \\\n    --cpu host \\\n    --vcpus 4 \\\n    --memory 4096 \\\n    --import --disk ./output/qcow2/disk.qcow2,format=qcow2 \\\n    --os-variant fedora-eln\n"})}),"\n",(0,t.jsx)(n.h3,{id:"running-the-resulting-qcow2-file-on-macos-aarch64",children:"Running the resulting QCOW2 file on macOS (aarch64)"}),"\n",(0,t.jsxs)(n.p,{children:["This assumes qemu was installed through ",(0,t.jsx)(n.a,{href:"https://brew.sh/",children:"homebrew"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"qemu-system-aarch64 \\\n    -M accel=hvf \\\n    -cpu host \\\n    -smp 2 \\\n    -m 4096 \\\n    -bios /opt/homebrew/Cellar/qemu/8.1.3_2/share/qemu/edk2-aarch64-code.fd \\\n    -serial stdio \\\n    -machine virt \\\n    -snapshot output/qcow2/disk.qcow2\n"})}),"\n",(0,t.jsx)(n.h2,{id:"-arguments",children:"\ud83d\udcdd Arguments"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'Usage:\n  sudo podman run \\\n    --rm \\\n    -it \\\n    --privileged \\\n    --pull=newer \\\n    --security-opt label=type:unconfined_t \\\n    -v $(pwd)/output:/output \\\n    quay.io/centos-bootc/bootc-image-builder:latest \\\n    <imgref>\n\nFlags:\n      --chown string           chown the ouput directory to match the specified UID:GID\n      --tls-verify             require HTTPS and verify certificates when contacting registries (default true)\n      --type string            image type to build [qcow2, ami] (default "qcow2")\n      --target-arch string     architecture to build image for (default is the native architecture)\n'})}),"\n",(0,t.jsx)(n.h3,{id:"detailed-description-of-optional-flags",children:"Detailed description of optional flags"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Argument"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Default Value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"--chown"})}),(0,t.jsxs)(n.td,{children:["chown the output directory to match the specified UID",":GID"]}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"--rootfs"})}),(0,t.jsx)(n.td,{children:"Root filesystem type. Overrides the default from the source container. Supported values: ext4, xfs"}),(0,t.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"--tls-verify"})}),(0,t.jsx)(n.td,{children:"Require HTTPS and verify certificates when contacting registries"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"true"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"--type"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.a,{href:"#-image-types",children:"Image type"})," to build"]}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"qcow2"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"--target-arch"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.a,{href:"#-target-architecture",children:"Target arch"})," to build"]}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u274c"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"--type"})," parameter can be given multiple times and multiple outputs will\nbe produced."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["\ud83d\udca1 Tip: Flags in ",(0,t.jsx)(n.strong,{children:"bold"})," are the most important ones."]})}),"\n",(0,t.jsx)(n.h2,{id:"-image-types",children:"\ud83d\udcbe Image types"}),"\n",(0,t.jsxs)(n.p,{children:["The following image types are currently available via the ",(0,t.jsx)(n.code,{children:"--type"})," argument:"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Image type"}),(0,t.jsx)(n.th,{children:"Target environment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ami"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html",children:"Amazon Machine Image"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"qcow2"})," ",(0,t.jsx)(n.strong,{children:"(default)"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://www.qemu.org/",children:"QEMU"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"vmdk"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/VMDK",children:"VMDK"})," usable in vSphere, among others"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"anaconda-iso"})}),(0,t.jsx)(n.td,{children:"An unattended Anaconda installer that installs to the first disk found."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"raw"})}),(0,t.jsxs)(n.td,{children:["Unformatted ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Rawdisk",children:"raw disk"}),"."]})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"-target-architecture",children:"\ud83d\udcbe Target architecture"}),"\n",(0,t.jsxs)(n.p,{children:["Specify the target architecture of the system on which the disk image will be installed on. By default,\n",(0,t.jsx)(n.code,{children:"bootc-image-builder"})," will build for the native host architecture. The target architecture\nmust match an available architecture of the ",(0,t.jsx)(n.code,{children:"bootc-image-builder"})," image you are using to build the disk image.\nCurrently, ",(0,t.jsx)(n.code,{children:"amd64"})," and ",(0,t.jsx)(n.code,{children:"arm64"})," are included in ",(0,t.jsx)(n.code,{children:"quay.io/centos-bootc/bootc-image-builder"})," manifest list.\nThe architecture of the bootc OCI image and the bootc-image-builder image must match. For example, when building\na non-native architecture bootc OCI image, say, building for x86_64 from an arm-based Mac, it is possible to run\n",(0,t.jsx)(n.code,{children:"podman build"})," with the ",(0,t.jsx)(n.code,{children:"--platform linux/amd64"})," flag. In this case, to then build a disk image from the same arm-based Mac,\nyou should provide ",(0,t.jsx)(n.code,{children:"--target-arch amd64"})," when running the ",(0,t.jsx)(n.code,{children:"bootc-image-builder"})," command."]}),"\n",(0,t.jsx)(n.h2,{id:"\ufe0f-cloud-uploaders",children:"\u2601\ufe0f Cloud uploaders"}),"\n",(0,t.jsx)(n.h3,{id:"amazon-machine-images-amis",children:"Amazon Machine Images (AMIs)"}),"\n",(0,t.jsx)(n.h4,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.p,{children:["In order to successfully import an AMI into your AWS account, you need to have the ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/vm-import/latest/userguide/required-permissions.html",children:"vmimport service role"})," configured on your account."]}),"\n",(0,t.jsx)(n.h4,{id:"flags",children:"Flags"}),"\n",(0,t.jsx)(n.p,{children:"AMIs can be automatically uploaded to AWS by specifying the following flags:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Argument"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"--aws-ami-name"}),(0,t.jsx)(n.td,{children:"Name for the AMI in AWS"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"--aws-bucket"}),(0,t.jsx)(n.td,{children:"Target S3 bucket name for intermediate storage when creating AMI"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"--aws-region"}),(0,t.jsx)(n.td,{children:"Target region for AWS uploads"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Notes:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.em,{children:"These flags must all be specified together. If none are specified, the AMI is exported to the output directory."})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.em,{children:"The bucket must already exist in the selected region, bootc-image-builder will not create it if it is missing."})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.em,{children:"The output volume is not needed in this case. The image is uploaded to AWS and not exported."})}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"aws-credentials-file",children:"AWS credentials file"}),"\n",(0,t.jsxs)(n.p,{children:["If you already have a credentials file (usually in ",(0,t.jsx)(n.code,{children:"$HOME/.aws/credentials"}),") you need to forward the\ndirectory to the container"]}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:" $ sudo podman run \\\n  --rm \\\n  -it \\\n  --privileged \\\n  --pull=newer \\\n  --security-opt label=type:unconfined_t \\\n  -v $HOME/.aws:/root/.aws:ro \\\n  --env AWS_PROFILE=default \\\n  quay.io/centos-bootc/bootc-image-builder:latest \\\n  --type ami \\\n  --aws-ami-name centos-bootc-ami \\\n  --aws-bucket fedora-bootc-bucket \\\n  --aws-region us-east-1 \\\n  quay.io/centos-bootc/centos-bootc:stream9\n"})}),"\n",(0,t.jsx)(n.p,{children:"Notes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsxs)(n.em,{children:["you can also inject ",(0,t.jsx)(n.strong,{children:"ALL"})," your AWS configuration parameters with ",(0,t.jsx)(n.code,{children:"--env AWS_*"})]})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["see the ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html",children:"AWS CLI documentation"})," for more information about other environment variables"]}),"\n",(0,t.jsx)(n.h4,{id:"aws-credentials-via-environment",children:"AWS credentials via environment"}),"\n",(0,t.jsx)(n.p,{children:"AWS credentials can be specified through two environment variables:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Variable name"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"AWS_ACCESS_KEY_ID"}),(0,t.jsx)(n.td,{children:"AWS access key associated with an IAM account."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"AWS_SECRET_ACCESS_KEY"}),(0,t.jsx)(n.td,{children:'Specifies the secret key associated with the access key. This is essentially the "password" for the access key.'})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Those ",(0,t.jsx)(n.strong,{children:"should not"})," be specified with ",(0,t.jsx)(n.code,{children:"--env"})," as plain value, but you can silently hand them over with ",(0,t.jsx)(n.code,{children:"--env AWS_*"})," or\nsave these variables in a file and pass them using the ",(0,t.jsx)(n.code,{children:"--env-file"})," flag for ",(0,t.jsx)(n.code,{children:"podman run"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ cat aws.secrets\nAWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE\nAWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY\n\n$ sudo podman run \\\n  --rm \\\n  -it \\\n  --privileged \\\n  --pull=newer \\\n  --security-opt label=type:unconfined_t \\\n  --env-file=aws.secrets \\\n  quay.io/centos-bootc/bootc-image-builder:latest \\\n  --type ami \\\n  --aws-ami-name centos-bootc-ami \\\n  --aws-bucket centos-bootc-bucket \\\n  --aws-region us-east-1 \\\n  quay.io/centos-bootc/centos-bootc:stream9\n"})}),"\n",(0,t.jsx)(n.h2,{id:"-volumes",children:"\ud83d\udcbd Volumes"}),"\n",(0,t.jsx)(n.p,{children:"The following volumes can be mounted inside the container:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Volume"}),(0,t.jsx)(n.th,{children:"Purpose"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Required"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/output"})}),(0,t.jsx)(n.td,{children:"Used for storing the resulting artifacts"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/store"})}),(0,t.jsxs)(n.td,{children:["Used for the ",(0,t.jsx)(n.a,{href:"https://www.osbuild.org/",children:"osbuild store"})]}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"No"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/rpmmd"})}),(0,t.jsx)(n.td,{children:"Used for the DNF cache"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"No"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"-build-config",children:"\ud83d\udcdd Build config"}),"\n",(0,t.jsxs)(n.p,{children:["A build config is a Toml (or JSON) file with customizations for the resulting image. The config file is mapped into the container directory to ",(0,t.jsx)(n.code,{children:"/config.toml"}),". The customizations are specified under a ",(0,t.jsx)(n.code,{children:"customizations"})," object."]}),"\n",(0,t.jsx)(n.p,{children:"As an example, let's show how you can add a user to the image:"}),"\n",(0,t.jsxs)(n.p,{children:["Firstly create a file ",(0,t.jsx)(n.code,{children:"./config.toml"})," and put the following content into it:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:'[[customizations.user]]\nname = "alice"\npassword = "bob"\nkey = "ssh-rsa AAA ... user@email.com"\ngroups = ["wheel"]\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Then, run ",(0,t.jsx)(n.code,{children:"bootc-image-builder"})," with the following arguments:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo podman run \\\n    --rm \\\n    -it \\\n    --privileged \\\n    --pull=newer \\\n    --security-opt label=type:unconfined_t \\\n    -v $(pwd)/config.toml:/config.toml:ro \\\n    -v $(pwd)/output:/output \\\n    quay.io/centos-bootc/bootc-image-builder:latest \\\n    --type qcow2 \\\n    quay.io/centos-bootc/centos-bootc:stream9\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"users-user-array",children:["Users (",(0,t.jsx)(n.code,{children:"user"}),", array)"]}),"\n",(0,t.jsx)(n.p,{children:"Possible fields:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Use"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Required"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"name"})}),(0,t.jsx)(n.td,{children:"Name of the user"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"password"})}),(0,t.jsx)(n.td,{children:"Unencrypted password"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"No"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"key"})}),(0,t.jsx)(n.td,{children:"Public SSH key contents"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"No"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"groups"})}),(0,t.jsx)(n.td,{children:"An array of secondary to put the user into"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"No"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "customizations": {\n    "user": [\n      {\n        "name": "alice",\n        "password": "bob",\n        "key": "ssh-rsa AAA ... user@email.com",\n        "groups": [\n          "wheel",\n          "admins"\n        ]\n      }\n    ]\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"kernel-arguments-kernel-mapping",children:["Kernel Arguments (",(0,t.jsx)(n.code,{children:"kernel"}),", mapping)"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "customizations": {\n    "kernel": {\n      "append": "mitigations=auto,nosmt"\n    }\n  }\n}\n\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"anaconda-iso-installer-options-installer-mapping",children:["Anaconda ISO (installer) options (",(0,t.jsx)(n.code,{children:"installer"}),", mapping)"]}),"\n",(0,t.jsx)(n.p,{children:"Users can include kickstart file content that will be added to an ISO build to configure the installation process.\nSince multi-line strings are difficult to write and read in json, it's easier to use the toml format when adding kickstart contents:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:'[customizations.installer.kickstart]\ncontents = """\ntext --non-interactive\nzerombr\nclearpart --all --initlabel --disklabel=gpt\nautopart --noswap --type=lvm\nnetwork --bootproto=dhcp --device=link --activate --onboot=on\n"""\n'})}),"\n",(0,t.jsx)(n.p,{children:"The equivalent in json would be:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "customizations": {\n    "installer": {\n      "kickstart": {\n        "contents": "text --non-interactive\\nzerombr\\nclearpart --all --initlabel --disklabel=gpt\\nautopart --noswap --type=lvm\\nnetwork --bootproto=dhcp --device=link --activate --onboot=on"\n      }\n    }\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Note that bootc-image-builder will automatically add the command that installs the container image (",(0,t.jsx)(n.code,{children:"ostreecontainer ..."}),"), so this line or any line that conflicts with it should not be included. See the relevant ",(0,t.jsx)(n.a,{href:"https://pykickstart.readthedocs.io/en/latest/kickstart-docs.html#ostreecontainer",children:"Kickstart documentation"})," for more information.\nNo other kickstart commands are added by bootc-image-builder in this case, so it is the responsibility of the user to provide all other commands (for example, for partitioning, network, language, etc)."]}),"\n",(0,t.jsx)(n.h2,{id:"building",children:"Building"}),"\n",(0,t.jsx)(n.p,{children:"To build the container locally you can run"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sudo podman build --tag bootc-image-builder .\n"})}),"\n",(0,t.jsxs)(n.p,{children:["NOTE: running already the ",(0,t.jsx)(n.code,{children:"podman build"})," as root avoids problems later as we need to run the building\nof the image as root anyway"]}),"\n",(0,t.jsx)(n.h3,{id:"accessing-the-system",children:"Accessing the system"}),"\n",(0,t.jsxs)(n.p,{children:["With a virtual machine launched with the above ",(0,t.jsx)(n.a,{href:"#virt-install",children:"virt-install"})," example, access the system with"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"ssh -i /path/to/private/ssh-key alice@ip-address\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Note that if you do not provide a password for the provided user, ",(0,t.jsx)(n.code,{children:"sudo"})," will not work unless passwordless sudo\nis configured. The base image ",(0,t.jsx)(n.code,{children:"quay.io/centos-bootc/centos-bootc:stream9"})," does not configure passwordless sudo.\nThis can be configured in a derived bootc container by including the following in a Containerfile."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dockerfile",children:"FROM quay.io/centos-bootc/centos-bootc:stream9\nADD wheel-passwordless-sudo /etc/sudoers.d/wheel-passwordless-sudo\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The contents of the file ",(0,t.jsx)(n.code,{children:"$(pwd)/wheel-passwordless-sudo"})," should be"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"%wheel ALL=(ALL) NOPASSWD: ALL\n"})}),"\n",(0,t.jsx)(n.h2,{id:"-project",children:"\ud83d\udcca Project"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Website"}),": ",(0,t.jsx)(n.a,{href:"https://www.osbuild.org",children:"https://www.osbuild.org"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Bug Tracker"}),": ",(0,t.jsx)(n.a,{href:"https://github.com/osbuild/bootc-image-builder/issues",children:"https://github.com/osbuild/bootc-image-builder/issues"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Matrix"}),": #image-builder on ",(0,t.jsx)(n.a,{href:"https://matrix.to/#/#image-builder:fedoraproject.org",children:"fedoraproject.org"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Mailing List"}),": ",(0,t.jsx)(n.a,{href:"mailto:image-builder@redhat.com",children:"image-builder@redhat.com"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Changelog"}),": ",(0,t.jsx)(n.a,{href:"https://github.com/osbuild/bootc-image-builder/releases",children:"https://github.com/osbuild/bootc-image-builder/releases"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"contributing",children:"Contributing"}),"\n",(0,t.jsxs)(n.p,{children:["Please refer to the ",(0,t.jsx)(n.a,{href:"https://www.osbuild.org/docs/developer-guide/index",children:"developer guide"})," to learn about our\nworkflow, code style and more."]}),"\n",(0,t.jsx)(n.h2,{id:"\ufe0f-repository",children:"\ud83d\uddc4\ufe0f Repository"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"web"}),":   ",(0,t.jsx)(n.a,{href:"https://github.com/osbuild/bootc-image-builder",children:"https://github.com/osbuild/bootc-image-builder"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"https"}),": ",(0,t.jsx)(n.code,{children:"https://github.com/osbuild/bootc-image-builder.git"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"ssh"}),":   ",(0,t.jsx)(n.code,{children:"git@github.com:osbuild/bootc-image-builder.git"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"-license",children:"\ud83e\uddfe License"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Apache-2.0"})}),"\n",(0,t.jsx)(n.li,{children:"See LICENSE file for details."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>o});var t=i(7294);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);