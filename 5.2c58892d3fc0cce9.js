"use strict";(self.webpackChunkmi_mascota=self.webpackChunkmi_mascota||[]).push([[5],{5:(R,d,c)=>{c.r(d),c.d(d,{PetRescueModule:()=>y});var s=c(6895),_=c(7392),l=c(3546),a=c(3060),r=c(8879),u=c(7445),n=c(4650),P=c(770),C=c(691),m=c(3124),p=c(9485);function f(t,i){if(1&t&&n._UZ(0,"img",19),2&t){const o=n.oxw().$implicit;n.s9C("alt",o.alt),n.Q6J("src",o.url_mobile,n.LSH)}}function M(t,i){1&t&&n.YNc(0,f,1,2,"ng-template",18)}function O(t,i){1&t&&(n.TgZ(0,"p")(1,"b"),n._uU(2," Enfermo: "),n.qZA(),n._uU(3,"Si "),n.qZA())}function h(t,i){1&t&&(n.TgZ(0,"p")(1,"b"),n._uU(2," Enfermo: "),n.qZA(),n._uU(3,"No"),n.qZA())}r.ZP.use([r.W_,r.tl,r.LW,r.s5]);const Z=[{path:"",component:(()=>{class t{constructor(o,e,g){this.route=o,this.petService=e,this.categoryService=g,this.relatedPets=[],this.petId=null,this.urlRedirect="rescue",this.categoryName="",this.pet={id:"string",age:0,health:"string",location:"string",description:"string",photos:[{url_mobile:"",url_full:"",alt:""}],address:"",disease:!0,gps:"",category:"0",remarks:"string"},this.config={loop:!0,slidesPerView:1,spaceBetween:0,navigation:!0,pagination:{clickable:!0},scrollbar:{draggable:!0}}}ngOnInit(){this.route.paramMap.subscribe(o=>{this.petId=o.get("id"),this.petId&&(this.pet=this.petService.getRescuePet(this.petId),this.pet?.category&&(this.categoryName=this.categoryService.getCategoryName(this.pet?.category)),this.pet?.category&&(this.relatedPets=this.petService.getRelatedRescuePets(this.pet.category)))})}automatico(o){(0,u.F)(3e4).subscribe(()=>{o.slideNext(850)})}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(a.gz),n.Y36(P.O),n.Y36(C.H))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-pet-rescue"]],decls:52,vars:12,consts:[[1,"pet-container"],[1,"card-container"],[1,"card__content"],[1,"card__image"],[3,"config","swiper"],[4,"ngFor","ngForOf"],[1,"location"],[2,"font-size","16px"],[1,"info-container-top"],[1,"info-container__left"],[1,"info-container__right"],[1,"info-container-icons"],[1,"info-container-like-button"],["routerLink","/auth/login",1,"adopt-button"],[1,"info-container-bottom"],[4,"ngIf","ngIfElse"],["elseDisease",""],[3,"urlRedirect","related"],["swiperSlide",""],[1,"swiper-image",3,"src","alt"]],template:function(o,e){if(1&o&&(n.TgZ(0,"div",0)(1,"mat-card",1)(2,"div",2)(3,"div",3)(4,"swiper",4),n.NdJ("swiper",function(b){return e.automatico(b)}),n.YNc(5,M,1,0,null,5),n.qZA(),n.TgZ(6,"div",6)(7,"mat-icon",7),n._uU(8,"location_on"),n.qZA(),n.TgZ(9,"p"),n._uU(10),n.qZA()()(),n.TgZ(11,"mat-card-content")(12,"div",8)(13,"section",9)(14,"h1"),n._uU(15),n.qZA()(),n.TgZ(16,"section",10)(17,"div",11)(18,"mat-icon"),n._uU(19,"share"),n.qZA(),n.TgZ(20,"mat-icon"),n._uU(21,"bookmark"),n.qZA(),n.TgZ(22,"mat-icon"),n._uU(23,"report"),n.qZA()(),n.TgZ(24,"div",12)(25,"button",13),n._uU(26,"Declarar como recuperado"),n.qZA()()()(),n.TgZ(27,"section",14)(28,"p")(29,"b"),n._uU(30,"Salud: "),n.qZA(),n._uU(31),n.qZA(),n.YNc(32,O,4,0,"p",15),n.YNc(33,h,4,0,"ng-template",null,16,n.W1O),n._UZ(35,"br"),n.TgZ(36,"p")(37,"b"),n._uU(38,"Descripcion del animal: "),n.qZA(),n._uU(39),n.qZA(),n._UZ(40,"br"),n.TgZ(41,"p")(42,"b"),n._uU(43,"Direcci\xf3n: "),n.qZA(),n._uU(44),n.qZA(),n._UZ(45,"br"),n.TgZ(46,"p")(47,"b"),n._uU(48,"LINK Ubicaci\xf3n GPS: "),n.qZA(),n._uU(49),n.qZA()()()()(),n.TgZ(50,"section"),n._UZ(51,"app-related",17),n.qZA()()),2&o){const g=n.MAs(34);n.xp6(4),n.Q6J("config",e.config),n.xp6(1),n.Q6J("ngForOf",null==e.pet?null:e.pet.photos),n.xp6(5),n.Oqu(null==e.pet?null:e.pet.location),n.xp6(5),n.hij("Especie: ",e.categoryName,""),n.xp6(16),n.Oqu(null==e.pet?null:e.pet.health),n.xp6(1),n.Q6J("ngIf",null==e.pet?null:e.pet.disease)("ngIfElse",g),n.xp6(7),n.hij(" ",null==e.pet?null:e.pet.description,"."),n.xp6(5),n.hij("",null==e.pet?null:e.pet.address,"."),n.xp6(5),n.hij("",null==e.pet?null:e.pet.gps,"."),n.xp6(2),n.Q6J("urlRedirect",e.urlRedirect)("related",e.relatedPets)}},dependencies:[s.sg,s.O5,a.rH,m.f,_.Hw,l.a8,l.dn,p.nF,p.YC],styles:[".pet-container[_ngcontent-%COMP%]{min-height:600px}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]{padding:14px;display:flex;align-items:center}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]{width:100%;max-width:520px;margin-bottom:30px}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .card__image[_ngcontent-%COMP%]{background-color:var(--background-gray);padding:18px 14px 0}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .card__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-height:340px;object-fit:cover}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .card__image[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]{font-size:14px;display:flex}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .info-container-top[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin:10px 0}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .info-container__left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px;font-weight:600}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .info-container__left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:12px;white-space:pre}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .info-container__right[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .info-container__right[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{cursor:pointer}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .info-container__right[_ngcontent-%COMP%]   .info-container-like-button[_ngcontent-%COMP%]{display:flex;align-items:center}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .info-container__right[_ngcontent-%COMP%]   .info-container-like-button[_ngcontent-%COMP%]   .info-container-like-icon[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .info-container__right[_ngcontent-%COMP%]   .info-container-like-button[_ngcontent-%COMP%]   .info-container-like-icon[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:-4px}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .info-container__right[_ngcontent-%COMP%]   .adopt-button[_ngcontent-%COMP%]{color:#000;font-size:13px;font-family:Inter;font-weight:550;width:190px;height:35px;margin:4px 0 0 4px;border:solid;border-width:1.5px;border-radius:4px;border-color:#000;cursor:pointer}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .info-container-bottom[_ngcontent-%COMP%]{font-family:Inter}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .info-container-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:500;font-size:14px}"]}),t})(),title:"Rescatar Mascota"}];let v=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[a.Bz.forChild(Z),a.Bz]}),t})();var x=c(5112);let y=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[s.ez,v,x.m,_.Ps,l.QW,p.kz]}),t})()}}]);