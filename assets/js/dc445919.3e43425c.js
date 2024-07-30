"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[2185],{8120:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=t(5893),s=t(1151);const i={},r="org.osbuild.gcp.guest-agent.conf",a={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.gcp.guest-agent.conf",title:"org.osbuild.gcp.guest-agent.conf",description:"Create or modify the GCP guest-agent config",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.gcp.guest-agent.conf.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.gcp.guest-agent.conf",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.gcp.guest-agent.conf",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/osbuild.github.io/tree/main/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.gcp.guest-agent.conf.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"org.osbuild.fstab",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.fstab"},next:{title:"org.osbuild.greenboot",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.greenboot"}},d={},c=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"orgosbuildgcpguest-agentconf",children:"org.osbuild.gcp.guest-agent.conf"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Create or modify the GCP guest-agent config"})}),"\n",(0,o.jsxs)(n.p,{children:["Create or modify the GCP guest-agent config, depending on the\nscope either at:\n/etc/default/instance_configs.cfg.distro or\n/etc/default/instance_configs.cfg\nConfiguration sections and options may contain any of these values:\n",(0,o.jsx)(n.a,{href:"https://github.com/GoogleCloudPlatform/guest-agent#configuration",children:"https://github.com/GoogleCloudPlatform/guest-agent#configuration"})]}),"\n",(0,o.jsx)(n.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "definitions": {\n    "Accounts": {\n      "type": "object",\n      "additionalProperties": false,\n      "description": "Accounts section.",\n      "minProperties": 1,\n      "properties": {\n        "deprovision_remove": {\n          "type": "boolean",\n          "description": "Makes deprovisioning a user destructive."\n        },\n        "groups": {\n          "type": "array",\n          "description": "List of groups for newly provisioned users."\n        },\n        "useradd_cmd": {\n          "type": "string",\n          "description": "Command string to create a new user."\n        },\n        "userdel_cmd": {\n          "type": "string",\n          "description": "Command string to delete a user."\n        },\n        "usermod_cmd": {\n          "type": "string",\n          "description": "Command string to modify a user\'s groups."\n        },\n        "gpasswd_add_cmd": {\n          "type": "string",\n          "description": "Command string to add a user to a group."\n        },\n        "gpasswd_remove_cmd": {\n          "type": "string",\n          "description": "Command string to remove a user from a group."\n        },\n        "groupadd_cmd": {\n          "type": "string",\n          "description": "Command string to create a new group."\n        }\n      }\n    },\n    "Daemons": {\n      "type": "object",\n      "additionalProperties": false,\n      "description": "Daemons section.",\n      "minProperties": 1,\n      "properties": {\n        "accounts_daemon": {\n          "type": "boolean",\n          "description": "Disables the accounts daemon."\n        },\n        "clock_skew_daemon": {\n          "type": "boolean",\n          "description": "Disables the clock skew daemon."\n        },\n        "network_daemon": {\n          "type": "boolean",\n          "description": "Disables the network daemon."\n        }\n      }\n    },\n    "InstanceSetup": {\n      "type": "object",\n      "additionalProperties": false,\n      "description": "InstanceSetup section.",\n      "minProperties": 1,\n      "properties": {\n        "host_key_types": {\n          "type": "array",\n          "description": "List of host key types to generate."\n        },\n        "optimize_local_ssd": {\n          "type": "boolean",\n          "description": "Prevents optimizing for local SSD."\n        },\n        "network_enabled": {\n          "type": "boolean",\n          "description": "Skips instance setup functions that require metadata."\n        },\n        "set_boto_config": {\n          "type": "boolean",\n          "description": "Skip setting up a boto config."\n        },\n        "set_host_keys": {\n          "type": "boolean",\n          "description": "Skips generating host keys on first boot."\n        },\n        "set_multiqueue": {\n          "type": "boolean",\n          "description": "Skips multiqueue driver support."\n        }\n      }\n    },\n    "IpForwarding": {\n      "type": "object",\n      "additionalProperties": false,\n      "description": "IpForwarding section.",\n      "minProperties": 1,\n      "properties": {\n        "ethernet_proto_id": {\n          "type": "string",\n          "description": "Protocol ID string for daemon added routes."\n        },\n        "ip_aliases": {\n          "type": "boolean",\n          "description": "Disables setting up alias IP routes."\n        },\n        "target_instance_ips": {\n          "type": "boolean",\n          "description": "Disables internal IP address load balancing."\n        }\n      }\n    },\n    "MetadataScripts": {\n      "type": "object",\n      "additionalProperties": false,\n      "description": "MetadataScripts section.",\n      "minProperties": 1,\n      "properties": {\n        "default_shell": {\n          "type": "string",\n          "description": "String with the default shell to execute scripts."\n        },\n        "run_dir": {\n          "type": "string",\n          "description": "String base directory where metadata scripts are executed."\n        },\n        "startup": {\n          "type": "boolean",\n          "description": "Disables startup script execution."\n        },\n        "shutdown": {\n          "type": "boolean",\n          "description": "Disables shutdown script execution."\n        }\n      }\n    },\n    "NetworkInterfaces": {\n      "type": "object",\n      "additionalProperties": false,\n      "description": "NetworkInterfaces section.",\n      "minProperties": 1,\n      "properties": {\n        "setup": {\n          "type": "boolean",\n          "description": "Skips network interface setup."\n        },\n        "ip_forwarding": {\n          "type": "boolean",\n          "description": "Skips IP forwarding."\n        },\n        "dhcp_command": {\n          "type": "string",\n          "description": "Path for alternate dhcp executable used to enable network interfaces."\n        }\n      }\n    }\n  },\n  "additionalProperties": false,\n  "required": [\n    "config"\n  ],\n  "description": "Configure GCP guest-agent.",\n  "properties": {\n    "config_scope": {\n      "type": "string",\n      "description": "Create distro-wide or instance-specific configuration.",\n      "enum": [\n        "distro",\n        "instance"\n      ],\n      "default": "distro"\n    },\n    "config": {\n      "type": "object",\n      "additionalProperties": false,\n      "description": "GCP guest-agent configuration.",\n      "minProperties": 1,\n      "properties": {\n        "Accounts": {\n          "$ref": "#/definitions/Accounts"\n        },\n        "Daemons": {\n          "$ref": "#/definitions/Daemons"\n        },\n        "InstanceSetup": {\n          "$ref": "#/definitions/InstanceSetup"\n        },\n        "IpForwarding": {\n          "$ref": "#/definitions/IpForwarding"\n        },\n        "MetadataScripts": {\n          "$ref": "#/definitions/MetadataScripts"\n        },\n        "NetworkInterfaces": {\n          "$ref": "#/definitions/NetworkInterfaces"\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:"{}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var o=t(7294);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);