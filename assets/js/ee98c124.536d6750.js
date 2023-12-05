"use strict";(self.webpackChunkgamevault_docs=self.webpackChunkgamevault_docs||[]).push([[5590],{7247:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var t=n(5893),i=n(1151);const l={id:"fail2ban-gamevault-guide",title:"Configuring Fail2Ban for GameVault"},s=void 0,r={id:"advanced-usage/fail2ban-gamevault-guide",title:"Configuring Fail2Ban for GameVault",description:"This guide was created and tested by a community member. It hasn't been personally tested by our team. We cannot guarantee its effectiveness as we don't use fail2ban. Feel free to give it a try. If you find any errors, you can edit the guide accordingly.",source:"@site/docs/advanced-usage/failt2ban.md",sourceDirName:"advanced-usage",slug:"/advanced-usage/fail2ban-gamevault-guide",permalink:"/docs/advanced-usage/fail2ban-gamevault-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/phalcode/gamevault-docs/tree/master/docs/advanced-usage/failt2ban.md",tags:[],version:"current",frontMatter:{id:"fail2ban-gamevault-guide",title:"Configuring Fail2Ban for GameVault"},sidebar:"docs",previous:{title:"API Usage",permalink:"/docs/advanced-usage/api-usage"},next:{title:"Running the Client on Linux",permalink:"/docs/advanced-usage/linux-client"}},o={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Enable Log Files and Map a Volume",id:"1-enable-log-files-and-map-a-volume",level:3},{value:"2. Identify Failed Authentication Attempts",id:"2-identify-failed-authentication-attempts",level:3},{value:"3. Create a Fail2Ban Filter",id:"3-create-a-fail2ban-filter",level:3},{value:"4. Configure Fail2Ban Jail",id:"4-configure-fail2ban-jail",level:3},{value:"5. Restart Fail2Ban",id:"5-restart-fail2ban",level:3},{value:"6. Verify Jail Status",id:"6-verify-jail-status",level:3},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.admonition,{title:"Community-Created Guide",type:"note",children:(0,t.jsx)(a.p,{children:"This guide was created and tested by a community member. It hasn't been personally tested by our team. We cannot guarantee its effectiveness as we don't use fail2ban. Feel free to give it a try. If you find any errors, you can edit the guide accordingly."})}),"\n",(0,t.jsx)(a.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(a.p,{children:"This guide explains how to set up Fail2Ban to safeguard your GameVault application against unauthorized access attempts. Fail2Ban is a tool that scans log files and blocks IP addresses exhibiting malicious behavior through the firewall."}),"\n",(0,t.jsx)(a.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Fail2Ban installed on your host system"}),"\n",(0,t.jsxs)(a.li,{children:["Running GameVault instance as outlined in the ",(0,t.jsx)(a.a,{href:"/docs/server-docs/setup",children:"server setup documentation"})]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"steps",children:"Steps"}),"\n",(0,t.jsx)(a.h3,{id:"1-enable-log-files-and-map-a-volume",children:"1. Enable Log Files and Map a Volume"}),"\n",(0,t.jsxs)(a.p,{children:["Ensure that log files are enabled and a volume is mapped to the ",(0,t.jsx)(a.code,{children:"/logs"})," folder within the GameVault backend container in your ",(0,t.jsx)(a.code,{children:"docker-compose.yml"})," file:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-yaml",children:"[...]\ngamevault-backend:\n    image: phalcode/gamevault-backend:latest\n    restart: unless-stopped\n    environment:\n      [...]\n      - SERVER_LOG_FILES_ENABLED: true # <--- Set this to true\n    volumes:\n      [...]\n      - /your/logs/folder:/logs # <--- Replace `/your/logs/folder` with the actual path to your log folder.\n[...]\n"})}),"\n",(0,t.jsx)(a.h3,{id:"2-identify-failed-authentication-attempts",children:"2. Identify Failed Authentication Attempts"}),"\n",(0,t.jsx)(a.p,{children:"Failed authentication attempts will appear in the log files in the following format:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"info:    \u250f [17/Aug/2023:20:25:47 +0000] Username @ Address - GET /api/v1/users/me -> 401 - 28.231 ms - 112 - 'GameVault/1.3.0'\n"})}),"\n",(0,t.jsx)(a.h3,{id:"3-create-a-fail2ban-filter",children:"3. Create a Fail2Ban Filter"}),"\n",(0,t.jsx)(a.p,{children:"Create a filter file for Fail2Ban by opening a terminal and executing the command:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"sudo nano /etc/fail2ban/filter.d/gamevault-filter.conf\n"})}),"\n",(0,t.jsx)(a.p,{children:"Insert the following content into the file:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"[Definition]\nfailregex = .*<HOST> - GET.*401\n"})}),"\n",(0,t.jsx)(a.p,{children:"Note that this regular expression may require adjustments. You can test it using the command:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"fail2ban-regex /your/logs/folder/gamevault-backend.log /etc/fail2ban/filter.d/gamevault-filter.conf\n"})}),"\n",(0,t.jsx)(a.h3,{id:"4-configure-fail2ban-jail",children:"4. Configure Fail2Ban Jail"}),"\n",(0,t.jsx)(a.p,{children:"Modify the Fail2Ban jail configuration by executing the command:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"sudo nano /etc/fail2ban/jail.local\n"})}),"\n",(0,t.jsx)(a.p,{children:"Add the following block and customize the settings based on your preferences:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-conf",children:"[gamevault]\nenabled = true\nfilter = gamevault-filter\nlogpath = /your/logs/folder/*.log*\nmaxretry = 10\nfindtime = 3600\nbantime = 3600\n"})}),"\n",(0,t.jsx)(a.h3,{id:"5-restart-fail2ban",children:"5. Restart Fail2Ban"}),"\n",(0,t.jsx)(a.p,{children:"To apply the changes, restart the Fail2Ban service:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"sudo systemctl restart fail2ban\n"})}),"\n",(0,t.jsx)(a.h3,{id:"6-verify-jail-status",children:"6. Verify Jail Status"}),"\n",(0,t.jsx)(a.p,{children:"Check the status of the GameVault jail:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"sudo fail2ban-client status gamevault\n"})}),"\n",(0,t.jsx)(a.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsxs)(a.p,{children:["By following these steps, you can enhance the security of your GameVault application by utilizing Fail2Ban to block IP addresses attempting unauthorized access. Remember to fine-tune the settings to suit your specific requirements. Keep in mind that the 401 response will be triggered for each unauthenticated request, which can occur frequently and become bothersome, so you may want to increase the ",(0,t.jsx)(a.code,{children:"maxretry"})," value slightly."]}),"\n",(0,t.jsxs)(a.p,{children:["Credit goes to ",(0,t.jsx)(a.a,{href:"https://stackoverflow.com/a/69575369/14570696",children:"this StackOverflow answer"})," and ",(0,t.jsx)(a.a,{href:"https://github.com/Phalcode/gamevault-backend/issues/175",children:"this Github issue"})," for inspiring this guide."]})]})}function u(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,a,n)=>{n.d(a,{Z:()=>r,a:()=>s});var t=n(7294);const i={},l=t.createContext(i);function s(e){const a=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(l.Provider,{value:a},e.children)}}}]);