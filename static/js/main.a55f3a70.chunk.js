(this.webpackJsonpwow=this.webpackJsonpwow||[]).push([[0],{1062:function(e,t){},1131:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(201),r=n.n(a),s=n(243),o=n(249),l=n(251),d=n(499),p=n(501),c=n(502),u=n(56),y=n(239),m=n(505),b=n(503),g=n(504),h=n(169),j=n(518),x=n(9),f=["ava","web3","dapp","ipfs","defi","gamefi"];function T(e){var t=e.timestamp,n=new Date(1e3*parseInt(t,10));return Object(x.jsx)(d.g,{children:"".concat(n.getDate()<10?"0".concat(n.getDate()):n.getDate(),"/").concat(n.getMonth()+1<10?"0".concat(n.getMonth()+1):n.getMonth()+1,"/").concat(n.getFullYear())})}function w(e){var t=e.adderessList;return Object(x.jsx)(p.a,{allowToggle:!0,mt:5,children:(t&&"object"===typeof t?t:[]).map((function(e){return""===e[1]?"":Object(x.jsxs)(p.d,{border:0,my:3,children:[Object(x.jsx)("h2",{children:Object(x.jsxs)(p.b,{bgGradient:"linear(to-r, red.700, pink.800)",borderRadius:"md",_hover:{bgGradient:"linear(to-r, red.600, pink.700)"},children:[Object(x.jsxs)(d.b,{flex:"1",textAlign:"left",isTruncated:!0,children:[Object(x.jsx)(h.b,{mr:5,fontSize:"2xl"}),"".concat(e[1],".").concat(f[parseInt(e[0],10)])]}),Object(x.jsx)(p.c,{})]})}),Object(x.jsxs)(p.e,{pb:4,children:[Object(x.jsxs)(d.c,{py:5,bgGradient:"linear(to-r, pink.800, pink.700)",borderRadius:"md",mb:5,children:[Object(x.jsx)(d.g,{fontWeight:"extrabold",children:Object(x.jsxs)(d.e,{color:"white",href:"http://".concat(e[1],".").concat(f[parseInt(e[0],10)]),target:"_blank",children:[e[1],".",f[parseInt(e[0],10)]]})}),Object(x.jsx)(h.c,{mx:5}),Object(x.jsx)(d.g,{fontWeight:"extrabold",children:Object(x.jsxs)(d.e,{color:"white",href:"https://dweb.link/ipfs/".concat(e[2]),target:"_blank",children:["ipfs://",e[2].slice(0,3),"...",e[2].slice(-3)]})})]}),Object(x.jsxs)(d.f,{spacing:6,direction:["row"],children:[Object(x.jsxs)(d.b,{width:"50%",textAlign:"center",title:e[4],children:["Transfer"," ","0x0000000000000000000000000000000000000000"===e[4]?Object(x.jsx)(d.a,{variant:"subtle",colorScheme:"red",children:"LOCKED"}):Object(x.jsxs)(x.Fragment,{children:["for"," ",Object(x.jsxs)(d.a,{variant:"subtle",colorScheme:"yellow",children:[e[4].slice(0,3),"...",e[4].slice(-3)]})]})]}),Object(x.jsxs)(d.b,{width:"50%",textAlign:"center",children:["Price"," ","0"===e[5]?Object(x.jsx)(d.a,{variant:"subtle",colorScheme:"red",children:"NOT SALE"}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(d.a,{variant:"subtle",colorScheme:"teal",children:(parseInt(e[5],10)/Math.pow(10,18)).toFixed(3)})," ",Object(x.jsx)(d.a,{variant:"subtle",colorScheme:"pink",children:"AVAX"})]})]})]}),Object(x.jsx)(d.d,{my:5,colorScheme:"purple",variant:"dashed"}),Object(x.jsxs)(d.f,{spacing:6,direction:["row"],children:[Object(x.jsx)(T,{timestamp:e[6]}),Object(x.jsx)(c.a,{colorScheme:"red",height:4,width:"100%",value:10+100*(Math.floor(Date.now()/1e3)-parseInt(e[6],10))/(parseInt(e[7],10)-parseInt(e[6],10)),borderRadius:"lg"}),Object(x.jsx)(T,{timestamp:e[7]})]})]})]},e[1])}))})}var O=function(){var e=Object(u.b)(),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)("dweb.link"),o=Object(l.a)(r,2),p=o[0],c=o[1],f=Object(i.useState)({owner:"",page:1,limit:10}),T=Object(l.a)(f,2),O=T[0],v=T[1],_=Object(s.b)({address:"0x8B860047795E9A42c2E9D568867c03a22132CB4E",functionName:"getDomains",chain:"avalanche testnet",abi:j,params:O}),A=_.runContractFunction,D=_.data,S=_.isFetching,k=_.isLoading;Object(i.useEffect)((function(){"undefined"!==typeof chrome&&"undefined"!==typeof chrome.storage&&(chrome.storage.sync.get(["getParams"],(function(e){e&&e.getParams&&v(e.getParams)})),chrome.storage.sync.get(["ipfsGatawey"],(function(e){e&&e.ipfsGatawey&&c(e.ipfsGatawey)})))}),[]),Object(i.useEffect)((function(){"undefined"!==typeof chrome&&"undefined"!==typeof chrome.storage&&("undefined"!==typeof O&&"undefined"!==typeof O.owner&&42===O.owner.length&&("0x0000000000000000000000000000000000000000"===O.owner&&(a.off(),O.owner=""),chrome.storage.sync.set({getParams:O},(function(){O.owner&&A(),console.log("Saved:",O)}))),"undefined"!==typeof p&&p&&chrome.storage.sync.set({ipfsGatawey:p},(function(){console.log("Saved:",p)})))}),[O,p]);var M=function(){return Object(i.useMemo)((function(){return S||k?Object(x.jsx)(d.b,{my:10,textAlign:"center",children:Object(x.jsx)(y.a,{size:"xl",color:"pink.300"})}):Object(x.jsx)(d.b,{my:10,textAlign:"center",children:Object(x.jsxs)(d.g,{bgGradient:"linear(to-l, #40E0D0, #FF8C00, #FF0080)",bgClip:"text",fontWeight:"extrabold",children:["Enter"," ",Object(x.jsx)(d.a,{variant:"outline",colorScheme:"red",mx:1,children:"AVAX"})," ","address and you ",Object(x.jsx)("br",{}),"will see all registered domains."]})})}),[])};return Object(x.jsxs)(d.b,{w:"100vw",h:"100vh",minW:"480px",minH:"600px",color:"white",bgGradient:"linear(to-r, red.900, pink.800)",m:0,p:6,borderRadius:"none",overflow:"auto",children:[Object(x.jsxs)(d.c,{height:"30px",mb:5,borderRadius:"lg",children:[Object(x.jsx)(d.b,{mx:5,children:Object(x.jsx)(d.g,{bgGradient:"radial(pink.400, red.800)",bgClip:"text",fontSize:"xl",fontWeight:"extrabold",children:"AVADoma"})}),Object(x.jsx)(d.d,{orientation:"vertical"}),Object(x.jsx)(d.b,{mx:5,fontSize:10,color:"red.300",children:"BETA / Testnet"})]}),Object(x.jsxs)(m.e,{isFitted:!0,variant:"unstyled",size:"md",children:[Object(x.jsxs)(m.b,{children:[Object(x.jsx)(m.a,{boxShadow:"base",color:"white",_hover:{color:"white",bgGradient:"linear(to-r, pink.800, red.700)",borderRadius:"md"},_selected:{color:"white",bgGradient:"linear(to-r, red.700, pink.800)",borderRadius:"md"},margin:1,fontWeight:"extrabold",children:"Domains"}),Object(x.jsx)(m.a,{boxShadow:"base",color:"white",_hover:{color:"white",bgGradient:"linear(to-r, pink.800, red.700)",borderRadius:"md"},_selected:{color:"white",bgGradient:"linear(to-r, red.700, pink.800)",borderRadius:"md"},margin:1,fontWeight:"extrabold",children:"Wallet"}),Object(x.jsx)(m.a,{boxShadow:"base",color:"white",_hover:{color:"white",bgGradient:"linear(to-r, pink.800, red.700)",borderRadius:"md"},_selected:{color:"white",bgGradient:"linear(to-r, red.700, pink.800)",borderRadius:"md"},margin:1,fontWeight:"extrabold",children:"IPFS"})]}),Object(x.jsxs)(m.d,{children:[Object(x.jsxs)(m.c,{children:[Object(x.jsxs)(d.f,{spacing:6,direction:["column","row"],children:[Object(x.jsxs)(b.b,{size:"lg",children:[Object(x.jsx)(b.a,{type:"text",value:O.owner,onChange:function(e){v({owner:e.target.value,page:1,limit:10}),42===e.target.value.length&&a.on()},placeholder:"AVAX Address",color:"red.200",focusBorderColor:"red.600",borderColor:"red.700",_hover:{borderColor:"red.600"},_placeholder:{color:"red.600"},spellCheck:"false"}),n&&Object(x.jsx)(b.c,{children:Object(x.jsx)(h.d,{color:"green.300"})})]}),Object(x.jsx)(g.a,{variant:"outline",colorScheme:"red",size:"lg",onClick:function(){return A()},color:"red.200",border:0,bgGradient:"linear(to-r, red.700, pink.800)",_hover:{bgGradient:"linear(to-r, red.600, pink.700)",color:"white"},_active:{"bgGradien\u0435":"linear(to-r, red.700, pink.800)"},children:Object(x.jsx)(h.e,{})})]}),D?Object(x.jsx)(w,{adderessList:D}):Object(x.jsx)(M,{}),Object(x.jsx)(d.b,{py:1,textAlign:"center",children:Object(x.jsx)(d.e,{href:"https://avadoma.com",target:"_blank",children:Object(x.jsx)(g.a,{rightIcon:Object(x.jsx)(h.a,{}),colorScheme:"red",variant:"outline",mt:5,color:"red.200",bgGradient:"linear(to-r, red.700, pink.800)",_hover:{bgGradient:"linear(to-r, red.600, pink.700)",color:"white"},_active:{"bgGradien\u0435":"linear(to-r, red.700, pink.800)"},children:"Register new domain"})})})]}),Object(x.jsx)(m.c,{children:Object(x.jsx)(d.b,{py:10,textAlign:"center",children:Object(x.jsxs)(d.g,{bgGradient:"linear(to-l, #40E0D0, #FF8C00, #FF0080)",bgClip:"text",fontWeight:"extrabold",children:["The"," ",Object(x.jsx)(d.a,{variant:"outline",colorScheme:"red",mx:1,children:"AVAX"})," ","wallet and"," ",Object(x.jsx)(d.a,{variant:"outline",colorScheme:"pink",mx:1,children:"IPFS"})," ","integration",Object(x.jsx)("br",{})," with"," ",Object(x.jsx)(d.a,{variant:"outline",colorScheme:"yellow",mx:1,children:"dApps"})," ","will appear soon."]})})}),Object(x.jsxs)(m.c,{children:[Object(x.jsx)(b.a,{type:"text",size:"lg",value:p,onChange:function(e){return c(e.target.value)},placeholder:"IPFS Gateway",color:"red.200",focusBorderColor:"red.600",borderColor:"red.700",_hover:{borderColor:"red.600"},_placeholder:{color:"red.600"},spellCheck:"false"}),Object(x.jsx)(d.b,{py:10,textAlign:"center",children:Object(x.jsxs)(d.g,{bgGradient:"linear(to-l, #40E0D0, #FF8C00, #FF0080)",bgClip:"text",fontWeight:"extrabold",children:["Through this"," ",Object(x.jsx)(d.a,{variant:"outline",colorScheme:"pink",mx:1,children:"IPFS"})," ","gateway, you will access"," ",Object(x.jsx)(d.a,{variant:"outline",colorScheme:"yellow",mx:1,children:"dApps"})]})})]})]})]})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,1136)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),i(e),a(e),r(e),s(e)}))},_=Object(o.b)({shadows:{outline:"none"}});r.a.render(Object(x.jsx)(s.a,{appId:"NRAAJYMXu0IZzzjop7uKvctvALIXG1zhyujkxedw",serverUrl:"https://df5m531ozw4z.usemoralis.com:2053/server",children:Object(x.jsx)(o.a,{theme:_,children:Object(x.jsx)(O,{})})}),document.getElementById("root")),v()},518:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"domain","type":"string"},{"indexed":true,"internalType":"string","name":"ipfs","type":"string"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"created","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"deleted","type":"uint256"}],"name":"RegisterDomain","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"domain","type":"string"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"transfer","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"created","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"deleted","type":"uint256"}],"name":"TransferDomain","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"domain","type":"string"},{"indexed":true,"internalType":"string","name":"ipfs","type":"string"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"address","name":"transfer","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"created","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"deleted","type":"uint256"}],"name":"UpdateDomain","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"domain","type":"string"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"uint256","name":"id_lottery","type":"uint256"}],"name":"WinnerLottery","type":"event"},{"inputs":[{"internalType":"bytes32","name":"_bytes32","type":"bytes32"}],"name":"bytes32ToString","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"domains","outputs":[{"internalType":"enum AVADoma.TLDs","name":"tld","type":"uint8"},{"internalType":"string","name":"hostname","type":"string"},{"internalType":"string","name":"ipfs","type":"string"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"transfer","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"created_at","type":"uint256"},{"internalType":"uint256","name":"deleted_at","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"getCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"page","type":"uint256"},{"internalType":"uint256","name":"limit","type":"uint256"}],"name":"getDomains","outputs":[{"components":[{"internalType":"enum AVADoma.TLDs","name":"tld","type":"uint8"},{"internalType":"string","name":"hostname","type":"string"},{"internalType":"string","name":"ipfs","type":"string"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"transfer","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"created_at","type":"uint256"},{"internalType":"uint256","name":"deleted_at","type":"uint256"}],"internalType":"struct AVADoma.Domain[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_domain","type":"string"}],"name":"getEndDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_domain","type":"string"}],"name":"getIPFS","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_domain","type":"string"}],"name":"getId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLotteryCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_domain","type":"string"}],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_hostname","type":"string"},{"internalType":"enum AVADoma.TLDs","name":"_tld","type":"uint8"}],"name":"getPrice","outputs":[{"internalType":"uint256","name":"_price","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_domain","type":"string"}],"name":"getStartDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_domain","type":"string"}],"name":"getTransferAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"id_lottery","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"regInLottery","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"enum AVADoma.TLDs","name":"_tld","type":"uint8"},{"internalType":"string","name":"_hostname","type":"string"},{"internalType":"string","name":"_ipfs","type":"string"}],"name":"registerDomain","outputs":[{"internalType":"uint256","name":"added_id","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"source","type":"string"}],"name":"stringToBytes32","outputs":[{"internalType":"bytes32","name":"result","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"enum AVADoma.TLDs","name":"_tld","type":"uint8"},{"internalType":"string","name":"_hostname","type":"string"},{"internalType":"string","name":"_ipfs","type":"string"}],"name":"transferDomain","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"enum AVADoma.TLDs","name":"_tld","type":"uint8"},{"internalType":"string","name":"_hostname","type":"string"},{"internalType":"string","name":"_ipfs","type":"string"},{"internalType":"address","name":"_transfer","type":"address"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"updateDomain","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"winnerLottery","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"domain","type":"uint256"}],"internalType":"struct AVADoma.Winner","name":"","type":"tuple"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"winners","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"domain","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]')},810:function(e,t){},840:function(e,t){},880:function(e,t){},882:function(e,t){},906:function(e,t){},908:function(e,t){},920:function(e,t){},937:function(e,t){},940:function(e,t){},942:function(e,t){}},[[1131,1,2]]]);
//# sourceMappingURL=main.a55f3a70.chunk.js.map