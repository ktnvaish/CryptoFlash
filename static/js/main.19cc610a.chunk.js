(this.webpackJsonpcrypto_tracker=this.webpackJsonpcrypto_tracker||[]).push([[0],{19:function(e,c,t){},38:function(e,c,t){},40:function(e,c,t){"use strict";t.r(c);var a=t(2),n=t.n(a),r=t(13),s=t.n(r),o=t(4),i=(t(19),t(14)),l=t.n(i),m=(t(38),t(0)),j=function(e){var c=e.image,t=e.name,a=e.symbol,n=e.price,r=e.volume,s=e.priceChange,o=e.marketcap;return Object(m.jsx)("div",{className:"coin-container",children:Object(m.jsxs)("div",{className:"row coin-row",children:[Object(m.jsxs)("div",{className:"col-md-3 coin",children:[Object(m.jsx)("img",{src:c,alt:"crypto"}),Object(m.jsx)("h1",{children:t}),Object(m.jsx)("p",{className:"coin-symbol",children:a})]}),Object(m.jsxs)("p",{className:"col-md-2 coin-price",children:[n.toLocaleString()," INR"]}),Object(m.jsxs)("p",{className:"col-md-2 coin-volume",children:[r.toLocaleString()," INR"]}),s<0?Object(m.jsxs)("p",{className:"col-md-1 coin-percent red",children:[s.toFixed(2),"%"]}):Object(m.jsxs)("p",{className:"col-md-1 coin-percent green",children:[s.toFixed(2),"%"]}),Object(m.jsxs)("p",{className:"col-md-4 coin-marketcap",children:["Market Cap: ",o.toLocaleString()," INR"]})]})})};var p=function(){var e=Object(a.useState)([]),c=Object(o.a)(e,2),t=c[0],n=c[1],r=Object(a.useState)(""),s=Object(o.a)(r,2),i=s[0],p=s[1];Object(a.useEffect)((function(){l.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((function(e){n(e.data),console.log(e.data)})).catch((function(e){return console.log(e)}))}),[]);var d=t.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())}));return Object(m.jsxs)("div",{className:"container coin-app",children:[Object(m.jsxs)("div",{className:"coin-search",children:[Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("h1",{className:"col-md-12 coin-text",children:"Get a CryptoFlash"})}),Object(m.jsx)("form",{children:Object(m.jsx)("input",{placeholder:"Search",className:"coin-input",onChange:function(e){p(e.target.value)}})})]}),d.map((function(e){return Object(m.jsx)(j,{name:e.name,image:e.image,symbol:e.symbol,price:e.current_price,volume:e.total_volume,priceChange:e.price_change_percentage_24h,marketcap:e.market_cap},e.id)}))]})};s.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(p,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.19cc610a.chunk.js.map