"use strict";(self.webpackChunkmi_mascota=self.webpackChunkmi_mascota||[]).push([[516],{9516:(A,d,i)=>{i.r(d),i.d(d,{LostPetModule:()=>b});var l=i(6895),r=i(3060),a=i(8879),u=i(7445),t=i(4650),m=i(8173),f=i(691),P=i(3124),_=i(7392),g=i(3546),p=i(9485);function C(n,c){if(1&n&&t._UZ(0,"img",19),2&n){const o=t.oxw().$implicit;t.s9C("alt",o.alt),t.Q6J("src",o.url_mobile,t.LSH)}}function O(n,c){1&n&&t.YNc(0,C,1,2,"ng-template",18)}function M(n,c){1&n&&(t.TgZ(0,"p")(1,"b"),t._uU(2," Enfermo: "),t.qZA(),t._uU(3,"Si "),t.qZA())}function h(n,c){1&n&&(t.TgZ(0,"p")(1,"b"),t._uU(2," Enfermo: "),t.qZA(),t._uU(3,"No"),t.qZA())}a.ZP.use([a.W_,a.tl,a.LW,a.s5]);const Z=[{path:"",component:(()=>{class n{constructor(o,e,s){this.route=o,this.petService=e,this.categoryService=s,this.relatedPets=[],this.lostDetail=!0,this.petId=null,this.categoryName="",this.pet={id:"string",age:0,health:"string",location:"string",description:"string",photos:[{url_mobile:"",url_full:"",alt:""}],address:"",disease:!0,gps:"",category:"0",remarks:"string"},this.config={loop:!0,slidesPerView:1,spaceBetween:0,navigation:!0,pagination:{clickable:!0},scrollbar:{draggable:!0}}}ngOnInit(){this.route.paramMap.subscribe(o=>{this.petId=o.get("id"),this.petId&&(this.pet=this.petService.getLostPet(this.petId),this.pet?.category&&(this.categoryName=this.categoryService.getCategoryName(this.pet?.category)),this.pet?.category&&(this.relatedPets=this.petService.getRelatedLostPets(this.pet.category)))})}automatico(o){(0,u.F)(3e4).subscribe(()=>{o.slideNext(850)})}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(r.gz),t.Y36(m.O),t.Y36(f.H))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-lost-pet"]],decls:56,vars:13,consts:[[1,"pet-container"],[1,"card-container"],[1,"card__content"],[1,"card__image"],[3,"config","swiper"],[4,"ngFor","ngForOf"],[1,"location"],[2,"font-size","16px"],[1,"info-container-top"],[1,"info-container__left"],[1,"info-container__right"],[1,"info-container-icons"],[1,"info-container-like-button"],["routerLink","/auth/login",1,"adopt-button"],[1,"info-container-bottom"],[4,"ngIf","ngIfElse"],["elseDisease",""],[3,"lostDetail","related"],["swiperSlide",""],[1,"swiper-image",3,"src","alt"]],template:function(o,e){if(1&o&&(t.TgZ(0,"div",0)(1,"mat-card",1)(2,"div",2)(3,"div",3)(4,"swiper",4),t.NdJ("swiper",function(x){return e.automatico(x)}),t.YNc(5,O,1,0,null,5),t.qZA(),t.TgZ(6,"div",6)(7,"mat-icon",7),t._uU(8,"location_on"),t.qZA(),t.TgZ(9,"p"),t._uU(10),t.qZA()()(),t.TgZ(11,"mat-card-content")(12,"div",8)(13,"section",9)(14,"h1"),t._uU(15),t.qZA()(),t.TgZ(16,"section",10)(17,"div",11)(18,"mat-icon"),t._uU(19,"share"),t.qZA(),t.TgZ(20,"mat-icon"),t._uU(21,"bookmark"),t.qZA(),t.TgZ(22,"mat-icon"),t._uU(23,"report"),t.qZA()(),t.TgZ(24,"div",12)(25,"button",13),t._uU(26,"Ponerse en cont\xe1cto"),t.qZA()()()(),t.TgZ(27,"section",14)(28,"p")(29,"b"),t._uU(30,"Salud: "),t.qZA(),t._uU(31),t.qZA(),t.TgZ(32,"p")(33,"b"),t._uU(34,"Edad: "),t.qZA(),t._uU(35),t.qZA(),t.YNc(36,M,4,0,"p",15),t.YNc(37,h,4,0,"ng-template",null,16,t.W1O),t._UZ(39,"br"),t.TgZ(40,"p")(41,"b"),t._uU(42,"Descripcion del animal: "),t.qZA(),t._uU(43),t.qZA(),t._UZ(44,"br"),t.TgZ(45,"p")(46,"b"),t._uU(47,"Detalles: "),t.qZA(),t._uU(48),t.qZA(),t._UZ(49,"br"),t.TgZ(50,"p")(51,"b"),t._uU(52,"\xdaltima vez visto: "),t.qZA(),t._uU(53),t.qZA()()()()(),t.TgZ(54,"section"),t._UZ(55,"app-related",17),t.qZA()()),2&o){const s=t.MAs(38);t.xp6(4),t.Q6J("config",e.config),t.xp6(1),t.Q6J("ngForOf",null==e.pet?null:e.pet.photos),t.xp6(5),t.Oqu(null==e.pet?null:e.pet.location),t.xp6(5),t.Oqu(null==e.pet?null:e.pet.name),t.xp6(16),t.Oqu(null==e.pet?null:e.pet.health),t.xp6(4),t.Oqu(null==e.pet?null:e.pet.age),t.xp6(1),t.Q6J("ngIf",null==e.pet?null:e.pet.disease)("ngIfElse",s),t.xp6(7),t.hij(" ",null==e.pet?null:e.pet.description,"."),t.xp6(5),t.hij("",null==e.pet?null:e.pet.remarks,"."),t.xp6(5),t.hij("",null==e.pet?null:e.pet.address,"."),t.xp6(2),t.Q6J("lostDetail",e.lostDetail)("related",e.relatedPets)}},dependencies:[l.sg,l.O5,r.rH,P.f,_.Hw,g.a8,g.dn,p.nF,p.YC],styles:[".pet-container[_ngcontent-%COMP%]{min-height:600px}.card-container[_ngcontent-%COMP%]{padding:14px;display:flex;align-items:center}.card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]{width:100%;max-width:520px;margin-bottom:30px}.card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .card__image[_ngcontent-%COMP%]{background-color:var(--background-gray);padding:18px 14px 0}.card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .card__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-height:340px;object-fit:cover}.card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .card__image[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]{font-size:14px;display:flex}.card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .info-container-top[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin:10px 0}.card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .info-container__left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px;font-weight:600}.card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .info-container__left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:12px;white-space:pre}.card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .info-container__right[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}.card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .info-container__right[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{cursor:pointer}.card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .info-container__right[_ngcontent-%COMP%]   .info-container-like-button[_ngcontent-%COMP%]{display:flex;align-items:center}.card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .info-container__right[_ngcontent-%COMP%]   .info-container-like-button[_ngcontent-%COMP%]   .info-container-like-icon[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .info-container__right[_ngcontent-%COMP%]   .info-container-like-button[_ngcontent-%COMP%]   .info-container-like-icon[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:-4px}.card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .info-container__right[_ngcontent-%COMP%]   .adopt-button[_ngcontent-%COMP%]{color:#000;font-size:13px;font-family:Inter;font-weight:550;width:150px;height:35px;margin:4px 0 0 4px;border:solid;border-width:1.5px;border-radius:4px;border-color:#000;cursor:pointer}.card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .info-container-bottom[_ngcontent-%COMP%]{font-family:Inter}.card-container[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .info-container-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:500;font-size:14px}"]}),n})(),title:"Busqueda"}];let v=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[r.Bz.forChild(Z),r.Bz]}),n})();var y=i(5112);let b=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.ez,v,y.m,_.Ps,g.QW,p.kz]}),n})()}}]);