"use strict";(self.webpackChunkmi_mascota=self.webpackChunkmi_mascota||[]).push([[592],{2102:(C,d,o)=>{o.d(d,{s:()=>p});var t=o(4650),l=o(6895),g=o(3060),c=o(7392),s=o(3546);function _(n,e){1&n&&(t.TgZ(0,"a"),t._uU(1," a\xf1o | "),t.qZA())}function u(n,e){1&n&&t._uU(0," a\xf1os | ")}const f=function(n){return["/pet",n]};let m=(()=>{class n{constructor(){this.pet={id:"string",name:"string",owner_id:"string",age:0,castrated:!0,disease:!0,health:"string",vaccinated:!0,location:"string",description:"string",adoptionReason:"string",remarks:"string",photos:[{url_mobile:"",url_full:"",alt:""}],likes:0,category:0}}getCategory(){return 0==this.pet.category?"Perro":1==this.pet.category?"Gato":2==this.pet.category?"Ave":3==this.pet.category?"Tortuga":4==this.pet.category?"Conejo":void 0}}return n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-card"]],inputs:{pet:"pet"},decls:34,vars:13,consts:[[1,"card-container"],["mat-card-image","",3,"src","alt"],[1,"card-container__articles"],[1,"info__left"],[1,"info__left-details"],[4,"ngIf","ngIfElse"],["elseAge",""],[1,"info__right"],[1,"location"],[2,"font-size","12px"],[1,"detail-button",3,"routerLink"],[1,"adopt-button"]],template:function(a,r){if(1&a&&(t.TgZ(0,"mat-card",0),t._UZ(1,"img",1),t.TgZ(2,"mat-card-content",2)(3,"article",3)(4,"h1"),t._uU(5),t.qZA(),t.TgZ(6,"h2"),t._uU(7),t.qZA(),t.TgZ(8,"div",4)(9,"p")(10,"b"),t._uU(11,"Especie: "),t.qZA(),t._uU(12),t.qZA(),t.TgZ(13,"p")(14,"b"),t._uU(15,"Salud: "),t.qZA(),t._uU(16),t.qZA(),t.TgZ(17,"p")(18,"b"),t._uU(19,"Edad: "),t.qZA(),t._uU(20),t.YNc(21,_,2,0,"a",5),t.YNc(22,u,1,0,"ng-template",null,6,t.W1O),t.qZA()()(),t.TgZ(24,"article",7)(25,"div",8)(26,"mat-icon",9),t._uU(27,"location_on"),t.qZA(),t.TgZ(28,"p"),t._uU(29),t.qZA()(),t.TgZ(30,"button",10),t._uU(31,"Ver detalles"),t.qZA(),t.TgZ(32,"button",11),t._uU(33,"\xa1Darle un Hogar!"),t.qZA()()()()),2&a){const h=t.MAs(23);t.xp6(1),t.s9C("src",r.pet.photos[0].url_mobile,t.LSH),t.s9C("alt",r.pet.photos[0].alt),t.xp6(4),t.Oqu(r.pet.name),t.xp6(2),t.Oqu(r.pet.description),t.xp6(5),t.hij("",r.getCategory()," | "),t.xp6(4),t.hij("",r.pet.health," | "),t.xp6(4),t.Oqu(r.pet.age),t.xp6(1),t.Q6J("ngIf",1==r.pet.age)("ngIfElse",h),t.xp6(8),t.Oqu(r.pet.location),t.xp6(1),t.Q6J("routerLink",t.VKq(11,f,r.pet.id))}},dependencies:[l.O5,g.rH,c.Hw,s.a8,s.dn,s.G2],styles:[".card-container[_ngcontent-%COMP%]{width:100%;max-width:360px;background-color:var(--card-background-gray);border-radius:0;padding:14px;margin:14px}.card-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-height:300px;object-fit:cover}.card-container__articles[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:0;position:relative}.card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]{font-family:Inter;margin-bottom:10px}.card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:18px;margin:12px 0}.card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:13px;font-weight:400;padding-right:4px}.card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:500;font-size:12px}.card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]   .info__left-details[_ngcontent-%COMP%]{position:absolute;bottom:0;display:flex;flex-direction:row}.card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}.card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#000;font-size:12px;font-family:Inter;font-weight:550;width:110px;height:30px;margin:8px 0 8px 8px;border:solid;border-width:1.5px;border-radius:4px;border-color:#000;cursor:pointer}.card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]   .adopt-button[_ngcontent-%COMP%]{margin-top:0;background-color:var(--card-button-background)}.card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]{display:flex;align-items:center;margin-right:4px}"]}),n})();function i(n,e){1&n&&t._UZ(0,"app-card",2),2&n&&t.Q6J("pet",e.$implicit)}let p=(()=>{class n{constructor(){this.pets=[]}}return n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-cards"]],inputs:{pets:"pets"},decls:2,vars:1,consts:[[1,"card-container"],["class","app-card",3,"pet",4,"ngFor","ngForOf"],[1,"app-card",3,"pet"]],template:function(a,r){1&a&&(t.TgZ(0,"section",0),t.YNc(1,i,1,1,"app-card",1),t.qZA()),2&a&&(t.xp6(1),t.Q6J("ngForOf",r.pets))},dependencies:[l.sg,m],styles:[".card-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center}.app-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}"]}),n})()},3124:(C,d,o)=>{o.d(d,{f:()=>m});var t=o(4650),l=o(8173),g=o(6895),c=o(7392),s=o(3060),_=o(3546);let u=(()=>{class i{constructor(){this.pet={id:"string",name:"string",owner_id:"string",age:0,castrated:!0,disease:!0,health:"string",vaccinated:!0,location:"string",description:"string",adoptionReason:"string",remarks:"string",photos:[{url_mobile:"",url_full:"",alt:""}],likes:0,category:0}}}return i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-related-card"]],inputs:{pet:"pet"},decls:14,vars:5,consts:[[1,"card-container",3,"routerLink"],["mat-card-image","",3,"src","alt"],[1,"card-container__articles"],[1,"info__left"],[1,"info__right"],[1,"location"],[2,"font-size","12px"],[1,"detail-button"]],template:function(n,e){1&n&&(t.TgZ(0,"mat-card",0),t._UZ(1,"img",1),t.TgZ(2,"mat-card-content",2)(3,"article",3)(4,"h1"),t._uU(5),t.qZA()(),t.TgZ(6,"article",4)(7,"div",5)(8,"mat-icon",6),t._uU(9,"location_on"),t.qZA(),t.TgZ(10,"p"),t._uU(11),t.qZA()(),t.TgZ(12,"button",7),t._uU(13,"Ver detalles"),t.qZA()()()()),2&n&&(t.MGl("routerLink","/pet/",e.pet.id,""),t.xp6(1),t.s9C("src",e.pet.photos[0].url_mobile,t.LSH),t.s9C("alt",e.pet.photos[0].alt),t.xp6(4),t.Oqu(e.pet.name),t.xp6(6),t.Oqu(e.pet.location))},dependencies:[s.rH,c.Hw,_.a8,_.dn,_.G2],styles:[".card-container[_ngcontent-%COMP%]{width:240px;height:220px;background-color:var(--card-background-gray);border-radius:0;padding:14px;margin:6px 10px 6px 2px}.card-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:212px;height:140px;object-fit:cover}.card-container__articles[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:0;position:relative}.card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]{font-family:Inter}.card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:18px;margin:12px 0}.card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}.card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#000;font-size:12px;font-family:Inter;font-weight:550;width:86px;height:30px;margin:4px 0 12px 8px;border:solid;border-width:1.5px;border-radius:4px;border-color:#000;cursor:pointer}.card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]{display:flex;align-items:center;margin-right:4px}"]}),i})();function f(i,p){1&i&&t._UZ(0,"app-related-card",5),2&i&&t.Q6J("pet",p.$implicit)}let m=(()=>{class i{constructor(n){this.petService=n,this.relatedPets=[],this.related=[]}ngOnInit(){this.relatedPets=this.petService.getRelatedPet(),this.related=[...this.relatedPets].reverse()}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(l.O))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-related"]],decls:8,vars:1,consts:[[1,"related-container"],[1,"related__top-header"],[2,"font-size","32px"],[1,"related__pet-cards"],[3,"pet",4,"ngFor","ngForOf"],[3,"pet"]],template:function(n,e){1&n&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h1"),t._uU(3,"Mascotas Relacionadas"),t.qZA(),t.TgZ(4,"mat-icon",2),t._uU(5,"chevron_right"),t.qZA()(),t.TgZ(6,"div",3),t.YNc(7,f,1,1,"app-related-card",4),t.qZA()()),2&n&&(t.xp6(7),t.Q6J("ngForOf",e.related))},dependencies:[g.sg,c.Hw,u],styles:[".related-container[_ngcontent-%COMP%]{width:100%;min-height:210px;max-height:320px;margin:0;padding:10px 0 12px 10px;background-color:var(--background-gray)}.related-container[_ngcontent-%COMP%]   .related__top-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.related-container[_ngcontent-%COMP%]   .related__top-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:Inter;font-size:15px;font-weight:600}.related-container[_ngcontent-%COMP%]   .related__pet-cards[_ngcontent-%COMP%]{display:flex;align-items:center;overflow-x:scroll;overscroll-behavior-x:contain;scroll-snap-type:x mandatory}"]}),i})()},1143:(C,d,o)=>{o.d(d,{o:()=>p});var t=o(4650),l=o(6895),g=o(3060),c=o(7392),s=o(3546);function _(n,e){1&n&&(t.TgZ(0,"a"),t._uU(1," a\xf1o aproximadamente | "),t.qZA())}function u(n,e){1&n&&t._uU(0," a\xf1os aproximadamente | ")}const f=function(n){return["/pet",n]};let m=(()=>{class n{constructor(){this.pet={id:"string",age:0,health:"string",location:"string",description:"string",photos:[{url_mobile:"",url_full:"",alt:""}],category:0,address:""}}getCategory(){return 0==this.pet.category?"Perro":1==this.pet.category?"Gato":2==this.pet.category?"Ave":3==this.pet.category?"Tortuga":4==this.pet.category?"Conejo":void 0}}return n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-rescue-card"]],inputs:{pet:"pet"},decls:35,vars:13,consts:[[1,"card-container"],["mat-card-image","",3,"src","alt"],[1,"card-container__articles"],[1,"info__left"],[1,"info__left-details"],[4,"ngIf","ngIfElse"],["elseAge",""],[1,"info__right"],[1,"location"],[2,"font-size","12px"],[1,"detail-button",3,"routerLink"],[1,"adopt-button"]],template:function(a,r){if(1&a&&(t.TgZ(0,"mat-card",0),t._UZ(1,"img",1),t.TgZ(2,"mat-card-content",2)(3,"article",3)(4,"h1"),t._uU(5),t.qZA(),t.TgZ(6,"h2"),t._uU(7),t.qZA(),t._UZ(8,"br"),t.TgZ(9,"h2")(10,"b"),t._uU(11,"Ubicaci\xf3n: "),t.qZA(),t._uU(12),t.qZA(),t.TgZ(13,"div",4)(14,"p")(15,"b"),t._uU(16,"Salud: "),t.qZA(),t._uU(17),t.qZA(),t.TgZ(18,"p")(19,"b"),t._uU(20,"Edad: "),t.qZA(),t._uU(21),t.YNc(22,_,2,0,"a",5),t.YNc(23,u,1,0,"ng-template",null,6,t.W1O),t.qZA()()(),t.TgZ(25,"article",7)(26,"div",8)(27,"mat-icon",9),t._uU(28,"location_on"),t.qZA(),t.TgZ(29,"p"),t._uU(30),t.qZA()(),t.TgZ(31,"button",10),t._uU(32,"Ver detalles"),t.qZA(),t.TgZ(33,"button",11),t._uU(34,"\xa1Darle un Hogar!"),t.qZA()()()()),2&a){const h=t.MAs(24);t.xp6(1),t.s9C("src",r.pet.photos[0].url_mobile,t.LSH),t.s9C("alt",r.pet.photos[0].alt),t.xp6(4),t.hij("Espcie: ",r.getCategory(),""),t.xp6(2),t.Oqu(r.pet.description),t.xp6(5),t.Oqu(r.pet.address),t.xp6(5),t.hij("",r.pet.health," | "),t.xp6(4),t.Oqu(r.pet.age),t.xp6(1),t.Q6J("ngIf",1==r.pet.age)("ngIfElse",h),t.xp6(8),t.Oqu(r.pet.location),t.xp6(1),t.Q6J("routerLink",t.VKq(11,f,r.pet.id))}},dependencies:[l.O5,g.rH,c.Hw,s.a8,s.dn,s.G2],styles:[".card-container[_ngcontent-%COMP%]{width:100%;max-width:360px;background-color:var(--card-background-gray);border-radius:0;padding:14px;margin:14px}.card-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-height:300px;object-fit:cover}.card-container__articles[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:0;position:relative}.card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]{font-family:Inter;margin-bottom:26px}.card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:18px;margin:12px 0}.card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:13px;font-weight:400;padding-right:4px}.card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:500;font-size:12px}.card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]   .info__left-details[_ngcontent-%COMP%]{position:absolute;bottom:0;display:flex;flex-direction:row}.card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}.card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#000;font-size:12px;font-family:Inter;font-weight:550;width:110px;height:30px;margin:8px 0 8px 8px;border:solid;border-width:1.5px;border-radius:4px;border-color:#000;cursor:pointer}.card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]   .adopt-button[_ngcontent-%COMP%]{margin-top:0;background-color:var(--card-button-background)}.card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]{display:flex;align-items:center;margin-right:4px}"]}),n})();function i(n,e){1&n&&t._UZ(0,"app-rescue-card",2),2&n&&t.Q6J("pet",e.$implicit)}let p=(()=>{class n{constructor(){this.pets=[]}}return n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-rescue-cards"]],inputs:{pets:"pets"},decls:2,vars:1,consts:[[1,"card-container"],["class","app-card",3,"pet",4,"ngFor","ngForOf"],[1,"app-card",3,"pet"]],template:function(a,r){1&a&&(t.TgZ(0,"section",0),t.YNc(1,i,1,1,"app-rescue-card",1),t.qZA()),2&a&&(t.xp6(1),t.Q6J("ngForOf",r.pets))},dependencies:[l.sg,m],styles:[".card-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center}.app-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}"]}),n})()},7445:(C,d,o)=>{o.d(d,{F:()=>g});var t=o(4986),l=o(5963);function g(c=0,s=t.z){return c<0&&(c=0),(0,l.H)(c,c,s)}}}]);