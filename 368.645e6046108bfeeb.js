"use strict";(self.webpackChunkmi_mascota=self.webpackChunkmi_mascota||[]).push([[368],{8368:(z,g,a)=>{a.r(g),a.d(g,{PetModule:()=>w});var p=a(6895),r=a(3060),l=a(8879),_=a(7445),n=a(4650),m=a(8173),c=a(9485),Z=a(3124),d=a(7392),s=a(3546);function P(t,i){if(1&t&&n._UZ(0,"img",24),2&t){const o=n.oxw().$implicit;n.s9C("alt",o.alt),n.Q6J("src",o.url_mobile,n.LSH)}}function C(t,i){1&t&&n.YNc(0,P,1,2,"ng-template",23)}function h(t,i){1&t&&(n.TgZ(0,"a"),n._uU(1," a\xf1o"),n.qZA())}function A(t,i){1&t&&n._uU(0," a\xf1os")}function M(t,i){1&t&&(n.TgZ(0,"p")(1,"b"),n._uU(2," Vacunado: "),n.qZA(),n._uU(3,"Si "),n.qZA())}function O(t,i){1&t&&(n.TgZ(0,"p")(1,"b"),n._uU(2," Vacunado: "),n.qZA(),n._uU(3,"No"),n.qZA())}function U(t,i){1&t&&(n.TgZ(0,"p")(1,"b"),n._uU(2," Castrado: "),n.qZA(),n._uU(3,"Si "),n.qZA())}function T(t,i){1&t&&(n.TgZ(0,"p")(1,"b"),n._uU(2," Castrado: "),n.qZA(),n._uU(3,"No"),n.qZA())}function b(t,i){1&t&&(n.TgZ(0,"p")(1,"b"),n._uU(2," Enfermo: "),n.qZA(),n._uU(3,"Si "),n.qZA())}function v(t,i){1&t&&(n.TgZ(0,"p")(1,"b"),n._uU(2," Enfermo: "),n.qZA(),n._uU(3,"No"),n.qZA())}l.ZP.use([l.W_,l.tl,l.LW,l.s5]);const x=[{path:"",component:(()=>{class t{constructor(o,e){this.route=o,this.petService=e,this.petId=null,this.pet={id:"string",name:"string",owner_id:"string",age:0,castrated:!0,disease:!0,health:"string",vaccinated:!0,location:"string",description:"string",adoptionReason:"string",remarks:"string",photos:[{url_mobile:"",url_full:"",alt:""}],likes:0,category:0},this.config={loop:!0,slidesPerView:1,spaceBetween:0,navigation:!0,pagination:{clickable:!0},scrollbar:{draggable:!0}}}ngOnInit(){this.route.paramMap.subscribe(o=>{this.petId=o.get("id"),this.petId&&(this.pet=this.petService.getAdoptionPet(this.petId))})}automatico(o){(0,_.F)(1e4).subscribe(()=>{o.slideNext(850)})}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(r.gz),n.Y36(m.O))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-pet"]],decls:77,vars:19,consts:[[1,"pet-container"],[1,"card-container"],[1,"card__content"],[1,"card__image"],[3,"config","swiper"],[4,"ngFor","ngForOf"],[1,"location"],[2,"font-size","16px"],[1,"info-container-top"],[1,"info-container__left"],[2,"font-size","14px"],[1,"info-container__right"],[1,"info-container-icons"],[1,"info-container-like-button"],[1,"info-container-like-icon"],[2,"font-size","32px","margin-top","4px","color","rgb(177, 8, 8)"],[1,"adopt-button"],[1,"info-container-bottom"],[4,"ngIf","ngIfElse"],["elseAge",""],["elseVaccinated",""],["elseCastrated",""],["elseDisease",""],["swiperSlide",""],[1,"swiper-image",3,"src","alt"]],template:function(o,e){if(1&o&&(n.TgZ(0,"div",0)(1,"mat-card",1)(2,"div",2)(3,"div",3)(4,"swiper",4),n.NdJ("swiper",function(u){return e.automatico(u)}),n.YNc(5,C,1,0,null,5),n.qZA(),n.TgZ(6,"div",6)(7,"mat-icon",7),n._uU(8,"location_on"),n.qZA(),n.TgZ(9,"p"),n._uU(10),n.qZA()()(),n.TgZ(11,"mat-card-content")(12,"div",8)(13,"section",9)(14,"h1"),n._uU(15),n.qZA(),n.TgZ(16,"p")(17,"b"),n._uU(18,"Due\xf1o: "),n.qZA(),n._uU(19),n.TgZ(20,"mat-icon",10),n._uU(21,"verified"),n.qZA()()(),n.TgZ(22,"section",11)(23,"div",12)(24,"mat-icon"),n._uU(25,"share"),n.qZA(),n.TgZ(26,"mat-icon"),n._uU(27,"bookmark"),n.qZA(),n.TgZ(28,"mat-icon"),n._uU(29,"report"),n.qZA()(),n.TgZ(30,"div",13)(31,"div",14)(32,"mat-icon",15),n._uU(33,"favorite_outline"),n.qZA(),n.TgZ(34,"p")(35,"b"),n._uU(36),n.qZA()()(),n.TgZ(37,"button",16),n._uU(38,"\xa1Darle un Hogar!"),n.qZA()()()(),n.TgZ(39,"section",17)(40,"p")(41,"b"),n._uU(42,"Salud: "),n.qZA(),n._uU(43),n.qZA(),n.TgZ(44,"p")(45,"b"),n._uU(46,"Edad: "),n.qZA(),n._uU(47),n.YNc(48,h,2,0,"a",18),n.YNc(49,A,1,0,"ng-template",null,19,n.W1O),n.qZA(),n.YNc(51,M,4,0,"p",18),n.YNc(52,O,4,0,"ng-template",null,20,n.W1O),n.YNc(54,U,4,0,"p",18),n.YNc(55,T,4,0,"ng-template",null,21,n.W1O),n.YNc(57,b,4,0,"p",18),n.YNc(58,v,4,0,"ng-template",null,22,n.W1O),n._UZ(60,"br"),n.TgZ(61,"p")(62,"b"),n._uU(63,"Descripcion de la Mascota: "),n.qZA(),n._uU(64),n.qZA(),n._UZ(65,"br"),n.TgZ(66,"p")(67,"b"),n._uU(68,"Motivo de Adopcion: "),n.qZA(),n._uU(69),n.qZA(),n._UZ(70,"br"),n.TgZ(71,"p")(72,"b"),n._uU(73,"Observaciones: "),n.qZA(),n._uU(74),n.qZA()()()()(),n.TgZ(75,"section"),n._UZ(76,"app-related"),n.qZA()()),2&o){const f=n.MAs(50),u=n.MAs(53),I=n.MAs(56),N=n.MAs(59);n.xp6(4),n.Q6J("config",e.config),n.xp6(1),n.Q6J("ngForOf",null==e.pet?null:e.pet.photos),n.xp6(5),n.Oqu(null==e.pet?null:e.pet.location),n.xp6(5),n.Oqu(null==e.pet?null:e.pet.name),n.xp6(4),n.hij("",null==e.pet?null:e.pet.owner_id," "),n.xp6(17),n.Oqu(null==e.pet?null:e.pet.likes),n.xp6(7),n.Oqu(null==e.pet?null:e.pet.health),n.xp6(4),n.Oqu(null==e.pet?null:e.pet.age),n.xp6(1),n.Q6J("ngIf",1==(null==e.pet?null:e.pet.age))("ngIfElse",f),n.xp6(3),n.Q6J("ngIf",null==e.pet?null:e.pet.vaccinated)("ngIfElse",u),n.xp6(3),n.Q6J("ngIf",null==e.pet?null:e.pet.castrated)("ngIfElse",I),n.xp6(3),n.Q6J("ngIf",null==e.pet?null:e.pet.disease)("ngIfElse",N),n.xp6(7),n.hij(" ",null==e.pet?null:e.pet.description,"."),n.xp6(5),n.hij("",null==e.pet?null:e.pet.adoptionReason,"."),n.xp6(5),n.hij("",null==e.pet?null:e.pet.remarks,".")}},dependencies:[p.sg,p.O5,c.nF,c.YC,Z.f,d.Hw,s.a8,s.dn],styles:[".pet-container[_ngcontent-%COMP%]{min-height:600px}.card-container[_ngcontent-%COMP%]{padding:14px;display:flex;align-items:center}.card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]{width:100%;max-width:520px}.card__image[_ngcontent-%COMP%]{background-color:var(--background-gray);padding:18px 14px 0}.card__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-height:340px;object-fit:cover}.location[_ngcontent-%COMP%]{font-size:14px}.info-container-top[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin:10px 0}.location[_ngcontent-%COMP%]{display:flex}.info-container__left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px;font-weight:600}.info-container__left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:12px;white-space:pre}.info-container__right[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}.info-container__right[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{cursor:pointer}.info-container__right[_ngcontent-%COMP%]   .info-container-like-button[_ngcontent-%COMP%]{display:flex;align-items:center}.info-container__right[_ngcontent-%COMP%]   .info-container-like-button[_ngcontent-%COMP%]   .info-container-like-icon[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.info-container__right[_ngcontent-%COMP%]   .info-container-like-button[_ngcontent-%COMP%]   .info-container-like-icon[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:-4px}.info-container__right[_ngcontent-%COMP%]   .adopt-button[_ngcontent-%COMP%]{color:#000;font-size:13px;font-family:Inter;font-weight:550;width:110px;height:35px;margin:4px 0 0 4px;border:solid;border-width:1.5px;border-radius:4px;border-color:#000;cursor:pointer}.info-container-bottom[_ngcontent-%COMP%]{font-family:Inter}.info-container-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:500;font-size:14px}"]}),t})(),title:"Mascota"}];let q=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[r.Bz.forChild(x),r.Bz]}),t})();var y=a(5112);let w=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[p.ez,q,c.kz,y.m,d.Ps,s.QW]}),t})()}}]);