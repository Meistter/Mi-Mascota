"use strict";(self.webpackChunkmi_mascota=self.webpackChunkmi_mascota||[]).push([[592],{691:(C,g,r)=>{r.d(g,{H:()=>d});var t=r(4650),l=r(529);let d=(()=>{class c{constructor(p){this.http=p}getCategoryName(p){return"0"==p?"Perro":"1"==p?"Gato":"2"==p?"Ave":"3"==p?"Tortuga":"4"==p?"Conejo":void 0}}return c.\u0275fac=function(p){return new(p||c)(t.LFG(l.eN))},c.\u0275prov=t.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},2102:(C,g,r)=>{r.d(g,{s:()=>i});var t=r(4650),l=r(6895),d=r(3060),c=r(7392),s=r(3546);function p(n,e){1&n&&(t.TgZ(0,"a"),t._uU(1," a\xf1o | "),t.qZA())}function _(n,e){1&n&&t._uU(0," a\xf1os | ")}const u=function(n){return["/pet",n]};let f=(()=>{class n{constructor(){this.pet={id:"string",name:"string",owner_id:"string",age:0,castrated:!0,disease:!0,health:"string",vaccinated:!0,location:"string",description:"string",adoptionReason:"string",remarks:"string",photos:[{url_mobile:"",url_full:"",alt:""}],likes:0,category:"0",size:""}}getCategory(){return"0"==this.pet.category?"Perro":"1"==this.pet.category?"Gato":"2"==this.pet.category?"Ave":"3"==this.pet.category?"Tortuga":"4"==this.pet.category?"Conejo":void 0}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-card"]],inputs:{pet:"pet"},decls:34,vars:13,consts:[[1,"card-container"],["mat-card-image","",3,"src","alt"],[1,"card-container__articles"],[1,"info__left"],[1,"info__left-details"],[4,"ngIf","ngIfElse"],["elseAge",""],[1,"info__right"],[1,"location"],[2,"font-size","12px"],[1,"detail-button",3,"routerLink"],[1,"adopt-button"]],template:function(o,a){if(1&o&&(t.TgZ(0,"mat-card",0),t._UZ(1,"img",1),t.TgZ(2,"mat-card-content",2)(3,"article",3)(4,"h1"),t._uU(5),t.qZA(),t.TgZ(6,"h2"),t._uU(7),t.qZA(),t.TgZ(8,"div",4)(9,"p")(10,"b"),t._uU(11,"Especie: "),t.qZA(),t._uU(12),t.qZA(),t.TgZ(13,"p")(14,"b"),t._uU(15,"Salud: "),t.qZA(),t._uU(16),t.qZA(),t.TgZ(17,"p")(18,"b"),t._uU(19,"Edad: "),t.qZA(),t._uU(20),t.YNc(21,p,2,0,"a",5),t.YNc(22,_,1,0,"ng-template",null,6,t.W1O),t.qZA()()(),t.TgZ(24,"article",7)(25,"div",8)(26,"mat-icon",9),t._uU(27,"location_on"),t.qZA(),t.TgZ(28,"p"),t._uU(29),t.qZA()(),t.TgZ(30,"button",10),t._uU(31,"Ver detalles"),t.qZA(),t.TgZ(32,"button",11),t._uU(33,"\xa1Darle un Hogar!"),t.qZA()()()()),2&o){const h=t.MAs(23);t.xp6(1),t.s9C("src",a.pet.photos[0].url_mobile,t.LSH),t.s9C("alt",a.pet.photos[0].alt),t.xp6(4),t.Oqu(a.pet.name),t.xp6(2),t.Oqu(a.pet.description),t.xp6(5),t.hij("",a.getCategory()," | "),t.xp6(4),t.hij("",a.pet.health," | "),t.xp6(4),t.Oqu(a.pet.age),t.xp6(1),t.Q6J("ngIf",1==a.pet.age)("ngIfElse",h),t.xp6(8),t.Oqu(a.pet.location),t.xp6(1),t.Q6J("routerLink",t.VKq(11,u,a.pet.id))}},dependencies:[l.O5,d.rH,c.Hw,s.a8,s.dn,s.G2],styles:[".card-container[_ngcontent-%COMP%]{width:100%;max-width:360px;background-color:var(--card-background-gray);border-radius:0;padding:14px;margin:14px}.card-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-height:300px;object-fit:cover}.card-container__articles[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:0;position:relative}.card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]{font-family:Inter;margin-bottom:16px}.card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:18px;margin:12px 0}.card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:13px;font-weight:400;padding-right:4px}.card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:500;font-size:12px}.card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]   .info__left-details[_ngcontent-%COMP%]{position:absolute;bottom:0;display:flex;flex-direction:row}.card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}.card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#000;font-size:12px;font-family:Inter;font-weight:550;width:110px;height:30px;margin:8px 0 8px 8px;border:solid;border-width:1.5px;border-radius:4px;border-color:#000;cursor:pointer}.card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]   .adopt-button[_ngcontent-%COMP%]{margin-top:0;background-color:var(--card-button-background)}.card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]{display:flex;align-items:center;margin-right:4px}"]}),n})();function m(n,e){1&n&&t._UZ(0,"app-card",2),2&n&&t.Q6J("pet",e.$implicit)}let i=(()=>{class n{constructor(){this.pets=[]}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-cards"]],inputs:{pets:"pets"},decls:2,vars:1,consts:[[1,"card-container"],["class","app-card",3,"pet",4,"ngFor","ngForOf"],[1,"app-card",3,"pet"]],template:function(o,a){1&o&&(t.TgZ(0,"section",0),t.YNc(1,m,1,1,"app-card",1),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngForOf",a.pets))},dependencies:[l.sg,f],styles:[".card-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center}.app-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}"]}),n})()},3124:(C,g,r)=>{r.d(g,{f:()=>m});var t=r(4650),l=r(6895),d=r(7392),c=r(3060),s=r(3546);function p(i,n){if(1&i&&(t.TgZ(0,"h1"),t._uU(1),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Oqu(e.pet.name)}}function _(i,n){1&i&&(t.TgZ(0,"h1"),t._uU(1,"Rescatar"),t.qZA())}let u=(()=>{class i{constructor(){this.pet={id:"string",name:"string",owner_id:"string",age:0,castrated:!0,disease:!0,health:"string",vaccinated:!0,location:"string",description:"string",adoptionReason:"string",remarks:"string",photos:[{url_mobile:"",url_full:"",alt:""}],likes:0,category:"0"}}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-related-card"]],inputs:{pet:"pet"},decls:15,vars:6,consts:[[1,"card-container",3,"routerLink"],["mat-card-image","",3,"src","alt"],[1,"card-container__articles"],[1,"info__left"],[4,"ngIf","ngIfElse"],["category",""],[1,"info__right"],[1,"location"],[2,"font-size","13px"],[1,"detail-button"]],template:function(e,o){if(1&e&&(t.TgZ(0,"mat-card",0),t._UZ(1,"img",1),t.TgZ(2,"mat-card-content",2)(3,"article",3),t.YNc(4,p,2,1,"h1",4),t.YNc(5,_,2,0,"ng-template",null,5,t.W1O),t.qZA(),t.TgZ(7,"article",6)(8,"div",7)(9,"mat-icon",8),t._uU(10,"location_on"),t.qZA(),t.TgZ(11,"p"),t._uU(12),t.qZA()(),t.TgZ(13,"button",9),t._uU(14,"Ver detalles"),t.qZA()()()()),2&e){const a=t.MAs(6);t.MGl("routerLink","/pet/",o.pet.id,""),t.xp6(1),t.s9C("src",o.pet.photos[0].url_mobile,t.LSH),t.s9C("alt",o.pet.photos[0].alt),t.xp6(3),t.Q6J("ngIf",o.pet.name)("ngIfElse",a),t.xp6(8),t.Oqu(o.pet.location)}},dependencies:[l.O5,c.rH,d.Hw,s.a8,s.dn,s.G2],styles:[".card-container[_ngcontent-%COMP%]{width:240px;height:220px;background-color:var(--card-background-gray);border-radius:0;padding:14px;margin:6px 10px 6px 2px}.card-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:212px;height:140px;object-fit:cover}.card-container__articles[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:0;position:relative}.card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]{font-family:Inter;text-align:center}.card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:18px;margin:12px 0}.card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}.card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;font-weight:500}.card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#000;font-size:12px;font-family:Inter;font-weight:550;width:86px;height:30px;margin:6px 0 12px 8px;border:solid;border-width:1.5px;border-radius:4px;border-color:#000;cursor:pointer}.card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]{display:flex;align-items:center;margin-right:4px}"]}),i})();function f(i,n){1&i&&t._UZ(0,"app-related-card",5),2&i&&t.Q6J("pet",n.$implicit)}let m=(()=>{class i{constructor(){this.related=[]}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-related"]],inputs:{related:"related"},decls:8,vars:1,consts:[[1,"related-container"],[1,"related__top-header"],[2,"font-size","32px"],[1,"related__pet-cards"],[3,"pet",4,"ngFor","ngForOf"],[3,"pet"]],template:function(e,o){1&e&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h1"),t._uU(3,"Mascotas Relacionadas"),t.qZA(),t.TgZ(4,"mat-icon",2),t._uU(5,"chevron_right"),t.qZA()(),t.TgZ(6,"div",3),t.YNc(7,f,1,1,"app-related-card",4),t.qZA()()),2&e&&(t.xp6(7),t.Q6J("ngForOf",o.related))},dependencies:[l.sg,d.Hw,u],styles:[".related-container[_ngcontent-%COMP%]{width:100%;min-height:210px;max-height:320px;margin:0;padding:10px 0 12px 10px;background-color:var(--background-gray)}.related-container[_ngcontent-%COMP%]   .related__top-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.related-container[_ngcontent-%COMP%]   .related__top-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:Inter;font-size:15px;font-weight:600}.related-container[_ngcontent-%COMP%]   .related__pet-cards[_ngcontent-%COMP%]{display:flex;align-items:center;overflow-x:scroll;overscroll-behavior-x:contain;scroll-snap-type:x mandatory}"]}),i})()},1143:(C,g,r)=>{r.d(g,{o:()=>i});var t=r(4650),l=r(6895),d=r(3060),c=r(7392),s=r(3546);function p(n,e){1&n&&(t.TgZ(0,"a"),t._uU(1," a\xf1o aproximadamente | "),t.qZA())}function _(n,e){1&n&&t._uU(0," a\xf1os aproximadamente | ")}const u=function(n,e){return[n,e]};let f=(()=>{class n{constructor(){this.url="/pet-rescue",this.pet={id:"string",age:0,health:"string",location:"string",description:"string",photos:[{url_mobile:"",url_full:"",alt:""}],category:"0",disease:!1,gps:"",remarks:"string",address:""}}getCategory(){return"0"==this.pet.category?"Perro":"1"==this.pet.category?"Gato":"2"==this.pet.category?"Ave":"3"==this.pet.category?"Tortuga":"4"==this.pet.category?"Conejo":void 0}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-rescue-card"]],inputs:{pet:"pet"},decls:35,vars:14,consts:[[1,"card-container"],["mat-card-image","",3,"src","alt"],[1,"card-container__articles"],[1,"info__left"],[1,"info__left-details"],[4,"ngIf","ngIfElse"],["elseAge",""],[1,"info__right"],[1,"location"],[2,"font-size","12px"],[1,"detail-button",3,"routerLink"],[1,"adopt-button"]],template:function(o,a){if(1&o&&(t.TgZ(0,"mat-card",0),t._UZ(1,"img",1),t.TgZ(2,"mat-card-content",2)(3,"article",3)(4,"h1"),t._uU(5),t.qZA(),t.TgZ(6,"h2"),t._uU(7),t.qZA(),t._UZ(8,"br"),t.TgZ(9,"h2")(10,"b"),t._uU(11,"\xdaltima vez visto: "),t.qZA(),t._uU(12),t.qZA(),t.TgZ(13,"div",4)(14,"p")(15,"b"),t._uU(16,"Salud: "),t.qZA(),t._uU(17),t.qZA(),t.TgZ(18,"p")(19,"b"),t._uU(20,"Edad: "),t.qZA(),t._uU(21),t.YNc(22,p,2,0,"a",5),t.YNc(23,_,1,0,"ng-template",null,6,t.W1O),t.qZA()()(),t.TgZ(25,"article",7)(26,"div",8)(27,"mat-icon",9),t._uU(28,"location_on"),t.qZA(),t.TgZ(29,"p"),t._uU(30),t.qZA()(),t.TgZ(31,"button",10),t._uU(32,"Ver detalles"),t.qZA(),t.TgZ(33,"button",11),t._uU(34,"\xa1Darle un Hogar!"),t.qZA()()()()),2&o){const h=t.MAs(24);t.xp6(1),t.s9C("src",a.pet.photos[0].url_mobile,t.LSH),t.s9C("alt",a.pet.photos[0].alt),t.xp6(4),t.hij("Especie: ",a.getCategory(),""),t.xp6(2),t.Oqu(a.pet.description),t.xp6(5),t.Oqu(a.pet.address),t.xp6(5),t.hij("",a.pet.health," | "),t.xp6(4),t.Oqu(a.pet.age),t.xp6(1),t.Q6J("ngIf",1==a.pet.age)("ngIfElse",h),t.xp6(8),t.Oqu(a.pet.location),t.xp6(1),t.Q6J("routerLink",t.WLB(11,u,a.url,a.pet.id))}},dependencies:[l.O5,d.rH,c.Hw,s.a8,s.dn,s.G2],styles:[".card-container[_ngcontent-%COMP%]{width:100%;max-width:360px;background-color:var(--card-background-gray);border-radius:0;padding:14px;margin:14px}.card-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-height:300px;object-fit:cover}.card-container__articles[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:0;position:relative}.card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]{font-family:Inter;margin-bottom:26px}.card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:18px;margin:12px 0}.card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:13px;font-weight:400;padding-right:4px}.card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:500;font-size:12px}.card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]   .info__left-details[_ngcontent-%COMP%]{position:absolute;bottom:0;display:flex;flex-direction:row}.card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}.card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#000;font-size:12px;font-family:Inter;font-weight:550;width:110px;height:30px;margin:8px 0 8px 8px;border:solid;border-width:1.5px;border-radius:4px;border-color:#000;cursor:pointer}.card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]   .adopt-button[_ngcontent-%COMP%]{margin-top:0;background-color:var(--card-button-background)}.card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]{display:flex;align-items:center;margin-right:4px}"]}),n})();function m(n,e){1&n&&t._UZ(0,"app-rescue-card",2),2&n&&t.Q6J("pet",e.$implicit)}let i=(()=>{class n{constructor(){this.pets=[]}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-rescue-cards"]],inputs:{pets:"pets"},decls:2,vars:1,consts:[[1,"card-container"],["class","app-card",3,"pet",4,"ngFor","ngForOf"],[1,"app-card",3,"pet"]],template:function(o,a){1&o&&(t.TgZ(0,"section",0),t.YNc(1,m,1,1,"app-rescue-card",1),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngForOf",a.pets))},dependencies:[l.sg,f],styles:[".card-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center}.app-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}"]}),n})()},7445:(C,g,r)=>{r.d(g,{F:()=>d});var t=r(4986),l=r(5963);function d(c=0,s=t.z){return c<0&&(c=0),(0,l.H)(c,c,s)}}}]);