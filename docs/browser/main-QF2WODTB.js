import{A as P,Aa as S,B as T,Ba as me,D as F,Da as he,E as $,Ea as fe,F as u,G as Q,Ga as ye,Ha as ve,I as q,Ia as U,Ja as N,K as j,L as p,N as a,O as l,P as d,Q as J,R as Z,T as Y,U as K,X as R,Y as A,Z as G,_ as L,aa as z,ca as ee,da as H,ea as te,fa as oe,h as M,j as O,ja as ie,k as E,ka as re,la as ne,m as x,ma as se,n as c,o as y,oa as ae,p as h,pa as le,qa as de,r as v,ra as ce,s as g,ta as ge,ua as ue,va as _,x as I,xa as C,y as D,ya as w,za as pe}from"./chunk-2XAXBAXB.js";var Re=[{path:"",pathMatch:"full",redirectTo:"home"},{path:"home",loadChildren:()=>import("./chunk-QI4LQJVB.js").then(t=>t.HomeModule),pathMatch:"full"},{path:"favorites",loadChildren:()=>import("./chunk-ZREPPAD5.js").then(t=>t.FavoriteModule),pathMatch:"full"}],_e=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=g({type:e}),e.\u0275inj=c({imports:[_.forRoot(Re),_]});let t=e;return t})();var be=t=>[t];function Ge(t,e){if(t&1&&(a(0,"span",7)(1,"span"),L(2),te(3,"async"),l()()),t&2){let i=K().$implicit;u(2),z(" ",oe(3,1,i==null?null:i.badge)," ")}}function Le(t,e){if(t&1&&(J(0),a(1,"a",3),d(2,"img",4),a(3,"span",5),L(4),l(),j(5,Ge,4,3,"span",6),l(),Z()),t&2){let i=e.$implicit;u(),p("routerLink",H(4,be,i.url)),u(),p("src",i.icon,F),u(2),z(" ",i.urlName," "),u(),p("ngIf",i==null?null:i.badge)}}var Me=(()=>{let e=class e{constructor(){this.menuOptions=[],this.logo={image:"assets/images/logo.svg",alt:"Logo Ricky and Morty",url:"/"}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=v({type:e,selectors:[["app-header"]],inputs:{menuOptions:"menuOptions"},decls:6,vars:7,consts:[[3,"routerLink"],[3,"src","alt","srcset"],[4,"ngFor","ngForOf"],["routerLinkActive","active-menu",1,"menu-item",3,"routerLink"],[1,"menu-icon",3,"src"],[1,"title"],["class","badge",4,"ngIf"],[1,"badge"]],template:function(r,n){r&1&&(a(0,"header")(1,"a",0),d(2,"img",1),l(),a(3,"nav")(4,"ul"),j(5,Le,6,6,"ng-container",2),l()()()),r&2&&(u(),p("routerLink",H(5,be,n.logo.url)),u(),p("src",n.logo.image,F)("alt",n.logo.alt)("srcset",n.logo.image),u(3),p("ngForOf",n.menuOptions))},dependencies:[ie,re,ge,ue,ne],styles:["header[_ngcontent-%COMP%]{background-color:var(--color-core-foreground);display:flex;height:var(--measure-sizing-huge);padding-inline:var(--measure-spacing-l);justify-content:space-between;border-bottom:1px solid var(--color-core-border, #3D3D3D)}header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{box-sizing:border-box;display:flex;align-items:center;justify-content:center}header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{height:40px;display:flex;padding-inline:0px}.menu-item[_ngcontent-%COMP%]{display:grid;align-items:center;justify-items:center;grid-auto-flow:column;gap:1%;border:1px solid var(--color-core-border, #3D3D3D);height:40px;text-decoration:none;color:var(--color-neutral-content, #A4A4A4)}.menu-item[_ngcontent-%COMP%]:first-of-type{border-start-start-radius:var(--measure-radius-s);border-end-start-radius:var(--measure-radius-s)}.menu-item[_ngcontent-%COMP%]:last-of-type{border-end-end-radius:var(--measure-radius-s);border-start-end-radius:var(--measure-radius-s)}.menu-item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{padding-inline:12px}.menu-item[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]{filter:invert(.5);padding-inline-start:12px}.active-menu[_ngcontent-%COMP%]{background:var(--color-neutral-surface, #FFFFFF);color:var(--color-neutral-content-onSource, #0A0A0A)}.active-menu[_ngcontent-%COMP%] > .menu-icon[_ngcontent-%COMP%]{filter:invert(0)}.badge[_ngcontent-%COMP%]{display:inline-block;border-radius:50%;border:1px solid var(--color-core-border, #3D3D3D);margin-inline-end:16px;background:var(--color-neutral-surface, #FFFFFF);color:var(--color-neutral-content-onSource, #0A0A0A);font-family:Poppins;font-size:1.2ch;font-weight:700;line-height:19.6px;text-align:center}.badge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;height:20px;width:20px}@media (width <= 465px){.title[_ngcontent-%COMP%]{display:none}.badge[_ngcontent-%COMP%]{margin-inline-end:0px}.menu-icon[_ngcontent-%COMP%]{padding-inline-start:0px}.menu-item[_ngcontent-%COMP%]{display:flex;width:64px;align-items:center;justify-content:center;gap:10%}}"]});let t=e;return t})();var He=["eyeSvgLeft"],Ue=["eyeSvgRight"],Oe=(()=>{let e=class e{onMouseMove(o){this.eyesMoves({mouseEvent:o,svg:this.eyeSvgLeft}),this.eyesMoves({mouseEvent:o,svg:this.eyeSvgRight})}eyesMoves({mouseEvent:o,svg:r}){let n=r.nativeElement.querySelector(".eyeball"),s=r.nativeElement.querySelector(".pupil"),m=this.translateDOMCordinatesToSVG(o,r),{pointerCenter:b,radiusEyeball:De,radiusPupil:Te}=this.getCircleCenterAndRadius(n,s),V=this.getAngle({pointerCenter:b,pointerCursor:m}),Fe=this.getDistanceBeetweenCursorAndEyeball({pointerCenter:b,pointerCursor:m}),{radiusOuter:X}=this.adjustPupilMoviment({distance:Fe,radiusEyeball:De,radiusPupil:Te}),je={x:b.x+Math.cos(V*Math.PI/180)*X,y:b.y+Math.sin(V*Math.PI/180)*X};return this.updatePupils(s,je)}translateDOMCordinatesToSVG(o,r){return new DOMPoint(o.clientX,o.clientY).matrixTransform(r.nativeElement.getScreenCTM().inverse())}getCircleCenterAndRadius(o,r){let n={x:+o.getAttribute("cx"),y:+o.getAttribute("cy")},s=+o.getAttribute("r"),m=+r.getAttribute("r");return{pointerCenter:n,radiusEyeball:s,radiusPupil:m}}getAngle({pointerCursor:o,pointerCenter:r}){return Math.atan2(o.y-r.y,o.x-r.x)*180/Math.PI}getDistanceBeetweenCursorAndEyeball({pointerCursor:o,pointerCenter:r}){let n=o.x-r.x,s=o.y-r.y;return Math.sqrt(Math.pow(n,2)+Math.pow(s,2))}adjustPupilMoviment({distance:o,radiusEyeball:r,radiusPupil:n}){let s=o<r?1/r*o:1,m=(r-n)*s;return{offset:s,radiusOuter:m}}updatePupils(o,r){o.setAttribute("cx",`${r.x}`),o.setAttribute("cy",`${r.y}`)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=v({type:e,selectors:[["app-not-found"]],viewQuery:function(r,n){if(r&1&&(R(He,5,T),R(Ue,5,T)),r&2){let s;A(s=G())&&(n.eyeSvgLeft=s.first),A(s=G())&&(n.eyeSvgRight=s.first)}},hostBindings:function(r,n){r&1&&Y("mousemove",function(m){return n.onMouseMove(m)},!1,$)},decls:26,vars:0,consts:[["morty",""],["eyeL",""],["eyeSvgLeft",""],["eyeGrupoLeft",""],["eyeR",""],["eyeSvgRight",""],["eyeGrupoRight",""],[1,"container"],[1,"morty"],[1,"morty__outer-head"],[1,"morty__hair"],[1,"morty__ear","left"],[1,"morty__ear","right"],[1,"morty__head"],[1,"morty__eye","left"],["id","svg","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 100 100"],[1,"eye"],["cx","50","cy","50","r","50","fill","none","stroke","#000",1,"eyeball","left"],["cx","30","cy","50","r","5","fill","#000",1,"pupil"],[1,"morty__eye","right"],[1,"morty__nose"],[1,"morty__mouth"]],template:function(r,n){r&1&&(a(0,"div",7)(1,"div",8,0)(3,"div",9),d(4,"div",10)(5,"div",11)(6,"div",12)(7,"div",13),a(8,"div",14,1),I(),a(10,"svg",15,2)(12,"g",16,3),d(14,"circle",17)(15,"circle",18),l()()(),D(),a(16,"div",19,4),I(),a(18,"svg",15,5)(20,"g",16,6),d(22,"circle",17)(23,"circle",18),l()()(),D(),d(24,"div",20)(25,"div",21),l()()())},styles:['.container[_ngcontent-%COMP%]{height:20vh;display:grid;align-items:center;justify-items:center;font-size:10px}.morty[_ngcontent-%COMP%]{position:relative}.morty__head[_ngcontent-%COMP%]{width:21.5em;height:22em;background-color:var(--highlight);border:var(--outline-width) solid black;border-radius:48%;overflow:hidden;position:relative;z-index:12}.morty__head[_ngcontent-%COMP%]:before{content:"";display:block;position:absolute;height:100%;width:100%;left:8px;background-color:var(--morty-skin);background:radial-gradient(25% 6% at 76% 20.5%,var(--morty-skin) 40%,transparent 40%),radial-gradient(21% 6% at 76% 19%,black 40%,transparent 40%),radial-gradient(27% 6% at 30% 20.5%,var(--morty-skin) 40%,transparent 40%),radial-gradient(25% 6% at 29% 19%,black 40%,var(--morty-skin) 40%);border-radius:48%;z-index:10}.morty__outer-head[_ngcontent-%COMP%]{position:relative}.morty__ear.left[_ngcontent-%COMP%]{height:5em;width:5em;position:absolute;background:radial-gradient(160% 190% at 127% 16%,var(--morty-skin) 52%,transparent 20%),radial-gradient(50% 50% at 76% 72%,var(--highlight) 52%,transparent 20%),radial-gradient(circle at 50% 50%,var(--highlight) 52%,transparent 20%),radial-gradient(circle at 50% 50%,black 60%,transparent 20%);top:12.8em;left:-1em;z-index:15}.morty__ear.right[_ngcontent-%COMP%]{height:5em;width:5em;position:absolute;background:radial-gradient(160% 190% at 127% 16%,var(--morty-skin) 52%,transparent 20%),radial-gradient(50% 50% at 76% 72%,var(--morty-skin) 52%,transparent 20%),radial-gradient(circle at 50% 50%,var(--morty-skin) 52%,transparent 20%),radial-gradient(circle at 50% 50%,black 60%,transparent 20%);top:12.4em;left:17.7em;z-index:11;transform:rotate(180deg)}.morty__hair[_ngcontent-%COMP%]{background-color:var(--highlight);border:var(--outline-width) solid black;border-radius:50% 50% 48% 48%;overflow:hidden;position:absolute;height:24em;width:24.3em;top:-4.5em;left:-3em;z-index:0}.morty__hair[_ngcontent-%COMP%]:after{content:"";background-color:#70512f;border-radius:50% 50% 48% 48%;position:absolute;height:24em;width:25.3em;top:calc(var(--outline-width) * 1.55);left:calc(var(--outline-width) * 1.7)}.morty__eye[_ngcontent-%COMP%]{width:7.3em;height:7.3em;background-color:#fff;border-radius:50%;border:var(--outline-width) solid black;position:absolute;top:6em;z-index:20}.morty__eye.left[_ngcontent-%COMP%]{left:3.5em}.morty__eye.right[_ngcontent-%COMP%]{left:13.5em}.morty__nose[_ngcontent-%COMP%]{width:1.6em;height:1.5em;border:var(--outline-width) solid black;background-color:var(--highlight);border-left:0;border-top-right-radius:70% 50%;border-bottom-right-radius:70% 50%;position:relative;z-index:20;top:-9.5em;left:11.8em;transform:rotate(45deg);overflow:hidden}.morty__nose[_ngcontent-%COMP%]:before{content:"";display:block;width:1.6em;height:1.5em;background-color:var(--morty-skin);border-left:0;border-top-right-radius:70% 50%;border-bottom-right-radius:70% 50%;position:absolute;z-index:20;top:-.55em}.morty__mouth[_ngcontent-%COMP%]{background-color:var(--morty-mouth);border:var(--outline-width) solid black;width:8em;height:4.5em;position:absolute;overflow:hidden;border-radius:50% 50% 30% 30%/60% 60% 40% 40%;background:radial-gradient(44% 130% at 27.5% 0%,white 16%,black 16%,black 20%,transparent 16%),radial-gradient(48% 130% at 46.5% -4%,white 16%,black 16%,black 20%,transparent 16%),radial-gradient(48% 130% at 66.5% 0%,white 16%,black 16%,black 20%,transparent 16%),radial-gradient(38% 130% at 83.5% 4%,white 16%,black 16%,black 20%,var(--morty-mouth) 16%);transform:rotate(-3deg);top:15.9em;left:7.8em;z-index:23}.morty__mouth[_ngcontent-%COMP%]:before{content:"";display:block;bottom:-.6em;height:1.3em;width:2.6em;position:absolute;background-color:#ef3851;border:var(--outline-width) solid black;border-radius:70% 50% 90%/90% 50% 100% 40%;left:1.4em;z-index:24;transform:rotate(-10deg)}']});let t=e;return t})();var xe=(()=>{let e=class e{constructor(o){this.favoritefacade=o,this.bagde$=this.favoritefacade.favoritesQuantity$,this.menuOptions=[{icon:"assets/icons/house-filled.svg",url:"home",urlName:"In\xEDcio"},{icon:"assets/icons/heart-filled.svg",url:"/favorites",urlName:"Favoritos",badge:this.bagde$}]}};e.\u0275fac=function(r){return new(r||e)(Q(N))},e.\u0275cmp=v({type:e,selectors:[["app-root"]],features:[ee([N])],decls:4,vars:1,consts:[[3,"menuOptions"],[1,"content-grid"]],template:function(r,n){r&1&&(d(0,"app-header",0),a(1,"div",1),d(2,"router-outlet")(3,"app-not-found"),l()),r&2&&p("menuOptions",n.menuOptions)},dependencies:[ce,Me,Oe]});let t=e;return t})();var Pe=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=g({type:e}),e.\u0275inj=c({imports:[se,_]});let t=e;return t})();var we=new y("NGXS_DEVTOOLS_OPTIONS"),Be=(()=>{class t{constructor(i,o,r){this._options=i,this._injector=o,this._ngZone=r,this.devtoolsExtension=null,this.globalDevtools=E.__REDUX_DEVTOOLS_EXTENSION__||E.devToolsExtension,this.unsubscribe=null,this.connect()}ngOnDestroy(){this.unsubscribe!==null&&this.unsubscribe(),this.globalDevtools&&this.globalDevtools.disconnect()}get store(){return this._injector.get(S)}handle(i,o,r){return!this.devtoolsExtension||this._options.disabled?r(i,o):r(i,o).pipe(M(n=>{let s=this.store.snapshot();throw this.sendToDevTools(i,o,s),n}),O(n=>{this.sendToDevTools(i,o,n)}))}sendToDevTools(i,o,r){let n=C(o);n===pe.type?this.devtoolsExtension.init(i):this.devtoolsExtension.send(Object.assign(Object.assign({},o),{action:null,type:n}),r)}dispatched(i){if(i.type==="DISPATCH"){if(i.payload.type==="JUMP_TO_ACTION"||i.payload.type==="JUMP_TO_STATE"){let o=JSON.parse(i.state);o.router&&o.router.trigger&&(o.router.trigger="devtools"),this.store.reset(o)}else if(i.payload.type==="TOGGLE_ACTION")console.warn("Skip is not supported at this time.");else if(i.payload.type==="IMPORT_STATE"){let{actionsById:o,computedStates:r,currentStateIndex:n}=i.payload.nextLiftedState;this.devtoolsExtension.init(r[0].state),Object.keys(o).filter(s=>s!=="0").forEach(s=>this.devtoolsExtension.send(o[s],r[s].state)),this.store.reset(r[n].state)}}else if(i.type==="ACTION"){let o=JSON.parse(i.payload);this.store.dispatch(o)}}connect(){!this.globalDevtools||this._options.disabled||(this.devtoolsExtension=this._ngZone.runOutsideAngular(()=>this.globalDevtools.connect(this._options)),this.unsubscribe=this.devtoolsExtension.subscribe(i=>{(i.type==="DISPATCH"||i.type==="ACTION")&&this.dispatched(i)}))}}return t.\u0275fac=function(i){return new(i||t)(h(we),h(P),h(q))},t.\u0275prov=x({token:t,factory:t.\u0275fac}),t})();function Ve(t){return Object.assign({name:"NGXS"},t)}var Ce=new y("USER_OPTIONS"),Se=(()=>{class t{static forRoot(i){return{ngModule:t,providers:[{provide:w,useClass:Be,multi:!0},{provide:Ce,useValue:i},{provide:we,useFactory:Ve,deps:[Ce]}]}}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=g({type:t}),t.\u0275inj=c({}),t})();var Xe=(t,e)=>new Array(e+1).join(t),k=(t,e)=>Xe("0",e-t.toString().length)+t;function $e(t){return k(t.getHours(),2)+":"+k(t.getMinutes(),2)+":"+k(t.getSeconds(),2)+"."+k(t.getMilliseconds(),3)}var W=class{constructor(e,i,o){this.action=e,this.store=i,this.logWriter=o}dispatched(e){let i=C(this.action),o=$e(new Date),r=`action ${i} @ ${o}`;this.logWriter.startGroup(r),this._hasPayload(this.action)&&this.logWriter.logGrey("payload",Object.assign({},this.action)),this.logWriter.logGrey("prev state",e)}completed(e){this.logWriter.logGreen("next state",e),this.logWriter.endGroup()}errored(e){this.logWriter.logRedish("next state after error",this.store.snapshot()),this.logWriter.logRedish("error",e),this.logWriter.endGroup()}_hasPayload(e){return this._getNonEmptyProperties(e).length>0}_getNonEmptyProperties(e){return Object.keys(e).map(r=>e[r]).filter(r=>r!==void 0)}},B=class{constructor(e){this.options=e,this.options=this.options||{},this.logger=e.logger||console}startGroup(e){let i=this.options.collapsed?this.logger.groupCollapsed:this.logger.group;try{i.call(this.logger,e)}catch{console.log(e)}}endGroup(){try{this.logger.groupEnd()}catch{this.logger.log("\u2014\u2014 log end \u2014\u2014")}}logGrey(e,i){this.log(e,"color: #9E9E9E; font-weight: bold",i)}logGreen(e,i){this.log(e,"color: #4CAF50; font-weight: bold",i)}logRedish(e,i){this.log(e,"color: #FD8182; font-weight: bold",i)}log(e,i,o){this.isIE()?this.logger.log(e,o):this.logger.log("%c "+e,i,o)}isIE(){let e=typeof window<"u"&&window.navigator.userAgent?window.navigator.userAgent:"",i=!1,o=e.indexOf("MSIE "),r=e.indexOf("Trident/");return(o>-1||r>-1)&&(i=!0),i}},ke=new y("NGXS_LOGGER_PLUGIN_OPTIONS"),Qe=(()=>{class t{constructor(i,o){this._options=i,this._injector=o}handle(i,o,r){if(this._options.disabled||!this._options.filter(o,i))return r(i,o);this._logWriter=this._logWriter||new B(this._options),this._store=this._store||this._injector.get(S);let n=new W(o,this._store,this._logWriter);return n.dispatched(i),r(i,o).pipe(O(s=>{n.completed(s)}),M(s=>{throw n.errored(s),s}))}}return t.\u0275fac=function(i){return new(i||t)(h(ke),h(P))},t.\u0275prov=x({token:t,factory:t.\u0275fac}),t})(),Ne=new y("LOGGER_USER_OPTIONS");function qe(t){return Object.assign(Object.assign({},{logger:console,collapsed:!1,disabled:!1,filter:()=>!0}),t)}var Ee=(()=>{class t{static forRoot(i){return{ngModule:t,providers:[{provide:w,useClass:Qe,multi:!0},{provide:Ne,useValue:i},{provide:ke,useFactory:qe,deps:[Ne]}]}}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=g({type:t}),t.\u0275inj=c({}),t})();var Ie=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=g({type:e,bootstrap:[xe]}),e.\u0275inj=c({imports:[de,_e,Pe,ae,ye.forRoot(),me.forRoot([he,fe,ve]),U.production?[]:Se.forRoot(),U.production?[]:Ee.forRoot()]});let t=e;return t})();le().bootstrapModule(Ie).catch(t=>console.error(t));
