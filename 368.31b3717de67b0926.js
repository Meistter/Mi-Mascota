"use strict";(self.webpackChunkmi_mascota=self.webpackChunkmi_mascota||[]).push([[368],{8368:(S,u,c)=>{c.r(u),c.d(u,{PetModule:()=>N});var l=c(6895),r=c(3060),a=c(8879),f=c(7445),n=c(4650),m=c(770),p=c(9485),P=c(3124),d=c(7392),g=c(3546);function C(t,o){if(1&t&&n._UZ(0,"img",26),2&t){const i=n.oxw().$implicit;n.s9C("alt",i.alt),n.Q6J("src",i.url_mobile,n.LSH)}}function M(t,o){1&t&&n.YNc(0,C,1,2,"ng-template",25)}function O(t,o){1&t&&(n.TgZ(0,"div")(1,"mat-icon",27),n._uU(2,"favorite"),n.qZA()())}function h(t,o){1&t&&(n.TgZ(0,"mat-icon",27),n._uU(1,"favorite_outline"),n.qZA())}function Z(t,o){1&t&&(n.TgZ(0,"a"),n._uU(1," a\xf1o"),n.qZA())}function A(t,o){1&t&&n._uU(0," a\xf1os")}function T(t,o){1&t&&(n.TgZ(0,"p")(1,"b"),n._uU(2," Vacunado: "),n.qZA(),n._uU(3,"Si "),n.qZA())}function U(t,o){1&t&&(n.TgZ(0,"p")(1,"b"),n._uU(2," Vacunado: "),n.qZA(),n._uU(3,"No"),n.qZA())}function v(t,o){1&t&&(n.TgZ(0,"p")(1,"b"),n._uU(2," Castrado: "),n.qZA(),n._uU(3,"Si "),n.qZA())}function b(t,o){1&t&&(n.TgZ(0,"p")(1,"b"),n._uU(2," Castrado: "),n.qZA(),n._uU(3,"No"),n.qZA())}function x(t,o){1&t&&(n.TgZ(0,"p")(1,"b"),n._uU(2," Enfermo: "),n.qZA(),n._uU(3,"Si "),n.qZA())}function q(t,o){1&t&&(n.TgZ(0,"p")(1,"b"),n._uU(2," Enfermo: "),n.qZA(),n._uU(3,"No"),n.qZA())}function k(t,o){if(1&t&&(n.TgZ(0,"p")(1,"b"),n._uU(2," Tama\xf1o: "),n.qZA(),n._uU(3),n.qZA()),2&t){const i=n.oxw();n.xp6(3),n.hij("",i.getSize()," ")}}a.ZP.use([a.W_,a.tl,a.LW,a.s5]);const y=[{path:"",component:(()=>{class t{constructor(i,e){this.route=i,this.petService=e,this.relatedPets=[],this.petId=null,this.liked=!1,this.likeCount=1,this.urlRedirect="pet",this.pet={id:"string",name:"string",owner_id:"string",age:0,castrated:!0,disease:!0,health:"string",vaccinated:!0,location:"string",description:"string",adoptionReason:"string",remarks:"string",photos:[{url_mobile:"",url_full:"",alt:""}],likes:0,category:"0"},this.config={loop:!0,slidesPerView:1,spaceBetween:0,navigation:!0,pagination:{clickable:!0},scrollbar:{draggable:!0}}}ngOnInit(){this.route.paramMap.subscribe(i=>{this.petId=i.get("id"),this.petId&&(this.pet=this.petService.getAdoptionPet(this.petId)),this.pet?.category&&(this.relatedPets=this.petService.getRelatedPets(this.pet.category))})}getSize(){return"Big"==this.pet?.size?"Grande":"Regular"==this.pet?.size?"Mediano":"Peque\xf1o"}automatico(i){(0,f.F)(1e4).subscribe(()=>{i.slideNext(850)})}changeLiked(){this.liked=!this.liked,2==this.likeCount?this.likeCount--:this.likeCount++}}return t.\u0275fac=function(i){return new(i||t)(n.Y36(r.gz),n.Y36(m.O))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-pet"]],decls:79,vars:24,consts:[[1,"pet-container"],[1,"card-container"],[1,"card__content"],[1,"card__image"],[3,"config","swiper"],[4,"ngFor","ngForOf"],[1,"location"],[2,"font-size","16px"],[1,"info-container-top"],[1,"info-container__left"],[2,"font-size","14px","color","var(--card-location-color)"],[1,"info-container__right"],[1,"info-container-icons"],[1,"info-container-like-button"],[1,"info-container-like-icon",3,"click"],[4,"ngIf","ngIfElse"],["elseLiked",""],["routerLink","/auth/login",1,"adopt-button"],[1,"info-container-bottom"],["elseAge",""],["elseVaccinated",""],["elseCastrated",""],["elseDisease",""],[4,"ngIf"],[3,"urlRedirect","related"],["swiperSlide",""],[1,"swiper-image",3,"src","alt"],[2,"font-size","32px","margin-top","4px","color","rgb(177, 8, 8)"]],template:function(i,e){if(1&i&&(n.TgZ(0,"div",0)(1,"mat-card",1)(2,"div",2)(3,"div",3)(4,"swiper",4),n.NdJ("swiper",function(s){return e.automatico(s)}),n.YNc(5,M,1,0,null,5),n.qZA(),n.TgZ(6,"div",6)(7,"mat-icon",7),n._uU(8,"location_on"),n.qZA(),n.TgZ(9,"p"),n._uU(10),n.qZA()()(),n.TgZ(11,"mat-card-content")(12,"div",8)(13,"section",9)(14,"h1"),n._uU(15),n.qZA(),n.TgZ(16,"p")(17,"b"),n._uU(18,"Due\xf1o: "),n.qZA(),n._uU(19),n.TgZ(20,"mat-icon",10),n._uU(21,"verified"),n.qZA()()(),n.TgZ(22,"section",11)(23,"div",12)(24,"mat-icon"),n._uU(25,"share"),n.qZA(),n.TgZ(26,"mat-icon"),n._uU(27,"bookmark"),n.qZA(),n.TgZ(28,"mat-icon"),n._uU(29,"report"),n.qZA()(),n.TgZ(30,"div",13)(31,"div",14),n.NdJ("click",function(){return e.changeLiked()}),n.YNc(32,O,3,0,"div",15),n.YNc(33,h,2,0,"ng-template",null,16,n.W1O),n.TgZ(35,"p")(36,"b"),n._uU(37),n.qZA()()(),n.TgZ(38,"button",17),n._uU(39,"Darle un Hogar"),n.qZA()()()(),n.TgZ(40,"section",18)(41,"p")(42,"b"),n._uU(43,"Salud: "),n.qZA(),n._uU(44),n.qZA(),n.TgZ(45,"p")(46,"b"),n._uU(47,"Edad: "),n.qZA(),n._uU(48),n.YNc(49,Z,2,0,"a",15),n.YNc(50,A,1,0,"ng-template",null,19,n.W1O),n.qZA(),n.YNc(52,T,4,0,"p",15),n.YNc(53,U,4,0,"ng-template",null,20,n.W1O),n.YNc(55,v,4,0,"p",15),n.YNc(56,b,4,0,"ng-template",null,21,n.W1O),n.YNc(58,x,4,0,"p",15),n.YNc(59,q,4,0,"ng-template",null,22,n.W1O),n.YNc(61,k,4,1,"p",23),n._UZ(62,"br"),n.TgZ(63,"p")(64,"b"),n._uU(65,"Descripcion de la Mascota: "),n.qZA(),n._uU(66),n.qZA(),n._UZ(67,"br"),n.TgZ(68,"p")(69,"b"),n._uU(70,"Motivo de Adopcion: "),n.qZA(),n._uU(71),n.qZA(),n._UZ(72,"br"),n.TgZ(73,"p")(74,"b"),n._uU(75,"Observaciones: "),n.qZA(),n._uU(76),n.qZA()()()()(),n.TgZ(77,"section"),n._UZ(78,"app-related",24),n.qZA()()),2&i){const _=n.MAs(34),s=n.MAs(51),z=n.MAs(54),Y=n.MAs(57),J=n.MAs(60);n.xp6(4),n.Q6J("config",e.config),n.xp6(1),n.Q6J("ngForOf",null==e.pet?null:e.pet.photos),n.xp6(5),n.Oqu(null==e.pet?null:e.pet.location),n.xp6(5),n.Oqu(null==e.pet?null:e.pet.name),n.xp6(4),n.hij("",null==e.pet?null:e.pet.owner_id," "),n.xp6(13),n.Q6J("ngIf",e.liked)("ngIfElse",_),n.xp6(5),n.Oqu(e.likeCount),n.xp6(7),n.Oqu(null==e.pet?null:e.pet.health),n.xp6(4),n.Oqu(null==e.pet?null:e.pet.age),n.xp6(1),n.Q6J("ngIf",1==(null==e.pet?null:e.pet.age))("ngIfElse",s),n.xp6(3),n.Q6J("ngIf",null==e.pet?null:e.pet.vaccinated)("ngIfElse",z),n.xp6(3),n.Q6J("ngIf",null==e.pet?null:e.pet.castrated)("ngIfElse",Y),n.xp6(3),n.Q6J("ngIf",null==e.pet?null:e.pet.disease)("ngIfElse",J),n.xp6(3),n.Q6J("ngIf",null==e.pet?null:e.pet.size),n.xp6(5),n.hij(" ",null==e.pet?null:e.pet.description,"."),n.xp6(5),n.hij("",null==e.pet?null:e.pet.adoptionReason,"."),n.xp6(5),n.hij("",null==e.pet?null:e.pet.remarks,"."),n.xp6(2),n.Q6J("urlRedirect",e.urlRedirect)("related",e.relatedPets)}},dependencies:[l.sg,l.O5,r.rH,p.nF,p.YC,P.f,d.Hw,g.a8,g.dn],styles:[".pet-container[_ngcontent-%COMP%]{min-height:600px}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]{padding:14px;display:flex;align-items:center}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]{width:100%;max-width:520px}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .card__image[_ngcontent-%COMP%]{background-color:var(--background-gray);padding:18px 14px 0}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .card__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-height:340px;object-fit:cover}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]{font-size:14px;display:flex}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .info-container-top[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin:10px 0}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .info-container__left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px;font-weight:600}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .info-container__left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:12px;white-space:pre}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .info-container__right[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .info-container__right[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{cursor:pointer}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .info-container__right[_ngcontent-%COMP%]   .info-container-like-button[_ngcontent-%COMP%]{display:flex;align-items:center}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .info-container__right[_ngcontent-%COMP%]   .info-container-like-button[_ngcontent-%COMP%]   .info-container-like-icon[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .info-container__right[_ngcontent-%COMP%]   .info-container-like-button[_ngcontent-%COMP%]   .info-container-like-icon[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:-4px}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .info-container__right[_ngcontent-%COMP%]   .adopt-button[_ngcontent-%COMP%]{color:#000;font-size:13px;font-family:Inter;font-weight:550;width:110px;height:35px;margin:4px 0 0 4px;border:solid;border-width:1.5px;border-radius:4px;border-color:#000;cursor:pointer}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .info-container__right[_ngcontent-%COMP%]   .adopt-button[_ngcontent-%COMP%]:hover{background-color:#e9ecf1}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .info-container-bottom[_ngcontent-%COMP%]{font-family:Inter}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .info-container-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:500;font-size:14px}"]}),t})(),title:"Mascota"}];let I=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[r.Bz.forChild(y),r.Bz]}),t})();var w=c(5112);let N=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[l.ez,I,p.kz,w.m,d.Ps,g.QW]}),t})()}}]);