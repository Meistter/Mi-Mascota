"use strict";(self.webpackChunkmi_mascota=self.webpackChunkmi_mascota||[]).push([[592],{691:(u,_,r)=>{r.d(_,{H:()=>s});var t=r(4650),g=r(529);let s=(()=>{class c{constructor(p){this.http=p}getCategoryName(p){return"0"==p?"Perro":"1"==p?"Gato":"2"==p?"Ave":"3"==p?"Tortuga":"4"==p?"Conejo":void 0}}return c.\u0275fac=function(p){return new(p||c)(t.LFG(g.eN))},c.\u0275prov=t.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},5833:(u,_,r)=>{r.d(_,{a:()=>g});var t=r(4650);let g=(()=>{class s{constructor(){this.locations=["Barquisimeto","Valencia","Caracas","Fort Worth"]}getLocations(){return this.locations}}return s.\u0275fac=function(l){return new(l||s)},s.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},2102:(u,_,r)=>{r.d(_,{s:()=>h});var t=r(4650),g=r(6895),s=r(3060),c=r(7392),l=r(3546);function p(e,a){1&e&&(t.TgZ(0,"a"),t._uU(1," a\xf1o | "),t.qZA())}function f(e,a){1&e&&t._uU(0," a\xf1os | ")}const C=function(e){return["/pet",e]};let m=(()=>{class e{constructor(){this.pet={id:"string",name:"string",owner_id:"string",age:0,castrated:!0,disease:!0,health:"string",vaccinated:!0,location:"string",description:"string",adoptionReason:"string",remarks:"string",photos:[{url_mobile:"",url_full:"",alt:""}],likes:0,category:"0",size:""}}getCategory(){return"0"==this.pet.category?"Perro":"1"==this.pet.category?"Gato":"2"==this.pet.category?"Ave":"3"==this.pet.category?"Tortuga":"4"==this.pet.category?"Conejo":void 0}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-card"]],inputs:{pet:"pet"},decls:35,vars:13,consts:[[1,"card-container"],["mat-card-image","",3,"src","alt"],[1,"card-container__articles"],[1,"info__left"],[1,"info__left-details"],[4,"ngIf","ngIfElse"],["elseAge",""],[1,"info__right"],[1,"location"],[2,"font-size","14px"],[1,"detail-button",3,"routerLink"],["routerLink","/auth/login",1,"adopt-button"]],template:function(n,o){if(1&n&&(t.TgZ(0,"mat-card",0),t._UZ(1,"img",1),t.TgZ(2,"mat-card-content",2)(3,"article",3)(4,"h1"),t._uU(5),t.qZA(),t.TgZ(6,"h2"),t._uU(7),t.qZA(),t._UZ(8,"br"),t.TgZ(9,"div",4)(10,"p")(11,"b"),t._uU(12,"Especie: "),t.qZA(),t._uU(13),t.qZA(),t.TgZ(14,"p")(15,"b"),t._uU(16,"Salud: "),t.qZA(),t._uU(17),t.qZA(),t.TgZ(18,"p")(19,"b"),t._uU(20,"Edad: "),t.qZA(),t._uU(21),t.YNc(22,p,2,0,"a",5),t.YNc(23,f,1,0,"ng-template",null,6,t.W1O),t.qZA()()(),t.TgZ(25,"article",7)(26,"div",8)(27,"mat-icon",9),t._uU(28,"location_on"),t.qZA(),t.TgZ(29,"p"),t._uU(30),t.qZA()(),t.TgZ(31,"button",10),t._uU(32,"Ver detalles"),t.qZA(),t.TgZ(33,"button",11),t._uU(34,"\xa1Darle un Hogar!"),t.qZA()()()()),2&n){const i=t.MAs(24);t.xp6(1),t.s9C("src",o.pet.photos[0].url_mobile,t.LSH),t.s9C("alt",o.pet.photos[0].alt),t.xp6(4),t.Oqu(o.pet.name),t.xp6(2),t.Oqu(o.pet.description),t.xp6(6),t.hij("",o.getCategory()," | "),t.xp6(4),t.hij("",o.pet.health," | "),t.xp6(4),t.Oqu(o.pet.age),t.xp6(1),t.Q6J("ngIf",1==o.pet.age)("ngIfElse",i),t.xp6(8),t.Oqu(o.pet.location),t.xp6(1),t.Q6J("routerLink",t.VKq(11,C,o.pet.id))}},dependencies:[g.O5,s.rH,c.Hw,l.a8,l.dn,l.G2],styles:[".card-container[_ngcontent-%COMP%]{width:100%;max-width:360px;background-color:var(--card-background-gray);border-radius:0;padding:14px;margin:14px}.card-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-height:300px;object-fit:cover}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:0;position:relative}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]{font-family:Inter;margin-bottom:16px;min-height:100px}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:18px;margin:12px 0}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:13px;font-weight:400;padding-right:4px}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:500;font-size:12px}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]   .info__left-details[_ngcontent-%COMP%]{position:absolute;bottom:0;display:flex;flex-direction:row}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#000;font-size:12px;font-family:Inter;font-weight:550;width:110px;height:30px;margin:8px 0 8px 8px;border:solid;border-width:1.5px;border-radius:4px;border-color:#000;cursor:pointer}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]   .adopt-button[_ngcontent-%COMP%]{margin-top:0;background-color:var(--card-button-background)}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]{display:flex;align-items:center;margin-right:4px}"]}),e})();function O(e,a){1&e&&t._UZ(0,"app-card",2),2&e&&t.Q6J("pet",a.$implicit)}let h=(()=>{class e{constructor(){this.pets=[]}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-cards"]],inputs:{pets:"pets"},decls:2,vars:1,consts:[[1,"card-container"],["class","app-card",3,"pet",4,"ngFor","ngForOf"],[1,"app-card",3,"pet"]],template:function(n,o){1&n&&(t.TgZ(0,"section",0),t.YNc(1,O,1,1,"app-card",1),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngForOf",o.pets))},dependencies:[g.sg,m],styles:[".card-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center}.card-container[_ngcontent-%COMP%]   .app-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}"]}),e})()},3124:(u,_,r)=>{r.d(_,{f:()=>h});var t=r(4650),g=r(6895),s=r(7392),c=r(3060),l=r(3546);function p(e,a){if(1&e&&(t.TgZ(0,"h1"),t._uU(1),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Oqu(n.pet.name)}}function f(e,a){1&e&&(t.TgZ(0,"h1"),t._uU(1,"Rescatar"),t.qZA())}const C=function(e,a){return[e,a]};let m=(()=>{class e{constructor(){this.pet={id:"string",name:"string",owner_id:"string",age:0,castrated:!0,disease:!0,health:"string",vaccinated:!0,location:"string",description:"string",adoptionReason:"string",remarks:"string",photos:[{url_mobile:"",url_full:"",alt:""}],likes:0,category:"0"},this.urlRedirect="false"}getUrl(){return"pet"==this.urlRedirect?"/pet":"rescue"==this.urlRedirect?"/pet-rescue":"lost"==this.urlRedirect?"/pet-lost":"not-found"}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-related-card"]],inputs:{pet:"pet",urlRedirect:"urlRedirect"},decls:15,vars:9,consts:[[1,"card-container",3,"routerLink"],["mat-card-image","",3,"src","alt"],[1,"card-container__articles"],[1,"info__left"],[4,"ngIf","ngIfElse"],["category",""],[1,"info__right"],[1,"location"],[2,"font-size","13px"],[1,"detail-button"]],template:function(n,o){if(1&n&&(t.TgZ(0,"mat-card",0),t._UZ(1,"img",1),t.TgZ(2,"mat-card-content",2)(3,"article",3),t.YNc(4,p,2,1,"h1",4),t.YNc(5,f,2,0,"ng-template",null,5,t.W1O),t.qZA(),t.TgZ(7,"article",6)(8,"div",7)(9,"mat-icon",8),t._uU(10,"location_on"),t.qZA(),t.TgZ(11,"p"),t._uU(12),t.qZA()(),t.TgZ(13,"button",9),t._uU(14,"Ver detalles"),t.qZA()()()()),2&n){const i=t.MAs(6);t.Q6J("routerLink",t.WLB(6,C,o.getUrl(),o.pet.id)),t.xp6(1),t.s9C("src",o.pet.photos[0].url_mobile,t.LSH),t.s9C("alt",o.pet.photos[0].alt),t.xp6(3),t.Q6J("ngIf",o.pet.name)("ngIfElse",i),t.xp6(8),t.Oqu(o.pet.location)}},dependencies:[g.O5,c.rH,s.Hw,l.a8,l.dn,l.G2],styles:[".card-container[_ngcontent-%COMP%]{width:240px;height:220px;background-color:var(--card-background-gray);border-radius:0;padding:14px;margin:6px 10px 6px 2px}.card-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:212px;height:140px;object-fit:cover}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:0;position:relative}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]{font-family:Inter;text-align:center}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:18px;margin:12px 0}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;font-weight:500}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#000;font-size:12px;font-family:Inter;font-weight:550;width:86px;height:30px;margin:6px 0 12px 8px;border:solid;border-width:1.5px;border-radius:4px;border-color:#000;cursor:pointer}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]{display:flex;align-items:center;margin-right:4px}"]}),e})();function O(e,a){if(1&e&&t._UZ(0,"app-related-card",5),2&e){const n=a.$implicit,o=t.oxw();t.Q6J("urlRedirect",o.urlRedirect)("pet",n)}}let h=(()=>{class e{constructor(){this.related=[],this.urlRedirect="false"}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-related"]],inputs:{related:"related",urlRedirect:"urlRedirect"},decls:8,vars:1,consts:[[1,"related-container"],[1,"related__top-header"],[2,"font-size","32px"],[1,"related__pet-cards"],[3,"urlRedirect","pet",4,"ngFor","ngForOf"],[3,"urlRedirect","pet"]],template:function(n,o){1&n&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h1"),t._uU(3,"Mascotas Relacionadas"),t.qZA(),t.TgZ(4,"mat-icon",2),t._uU(5,"chevron_right"),t.qZA()(),t.TgZ(6,"div",3),t.YNc(7,O,1,2,"app-related-card",4),t.qZA()()),2&n&&(t.xp6(7),t.Q6J("ngForOf",o.related))},dependencies:[g.sg,s.Hw,m],styles:[".related-container[_ngcontent-%COMP%]{width:100%;min-height:210px;max-height:320px;margin:0;padding:10px 0 12px 10px;background-color:var(--background-gray)}.related-container[_ngcontent-%COMP%]   .related__top-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.related-container[_ngcontent-%COMP%]   .related__top-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:Inter;font-size:15px;font-weight:600}.related-container[_ngcontent-%COMP%]   .related__pet-cards[_ngcontent-%COMP%]{display:flex;align-items:center;overflow-x:scroll;overscroll-behavior-x:contain;scroll-snap-type:x mandatory}"]}),e})()},1143:(u,_,r)=>{r.d(_,{o:()=>a});var t=r(4650),g=r(6895),s=r(3060),c=r(7392),l=r(3546);function p(n,o){if(1&n&&(t.TgZ(0,"h1"),t._uU(1),t.qZA()),2&n){const i=t.oxw();t.xp6(1),t.hij("Especie: ",i.getCategory(),"")}}function f(n,o){if(1&n&&(t.TgZ(0,"h1"),t._uU(1),t.qZA()),2&n){const i=t.oxw();t.xp6(1),t.Oqu(i.pet.name)}}function C(n,o){1&n&&(t.TgZ(0,"a"),t._uU(1," a\xf1o aproximadamente | "),t.qZA())}function m(n,o){1&n&&t._uU(0," a\xf1os aproximadamente | ")}const O=function(n,o){return[n,o]};let h=(()=>{class n{constructor(){this.lostDetail=!1,this.pet={id:"string",age:0,health:"string",location:"string",description:"string",photos:[{url_mobile:"",url_full:"",alt:""}],category:"0",disease:!1,gps:"",remarks:"string",address:""}}getUrl(){return this.lostDetail?"/pet-lost":"/pet-rescue"}getCategory(){return"0"==this.pet.category?"Perro":"1"==this.pet.category?"Gato":"2"==this.pet.category?"Ave":"3"==this.pet.category?"Tortuga":"4"==this.pet.category?"Conejo":void 0}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-rescue-card"]],inputs:{lostDetail:"lostDetail",pet:"pet"},decls:36,vars:15,consts:[[1,"card-container"],["mat-card-image","",3,"src","alt"],[1,"card-container__articles"],[1,"info__left"],[4,"ngIf","ngIfElse"],["lost",""],[1,"info__left-details"],["elseAge",""],[1,"info__right"],[1,"location"],[2,"font-size","14px"],[1,"detail-button",3,"routerLink"],["routerLink","/auth/login",1,"adopt-button"]],template:function(i,d){if(1&i&&(t.TgZ(0,"mat-card",0),t._UZ(1,"img",1),t.TgZ(2,"mat-card-content",2)(3,"article",3),t.YNc(4,p,2,1,"h1",4),t.YNc(5,f,2,1,"ng-template",null,5,t.W1O),t.TgZ(7,"h2"),t._uU(8),t.qZA(),t._UZ(9,"br"),t.TgZ(10,"h2")(11,"b"),t._uU(12,"\xdaltima vez visto: "),t.qZA(),t._uU(13),t.qZA(),t.TgZ(14,"div",6)(15,"p")(16,"b"),t._uU(17,"Salud: "),t.qZA(),t._uU(18),t.qZA(),t.TgZ(19,"p")(20,"b"),t._uU(21,"Edad: "),t.qZA(),t._uU(22),t.YNc(23,C,2,0,"a",4),t.YNc(24,m,1,0,"ng-template",null,7,t.W1O),t.qZA()()(),t.TgZ(26,"article",8)(27,"div",9)(28,"mat-icon",10),t._uU(29,"location_on"),t.qZA(),t.TgZ(30,"p"),t._uU(31),t.qZA()(),t.TgZ(32,"button",11),t._uU(33,"Ver detalles"),t.qZA(),t.TgZ(34,"button",12),t._uU(35,"Darle un Hogar"),t.qZA()()()()),2&i){const M=t.MAs(6),P=t.MAs(25);t.xp6(1),t.s9C("src",d.pet.photos[0].url_mobile,t.LSH),t.s9C("alt",d.pet.photos[0].alt),t.xp6(3),t.Q6J("ngIf",!d.lostDetail)("ngIfElse",M),t.xp6(4),t.Oqu(d.pet.description),t.xp6(5),t.Oqu(d.pet.address),t.xp6(5),t.hij("",d.pet.health," | "),t.xp6(4),t.Oqu(d.pet.age),t.xp6(1),t.Q6J("ngIf",1==d.pet.age)("ngIfElse",P),t.xp6(8),t.Oqu(d.pet.location),t.xp6(1),t.Q6J("routerLink",t.WLB(12,O,d.getUrl(),d.pet.id))}},dependencies:[g.O5,s.rH,c.Hw,l.a8,l.dn,l.G2],styles:[".card-container[_ngcontent-%COMP%]{width:100%;max-width:360px;background-color:var(--card-background-gray);border-radius:0;padding:14px;margin:14px}.card-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-height:300px;object-fit:cover}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:0;position:relative}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]{font-family:Inter;margin-bottom:26px;min-height:100px}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:18px;margin:12px 0}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:13px;font-weight:400;padding-right:4px}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:500;font-size:12px}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]   .info__left-details[_ngcontent-%COMP%]{position:absolute;bottom:0;display:flex;flex-direction:row}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#000;font-size:12px;font-family:Inter;font-weight:550;width:110px;height:30px;margin:8px 0 8px 8px;border:solid;border-width:1.5px;border-radius:4px;border-color:#000;cursor:pointer}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]   .adopt-button[_ngcontent-%COMP%]{margin-top:0;background-color:var(--card-button-background)}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]{display:flex;align-items:center;margin-right:4px}"]}),n})();function e(n,o){if(1&n&&t._UZ(0,"app-rescue-card",2),2&n){const i=o.$implicit,d=t.oxw();t.Q6J("lostDetail",d.lostDetail)("pet",i)}}let a=(()=>{class n{constructor(){this.pets=[],this.lostDetail=!1}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-rescue-cards"]],inputs:{pets:"pets",lostDetail:"lostDetail"},decls:2,vars:1,consts:[[1,"card-container"],["class","app-card",3,"lostDetail","pet",4,"ngFor","ngForOf"],[1,"app-card",3,"lostDetail","pet"]],template:function(i,d){1&i&&(t.TgZ(0,"section",0),t.YNc(1,e,1,2,"app-rescue-card",1),t.qZA()),2&i&&(t.xp6(1),t.Q6J("ngForOf",d.pets))},dependencies:[g.sg,h],styles:[".card-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center}.card-container[_ngcontent-%COMP%]   .app-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}"]}),n})()},7445:(u,_,r)=>{r.d(_,{F:()=>s});var t=r(4986),g=r(5963);function s(c=0,l=t.z){return c<0&&(c=0),(0,g.H)(c,c,l)}}}]);