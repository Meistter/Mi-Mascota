"use strict";(self.webpackChunkmi_mascota=self.webpackChunkmi_mascota||[]).push([[195],{6195:(F,m,o)=>{o.r(m),o.d(m,{HomeModule:()=>R});var c=o(6895),l=o(9485),g=o(2510),t=o(4650),f=o(770),h=o(5833),v=o(2102),C=o(1143),a=o(8879),w=o(7445);let b=(()=>{class e{constructor(){this.slides=[{url_mobile:"https://i.postimg.cc/BbzRfxdD/petheade4.webp",url_full:"https://i.postimg.cc/BbzRfxdD/petheade4.webp",alt:"pet-header-img"},{url_mobile:"https://i.postimg.cc/8PBp4sCQ/B2.jpg",url_full:"https://i.postimg.cc/8PBp4sCQ/B2.jpg",alt:"pet-header-img"},{url_mobile:"https://i.postimg.cc/RV3jQDHT/mascotas-Header-min.jpg",url_full:"https://i.postimg.cc/RV3jQDHT/mascotas-Header-min.jpg",alt:"pet-header-img"},{url_mobile:"https://i.postimg.cc/xjpwm2cC/pet2header-min.jpg",url_full:"https://i.postimg.cc/xjpwm2cC/pet2header-min.jpg",alt:"pet-header-img"},{url_mobile:"https://i.postimg.cc/tJJ8crmp/gato.webp",url_full:"https://i.postimg.cc/tJJ8crmp/gato.webp",alt:"pet-header-img"}]}getSlides(){return this.slides}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function _(e,i){if(1&e&&(t.TgZ(0,"a",4),t._UZ(1,"img",5),t.qZA()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.Q6J("src",n.url_mobile,t.LSH)}}function x(e,i){1&e&&t.YNc(0,_,2,1,"ng-template",3)}a.ZP.use([a.W_,a.tl,a.LW,a.s5]);let M=(()=>{class e{constructor(n){this.slideService=n,this.slides=[],this.config={loop:!0,slidesPerView:1,spaceBetween:0,navigation:!1,pagination:{clickable:!0},scrollbar:{draggable:!0}}}ngOnInit(){this.slides=this.slideService.getSlides()}automatico(n){(0,w.F)(25e3).subscribe(()=>{n.slideNext(850)})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(b))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-carousel"]],decls:3,vars:2,consts:[[1,"carousel-container"],[3,"config","swiper"],[4,"ngFor","ngForOf"],["swiperSlide",""],["target","_blank",3,"href"],["alt","foto",1,"swiper-image",3,"src"]],template:function(n,s){1&n&&(t.TgZ(0,"div",0)(1,"swiper",1),t.NdJ("swiper",function(z){return s.automatico(z)}),t.YNc(2,x,1,0,null,2),t.qZA()()),2&n&&(t.xp6(1),t.Q6J("config",s.config),t.xp6(1),t.Q6J("ngForOf",s.slides))},dependencies:[c.sg,l.nF,l.YC],styles:[".swiper-image[_ngcontent-%COMP%]{width:100%!important;height:182px!important;display:block!important;object-fit:cover;padding:0;margin-bottom:-6px}@media (width >= 1024px){.swiper-image[_ngcontent-%COMP%]{height:380px!important}}"]}),e})();var r=o(4006),u=o(9549),d=o(4385),y=o(3238);function S(e,i){if(1&e&&(t.TgZ(0,"mat-option",7),t._uU(1),t.qZA()),2&e){const n=i.$implicit;t.Q6J("value",n),t.xp6(1),t.hij(" ",n," ")}}let O=(()=>{class e{constructor(n){this.locationService=n,this.locations=[],this.location="",this.btnIzquierda=!0,this.btnDerecha=!1,this.locationList=new r.NI(""),this.switcherEvent=new t.vpe}ngOnInit(){this.locations=this.locationService.getLocations(),this.locationService.location$.subscribe(n=>{this.locationList.setValue(n||"Cualquiera")})}activarBtnIzquierda(){!this.btnIzquierda&&this.btnDerecha&&this.sendSwitchMessage(),this.btnIzquierda=!0,this.btnDerecha=!1}activarBtnDerecha(){!this.btnDerecha&&this.btnIzquierda&&this.sendSwitchMessage(),this.btnIzquierda=!1,this.btnDerecha=!0}sendSwitchMessage(){this.switcherEvent.emit()}sendSwitchLocationMessage(){this.locationList.value&&this.locationService.setLocation(this.locationList.value)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(h.a))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-switcher"]],outputs:{switcherEvent:"switcherEvent"},decls:11,vars:4,consts:[[1,"switcher-container"],[1,"filter"],["disableRipple","",3,"formControl","selectionChange"],[3,"value",4,"ngFor","ngForOf"],[1,"switcher__buttons"],[1,"button-left",3,"ngClass","click"],[1,"button-right",3,"ngClass","click"],[3,"value"]],template:function(n,s){1&n&&(t.TgZ(0,"section",0)(1,"mat-form-field",1)(2,"mat-label"),t._uU(3,"Ubicaci\xf3n"),t.qZA(),t.TgZ(4,"mat-select",2),t.NdJ("selectionChange",function(){return s.sendSwitchLocationMessage()}),t.YNc(5,S,2,2,"mat-option",3),t.qZA()(),t.TgZ(6,"div",4)(7,"button",5),t.NdJ("click",function(){return s.activarBtnIzquierda()}),t._uU(8,"Adoptar"),t.qZA(),t.TgZ(9,"button",6),t.NdJ("click",function(){return s.activarBtnDerecha()}),t._uU(10,"Rescatar"),t.qZA()()()),2&n&&(t.xp6(4),t.Q6J("formControl",s.locationList),t.xp6(1),t.Q6J("ngForOf",s.locations),t.xp6(2),t.Q6J("ngClass",s.btnIzquierda?"active":"inactive"),t.xp6(2),t.Q6J("ngClass",s.btnDerecha?"active":"inactive"))},dependencies:[c.mk,c.sg,u.KE,u.hX,d.gD,y.ey,r.JJ,r.oH],styles:[".switcher-container[_ngcontent-%COMP%]{width:100%;height:60px;padding:18px 5vw;margin-top:6px;margin-bottom:20px;display:flex;justify-content:space-between}.switcher-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:56%;min-width:130px;max-width:220px;margin-right:6px}.switcher-container[_ngcontent-%COMP%]   .switcher__buttons[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:right;margin-top:28px}.switcher-container[_ngcontent-%COMP%]   .switcher__buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:13px;font-weight:600;color:#000;width:70px;height:38px;margin:0;padding:0;border:none;box-shadow:.5px .5px 3px #000;cursor:pointer}.switcher-container[_ngcontent-%COMP%]   .switcher__buttons[_ngcontent-%COMP%]   .button-left[_ngcontent-%COMP%]{border-radius:8px 0 0 8px;border-right:none}.switcher-container[_ngcontent-%COMP%]   .switcher__buttons[_ngcontent-%COMP%]   .button-right[_ngcontent-%COMP%]{border-radius:0 8px 8px 0}.active[_ngcontent-%COMP%]{background-color:var(--second-golden-color)}.inactive[_ngcontent-%COMP%]{background-color:#fff}@media (width >= 1024px){.filter[_ngcontent-%COMP%]{display:none}.switcher-container[_ngcontent-%COMP%]{justify-content:center}}"]}),e})();function P(e,i){if(1&e&&t._UZ(0,"app-cards",3),2&e){const n=t.oxw();t.Q6J("ngClass",n.switcher?"active":"inactive")("pets",n.pets)}}function Z(e,i){if(1&e&&t._UZ(0,"app-rescue-cards",3),2&e){const n=t.oxw();t.Q6J("ngClass",n.switcher?"inactive":"active")("pets",n.petsRescue)}}function T(e,i){1&e&&(t.TgZ(0,"div",4)(1,"h1"),t._uU(2,"No se encuentran registros para esta ubicaci\xf3n"),t.qZA(),t._UZ(3,"img",5),t.qZA())}function J(e,i){1&e&&(t.TgZ(0,"div",4)(1,"h1"),t._uU(2,"No se encuentran registros para esta ubicaci\xf3n"),t.qZA(),t._UZ(3,"img",5),t.qZA())}const H=[{path:"",component:(()=>{class e{constructor(n,s){this.petService=n,this.locationService=s,this.pets=[],this.petsRescue=[],this.switcher=!0,this.emptyAdoptMessage=!1,this.emptyRescueMessage=!1}ngOnInit(){setTimeout(()=>{this.locationService.location$.subscribe(n=>{n&&(this.pets=this.petService.getAdoptionPets(),this.petsRescue=this.petService.getRescuePets(),this.emptyAdoptMessage=0==this.pets.length,this.emptyRescueMessage=0==this.petsRescue.length)})},700)}switchComponents(){this.switcher=!this.switcher}getLocation(n){}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(f.O),t.Y36(h.a))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home"]],decls:6,vars:4,consts:[[3,"switcherEvent"],[3,"ngClass","pets",4,"ngIf"],["class","empty",4,"ngIf"],[3,"ngClass","pets"],[1,"empty"],["src","https://i.postimg.cc/zDy85GQb/sad-pug-dog-kawaii-dog-breeds-illustration-vector.jpg","alt",""]],template:function(n,s){1&n&&(t._UZ(0,"app-carousel"),t.TgZ(1,"app-switcher",0),t.NdJ("switcherEvent",function(){return s.switchComponents()}),t.qZA(),t.YNc(2,P,1,2,"app-cards",1),t.YNc(3,Z,1,2,"app-rescue-cards",1),t.YNc(4,T,4,0,"div",2),t.YNc(5,J,4,0,"div",2)),2&n&&(t.xp6(2),t.Q6J("ngIf",!s.emptyAdoptMessage),t.xp6(1),t.Q6J("ngIf",!s.emptyRescueMessage),t.xp6(1),t.Q6J("ngIf",s.emptyAdoptMessage&&s.switcher),t.xp6(1),t.Q6J("ngIf",s.emptyRescueMessage&&!s.switcher))},dependencies:[c.mk,c.O5,v.s,C.o,M,O],styles:[".active[_ngcontent-%COMP%]{display:block}.inactive[_ngcontent-%COMP%]{display:none}.empty[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;margin-top:60px;margin-bottom:160px;text-align:center}.empty[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-width:380px}"]}),e})(),title:"Home"}];let A=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[g.Bz.forChild(H),g.Bz]}),e})();var Q=o(3546),j=o(7392),I=o(5112);let R=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.ez,A,l.kz,j.Ps,Q.QW,d.LD,I.m,r.UX]}),e})()}}]);