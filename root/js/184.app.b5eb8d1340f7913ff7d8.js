"use strict";(self.webpackChunkWebpack_by_Puzik=self.webpackChunkWebpack_by_Puzik||[]).push([[184],{3184:(t,e,n)=>{n.r(e),n.d(e,{default:()=>s});var a=n(7294),i=(n(2153),n(1970));const s=function(t){var e=t.state,n=e.list.map((function(t){return a.createElement(i.$,{key:t.id,id:t.id,title:t.title,text:t.text,icon:t.icon})}));return a.createElement("div",{className:"dream-car"},a.createElement("article",{className:"dream-car__body"},a.createElement("h2",{className:"dream-car__title title"},e.title),a.createElement("div",{className:"dream-car__tex-wrap"},a.createElement("p",{className:"dream-car__text text"},e.text[1]),a.createElement("p",{className:"dream-car__text text"},e.text[2]))),a.createElement("ul",{className:"dream-car__list"},n))}},1970:(t,e,n)=>{n.d(e,{$:()=>i});var a=n(7294),i=(n(4734),function(t){return a.createElement("li",{className:"easy-steps__item item-steps"},a.createElement("div",{className:"item-steps__icon-wrap"},a.createElement("img",{src:t.icon,alt:t.id,className:"item-steps__icon"}),a.createElement("span",{className:"item-steps__icon-num"},t.id)),a.createElement("div",{className:"item-steps__body"},a.createElement("h2",{className:"item-steps__title"},t.title),a.createElement("p",{className:"item-steps__text text"},t.text)))})},4929:(t,e,n)=>{n.r(e),n.d(e,{default:()=>r});var a=n(7537),i=n.n(a),s=n(3645),A=n.n(s)()(i());A.push([t.id,".dream-car{display:flex;justify-content:space-between;align-items:center;gap:80px}.dream-car__body,.dream-car__list{width:100%}.dream-car__body{max-width:568px}.dream-car__list{max-width:552px;padding:0 4px 0 0}.dream-car__title{margin:0 0 20px}.dream-car__text{margin:0 0 20px}.dream-car__text:last-child{margin:0}@media (max-width: 992px){.dream-car{margin:0 auto;max-width:600px;flex-direction:column;justify-content:flex-start;align-items:flex-start;gap:39px}.dream-car__body{max-width:100%}}@media (max-width: 767px){.dream-car{gap:22px}.dream-car__title{margin:0 0 9px}.dream-car__text{margin:0 0 11px}}\n","",{version:3,sources:["webpack://./src/components/About/DreamCarAbout/DreamCarAbout.scss"],names:[],mappings:"AAAA,WACC,YAAa,CACb,6BAA8B,CAC9B,kBAAmB,CACnB,QAAS,CACT,kCAEC,UAAW,CACX,iBAGA,eAAgB,CAChB,iBAEA,eAAgB,CAChB,iBAAkB,CAClB,kBAEA,eAAgB,CAChB,iBAGA,eAAgB,CADhB,4BAGC,QAAS,CACT,0BAKF,WACC,aAAc,CACd,eAAgB,CAChB,qBAAsB,CACtB,0BAA2B,CAC3B,sBAAuB,CACvB,QAAS,CACT,iBACC,cAAe,CACf,CAIH,0BACC,WACC,QAAS,CACT,kBACC,cAAe,CACf,iBAEA,eAAgB,CAChB",sourcesContent:[".dream-car {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tgap: 80px;\n\t&__body,\n\t&__list {\n\t\twidth: 100%;\n\t}\n\n\t&__body {\n\t\tmax-width: 568px;\n\t}\n\t&__list {\n\t\tmax-width: 552px;\n\t\tpadding: 0 4px 0 0;\n\t}\n\t&__title {\n\t\tmargin: 0 0 20px;\n\t}\n\n\t&__text {\n\t\tmargin: 0 0 20px;\n\t\t&:last-child {\n\t\t\tmargin: 0;\n\t\t}\n\t}\n}\n\n@media (max-width: 992px) {\n\t.dream-car {\n\t\tmargin: 0 auto;\n\t\tmax-width: 600px;\n\t\tflex-direction: column;\n\t\tjustify-content: flex-start;\n\t\talign-items: flex-start;\n\t\tgap: 39px;\n\t\t&__body {\n\t\t\tmax-width: 100%;\n\t\t}\n\t}\n}\n\n@media (max-width: 767px) {\n\t.dream-car {\n\t\tgap: 22px;\n\t\t&__title {\n\t\t\tmargin: 0 0 9px;\n\t\t}\n\t\t&__text {\n\t\t\tmargin: 0 0 11px;\n\t\t}\n\t}\n}"],sourceRoot:""}]);const r=A},8277:(t,e,n)=>{n.r(e),n.d(e,{default:()=>r});var a=n(7537),i=n.n(a),s=n(3645),A=n.n(s)()(i());A.push([t.id,".item-steps{display:flex;align-items:center;gap:20px;margin:0 0 40px}.item-steps:last-child{margin:0}.item-steps__icon-wrap{position:relative}.item-steps__icon{width:75px;height:67px}.item-steps__icon-num{position:absolute;top:60%;left:50%;transform:translate(-50%, -50%);font-weight:700;font-size:25px}.item-steps__title{font-weight:600;font-size:20px;line-height:25px;margin:0 0 5px}@media (max-width: 992px){.item-steps{margin:0 0 46px}}@media (max-width: 767px){.item-steps{margin:0 0 21px;align-items:flex-start}.item-steps__icon{width:53px;height:47px}.item-steps__icon-wrap{margin:4px 0 0}.item-steps__icon-num{font-size:20px}.item-steps__title{font-size:18px}}\n","",{version:3,sources:["webpack://./src/components/Home/EasySteps/StepItem/StepItem.scss"],names:[],mappings:"AAAA,YACC,YAAa,CACb,kBAAmB,CACnB,QAAS,CACT,eAAgB,CAJjB,uBAME,QAAS,CACT,uBAEA,iBAAkB,CAClB,kBAEA,UAAW,CACX,WAAY,CACZ,sBAEA,iBAAkB,CAClB,OAAQ,CACR,QAAS,CACT,+BAAgC,CAChC,eAAgB,CAChB,cAAe,CACf,mBAEA,eAAgB,CAChB,cAAe,CACf,gBAAiB,CACjB,cAAe,CACf,0BAID,YACC,eAAgB,CAChB,CAGF,0BACC,YACC,eAAgB,CAChB,sBAAuB,CACvB,kBACC,UAAW,CACX,WAAY,CACZ,uBAEA,cAAe,CACf,sBAEA,cAAe,CACf,mBAGA,cAAe,CACf",sourcesContent:[".item-steps {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 20px;\n\tmargin: 0 0 40px;\n\t&:last-child {\n\t\tmargin: 0;\n\t}\n\t&__icon-wrap {\n\t\tposition: relative;\n\t}\n\t&__icon {\n\t\twidth: 75px;\n\t\theight: 67px;\n\t}\n\t&__icon-num {\n\t\tposition: absolute;\n\t\ttop: 60%;\n\t\tleft: 50%;\n\t\ttransform: translate(-50%, -50%);\n\t\tfont-weight: 700;\n\t\tfont-size: 25px;\n\t}\n\t&__title {\n\t\tfont-weight: 600;\n\t\tfont-size: 20px;\n\t\tline-height: 25px;\n\t\tmargin: 0 0 5px;\n\t}\n}\n\n@media (max-width: 992px) {\n\t.item-steps {\n\t\tmargin: 0 0 46px;\n\t}\n}\n\n@media (max-width: 767px) {\n\t.item-steps {\n\t\tmargin: 0 0 21px;\n\t\talign-items: flex-start;\n\t\t&__icon {\n\t\t\twidth: 53px;\n\t\t\theight: 47px;\n\t\t}\n\t\t&__icon-wrap {\n\t\t\tmargin: 4px 0 0;\n\t\t}\n\t\t&__icon-num {\n\t\t\tfont-size: 20px;\n\t\t}\n\n\t\t&__title {\n\t\t\tfont-size: 18px;\n\t\t}\n\t}\n}"],sourceRoot:""}]);const r=A},2153:(t,e,n)=>{var a=n(3379),i=n.n(a),s=n(7795),A=n.n(s),r=n(569),l=n.n(r),m=n(3565),c=n.n(m),p=n(9216),d=n.n(p),C=n(4589),o=n.n(C),x=n(4929),_={};_.styleTagTransform=o(),_.setAttributes=c(),_.insert=l().bind(null,"head"),_.domAPI=A(),_.insertStyleElement=d();var f=i()(x.default,_);if(!x.default.locals||t.hot.invalidate){var u=!x.default.locals,B=u?x:x.default.locals;t.hot.accept(4929,(e=>{x=n(4929),function(t,e,n){if(!t&&e||t&&!e)return!1;var a;for(a in t)if((!n||"default"!==a)&&t[a]!==e[a])return!1;for(a in e)if(!(n&&"default"===a||t[a]))return!1;return!0}(B,u?x:x.default.locals,u)?(B=u?x:x.default.locals,f(x.default)):t.hot.invalidate()}))}t.hot.dispose((function(){f()})),x.default&&x.default.locals&&x.default.locals},4734:(t,e,n)=>{var a=n(3379),i=n.n(a),s=n(7795),A=n.n(s),r=n(569),l=n.n(r),m=n(3565),c=n.n(m),p=n(9216),d=n.n(p),C=n(4589),o=n.n(C),x=n(8277),_={};_.styleTagTransform=o(),_.setAttributes=c(),_.insert=l().bind(null,"head"),_.domAPI=A(),_.insertStyleElement=d();var f=i()(x.default,_);if(!x.default.locals||t.hot.invalidate){var u=!x.default.locals,B=u?x:x.default.locals;t.hot.accept(8277,(e=>{x=n(8277),function(t,e,n){if(!t&&e||t&&!e)return!1;var a;for(a in t)if((!n||"default"!==a)&&t[a]!==e[a])return!1;for(a in e)if(!(n&&"default"===a||t[a]))return!1;return!0}(B,u?x:x.default.locals,u)?(B=u?x:x.default.locals,f(x.default)):t.hot.invalidate()}))}t.hot.dispose((function(){f()})),x.default&&x.default.locals&&x.default.locals}}]);
//# sourceMappingURL=184.app.b5eb8d1340f7913ff7d8.js.map