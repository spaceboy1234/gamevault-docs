"use strict";(self.webpackChunkgamevault_docs=self.webpackChunkgamevault_docs||[]).push([[8495],{9613:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(9496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),m=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(a),c=n,h=d["".concat(s,".").concat(c)]||d[c]||u[c]||i;return a?r.createElement(h,o(o({ref:t},p),{},{components:a})):r.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var m=2;m<i;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},883:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=a(1163),n=(a(9496),a(9613));const i={sidebar_position:3,sidebar_title:"Adding Games"},o="Adding Games to GameVault",l={unversionedId:"server-docs/adding-games",id:"server-docs/adding-games",title:"Adding Games to GameVault",description:"If you wish to add games to your server but are struggling with unorganized files, varying file formats, and compressed files, you have come to the right place. In this chapter, you will learn the correct process to add games to your GameVault server.",source:"@site/docs/server-docs/adding-games.md",sourceDirName:"server-docs",slug:"/server-docs/adding-games",permalink:"/docs/server-docs/adding-games",draft:!1,editUrl:"https://github.com/phalcode/gamevault-docs/tree/master/docs/server-docs/adding-games.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_title:"Adding Games"},sidebar:"docs",previous:{title:"Game Types",permalink:"/docs/server-docs/game-types"},next:{title:"Updating Games",permalink:"/docs/server-docs/updating-games"}},s={},m=[{value:"Before You Begin",id:"before-you-begin",level:2},{value:"Step 1: Preparing",id:"step-1-preparing",level:2},{value:"Step 2: Compression",id:"step-2-compression",level:2},{value:"Method 1: The Fast Way",id:"method-1-the-fast-way",level:3},{value:"Method 2: The Hardcore Way",id:"method-2-the-hardcore-way",level:3},{value:"Method 3: The Balanced Way",id:"method-3-the-balanced-way",level:3},{value:"Step 3: Naming the Archive",id:"step-3-naming-the-archive",level:2},{value:"Adding the same game multiple times",id:"adding-the-same-game-multiple-times",level:3},{value:"Step 4: Deploy \ud83e\udd73",id:"step-4-deploy-",level:2}],p={toc:m},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"adding-games-to-gamevault"},"Adding Games to GameVault"),(0,n.kt)("p",null,"If you wish to add games to your server but are struggling with unorganized files, varying file formats, and compressed files, you have come to the right place. In this chapter, you will learn the correct process to add games to your GameVault server."),(0,n.kt)("h2",{id:"before-you-begin"},"Before You Begin"),(0,n.kt)("p",null,"Please read the ",(0,n.kt)("a",{parentName:"p",href:"/docs/server-docs/structure"},"File and Folder Structure")," chapter first."),(0,n.kt)("p",null,"Adding games to your server is a manual process that demands effort and expertise. However, it is worth the effort. To execute the task accurately, follow the steps outlined below for each game. With practice, you will become more proficient and adept at performing these steps with ease."),(0,n.kt)("h2",{id:"step-1-preparing"},"Step 1: Preparing"),(0,n.kt)("p",null,'Suppose you have obtained a DRM-free copy of "Crawl," and it is located in your file system as follows:'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Crawl/",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"setup.bin"),(0,n.kt)("li",{parentName:"ul"},"setup.exe")))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This is not a real-world example.")),(0,n.kt)("p",null,'If the game files are already compressed in a format that GameVault can understand, such as "Crawl.zip", you can skip the next step. However, if you want to maximize disk space and repack the files, you can do that. Datahoarders, for example, rely on every bit and byte on their disks and tend to repack everything to the maximum compression available.'),(0,n.kt)("h2",{id:"step-2-compression"},"Step 2: Compression"),(0,n.kt)("p",null,"To make your game files compatible with GameVault, you need to archive them. We recommend using ",(0,n.kt)("a",{parentName:"p",href:"https://www.7-zip.org/"},"7Zip")," for this. There are different approaches to this."),(0,n.kt)("admonition",{title:"single-file executables",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If the game you're about to add only consists of a single executable file such as ",(0,n.kt)("inlineCode",{parentName:"p"},"setup_game.exe")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"setup_game.sh"),", you can choose to skip this stage and proceed with ",(0,n.kt)("a",{parentName:"p",href:"#step-3-naming-the-archive"},"naming it"),". See ",(0,n.kt)("a",{parentName:"p",href:"/docs/server-docs/structure#single-executable"},"here")," for more details.")),(0,n.kt)("h3",{id:"method-1-the-fast-way"},"Method 1: The Fast Way"),(0,n.kt)("p",null,"The fastest way to compress your game files into a .7z archive is by copying them without compression, which takes little to no time or effort. However, the resulting archive will be as large as the original folder."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"7z a -mx=0 -ms=off game.7z /path/to/game/folder/Crawl/*\n")),(0,n.kt)("p",null,"This command uses the following options:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"a"),": Add files to the archive"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-mx=0"),": Sets the compression level to 0"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-ms=off"),": Turns off solid block compression")),(0,n.kt)("h3",{id:"method-2-the-hardcore-way"},"Method 2: The Hardcore Way"),(0,n.kt)("p",null,"To achieve the smallest possible archive size, use the maximum settings of 7zip. The resulting archive may or may not be much smaller than before, but it will definitely be as small as possible. However, this process could take a long time, depending on your hardware, and is very resource-intensive."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"7z a -mx=9 -mfb=64 -md=32m -ms=on game.7z /path/to/game/folder/Crawl/*\n")),(0,n.kt)("p",null,"This command uses the following options:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"a"),": Add files to the archive"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-mx=9"),": Use the maximum compression level"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-mfb=64"),": Set the number of fast bytes to 64"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-md=32m"),": Set the dictionary size to 32MB"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-ms=on"),": Enable solid block compression")),(0,n.kt)("h3",{id:"method-3-the-balanced-way"},"Method 3: The Balanced Way"),(0,n.kt)("p",null,"If you are not happy with either method, you can use the preselected options of 7zip to compress the files as effectively and balanced as possible:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"7z a game.7z /path/to/game/folder/Crawl/*\n")),(0,n.kt)("h2",{id:"step-3-naming-the-archive"},"Step 3: Naming the Archive"),(0,n.kt)("p",null,"Before naming the archive, take a moment to research the game you're about to add. Ask yourself questions or use a search engine to answer  the following questions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'"What version is the game?"'),(0,n.kt)("li",{parentName:"ul"},'"What year was the game released?"'),(0,n.kt)("li",{parentName:"ul"},'"Is the game still in early access?"')),(0,n.kt)("p",null,"Once you have gathered all the necessary information, you can name the archive using the ",(0,n.kt)("a",{parentName:"p",href:"/docs/server-docs/structure"},"GameVault Naming Structure"),"."),(0,n.kt)("p",null,"In our fictitious example we have a copy of Crawl Version 1.0.1 released in 2014, so we named the archive:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"Crawl (v1.0.1) (2014).7z\n")),(0,n.kt)("h3",{id:"adding-the-same-game-multiple-times"},"Adding the same game multiple times"),(0,n.kt)("p",null,"If you wish to add the same game multiple times to your GameVault server for any specific reason, it is important to ensure that you rename it slightly differently. This is to prevent the indexer from detecting it as a duplicate entry. We recommend using square brackets ",(0,n.kt)("inlineCode",{parentName:"p"},"[]")," as your personal discriminator for these games. Avoid using regular parentheses ",(0,n.kt)("inlineCode",{parentName:"p"},"()")," as they will be removed by the title extraction regex. It also does not matter if the files are in the same sub-folder or in different ones."),(0,n.kt)("p",null,"By using this approach, the indexer will treat these two games as separate entities."),(0,n.kt)("p",null,"In case the RAWG Matching feature does not work accurately for these games, you have the option to manually remap them in the client if you have the Role Editor or higher privileges."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Here's a good example:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Game 1: ",(0,n.kt)("inlineCode",{parentName:"li"},"Minecraft [Tekkit Modpack] (v1.7.10) (2011).zip")),(0,n.kt)("li",{parentName:"ul"},"Game 2: ",(0,n.kt)("inlineCode",{parentName:"li"},"Minecraft [Hexxit Modpack] (v1.13.2) (2011).zip"))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Will result in two seperate games")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"And here's a bad example:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Game 1: ",(0,n.kt)("inlineCode",{parentName:"li"},"Minecraft (v1.7.10) (2011).zip")),(0,n.kt)("li",{parentName:"ul"},"Game 2: ",(0,n.kt)("inlineCode",{parentName:"li"},"Minecraft (v1.13.2) (2011).zip"))),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"Will result in a single game that gets overwritten!")),(0,n.kt)("h2",{id:"step-4-deploy-"},"Step 4: Deploy \ud83e\udd73"),(0,n.kt)("p",null,"Once you have named the archive, place it into the folder on your host system that is mounted to GameVault's files folder (by default ",(0,n.kt)("inlineCode",{parentName:"p"},"/files"),"). Once the archive is in place, GameVault will automatically index the game, enrich it with metadata, and save it in your database."),(0,n.kt)("p",null,"Congratulations! You have successfully added a game to your GameVault server. Repeat the process for any additional games you want to add."))}u.isMDXComponent=!0}}]);