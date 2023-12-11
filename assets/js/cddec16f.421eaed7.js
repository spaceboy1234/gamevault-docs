"use strict";(self.webpackChunkgamevault_docs=self.webpackChunkgamevault_docs||[]).push([[5316],{78463:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=s(85893),i=s(11151);const r={title:"Using Native Approach",sidebar_position:99},a=void 0,l={id:"server-docs/setup/native",title:"Using Native Approach",description:"Container technology presents an efficient and scalable solution by encapsulating applications and their dependencies. This ensures consistent performance across diverse environments and streamlines deployment, management, and scalability.",source:"@site/docs/server-docs/setup/native.md",sourceDirName:"server-docs/setup",slug:"/server-docs/setup/native",permalink:"/docs/server-docs/setup/native",draft:!1,unlisted:!1,editUrl:"https://github.com/phalcode/gamevault-docs/tree/master/docs/server-docs/setup/native.md",tags:[],version:"current",sidebarPosition:99,frontMatter:{title:"Using Native Approach",sidebar_position:99},sidebar:"docs",previous:{title:"Using UNRAID",permalink:"/docs/server-docs/setup/unraid"},next:{title:"Configuration",permalink:"/docs/server-docs/configuration"}},o={},d=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Step 1: Clone the Source Code",id:"step-1-clone-the-source-code",level:3},{value:"Step 2: Install Dependencies",id:"step-2-install-dependencies",level:3},{value:"Step 3: Build",id:"step-3-build",level:3},{value:"Step 4: Set up an .env File",id:"step-4-set-up-an-env-file",level:3},{value:"Step 5: Start the Server",id:"step-5-start-the-server",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"Additional Info",id:"additional-info",level:2},{value:"Stopping the Server",id:"stopping-the-server",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Container technology presents an efficient and scalable solution by encapsulating applications and their dependencies. This ensures consistent performance across diverse environments and streamlines deployment, management, and scalability."}),"\n",(0,t.jsx)(n.p,{children:"Although we strongly discourage it, if none of the alternative installation methods are suitable for you, GameVault can also be installed directly on your system without using containers. The example provided here uses Debian."}),"\n",(0,t.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://nodejs.org/",children:"Node.js"})," must be installed on your system (check the required version ",(0,t.jsx)(n.a,{href:"https://github.com/Phalcode/gamevault-backend/blob/master/Dockerfile#L1",children:"here"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://www.postgresql.org/",children:"PostgreSQL"})," database (or configure SQLITE later on)."]}),"\n",(0,t.jsxs)(n.li,{children:["Install necessary packages: ",(0,t.jsx)(n.a,{href:"https://packages.debian.org/en/sid/p7zip-full",children:(0,t.jsx)(n.code,{children:"p7zip-full"})})," and ",(0,t.jsx)(n.a,{href:"https://packages.debian.org/en/sid/p7zip-rar",children:(0,t.jsx)(n.code,{children:"p7zip-rar"})})," (non-free-repository) (or their equivalents in your distribution)."]}),"\n",(0,t.jsxs)(n.li,{children:["Install the ",(0,t.jsx)(n.a,{href:"https://pnpm.io/",children:"parallel node package manager"}),": ",(0,t.jsx)(n.code,{children:"npm i -g pnpm"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"step-1-clone-the-source-code",children:"Step 1: Clone the Source Code"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/Phalcode/gamevault-backend.git\ncd gamevault-backend\n"})}),"\n",(0,t.jsx)(n.h3,{id:"step-2-install-dependencies",children:"Step 2: Install Dependencies"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm install\n"})}),"\n",(0,t.jsx)(n.h3,{id:"step-3-build",children:"Step 3: Build"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm run build\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Your server files are now in the ",(0,t.jsx)(n.code,{children:"dist/"})," folder."]}),"\n",(0,t.jsx)(n.h3,{id:"step-4-set-up-an-env-file",children:"Step 4: Set up an .env File"}),"\n",(0,t.jsxs)(n.p,{children:["Create a .env file in the ",(0,t.jsx)(n.code,{children:"dist/src/"})," directory and ",(0,t.jsx)(n.a,{href:"/docs/server-docs/configuration",children:"configure your GameVault as desired"})," or set them in your system/VM directly."]}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"#dist/src/.env\nDB_SYSTEM=SQLITE\nSERVER_ADMIN_USERNAME=admin\n"})}),"\n",(0,t.jsx)(n.h3,{id:"step-5-start-the-server",children:"Step 5: Start the Server"}),"\n",(0,t.jsx)(n.p,{children:"To start the server, run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"node dist/src/main\n"})}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"You have now successfully set up your GameVault Server."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/server-docs/setup/#what-next",children:"Click here to continue."})}),"\n",(0,t.jsx)(n.h2,{id:"additional-info",children:"Additional Info"}),"\n",(0,t.jsx)(n.h3,{id:"stopping-the-server",children:"Stopping the Server"}),"\n",(0,t.jsx)(n.p,{children:"Press CTRL + C to stop the server."})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>a});var t=s(67294);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);