"use strict";(self.webpackChunkcrackpipe_docs=self.webpackChunkcrackpipe_docs||[]).push([[9847],{9613:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>f});var n=o(9496);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(o),h=r,f=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return o?n.createElement(f,l(l({ref:t},c),{},{components:o})):n.createElement(f,l({ref:t},c))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,l=new Array(i);l[0]=h;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:r,l[1]=a;for(var p=2;p<i;p++)l[p]=o[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},6340:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var n=o(1163),r=(o(9496),o(9613));const i={sidebar_position:1},l="Setting up a Crackpipe Client",a={unversionedId:"client-docs/setup",id:"client-docs/setup",title:"Setting up a Crackpipe Client",description:"If you want to use Crackpipe to download and install games on your computer, you need to follow these steps.",source:"@site/docs/client-docs/setup.md",sourceDirName:"client-docs",slug:"/client-docs/setup",permalink:"/docs/client-docs/setup",draft:!1,editUrl:"https://github.com/phalcode/crackpipe-docs/tree/master/docs/client-docs/setup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Troubleshooting",permalink:"/docs/server-docs/troubleshooting"},next:{title:"How to Use",permalink:"/docs/client-docs/how-to-use"}},s={},p=[{value:"Setup",id:"setup",level:2},{value:"Alternative Installation Options",id:"alternative-installation-options",level:3},{value:"Installation on Linux",id:"installation-on-linux",level:3},{value:"Initial Configuration",id:"initial-configuration",level:2},{value:"Step 1: Select the Root Folder",id:"step-1-select-the-root-folder",level:3},{value:"Step 2: Entering the Selfhosted Backend Server URL",id:"step-2-entering-the-selfhosted-backend-server-url",level:3},{value:"Option 1: Self-hosted Crackpipe Server",id:"option-1-self-hosted-crackpipe-server",level:4},{value:"Option 2: Using the Demo Server",id:"option-2-using-the-demo-server",level:4},{value:"Step 3: Login or Register",id:"step-3-login-or-register",level:3},{value:"Option 1: Login",id:"option-1-login",level:4},{value:"Option 2: Register",id:"option-2-register",level:4},{value:"Conclusion",id:"conclusion",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setting-up-a-crackpipe-client"},"Setting up a Crackpipe Client"),(0,r.kt)("p",null,"If you want to use Crackpipe to download and install games on your computer, you need to follow these steps."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Requirement:")," Windows 10/11 Operating System with Microsoft Store installed"),(0,r.kt)("p",null,"To begin, install the Crackpipe application from ",(0,r.kt)("a",{parentName:"p",href:"https://www.microsoft.com/store/apps/9PCKDV76GL75"},"the official Microsoft Store"),". This process should be straightforward and will only consume a few minutes of your time."),(0,r.kt)("h3",{id:"alternative-installation-options"},"Alternative Installation Options"),(0,r.kt)("p",null,"If you prefer not to use the Microsoft Store or if you are operating on a different platform, there are multiple ",(0,r.kt)("strong",{parentName:"p"},"unsupported")," and ",(0,r.kt)("strong",{parentName:"p"},"unrecommended")," methods available for installing the Crackpipe App:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Compiling the source code by yourself"),(0,r.kt)("li",{parentName:"ul"},"Downloading the pre-built binaries from GitHub"),(0,r.kt)("li",{parentName:"ul"},"Extracting the App from the .appxbundle file in the Microsoft Store")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"updating-client#other-sources"},"Please note that you will be responsible for managing updates manually!")),(0,r.kt)("h3",{id:"installation-on-linux"},"Installation on Linux"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"LINK TBD")),(0,r.kt)("p",null,"Additionally, there is a community-driven approach for running Crackpipe on Linux using Wine. Visit ",(0,r.kt)("a",{parentName:"p",href:"."},"this")," page to acquire further information."),(0,r.kt)("h2",{id:"initial-configuration"},"Initial Configuration"),(0,r.kt)("p",null,"Once you have installed and launched Crackpipe, you need to do some initial configuration to get it up and running properly."),(0,r.kt)("h3",{id:"step-1-select-the-root-folder"},"Step 1: Select the Root Folder"),(0,r.kt)("p",null,"In this step, you will choose the location where all your downloaded and installed games will be stored. This folder will act as the central location for your game library. We recommend you to have a read on the ",(0,r.kt)("a",{parentName:"p",href:"/docs/client-docs/how-to-use"},'"How to Use" Chapter')," to understand how the root folder works."),(0,r.kt)("p",null,"To select the root folder, follow the instructions below:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Click the "Select Root Path" button.'),(0,r.kt)("li",{parentName:"ol"},"Navigate to the desired location on your computer."),(0,r.kt)("li",{parentName:"ol"},"Choose a folder with sufficient storage space to store your game collection."),(0,r.kt)("li",{parentName:"ol"},'Once you have selected the folder, click "Next" to proceed.'),(0,r.kt)("li",{parentName:"ol"},"Crackpipe will automatically generate a Subfolder called ",(0,r.kt)("inlineCode",{parentName:"li"},"Crackpipe")," in your selected Folder with some initial data.")),(0,r.kt)("h3",{id:"step-2-entering-the-selfhosted-backend-server-url"},"Step 2: Entering the Selfhosted Backend Server URL"),(0,r.kt)("p",null,"To connect your Crackpipe application to the backend server, you need to provide the URL of the server. Depending on your setup, follow one of the two options below:"),(0,r.kt)("h4",{id:"option-1-self-hosted-crackpipe-server"},"Option 1: Self-hosted Crackpipe Server"),(0,r.kt)("p",null,"If you have your own self-hosted Crackpipe server, please enter its URL in the provided field. Follow the instructions below:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Enter the URL of your self-hosted Crackpipe server in the provided field."),(0,r.kt)("li",{parentName:"ol"},"Make sure you have the correct URL and it is accessible."),(0,r.kt)("li",{parentName:"ol"},'Click "Next" to proceed.')),(0,r.kt)("h4",{id:"option-2-using-the-demo-server"},"Option 2: Using the Demo Server"),(0,r.kt)("p",null,"If you only want to try out Crackpipe, without setting up your own server, you can use the demo server. There are no real games on the demo server and the functionality is very limited. ToFollow the instructions below:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Enter "demo.crackpipe.de" as the URL in the provided field.'),(0,r.kt)("li",{parentName:"ol"},"This will allow you to explore the features and functionality of Crackpipe."),(0,r.kt)("li",{parentName:"ol"},'Click "Next" to proceed')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Demo Server Credentials:")," Username: ",(0,r.kt)("strong",{parentName:"p"},"demo"),", Password: ",(0,r.kt)("strong",{parentName:"p"},"demodemo"))),(0,r.kt)("h3",{id:"step-3-login-or-register"},"Step 3: Login or Register"),(0,r.kt)("p",null,"In this step, you will need to log in to your Crackpipe account on the selected backend server. Choose one of the following options based on your situation:"),(0,r.kt)("h4",{id:"option-1-login"},"Option 1: Login"),(0,r.kt)("p",null,"If you already have a Crackpipe account on the selected server, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Select "Login" from the options.'),(0,r.kt)("li",{parentName:"ol"},"Enter your login credentials (username and password) in the provided fields."),(0,r.kt)("li",{parentName:"ol"},"Ensure that the credentials are specific to the Crackpipe backend server you have chosen."),(0,r.kt)("li",{parentName:"ol"},'Click "Login" to proceed.')),(0,r.kt)("h4",{id:"option-2-register"},"Option 2: Register"),(0,r.kt)("p",null,"If you don't have an account on the selected Crackpipe backend server, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Click the "Register" button.'),(0,r.kt)("li",{parentName:"ol"},"Follow the instructions provided to create your Crackpipe account on the backend server."),(0,r.kt)("li",{parentName:"ol"},"The server administrators may have to activate your account before you can use it to log in. Contact them if necessary.")),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Congratulations! You have successfully installed and completed the initial configuration of Crackpipe. You are now ready to explore and enjoy the features and functionality of the app. If you have any further questions or need assistance, refer to the remaining chapters of this documentation or reach out to our support team for help."),(0,r.kt)("p",null,"We specifically recommend to read the ",(0,r.kt)("a",{parentName:"p",href:"/docs/client-docs/how-to-use"},'"How to Use" Chapter')," to understand how Crackpipe works."))}d.isMDXComponent=!0}}]);