"use strict";(self.webpackChunkmi_mascota=self.webpackChunkmi_mascota||[]).push([[592],{691:(O,_,r)=>{r.d(_,{H:()=>g});var t=r(4650),d=r(529);let g=(()=>{class i{constructor(l){this.http=l}getCategoryName(l){return"0"==l?"Perro":"1"==l?"Gato":"2"==l?"Ave":"3"==l?"Tortuga":"4"==l?"Conejo":void 0}}return i.\u0275fac=function(l){return new(l||i)(t.LFG(d.eN))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},2102:(O,_,r)=>{r.d(_,{s:()=>h});var t=r(4650),d=r(6895),g=r(3060),i=r(7392),s=r(3546);function l(e,a){1&e&&(t.TgZ(0,"a"),t._uU(1," a\xf1o | "),t.qZA())}function u(e,a){1&e&&t._uU(0," a\xf1os | ")}const f=function(e){return["/pet",e]};let C=(()=>{class e{constructor(){this.pet={id:"string",name:"string",owner_id:"string",age:0,castrated:!0,disease:!0,health:"string",vaccinated:!0,location:"string",description:"string",adoptionReason:"string",remarks:"string",photos:[{url_mobile:"",url_full:"",alt:""}],likes:0,category:"0",size:""}}getCategory(){return"0"==this.pet.category?"Perro":"1"==this.pet.category?"Gato":"2"==this.pet.category?"Ave":"3"==this.pet.category?"Tortuga":"4"==this.pet.category?"Conejo":void 0}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-card"]],inputs:{pet:"pet"},decls:35,vars:13,consts:[[1,"card-container"],["mat-card-image","",3,"src","alt"],[1,"card-container__articles"],[1,"info__left"],[1,"info__left-details"],[4,"ngIf","ngIfElse"],["elseAge",""],[1,"info__right"],[1,"location"],[2,"font-size","14px"],[1,"detail-button",3,"routerLink"],["routerLink","/auth/login",1,"adopt-button"]],template:function(n,o){if(1&n&&(t.TgZ(0,"mat-card",0),t._UZ(1,"img",1),t.TgZ(2,"mat-card-content",2)(3,"article",3)(4,"h1"),t._uU(5),t.qZA(),t.TgZ(6,"h2"),t._uU(7),t.qZA(),t._UZ(8,"br"),t.TgZ(9,"div",4)(10,"p")(11,"b"),t._uU(12,"Especie: "),t.qZA(),t._uU(13),t.qZA(),t.TgZ(14,"p")(15,"b"),t._uU(16,"Salud: "),t.qZA(),t._uU(17),t.qZA(),t.TgZ(18,"p")(19,"b"),t._uU(20,"Edad: "),t.qZA(),t._uU(21),t.YNc(22,l,2,0,"a",5),t.YNc(23,u,1,0,"ng-template",null,6,t.W1O),t.qZA()()(),t.TgZ(25,"article",7)(26,"div",8)(27,"mat-icon",9),t._uU(28,"location_on"),t.qZA(),t.TgZ(29,"p"),t._uU(30),t.qZA()(),t.TgZ(31,"button",10),t._uU(32,"Ver detalles"),t.qZA(),t.TgZ(33,"button",11),t._uU(34,"\xa1Darle un Hogar!"),t.qZA()()()()),2&n){const c=t.MAs(24);t.xp6(1),t.s9C("src",o.pet.photos[0].url_mobile,t.LSH),t.s9C("alt",o.pet.photos[0].alt),t.xp6(4),t.Oqu(o.pet.name),t.xp6(2),t.Oqu(o.pet.description),t.xp6(6),t.hij("",o.getCategory()," | "),t.xp6(4),t.hij("",o.pet.health," | "),t.xp6(4),t.Oqu(o.pet.age),t.xp6(1),t.Q6J("ngIf",1==o.pet.age)("ngIfElse",c),t.xp6(8),t.Oqu(o.pet.location),t.xp6(1),t.Q6J("routerLink",t.VKq(11,f,o.pet.id))}},dependencies:[d.O5,g.rH,i.Hw,s.a8,s.dn,s.G2],styles:[".card-container[_ngcontent-%COMP%]{width:100%;max-width:360px;min-height:420px;background-color:var(--card-background-gray);border-radius:0;padding:14px;margin:14px}.card-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:260px;object-fit:cover;box-shadow:0 0 1.5px #000}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:0;position:relative}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]{font-family:Inter;margin-bottom:16px;min-height:100px;height:100%}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:18px;margin:12px 0}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:13px;font-weight:400;padding-right:4px;min-height:60px}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:500;font-size:12px}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]   .info__left-details[_ngcontent-%COMP%]{position:absolute;bottom:0;display:flex;flex-direction:row}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#000;font-size:12px;font-family:Inter;font-weight:550;width:110px;height:30px;margin:8px 0 8px 8px;border:solid;border-width:1.5px;border-radius:4px;border-color:#000;cursor:pointer}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]   .adopt-button[_ngcontent-%COMP%]{margin-top:0;background-color:var(--card-button-background)}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]{display:flex;align-items:center;margin-right:4px}"]}),e})();function m(e,a){1&e&&t._UZ(0,"app-card",2),2&e&&t.Q6J("pet",a.$implicit)}let h=(()=>{class e{constructor(){this.pets=[]}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-cards"]],inputs:{pets:"pets"},decls:2,vars:1,consts:[[1,"card-container"],["class","app-card",3,"pet",4,"ngFor","ngForOf"],[1,"app-card",3,"pet"]],template:function(n,o){1&n&&(t.TgZ(0,"section",0),t.YNc(1,m,1,1,"app-card",1),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngForOf",o.pets))},dependencies:[d.sg,C],styles:[".card-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center}.card-container[_ngcontent-%COMP%]   .app-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}"]}),e})()},3124:(O,_,r)=>{r.d(_,{f:()=>h});var t=r(4650),d=r(6895),g=r(7392),i=r(3060),s=r(3546);function l(e,a){if(1&e&&(t.TgZ(0,"h1"),t._uU(1),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Oqu(n.pet.name)}}function u(e,a){1&e&&(t.TgZ(0,"h1"),t._uU(1,"Rescatar"),t.qZA())}const f=function(e,a){return[e,a]};let C=(()=>{class e{constructor(){this.pet={id:"string",name:"string",owner_id:"string",age:0,castrated:!0,disease:!0,health:"string",vaccinated:!0,location:"string",description:"string",adoptionReason:"string",remarks:"string",photos:[{url_mobile:"",url_full:"",alt:""}],likes:0,category:"0"},this.urlRedirect="false"}getUrl(){return"pet"==this.urlRedirect?"/pet":"rescue"==this.urlRedirect?"/pet-rescue":"lost"==this.urlRedirect?"/pet-lost":"not-found"}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-related-card"]],inputs:{pet:"pet",urlRedirect:"urlRedirect"},decls:15,vars:9,consts:[[1,"card-container",3,"routerLink"],["mat-card-image","",3,"src","alt"],[1,"card-container__articles"],[1,"info__left"],[4,"ngIf","ngIfElse"],["category",""],[1,"info__right"],[1,"location"],[2,"font-size","13px"],[1,"detail-button"]],template:function(n,o){if(1&n&&(t.TgZ(0,"mat-card",0),t._UZ(1,"img",1),t.TgZ(2,"mat-card-content",2)(3,"article",3),t.YNc(4,l,2,1,"h1",4),t.YNc(5,u,2,0,"ng-template",null,5,t.W1O),t.qZA(),t.TgZ(7,"article",6)(8,"div",7)(9,"mat-icon",8),t._uU(10,"location_on"),t.qZA(),t.TgZ(11,"p"),t._uU(12),t.qZA()(),t.TgZ(13,"button",9),t._uU(14,"Ver detalles"),t.qZA()()()()),2&n){const c=t.MAs(6);t.Q6J("routerLink",t.WLB(6,f,o.getUrl(),o.pet.id)),t.xp6(1),t.s9C("src",o.pet.photos[0].url_mobile,t.LSH),t.s9C("alt",o.pet.photos[0].alt),t.xp6(3),t.Q6J("ngIf",o.pet.name)("ngIfElse",c),t.xp6(8),t.Oqu(o.pet.location)}},dependencies:[d.O5,i.rH,g.Hw,s.a8,s.dn,s.G2],styles:[".card-container[_ngcontent-%COMP%]{width:240px;height:220px;background-color:var(--card-background-gray);border-radius:0;padding:14px;margin:6px 10px 6px 2px}.card-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:212px;height:140px;object-fit:cover}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:0;position:relative}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]{font-family:Inter;text-align:center}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:18px;margin:12px 0}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;font-weight:500}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#000;font-size:12px;font-family:Inter;font-weight:550;width:86px;height:30px;margin:6px 0 12px 8px;border:solid;border-width:1.5px;border-radius:4px;border-color:#000;cursor:pointer}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]{display:flex;align-items:center;margin-right:4px}"]}),e})();function m(e,a){if(1&e&&t._UZ(0,"app-related-card",5),2&e){const n=a.$implicit,o=t.oxw();t.Q6J("urlRedirect",o.urlRedirect)("pet",n)}}let h=(()=>{class e{constructor(){this.related=[],this.urlRedirect="false"}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-related"]],inputs:{related:"related",urlRedirect:"urlRedirect"},decls:8,vars:1,consts:[[1,"related-container"],[1,"related__top-header"],[2,"font-size","32px"],[1,"related__pet-cards"],[3,"urlRedirect","pet",4,"ngFor","ngForOf"],[3,"urlRedirect","pet"]],template:function(n,o){1&n&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h1"),t._uU(3,"Mascotas Relacionadas"),t.qZA(),t.TgZ(4,"mat-icon",2),t._uU(5,"chevron_right"),t.qZA()(),t.TgZ(6,"div",3),t.YNc(7,m,1,2,"app-related-card",4),t.qZA()()),2&n&&(t.xp6(7),t.Q6J("ngForOf",o.related))},dependencies:[d.sg,g.Hw,C],styles:[".related-container[_ngcontent-%COMP%]{width:100%;min-height:210px;max-height:320px;margin:0;padding:10px 0 12px 10px;background-color:var(--background-gray)}.related-container[_ngcontent-%COMP%]   .related__top-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.related-container[_ngcontent-%COMP%]   .related__top-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:Inter;font-size:15px;font-weight:600}.related-container[_ngcontent-%COMP%]   .related__pet-cards[_ngcontent-%COMP%]{display:flex;align-items:center;overflow-x:scroll;overscroll-behavior-x:contain;scroll-snap-type:x mandatory}"]}),e})()},1143:(O,_,r)=>{r.d(_,{o:()=>a});var t=r(4650),d=r(6895),g=r(3060),i=r(7392),s=r(3546);function l(n,o){if(1&n&&(t.TgZ(0,"h1"),t._uU(1),t.qZA()),2&n){const c=t.oxw();t.xp6(1),t.hij("Especie: ",c.getCategory(),"")}}function u(n,o){if(1&n&&(t.TgZ(0,"h1"),t._uU(1),t.qZA()),2&n){const c=t.oxw();t.xp6(1),t.Oqu(c.pet.name)}}function f(n,o){1&n&&(t.TgZ(0,"a"),t._uU(1," a\xf1o aproximadamente | "),t.qZA())}function C(n,o){1&n&&t._uU(0," a\xf1os aproximadamente | ")}const m=function(n,o){return[n,o]};let h=(()=>{class n{constructor(){this.lostDetail=!1,this.pet={id:"string",age:0,health:"string",location:"string",description:"string",photos:[{url_mobile:"",url_full:"",alt:""}],category:"0",disease:!1,gps:"",remarks:"string",address:""}}getUrl(){return this.lostDetail?"/pet-lost":"/pet-rescue"}getCategory(){return"0"==this.pet.category?"Perro":"1"==this.pet.category?"Gato":"2"==this.pet.category?"Ave":"3"==this.pet.category?"Tortuga":"4"==this.pet.category?"Conejo":void 0}}return n.\u0275fac=function(c){return new(c||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-rescue-card"]],inputs:{lostDetail:"lostDetail",pet:"pet"},decls:37,vars:15,consts:[[1,"card-container"],["mat-card-image","",3,"src","alt"],[1,"card-container__articles"],[1,"info__left"],[4,"ngIf","ngIfElse"],["lost",""],[1,"info__left-details"],["elseAge",""],[1,"info__right"],[1,"location"],[2,"font-size","14px"],[1,"detail-button",3,"routerLink"],["routerLink","/auth/login",1,"adopt-button"]],template:function(c,p){if(1&c&&(t.TgZ(0,"mat-card",0),t._UZ(1,"img",1),t.TgZ(2,"mat-card-content",2)(3,"article",3),t.YNc(4,l,2,1,"h1",4),t.YNc(5,u,2,1,"ng-template",null,5,t.W1O),t.TgZ(7,"h2"),t._uU(8),t.qZA(),t._UZ(9,"br"),t.TgZ(10,"h2")(11,"b"),t._uU(12,"\xdaltima vez visto: "),t.qZA(),t._uU(13),t.qZA(),t._UZ(14,"br"),t.TgZ(15,"div",6)(16,"p")(17,"b"),t._uU(18,"Salud: "),t.qZA(),t._uU(19),t.qZA(),t.TgZ(20,"p")(21,"b"),t._uU(22,"Edad: "),t.qZA(),t._uU(23),t.YNc(24,f,2,0,"a",4),t.YNc(25,C,1,0,"ng-template",null,7,t.W1O),t.qZA()()(),t.TgZ(27,"article",8)(28,"div",9)(29,"mat-icon",10),t._uU(30,"location_on"),t.qZA(),t.TgZ(31,"p"),t._uU(32),t.qZA()(),t.TgZ(33,"button",11),t._uU(34,"Ver detalles"),t.qZA(),t.TgZ(35,"button",12),t._uU(36,"Darle un Hogar"),t.qZA()()()()),2&c){const x=t.MAs(6),M=t.MAs(26);t.xp6(1),t.s9C("src",p.pet.photos[0].url_mobile,t.LSH),t.s9C("alt",p.pet.photos[0].alt),t.xp6(3),t.Q6J("ngIf",!p.lostDetail)("ngIfElse",x),t.xp6(4),t.Oqu(p.pet.description),t.xp6(5),t.Oqu(p.pet.address),t.xp6(6),t.hij("",p.pet.health," | "),t.xp6(4),t.Oqu(p.pet.age),t.xp6(1),t.Q6J("ngIf",1==p.pet.age)("ngIfElse",M),t.xp6(8),t.Oqu(p.pet.location),t.xp6(1),t.Q6J("routerLink",t.WLB(12,m,p.getUrl(),p.pet.id))}},dependencies:[d.O5,g.rH,i.Hw,s.a8,s.dn,s.G2],styles:[".card-container[_ngcontent-%COMP%]{width:100%;max-width:360px;min-height:420px;background-color:var(--card-background-gray);border-radius:0;padding:14px;margin:14px}.card-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:260px;object-fit:cover;box-shadow:0 0 1.5px #000}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:0;position:relative}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]{font-family:Inter;margin-bottom:16px;min-height:100px;height:100%}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:18px;margin:12px 0}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:13px;font-weight:400;padding-right:4px;min-height:40px}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:500;font-size:12px}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]   .info__left-details[_ngcontent-%COMP%]{position:absolute;bottom:0;display:flex;flex-direction:row}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#000;font-size:12px;font-family:Inter;font-weight:550;width:110px;height:30px;margin:8px 0 8px 8px;border:solid;border-width:1.5px;border-radius:4px;border-color:#000;cursor:pointer}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]   .adopt-button[_ngcontent-%COMP%]{margin-top:0;background-color:var(--card-button-background)}.card-container[_ngcontent-%COMP%]   .card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]{display:flex;align-items:center;margin-right:4px}"]}),n})();function e(n,o){if(1&n&&t._UZ(0,"app-rescue-card",2),2&n){const c=o.$implicit,p=t.oxw();t.Q6J("lostDetail",p.lostDetail)("pet",c)}}let a=(()=>{class n{constructor(){this.pets=[],this.lostDetail=!1}}return n.\u0275fac=function(c){return new(c||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-rescue-cards"]],inputs:{pets:"pets",lostDetail:"lostDetail"},decls:2,vars:1,consts:[[1,"card-container"],["class","app-card",3,"lostDetail","pet",4,"ngFor","ngForOf"],[1,"app-card",3,"lostDetail","pet"]],template:function(c,p){1&c&&(t.TgZ(0,"section",0),t.YNc(1,e,1,2,"app-rescue-card",1),t.qZA()),2&c&&(t.xp6(1),t.Q6J("ngForOf",p.pets))},dependencies:[d.sg,h],styles:[".card-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center}.card-container[_ngcontent-%COMP%]   .app-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}"]}),n})()},7445:(O,_,r)=>{r.d(_,{F:()=>g});var t=r(4986),d=r(5963);function g(i=0,s=t.z){return i<0&&(i=0),(0,d.H)(i,i,s)}}}]);