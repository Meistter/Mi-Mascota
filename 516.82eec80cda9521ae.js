"use strict";(self.webpackChunkmi_mascota=self.webpackChunkmi_mascota||[]).push([[516],{9516:(q,p,c)=>{c.r(p),c.d(p,{LostPetModule:()=>L});var l=c(6895),r=c(2510),a=c(8879),u=c(7445),n=c(4650),P=c(770),m=c(691),C=c(8321),d=c(7392),g=c(3546),s=c(9485),_=c(502);function f(t,i){if(1&t&&n._UZ(0,"img",21),2&t){const o=n.oxw().$implicit;n.s9C("alt",o.alt),n.Q6J("src",o.url_mobile,n.LSH)}}function M(t,i){1&t&&n.YNc(0,f,1,2,"ng-template",20)}function O(t,i){1&t&&(n.TgZ(0,"p")(1,"b"),n._uU(2," Enfermo: "),n.qZA(),n._uU(3,"Si "),n.qZA())}function h(t,i){1&t&&(n.TgZ(0,"p")(1,"b"),n._uU(2," Enfermo: "),n.qZA(),n._uU(3,"No"),n.qZA())}function x(t,i){if(1&t&&(n.TgZ(0,"mat-card",4)(1,"div",5)(2,"div",6)(3,"swiper",7),n.YNc(4,M,1,0,null,8),n.qZA(),n.TgZ(5,"div",9)(6,"mat-icon",10),n._uU(7,"location_on"),n.qZA(),n.TgZ(8,"p"),n._uU(9),n.qZA()()(),n.TgZ(10,"mat-card-content")(11,"div",11)(12,"section",12)(13,"h1"),n._uU(14),n.qZA()(),n.TgZ(15,"section",13)(16,"div",14)(17,"mat-icon"),n._uU(18,"share"),n.qZA(),n.TgZ(19,"mat-icon"),n._uU(20,"bookmark"),n.qZA(),n.TgZ(21,"mat-icon"),n._uU(22,"report"),n.qZA()(),n.TgZ(23,"div",15)(24,"button",16),n._uU(25,"Ponerse en cont\xe1cto"),n.qZA()()()(),n.TgZ(26,"section",17)(27,"p")(28,"b"),n._uU(29,"Salud: "),n.qZA(),n._uU(30),n.qZA(),n.TgZ(31,"p")(32,"b"),n._uU(33,"Edad: "),n.qZA(),n._uU(34),n.qZA(),n.YNc(35,O,4,0,"p",18),n.YNc(36,h,4,0,"ng-template",null,19,n.W1O),n._UZ(38,"br"),n.TgZ(39,"p")(40,"b"),n._uU(41,"Descripcion del animal: "),n.qZA(),n._uU(42),n.qZA(),n._UZ(43,"br"),n.TgZ(44,"p")(45,"b"),n._uU(46,"Detalles: "),n.qZA(),n._uU(47),n.qZA(),n._UZ(48,"br"),n.TgZ(49,"p")(50,"b"),n._uU(51,"\xdaltima vez visto: "),n.qZA(),n._uU(52),n.qZA()()()()()),2&t){const o=n.MAs(37),e=n.oxw();n.xp6(3),n.Q6J("config",e.config),n.xp6(1),n.Q6J("ngForOf",null==e.pet?null:e.pet.photos),n.xp6(5),n.Oqu(null==e.pet?null:e.pet.location),n.xp6(5),n.Oqu(null==e.pet?null:e.pet.name),n.xp6(16),n.Oqu(null==e.pet?null:e.pet.health),n.xp6(4),n.Oqu(null==e.pet?null:e.pet.age),n.xp6(1),n.Q6J("ngIf",null==e.pet?null:e.pet.disease)("ngIfElse",o),n.xp6(7),n.hij(" ",null==e.pet?null:e.pet.description,"."),n.xp6(5),n.hij("",null==e.pet?null:e.pet.remarks,"."),n.xp6(5),n.hij("",null==e.pet?null:e.pet.address,".")}}const Z=function(){return{"background-color":"#ced1d5",width:"100%",height:"260px"}},v=function(){return{"background-color":"#ced1d5",width:"200px",height:"120px"}},b=function(){return{"background-color":"#ced1d5",width:"110px",height:"40px"}},y=function(){return{"background-color":"#ced1d5",width:"330px",height:"180px"}};function A(t,i){1&t&&(n.TgZ(0,"div",22)(1,"div",23),n._UZ(2,"ngx-skeleton-loader",24),n.TgZ(3,"div",25)(4,"div",26),n._UZ(5,"ngx-skeleton-loader",27),n.qZA(),n.TgZ(6,"div",28),n._UZ(7,"ngx-skeleton-loader",27),n.qZA()(),n._UZ(8,"ngx-skeleton-loader",24),n.qZA()()),2&t&&(n.xp6(2),n.Q6J("theme",n.DdM(4,Z)),n.xp6(3),n.Q6J("theme",n.DdM(5,v)),n.xp6(2),n.Q6J("theme",n.DdM(6,b)),n.xp6(1),n.Q6J("theme",n.DdM(7,y)))}a.ZP.use([a.W_,a.tl,a.LW,a.s5]);const U=[{path:"",component:(()=>{class t{constructor(o,e,w){this.route=o,this.petService=e,this.categoryService=w,this.relatedPets=[],this.urlRedirect="lost",this.petId=null,this.categoryName="",this.pet={id:"-1",age:0,health:"",location:"",description:"",photos:[{url_mobile:"",url_full:"",alt:""}],address:"",disease:!0,gps:"",category:"0",remarks:""},this.config={loop:!1,slidesPerView:1,spaceBetween:0,navigation:!0,pagination:{clickable:!0},scrollbar:{draggable:!0}}}ngOnInit(){setTimeout(()=>{this.route.paramMap.subscribe(o=>{this.petId=o.get("id"),this.petId&&(this.pet=this.petService.getLostPet(this.petId),this.pet?.category&&(this.categoryName=this.categoryService.getCategoryName(this.pet?.category),this.relatedPets=this.petService.getRelatedLostPets(this.pet?.category)))})},700)}automatico(o){(0,u.F)(3e4).subscribe(()=>{o.slideNext(850)})}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(r.gz),n.Y36(P.O),n.Y36(m.H))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-lost-pet"]],decls:5,vars:4,consts:[[1,"pet-container"],["class","card-container",4,"ngIf"],["class","skeleton",4,"ngIf"],[3,"urlRedirect","related"],[1,"card-container"],[1,"card__content"],[1,"card__image"],[3,"config"],[4,"ngFor","ngForOf"],[1,"location"],[2,"font-size","16px"],[1,"info-container-top"],[1,"info-container__left"],[1,"info-container__right"],[1,"info-container-icons"],[1,"info-container-like-button"],["routerLink","/soon",1,"adopt-button"],[1,"info-container-bottom"],[4,"ngIf","ngIfElse"],["elseDisease",""],["swiperSlide",""],[1,"swiper-image",3,"src","alt"],[1,"skeleton"],[1,"skeleton-cards"],["count","1","appearance","line","animation","progress",3,"theme"],[1,"bottom"],[1,"bottom-1"],["count","1","appearance","line","animation","progress-dark",3,"theme"],[1,"bottom-2"]],template:function(o,e){1&o&&(n.TgZ(0,"div",0),n.YNc(1,x,53,11,"mat-card",1),n.YNc(2,A,9,8,"div",2),n.TgZ(3,"section"),n._UZ(4,"app-related",3),n.qZA()()),2&o&&(n.xp6(1),n.Q6J("ngIf","-1"!==(null==e.pet?null:e.pet.id)),n.xp6(1),n.Q6J("ngIf","-1"==(null==e.pet?null:e.pet.id)),n.xp6(2),n.Q6J("urlRedirect",e.urlRedirect)("related",e.relatedPets))},dependencies:[l.sg,l.O5,r.rH,C.f,d.Hw,g.a8,g.dn,s.nF,s.YC,_.xr],styles:[".pet-container[_ngcontent-%COMP%]{min-height:600px}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]{padding:14px;display:flex;align-items:center}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]{width:100%;max-width:520px;margin-bottom:30px}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .card__image[_ngcontent-%COMP%]{background-color:var(--background-gray);padding:18px 14px 0}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .card__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-height:340px;object-fit:cover}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .card__image[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]{font-size:14px;display:flex}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .info-container-top[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin:10px 0}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .info-container__left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px;font-weight:600}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .info-container__left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:12px;white-space:pre}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .info-container__right[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .info-container__right[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{cursor:pointer}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .info-container__right[_ngcontent-%COMP%]   .info-container-like-button[_ngcontent-%COMP%]{display:flex;align-items:center}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .info-container__right[_ngcontent-%COMP%]   .info-container-like-button[_ngcontent-%COMP%]   .info-container-like-icon[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .info-container__right[_ngcontent-%COMP%]   .info-container-like-button[_ngcontent-%COMP%]   .info-container-like-icon[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:-4px}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .info-container__right[_ngcontent-%COMP%]   .adopt-button[_ngcontent-%COMP%]{color:#000;font-size:13px;font-family:Inter;font-weight:550;width:150px;height:35px;margin:4px 0 0 4px;border:none;box-shadow:.5px .5px 3px #000;border-width:1.5px;border-radius:4px;cursor:pointer}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .info-container-bottom[_ngcontent-%COMP%]{font-family:Inter}.pet-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .info-container-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:500;font-size:14px}.pet-container[_ngcontent-%COMP%]   .skeleton[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center}.pet-container[_ngcontent-%COMP%]   .skeleton[_ngcontent-%COMP%]   .skeleton-cards[_ngcontent-%COMP%]{margin:16px}.pet-container[_ngcontent-%COMP%]   .skeleton[_ngcontent-%COMP%]   .skeleton-cards[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]{display:flex}.pet-container[_ngcontent-%COMP%]   .skeleton[_ngcontent-%COMP%]   .skeleton-cards[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .bottom-2[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-left:20px}"]}),t})(),title:"Busqueda"}];let T=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[r.Bz.forChild(U),r.Bz]}),t})();var k=c(5112);let L=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[l.ez,T,k.m,d.Ps,g.QW,s.kz,_.hx]}),t})()}}]);