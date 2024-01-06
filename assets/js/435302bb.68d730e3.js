"use strict";(self.webpackChunkgamevault_docs=self.webpackChunkgamevault_docs||[]).push([[2126],{67058:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var n=a(11527),o=a(47214);const i={sidebar_position:2},s="How to Use",r={id:"client-docs/how-to-use",title:"How to Use",description:"File & Folder Structure",source:"@site/docs/client-docs/how-to-use.md",sourceDirName:"client-docs",slug:"/client-docs/how-to-use",permalink:"/docs/client-docs/how-to-use",draft:!1,unlisted:!1,editUrl:"https://github.com/phalcode/gamevault-docs/tree/master/docs/client-docs/how-to-use.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Setting up a GameVault Client",permalink:"/docs/client-docs/setup"},next:{title:"Updating the Client",permalink:"/docs/client-docs/updating-client"}},l={},d=[{value:"File &amp; Folder Structure",id:"file--folder-structure",level:2},{value:"Downloading Games",id:"downloading-games",level:2},{value:"1. Extracting the Game",id:"1-extracting-the-game",level:3},{value:"2. Installing the Game",id:"2-installing-the-game",level:3},{value:"Installing Portable Games",id:"installing-portable-games",level:4},{value:"Installing Setup Games",id:"installing-setup-games",level:4},{value:"Clearing Remains",id:"clearing-remains",level:4},{value:"Playing a Game",id:"playing-a-game",level:2},{value:"Tracking Your Game Progress",id:"tracking-your-game-progress",level:2},{value:"Modifying Games",id:"modifying-games",level:2},{value:"Modifying Users",id:"modifying-users",level:2},{value:"Exiting or Relaunching the App",id:"exiting-or-relaunching-the-app",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"how-to-use",children:"How to Use"}),"\n",(0,n.jsx)(t.h2,{id:"file--folder-structure",children:"File & Folder Structure"}),"\n",(0,n.jsx)(t.admonition,{title:"Example",type:"note",children:(0,n.jsxs)(t.p,{children:["Let's say you installed GameVault freshly and configured your Root folder path to ",(0,n.jsx)(t.code,{children:"D:/"})," because your D Drive is larger."]})}),"\n",(0,n.jsx)(t.p,{children:"GameVault will now generate its folder structure. When everything is done, your file system will look like this:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"D:/GameVault/"})," - Root Folder","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"D:/GameVault/Downloads/"})," - This folder is where your downloads will be saved. For each downloaded game, GameVault generates a new folder in this directory."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"D:/GameVault/Installations/"})," - This folder is where your installed games belong. For each downloaded game, GameVault generates a new folder in this directory."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"downloading-games",children:"Downloading Games"}),"\n",(0,n.jsxs)(t.p,{children:["Let's say you found the game ",(0,n.jsx)(t.code,{children:"Assassin's Creed Unity (Game ID: 74)"})," in the Library tab and chose to download it."]}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"Only download games from servers you fully trust! There's a potential risk of malware. If your antivirus alerts during the following process, abort any download and installation of the game, fully delete the downloaded data, and warn your server admins to address the malware promptly."})}),"\n",(0,n.jsx)(t.p,{children:"As stated above, GameVault generates two folders to store the game files and uses the game ID in the name to identify them:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"<GameVault Root>/GameVault/Downloads/(74) Assassin's Creed Unity/"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"<GameVault Root>/GameVault/Installations/(74) Assassin's Creed Unity/"})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Your downloaded game archive will be saved in ",(0,n.jsx)(t.code,{children:"<GameVault Root>/GameVault/Downloads/(74) Assassin's Creed Unity/"}),". The ",(0,n.jsx)(t.code,{children:"<GameVault Root>/GameVault/Installations/(74) Assassin's Creed Unity/"})," folder should be empty for now."]}),"\n",(0,n.jsx)(t.p,{children:"To start playing a game you've downloaded, follow these steps to install it. This process makes it easier for you."}),"\n",(0,n.jsx)(t.p,{children:"Game installation has two main parts:"}),"\n",(0,n.jsx)(t.h3,{id:"1-extracting-the-game",children:"1. Extracting the Game"}),"\n",(0,n.jsxs)(t.p,{children:["GameVault games are ",(0,n.jsx)(t.a,{href:"/docs/server-docs/structure",children:"always served in some kind of archive format"}),". So you will need to extract them."]}),"\n",(0,n.jsxs)(t.p,{children:["After the download is complete, locate the ",(0,n.jsx)(t.code,{children:"Extract"})," button. Clicking it will extract the game into a subfolder called ",(0,n.jsx)(t.code,{children:"Extracted"})," within the game's Download Directory. A progress bar shows the extraction progress and estimated remaining time. Larger or extremely compressed games may take longer to extract."]}),"\n",(0,n.jsx)(t.p,{children:"If there are extraction errors, you can retry the extraction unless you deleted the game archive. Error details are displayed in the user interface. If you encounter repeated extraction errors for the same game, try to extract the game manually or contact your GameVault server administrators to check the integrity of those games."}),"\n",(0,n.jsx)(t.h3,{id:"2-installing-the-game",children:"2. Installing the Game"}),"\n",(0,n.jsxs)(t.p,{children:["There are different types of GameVault games. ",(0,n.jsx)(t.a,{href:"/docs/server-docs/game-types",children:"You can find more information about them here"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"For now, we will focus on the general concept of Portable and Setup Games."}),"\n",(0,n.jsx)(t.p,{children:"Portable games are ready to play out of the box, while Setup games require additional setup before playing."}),"\n",(0,n.jsx)(t.admonition,{title:"What determines the game type?",type:"note",children:(0,n.jsxs)(t.p,{children:["The server automatically tries to determine the game's type based on the content, but errors can occur. Administrators can manually overwrite the detected game type by including a ",(0,n.jsx)(t.a,{href:"/docs/server-docs/structure",children:"type override in the file name"}),"."]})}),"\n",(0,n.jsx)(t.h4,{id:"installing-portable-games",children:"Installing Portable Games"}),"\n",(0,n.jsxs)(t.p,{children:["For portable games, GameVault provides a very simple installation process. You don't need to select an executable file. Just press the ",(0,n.jsx)(t.code,{children:"Install"})," button. GameVault will automatically move all the extracted game content to your game's installation directory. This should happen instantly."]}),"\n",(0,n.jsxs)(t.p,{children:["Once the installation is complete, your game is ready to be played in the library. If necessary, select the appropriate executable file to launch in the Game Settings tab and click ",(0,n.jsx)(t.code,{children:"Play"}),"."]}),"\n",(0,n.jsx)(t.admonition,{title:"No Game Executable",type:"note",children:(0,n.jsx)(t.p,{children:"If you don't see a game executable here but instead see a setup executable, the game's type has incorrectly been set to a portable type on the server. Contact your server administrators to manually override that game's type to a setup type. Then, manually move the files inside your game's installation folder back into the game's download folder. Run the installer and manually select the now-empty game's installation folder as its destination."})}),"\n",(0,n.jsx)(t.h4,{id:"installing-setup-games",children:"Installing Setup Games"}),"\n",(0,n.jsxs)(t.p,{children:["For games that require installation, GameVault will provide a dropdown menu to launch a setup executable file. Select the appropriate setup.exe file and press the ",(0,n.jsx)(t.code,{children:"Install"})," button."]}),"\n",(0,n.jsx)(t.admonition,{title:"No Setup Executable",type:"note",children:(0,n.jsxs)(t.p,{children:["If you don't see a setup executable here but instead see the game's executable, it may have incorrectly been set to a setup type on the server. Contact your server administrators to manually override that game's type to a portable type. Then, manually move the files inside the game downloads ",(0,n.jsx)(t.code,{children:"Extracted/"})," folder to the game's corresponding installation folder, and you should be ready to play."]})}),"\n",(0,n.jsxs)(t.p,{children:["During the external setup process ",(0,n.jsx)(t.strong,{children:"it is crucial to set the destination folder for your game files to your game's Installation folder"})," (e.g., ",(0,n.jsx)(t.code,{children:"<GameVault Root>/GameVault/Installations/(74) Assassin's Creed Unity/"}),"). This is where the final game files and executable should be located. If you don't set the destination, GameVault will have no idea where to look for your game files, and the game won't be playable. If you missed setting the destination folder or set it wrongly, uninstall the game from your system and retry this step."]}),"\n",(0,n.jsxs)(t.p,{children:["Once the installation is complete, your game is ready to be played. Just select the appropriate .exe file to launch in the Installations tab and click ",(0,n.jsx)(t.code,{children:"Play"}),"."]}),"\n",(0,n.jsx)(t.admonition,{title:"Why does GameVault not fully automate the setup procedure?",type:"info",children:(0,n.jsx)(t.p,{children:"Different external installers and setups work very differently, making it nearly impossible to fully automate every type. However, all installers have one thing in common: the ability to choose the installation path for the game. GameVault guides you through the process, but you still need to manually select the installation path and click through the installer."})}),"\n",(0,n.jsx)(t.h4,{id:"clearing-remains",children:"Clearing Remains"}),"\n",(0,n.jsx)(t.p,{children:"Once you have fully confirmed that a game works, you are free to delete the game's corresponding Download using the trash icon in the downloads tab."}),"\n",(0,n.jsx)(t.h2,{id:"playing-a-game",children:"Playing a Game"}),"\n",(0,n.jsxs)(t.p,{children:["Launching a game on GameVault is simple. Once your game is installed and ready to go, it will appear in the \"Installed Games\" tab. If GameVault didn't correctly predict the correct executable to launch automatically, you can change it in the game's settings and click the ",(0,n.jsx)(t.code,{children:"Play"})," button to start the game."]}),"\n",(0,n.jsx)(t.h2,{id:"tracking-your-game-progress",children:"Tracking Your Game Progress"}),"\n",(0,n.jsxs)(t.p,{children:["Once GameVault is launched, it automatically activates a time-tracking daemon. This diligent daemon continuously monitors your game progress, specifically your playtime, and promptly sends this information to the server whenever any .exe file (except those on the ignore-list) is running within a folder located in your Installations directory ",(0,n.jsx)(t.code,{children:"<GameVault Root>/Installations/*"}),". Even if you play without an internet connection, your playtime will still be tracked and updated on the server as soon as you regain connectivity."]}),"\n",(0,n.jsx)(t.p,{children:'In our context, the term "Progress" refers to a user\'s activity of playing a game. Each user can have a single progress entry per game.'}),"\n",(0,n.jsx)(t.p,{children:"The progress entry includes the completion state, which can be modified through the community tab, as well as the tracked playtime and some other additional information."}),"\n",(0,n.jsx)(t.p,{children:"You have the ability to change the progress state or delete it using the community tab. Certain states also change automatically, such as transitioning from UNPLAYED to PLAYING when the game is launched."}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"Please note that this Progress does not include your savegames. GameVault does not (yet \ud83d\ude09) have the capability to synchronize or store your savegames. Therefore, it is advisable to create backups of your savegames before uninstalling any games."})}),"\n",(0,n.jsx)(t.h2,{id:"modifying-games",children:"Modifying Games"}),"\n",(0,n.jsx)(t.p,{children:"If you are unhappy with the Box Art or Background Image of a game on your server or if there are incorrect Metadata associated with a game, there is a straightforward solution."}),"\n",(0,n.jsxs)(t.p,{children:["If you have the ",(0,n.jsx)(t.code,{children:"EDITOR"})," role or higher on your GameVault server, you can modify games by following these steps:"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Open Game Settings by clicking on the Settings Icon either from the Top Right corner of the Box Art Image or from the Games Detail page."}),"\n",(0,n.jsx)(t.li,{children:"A popup will appear, where you can select/paste/drop an image or paste a URL for different box art or background image."}),"\n",(0,n.jsx)(t.li,{children:"Additionally, there will be a RAWG Integration tag with a search box for the RAWG database, allowing you to remap the game to the correct game."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Please note that any changes made will affect all users on the server."}),"\n",(0,n.jsx)(t.h2,{id:"modifying-users",children:"Modifying Users"}),"\n",(0,n.jsx)(t.p,{children:"If you want to change the data, profile picture, or background image of your User:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Navigate to the Community Tab and select your Profile."}),"\n",(0,n.jsx)(t.li,{children:"Locate and click on the Settings Icon in the top right corner."}),"\n",(0,n.jsx)(t.li,{children:"A popup will appear, where you can edit your user's data or select/paste/drop an image or paste a URL for a different profile picture or background image."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["If you have the ",(0,n.jsx)(t.code,{children:"ADMIN"})," role or higher on your GameVault server, you can do the same for all other user profiles in the Admin Dashboard."]}),"\n",(0,n.jsx)(t.h2,{id:"exiting-or-relaunching-the-app",children:"Exiting or Relaunching the App"}),"\n",(0,n.jsx)(t.p,{children:'In order to maintain playtime tracking functionality, simply closing the launcher using the X-Button does not terminate the GameVault process. Instead, it minimizes the app to the system Tray. Therefore, if you truly wish to exit the application, be sure to right-click and select "Exit" from the context menu. The same principle applies when restarting the app. Only one GameVault window can be active at a time, so initiating another GameVault merely brings the minimized app to the forefront without actually restarting it.'})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},47214:(e,t,a)=>{a.d(t,{Z:()=>r,a:()=>s});var n=a(50959);const o={},i=n.createContext(o);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);