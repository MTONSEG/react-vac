"use strict";(self.webpackChunkWebpack_by_Puzik=self.webpackChunkWebpack_by_Puzik||[]).push([[260],{2080:(t,n,e)=>{e.d(n,{M:()=>o});var i=e(7294),o=(e(1803),function(t){var n=t.className?" "+t.className:"";return i.createElement("button",{href:"#",className:"btn"+n,onClick:function(n){t.onClickHandler&&(t.onClickHandler(),n.preventDefault())}},t.title)})},7260:(t,n,e)=>{e.r(n),e.d(n,{default:()=>r});var i=e(7294),o=e(2080);function a(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}e(1383);var A=function(t){var n,e,o=(n=(0,i.useState)(""),e=2,function(t){if(Array.isArray(t))return t}(n)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var i,o,a,A,l=[],r=!0,p=!1;try{if(a=(e=e.call(t)).next,0===n){if(Object(e)!==e)return;r=!1}else for(;!(r=(i=a.call(e)).done)&&(l.push(i.value),l.length!==n);r=!0);}catch(t){p=!0,o=t}finally{try{if(!r&&null!=e.return&&(A=e.return(),Object(A)!==A))return}finally{if(p)throw o}}return l}}(n,e)||function(t,n){if(t){if("string"==typeof t)return a(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?a(t,n):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),A=o[0],l=o[1],r=(0,i.useRef)(null);return t.type&&t.type,i.createElement("div",{className:"input-wrapper"},t.icon?i.createElement("img",{src:t.icon,alt:"icon"}):"",i.createElement("input",{ref:r,style:t.icon?{}:{paddingLeft:"20px"},type:t.type?"".concat(t.type):"text",className:t.className?"".concat(t.className," input"):"input",name:t.name,"aria-label":t.name,placeholder:t.placeholder,value:A,onChange:function(t){l(t.currentTarget.value)},onBlur:function(t){t.currentTarget.style.borderColor=""==A?"#F54E4E":""}}))},l=(e(2874),["state"]);const r=function(t){var n=t.state,e=function(t,n){if(null==t)return{};var e,i,o=function(t,n){if(null==t)return{};var e,i,o={},a=Object.keys(t);for(i=0;i<a.length;i++)e=a[i],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)e=a[i],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}(t,l),a=n.icons;return(0,i.useEffect)((function(){document.body.style.overflow=e.showMenu?"hidden":"auto"}),[e.showMenu]),i.createElement("div",{className:e.showMenu?"modal active":"modal"},i.createElement("div",{className:e.showMenu?"modal__body active":"modal__body"},i.createElement("img",{src:a.close,alt:"close",className:"modal__close-icon _form",onClick:function(){e.setShowMenu(!e.showMenu)}}),i.createElement("div",{className:"modal__container"},i.createElement("form",{className:"modal__form form-modal"},i.createElement("h1",{className:"form-modal__title"},n.contacts.title),i.createElement("div",{className:"form-modal__inputs"},i.createElement(A,{name:"Name",className:"from-modal__input",icon:a.user,placeholder:"Your Name"}),i.createElement(A,{name:"Name",className:"from-modal__input",icon:a.phone,placeholder:"Phone Number",type:"number"}),i.createElement(A,{name:"Name",className:"from-modal__input",icon:a.mail,placeholder:"Email Address",type:"mail"})),i.createElement(o.M,{title:n.contacts.titleBtn,className:"from-modal__btn btn_solid"})),i.createElement("h2",{className:"form-modal__subtitle"},n.contacts.subtitle),i.createElement("div",{className:"modal__socials"},i.createElement("a",{className:"modal__soc-link",href:"#"},i.createElement("img",{src:a.insta,alt:"instagram",className:"modal__soc-icon"})),i.createElement("a",{className:"modal__soc-link",href:"#"},i.createElement("img",{src:a.fb,alt:"instagram",className:"modal__soc-icon"})),i.createElement("a",{className:"modal__soc-link",href:"#"},i.createElement("img",{src:a.yt,alt:"instagram",className:"modal__soc-icon"})),i.createElement("a",{className:"modal__soc-link",href:"#"},i.createElement("img",{src:a.mailSoc,alt:"instagram",className:"modal__soc-icon"}))))))}},4753:(t,n,e)=>{e.r(n),e.d(n,{default:()=>l});var i=e(7537),o=e.n(i),a=e(3645),A=e.n(a)()(o());A.push([t.id,'.btn{display:flex;align-items:center;justify-content:center;font-weight:700;font-size:16px;line-height:14px;text-align:center;letter-spacing:0.02em;text-transform:uppercase;padding:17px 5px 15px;border-radius:2px;width:100%;max-height:45px;position:relative}.btn_liner{background:#fff;border:1px solid #7481FF;color:#7481FF}.btn_liner:hover{border-color:#6270FF;color:#6270FF}.btn_solid{background:#7481FF;color:#fff}.btn_solid:hover{background:#6270FF}.btn_solid-white{background:#fff;color:#7481FF}.btn_solid-white:hover{color:#6270FF;box-shadow:0 0 2px #6270FF}.btn__link{position:absolute;top:0;left:0;width:100%;height:100%}.btn-menu{display:flex;align-items:center;width:37px;height:30px;position:relative;cursor:pointer}.btn-menu__line,.btn-menu__line::before,.btn-menu__line::after{position:absolute;display:block;width:100%;height:4px;background:#41456B;border-radius:7px;transition:all .2s}.btn-menu__line::before{content:"";top:-13px}.btn-menu__line::after{content:"";top:13px}.btn-menu:hover .btn-menu__line,.btn-menu:hover .btn-menu__line::before,.btn-menu:hover .btn-menu__line::after{background:#6270FF}.back-btn{position:relative;padding:5px 0 5px 22px;font-weight:700;font-size:16px;line-height:14px;letter-spacing:0.02em;text-transform:uppercase;color:#606276}.back-btn__icon{position:absolute;top:-1px;left:0;width:24px;height:24px;transition:left .2s}.back-btn:hover .back-btn__icon{left:-5px}@media (max-width: 767px){.btn{font-size:14px;line-height:14px;padding:12px 5px 9px}.btn-menu{width:30px}.btn-menu__line::before{top:-12px}.btn-menu__line::after{top:12px}}\n',"",{version:3,sources:["webpack://./src/components/UI/Buttons/Buttons.scss","webpack://./src/styles/vars.scss"],names:[],mappings:"AAEA,KACC,YAAa,CACb,kBAAmB,CACnB,sBAAuB,CACvB,eAAgB,CAChB,cAAe,CACf,gBAAiB,CACjB,iBAAkB,CAClB,qBAAsB,CACtB,wBAAyB,CACzB,qBAAsB,CACtB,iBAAkB,CAClB,UAAW,CACX,eAAgB,CAChB,iBAAkB,CAClB,WACC,eAAgB,CAChB,wBCTmB,CDUnB,aCVmB,CDOnB,iBAKC,oBCXuB,CDYvB,aCZuB,CDavB,WAGD,kBCjBmB,CDkBnB,UAAW,CAFX,iBAIC,kBCnBuB,CDoBvB,iBAGD,eAAgB,CAChB,aCzBmB,CDuBnB,uBAIC,aC1BuB,CD2BvB,0BC3BuB,CD4BvB,WAGD,iBAAkB,CAClB,KAAM,CACN,MAAO,CACP,UAAW,CACX,WAAY,CACZ,UAID,YAAa,CACb,kBAAmB,CACnB,UAAW,CACX,WAAY,CACZ,iBAAkB,CAClB,cAAe,CACf,+DAGC,iBAAkB,CAClB,aAAc,CACd,UAAW,CACX,UAAW,CACX,kBC9DiB,CD+DjB,iBAAkB,CAClB,kBAAmB,CACnB,wBAEA,UAAW,CACX,SAAU,CACV,uBAEA,UAAW,CACX,QAAS,CAxBX,+GA8BE,kBCrEwB,CDsExB,UAID,iBAAkB,CAClB,sBAAuB,CACvB,eAAgB,CAChB,cAAe,CACf,gBAAiB,CACjB,qBAAsB,CACtB,wBAAyB,CACzB,aAAc,CACd,gBACC,iBAAkB,CAClB,QAAS,CACT,MAAO,CACP,UAAW,CACX,WAAY,CACZ,mBAAoB,CAftB,gCAkBE,SAAU,CACV,0BAID,KACC,cAAe,CACf,gBAAiB,CACjB,oBAAqB,CACrB,UAGA,UAAW,CACX,wBACC,SAAU,CACV,uBAEA,QAAS,CACT",sourcesContent:['@import \'../../../styles/vars\';\n\n.btn {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tfont-weight: 700;\n\tfont-size: 16px;\n\tline-height: 14px;\n\ttext-align: center;\n\tletter-spacing: 0.02em;\n\ttext-transform: uppercase;\n\tpadding: 17px 5px 15px;\n\tborder-radius: 2px;\n\twidth: 100%;\n\tmax-height: 45px;\n\tposition: relative;\n\t&_liner {\n\t\tbackground: #fff;\n\t\tborder: 1px solid $violetColor;\n\t\tcolor: $violetColor;\n\t\t&:hover {\n\t\t\tborder-color:  $violetColorHover;\n\t\t\tcolor:  $violetColorHover;\n\t\t}\n\t}\n\t&_solid {\n\t\tbackground: $violetColor;\n\t\tcolor: #fff;\n\t\t&:hover {\n\t\t\tbackground: $violetColorHover;\n\t\t}\n\t}\n\t&_solid-white {\n\t\tbackground: #fff;\n\t\tcolor: $violetColor;\n\t\t&:hover {\n\t\t\tcolor: $violetColorHover;\n\t\t\tbox-shadow: 0 0 2px $violetColorHover;\n\t\t}\n\t}\n\t&__link {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t}\n}\n\n.btn-menu {\n\tdisplay: flex;\n\talign-items: center;\n\twidth: 37px;\n\theight: 30px;\n\tposition: relative;\n\tcursor: pointer;\n\t&__line,\n\t&__line::before,\n\t&__line::after {\n\t\tposition: absolute;\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\theight: 4px;\n\t\tbackground: $colorBase;\n\t\tborder-radius: 7px;\n\t\ttransition: all .2s;\n\t}\n\t&__line::before {\n\t\tcontent: "";\n\t\ttop: -13px;\n\t}\n\t&__line::after  {\n\t\tcontent: "";\n\t\ttop: 13px;\n\t}\n\n\t&:hover .btn-menu__line,\n\t&:hover .btn-menu__line::before,\n\t&:hover .btn-menu__line::after {\n\t\tbackground: $violetColorHover;\n\t}\n}\n\n.back-btn {\n\tposition: relative;\n\tpadding: 5px 0 5px 22px;\n\tfont-weight: 700;\n\tfont-size: 16px;\n\tline-height: 14px;\n\tletter-spacing: 0.02em;\n\ttext-transform: uppercase;\n\tcolor: #606276;\t\n\t&__icon {\n\t\tposition: absolute;\n\t\ttop: -1px;\n\t\tleft: 0;\n\t\twidth: 24px;\n\t\theight: 24px;\n\t\ttransition: left .2s;\n\t}\n\t&:hover .back-btn__icon {\n\t\tleft: -5px;\n\t}\n}\n\n@media (max-width: 767px) {\n\t.btn {\n\t\tfont-size: 14px;\n\t\tline-height: 14px;\n\t\tpadding: 12px 5px 9px;\n\t}\n\n\t.btn-menu {\n\t\twidth: 30px;\n\t\t&__line::before {\n\t\t\ttop: -12px;\n\t\t}\n\t\t&__line::after  {\n\t\t\ttop: 12px;\n\t\t}\n\t}\n}',"// Reset styles\n$bgBase: #FFFFFF;\n$colorBase: #41456B;\n$fontFamily: \"Gilroy\";\n$fontSize: 14px;\n$fontWeight: 400;\n$titleFontWeight: 700;\n$linkTransition: all .2s;\n//\n$textColor: #606276;\n$violetColor: #7481FF;\n$violetColorHover: #6270FF;\n// Width \n$width1220: 'max-width: 1220px';\n$width991: 'max-width: 991px';\n$width767: 'max-width: 767px';\n$width575: 'max-width: 575px';\n$width375: 'max-width: 375px';\n\n@mixin flex-center-center {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n@mixin flex-ai-center {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n@mixin flex-jc-center {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n@mixin flex-center-between {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n}\n\n@mixin flex-between {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}"],sourceRoot:""}]);const l=A},5544:(t,n,e)=>{e.r(n),e.d(n,{default:()=>l});var i=e(7537),o=e.n(i),a=e(3645),A=e.n(a)()(o());A.push([t.id,".input-wrapper{position:relative}.input-wrapper img{position:absolute;width:24px;height:24px;top:10px;left:10px}.input-wrapper_search img{left:auto;right:20px}.input-wrapper_search .input{padding:11px 42px 7px 20px}.input{width:100%;display:block;padding:11px 20px 7px 42px;font-weight:500;font-size:16px;line-height:159%;border:1px solid #D7D7D7;border-radius:2px;color:#606276;transition:all .2s}.input::-moz-placeholder{color:#D7D7D7}.input::placeholder{color:#D7D7D7}.input:hover{box-shadow:0 0 5px #606276}.input:focus{border-color:#606276}.input.error{border-color:#F54E4E}@media (max-width: 767px){.input-wrapper_search .input{padding:11px 42px 9px 20px}.input{padding:11px 20px 10px 42px;font-size:14px}.input:hover{box-shadow:none}}\n","",{version:3,sources:["webpack://./src/components/UI/Forms/InputForm/InputForm.scss"],names:[],mappings:"AAAA,eACC,iBAAkB,CADnB,mBAGE,iBAAkB,CAClB,UAAW,CACX,WAAY,CACZ,QAAS,CACT,SAAU,CACV,0BAGC,SAAU,CACV,UAAW,CAHZ,6BAMC,0BAA2B,CAC3B,OAMF,UAAW,CACX,aAAc,CACd,0BAA2B,CAC3B,eAAgB,CAChB,cAAe,CACf,gBAAiB,CACjB,wBAAyB,CACzB,iBAAkB,CAClB,aAAc,CACd,kBAAmB,CAVpB,yBAYE,aAAc,CAZhB,oBAYE,aAAc,CAZhB,aAeE,0BAA2B,CAf7B,aAkBE,oBAAqB,CAlBvB,aAqBE,oBAAqB,CACrB,0BAKC,6BAEC,0BAA2B,CAC3B,OAIF,2BAA4B,CAC5B,cAAe,CAFhB,aAKE,eAAgB,CAChB",sourcesContent:[".input-wrapper {\n\tposition: relative;\n\timg {\n\t\tposition: absolute;\n\t\twidth: 24px;\n\t\theight: 24px;\n\t\ttop: 10px;\n\t\tleft: 10px;\n\t}\n\t&_search {\n\t\timg {\n\t\t\tleft: auto;\n\t\t\tright: 20px;\n\t\t}\n\t\t& .input {\n\t\t\tpadding: 11px 42px 7px 20px;\n\t\t}\n\t}\n}\n\n\n.input {\n\twidth: 100%;\n\tdisplay: block;\n\tpadding: 11px 20px 7px 42px;\n\tfont-weight: 500;\n\tfont-size: 16px;\n\tline-height: 159%;\n\tborder: 1px solid #D7D7D7;\n\tborder-radius: 2px;\n\tcolor: #606276;\n\ttransition: all .2s;\n\t&::placeholder {\n\t\tcolor: #D7D7D7;\n\t}\n\t&:hover {\n\t\tbox-shadow: 0 0 5px #606276;\n\t}\n\t&:focus {\n\t\tborder-color: #606276;\n\t}\n\t&.error {\n\t\tborder-color: #F54E4E;\n\t}\n}\n\n@media (max-width: 767px) {\n\t.input-wrapper {\n\t\t&_search {\n\t\t\t& .input {\n\t\t\t\tpadding: 11px 42px 9px 20px;\n\t\t\t}\n\t\t}\n\t}\n\t.input {\n\t\tpadding: 11px 20px 10px 42px;\n\t\tfont-size: 14px;\n\n\t\t&:hover {\n\t\t\tbox-shadow: none;\n\t\t}\n\t}\n}\n\n"],sourceRoot:""}]);const l=A},2481:(t,n,e)=>{e.r(n),e.d(n,{default:()=>l});var i=e(7537),o=e.n(i),a=e(3645),A=e.n(a)()(o());A.push([t.id,".modal{position:fixed;width:100%;height:100%;left:0;top:0;background:rgba(0,0,0,0.1);z-index:12;visibility:hidden;opacity:0;transition:all .3s}.modal.active{visibility:visible;opacity:1;z-index:12}.modal__body{position:absolute;right:-100%;top:0;height:100vh;background:#fff;box-shadow:0px 0px 25px rgba(0,0,0,0.12);display:flex;flex-direction:column;width:570px;transition:.3s ease-in-out;visibility:hidden}.modal__body.active{right:0;visibility:visible;z-index:12}.modal__container{flex:1 1 auto;height:100vh;padding:30px 0 105px;overflow:auto}.modal__list{flex:1 1 auto;padding:100px 0 0;margin:0 0 50px}.modal__link{display:block;padding:10px 60px;font-weight:700;font-size:25px;line-height:140%;letter-spacing:0.02em;color:#41456B}.modal__link:hover{color:#7481FF;padding:10px 60px 10px 70px}.modal__close-icon{position:absolute;z-index:13;top:27px;right:125px;width:27.33px;height:27.5px;transition:all .3s;cursor:pointer}.modal__close-icon:hover{transform:scale(1.2) rotate(90deg)}.modal__close-icon._form{right:auto;left:58px;top:27px}.modal__socials{padding:0 60px;display:flex;gap:10px}.modal__soc-icon{width:30px;height:30px;transition:all .2s}.modal__soc-icon:hover{box-shadow:0 0 5px #7481FF}.form-modal{padding:65px 120px 60px 60px}.form-modal__title{font-size:30px;line-height:140%;margin:0 0 57px}.form-modal__inputs{display:flex;flex-direction:column;gap:10px;margin:0 0 40px}.form-modal__subtitle{font-weight:600;font-size:20px;line-height:25px;margin:0 0 26px 60px}@media (max-width: 992px){.modal__body{width:504px}.modal__link:hover{padding:10px 60px}.form-modal{padding:65px 54px 60px 60px}}@media (max-width: 767px){.modal__body{width:100%}.modal__list{padding:70px 0 0}.modal__link{padding:12.5px 40px}.modal__close-icon{top:14px;right:21px}.modal__close-icon._form{left:20px;top:12px}.modal__socials{padding:0 20px}.form-modal{padding:57px 20px 62px 21px}.form-modal__title{font-size:24px;padding:0 30px 0 0;margin:0 0 19px}.form-modal__subtitle{font-size:18px;margin:0 0 26px 20px}.form-modal__inputs{margin:0 0 29px}}\n","",{version:3,sources:["webpack://./src/components/UI/Modals/Modals.scss"],names:[],mappings:"AAAA,OACC,cAAe,CACf,UAAW,CACX,WAAY,CACZ,MAAO,CACP,KAAM,CACN,0BAA8B,CAC9B,UAAW,CACX,iBAAkB,CAClB,SAAU,CACV,kBAAmB,CAVpB,cAYE,kBAAmB,CACnB,SAAU,CACV,UAAW,CACX,aAEA,iBAAkB,CAClB,WAAY,CACZ,KAAM,CACN,YAAa,CACb,eAAgB,CAChB,wCAA4C,CAC5C,YAAa,CACb,qBAAsB,CACtB,WAAY,CACZ,0BAA2B,CAC3B,iBAAkB,CAXlB,oBAaC,OAAQ,CACR,kBAAmB,CACnB,UAAW,CACX,kBAGD,aAAc,CACd,YAAa,CACb,oBAAqB,CACrB,aAAc,CACd,aAEA,aAAc,CACd,iBAAkB,CAClB,eAAgB,CAChB,aAEA,aAAc,CACd,iBAAkB,CAClB,eAAgB,CAChB,cAAe,CACf,gBAAiB,CACjB,qBAAsB,CACtB,aAAc,CAPd,mBASC,aAAc,CACd,2BAA4B,CAC5B,mBAGD,iBAAkB,CAClB,UAAW,CACX,QAAS,CACT,WAAY,CACZ,aAAc,CACd,aAAc,CACd,kBAAmB,CACnB,cAAe,CARf,yBAUC,kCAAmC,CAVpC,yBAaC,UAAW,CACX,SAAU,CACV,QAAS,CACT,gBAID,cAAe,CACf,YAAa,CACb,QAAS,CACT,iBAEA,UAAW,CACX,WAAY,CACZ,kBAAmB,CAHnB,uBAKC,0BAA2B,CAC3B,YAKF,4BAA6B,CAC7B,mBACC,cAAe,CACf,gBAAiB,CACjB,eAAgB,CAChB,oBAEA,YAAa,CACb,qBAAsB,CACtB,QAAS,CACT,eAAgB,CAChB,sBAEA,eAAgB,CAChB,cAAe,CACf,gBAAiB,CACjB,oBAAqB,CACrB,0BAKA,aACC,WAAY,CACZ,mBAGC,iBAAkB,CAClB,YAKF,2BAA4B,CAC5B,CAGF,0BAEE,aACC,UAAW,CACX,aAEA,gBAAiB,CACjB,aAEA,mBAAoB,CACpB,mBAEA,QAAS,CACT,UAAW,CAFX,yBAIC,SAAU,CACV,QAAS,CACT,gBAGD,cAAe,CACf,YAID,2BAA4B,CAC5B,mBACC,cAAe,CACf,kBAAmB,CACnB,eAAgB,CAChB,sBAEA,cAAe,CACf,oBAAqB,CACrB,oBAEA,eAAgB,CAChB",sourcesContent:[".modal {\n\tposition: fixed;\n\twidth: 100%;\n\theight: 100%;\n\tleft: 0;\n\ttop: 0;\n\tbackground: rgba(0, 0, 0, 0.1);\n\tz-index: 12;\n\tvisibility: hidden;\n\topacity: 0;\n\ttransition: all .3s;\n\t&.active {\n\t\tvisibility: visible;\n\t\topacity: 1;\n\t\tz-index: 12;\n\t}\n\t&__body {\n\t\tposition: absolute;\n\t\tright: -100%;\n\t\ttop: 0;\n\t\theight: 100vh;\n\t\tbackground: #fff;\n\t\tbox-shadow: 0px 0px 25px rgba(0, 0, 0, 0.12);\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\twidth: 570px;\n\t\ttransition: .3s ease-in-out;\n\t\tvisibility: hidden;\n\t\t&.active {\n\t\t\tright: 0;\n\t\t\tvisibility: visible;\n\t\t\tz-index: 12;\n\t\t}\n\t}\n\t&__container {\n\t\tflex: 1 1 auto;\n\t\theight: 100vh;\n\t\tpadding: 30px 0 105px;\n\t\toverflow: auto;\n\t}\n\t&__list {\n\t\tflex: 1 1 auto;\n\t\tpadding: 100px 0 0;\n\t\tmargin: 0 0 50px;\n\t}\n\t&__link {\n\t\tdisplay: block;\n\t\tpadding: 10px 60px;\n\t\tfont-weight: 700;\n\t\tfont-size: 25px;\n\t\tline-height: 140%;\n\t\tletter-spacing: 0.02em;\n\t\tcolor: #41456B;\n\t\t&:hover {\n\t\t\tcolor: #7481FF;\n\t\t\tpadding: 10px 60px 10px 70px;\n\t\t}\n\t}\n\t&__close-icon {\n\t\tposition: absolute;\n\t\tz-index: 13;\n\t\ttop: 27px;\n\t\tright: 125px;\n\t\twidth: 27.33px;\n\t\theight: 27.5px;\n\t\ttransition: all .3s;\n\t\tcursor: pointer;\n\t\t&:hover {\n\t\t\ttransform: scale(1.2) rotate(90deg);\n\t\t}\n\t\t&._form {\n\t\t\tright: auto;\n\t\t\tleft: 58px;\n\t\t\ttop: 27px;\n\t\t}\n\t}\n\n\t&__socials {\n\t\tpadding: 0 60px;\n\t\tdisplay: flex;\n\t\tgap: 10px;\n\t}\n\t&__soc-icon {\n\t\twidth: 30px;\n\t\theight: 30px;\n\t\ttransition: all .2s;\n\t\t&:hover {\n\t\t\tbox-shadow: 0 0 5px #7481FF;\n\t\t}\n\t}\n}\n\n.form-modal {\n\tpadding: 65px 120px 60px 60px;\n\t&__title {\n\t\tfont-size: 30px;\n\t\tline-height: 140%;\n\t\tmargin: 0 0 57px;\n\t}\n\t&__inputs {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: 10px;\n\t\tmargin: 0 0 40px;\n\t}\n\t&__subtitle {\n\t\tfont-weight: 600;\n\t\tfont-size: 20px;\n\t\tline-height: 25px;\n\t\tmargin: 0 0 26px 60px;\n\t}\n}\n\n@media (max-width: 992px) {\n\t.modal {\n\t\t&__body {\n\t\t\twidth: 504px;\n\t\t}\n\t\t&__link {\n\t\t\t&:hover {\n\t\t\t\tpadding: 10px 60px;\n\t\t\t}\n\t\t}\n\t}\n\n\t.form-modal {\n\t\tpadding: 65px 54px 60px 60px;\n\t}\n}\n\n@media (max-width: 767px) {\n\t.modal {\n\t\t&__body {\n\t\t\twidth: 100%;\n\t\t}\n\t\t&__list {\n\t\t\tpadding: 70px 0 0;\n\t\t}\n\t\t&__link {\n\t\t\tpadding: 12.5px 40px;\n\t\t}\n\t\t&__close-icon {\n\t\t\ttop: 14px;\n\t\t\tright: 21px;\n\t\t\t&._form {\n\t\t\t\tleft: 20px;\n\t\t\t\ttop: 12px;\n\t\t\t}\n\t\t}\n\t\t&__socials {\n\t\t\tpadding: 0 20px;\n\t\t}\n\t}\n\n\t.form-modal {\n\t\tpadding: 57px 20px 62px 21px;\n\t\t&__title {\n\t\t\tfont-size: 24px;\n\t\t\tpadding: 0 30px 0 0;\n\t\t\tmargin: 0 0 19px;\n\t\t}\n\t\t&__subtitle {\n\t\t\tfont-size: 18px;\n\t\t\tmargin: 0 0 26px 20px;\n\t\t}\n\t\t&__inputs {\n\t\t\tmargin: 0 0 29px;\n\t\t}\n\t}\n}"],sourceRoot:""}]);const l=A},1803:(t,n,e)=>{var i=e(3379),o=e.n(i),a=e(7795),A=e.n(a),l=e(569),r=e.n(l),p=e(3565),s=e.n(p),C=e(9216),d=e.n(C),c=e(4589),x=e.n(c),B=e(4753),m={};m.styleTagTransform=x(),m.setAttributes=s(),m.insert=r().bind(null,"head"),m.domAPI=A(),m.insertStyleElement=d();var f=o()(B.default,m);if(!B.default.locals||t.hot.invalidate){var u=!B.default.locals,h=u?B:B.default.locals;t.hot.accept(4753,(n=>{B=e(4753),function(t,n,e){if(!t&&n||t&&!n)return!1;var i;for(i in t)if((!e||"default"!==i)&&t[i]!==n[i])return!1;for(i in n)if(!(e&&"default"===i||t[i]))return!1;return!0}(h,u?B:B.default.locals,u)?(h=u?B:B.default.locals,f(B.default)):t.hot.invalidate()}))}t.hot.dispose((function(){f()})),B.default&&B.default.locals&&B.default.locals},1383:(t,n,e)=>{var i=e(3379),o=e.n(i),a=e(7795),A=e.n(a),l=e(569),r=e.n(l),p=e(3565),s=e.n(p),C=e(9216),d=e.n(C),c=e(4589),x=e.n(c),B=e(5544),m={};m.styleTagTransform=x(),m.setAttributes=s(),m.insert=r().bind(null,"head"),m.domAPI=A(),m.insertStyleElement=d();var f=o()(B.default,m);if(!B.default.locals||t.hot.invalidate){var u=!B.default.locals,h=u?B:B.default.locals;t.hot.accept(5544,(n=>{B=e(5544),function(t,n,e){if(!t&&n||t&&!n)return!1;var i;for(i in t)if((!e||"default"!==i)&&t[i]!==n[i])return!1;for(i in n)if(!(e&&"default"===i||t[i]))return!1;return!0}(h,u?B:B.default.locals,u)?(h=u?B:B.default.locals,f(B.default)):t.hot.invalidate()}))}t.hot.dispose((function(){f()})),B.default&&B.default.locals&&B.default.locals},2874:(t,n,e)=>{var i=e(3379),o=e.n(i),a=e(7795),A=e.n(a),l=e(569),r=e.n(l),p=e(3565),s=e.n(p),C=e(9216),d=e.n(C),c=e(4589),x=e.n(c),B=e(2481),m={};m.styleTagTransform=x(),m.setAttributes=s(),m.insert=r().bind(null,"head"),m.domAPI=A(),m.insertStyleElement=d();var f=o()(B.default,m);if(!B.default.locals||t.hot.invalidate){var u=!B.default.locals,h=u?B:B.default.locals;t.hot.accept(2481,(n=>{B=e(2481),function(t,n,e){if(!t&&n||t&&!n)return!1;var i;for(i in t)if((!e||"default"!==i)&&t[i]!==n[i])return!1;for(i in n)if(!(e&&"default"===i||t[i]))return!1;return!0}(h,u?B:B.default.locals,u)?(h=u?B:B.default.locals,f(B.default)):t.hot.invalidate()}))}t.hot.dispose((function(){f()})),B.default&&B.default.locals&&B.default.locals}}]);
//# sourceMappingURL=260.app.b5eb8d1340f7913ff7d8.js.map