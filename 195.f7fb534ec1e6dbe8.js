"use strict";(self.webpackChunkmi_mascota=self.webpackChunkmi_mascota||[]).push([[195],{6195:(R,m,o)=>{o.r(m),o.d(m,{HomeModule:()=>L});var c=o(6895),p=o(9485),u=o(3060),t=o(4650),f=o(8173),v=o(2102),w=o(1143),r=o(8879),C=o(7445);let b=(()=>{class e{constructor(){this.slides=[{url_mobile:"https://i.postimg.cc/BbzRfxdD/petheade4.webp",url_full:"https://i.postimg.cc/BbzRfxdD/petheade4.webp",alt:"pet-header-img"},{url_mobile:"https://i.postimg.cc/RV3jQDHT/mascotas-Header-min.jpg",url_full:"https://i.postimg.cc/RV3jQDHT/mascotas-Header-min.jpg",alt:"pet-header-img"},{url_mobile:"https://i.postimg.cc/xjpwm2cC/pet2header-min.jpg",url_full:"https://i.postimg.cc/xjpwm2cC/pet2header-min.jpg",alt:"pet-header-img"},{url_mobile:"https://i.postimg.cc/tJJ8crmp/gato.webp",url_full:"https://i.postimg.cc/tJJ8crmp/gato.webp",alt:"pet-header-img"}]}getSlides(){return this.slides}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function M(e,s){if(1&e&&(t.TgZ(0,"a",4),t._UZ(1,"img",5),t.qZA()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.Q6J("src",n.url_mobile,t.LSH)}}function S(e,s){1&e&&t.YNc(0,M,2,1,"ng-template",3)}r.ZP.use([r.W_,r.tl,r.LW,r.s5]);let x=(()=>{class e{constructor(n){this.slideService=n,this.slides=[],this.config={loop:!0,slidesPerView:1,spaceBetween:0,navigation:!1,pagination:{clickable:!0},scrollbar:{draggable:!0}}}ngOnInit(){this.slides=this.slideService.getSlides()}automatico(n){(0,C.F)(25e3).subscribe(()=>{n.slideNext(850)})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(b))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-carousel"]],decls:3,vars:2,consts:[[1,"carousel-container"],[3,"config","swiper"],[4,"ngFor","ngForOf"],["swiperSlide",""],["target","_blank",3,"href"],["alt","foto",1,"swiper-image",3,"src"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"swiper",1),t.NdJ("swiper",function(h){return i.automatico(h)}),t.YNc(2,S,1,0,null,2),t.qZA()()),2&n&&(t.xp6(1),t.Q6J("config",i.config),t.xp6(1),t.Q6J("ngForOf",i.slides))},dependencies:[c.sg,p.nF,p.YC],styles:[".swiper-image[_ngcontent-%COMP%]{width:100%!important;height:182px!important;display:block!important;object-fit:cover;padding:0;margin-bottom:-6px}@media (width >= 1024px){.swiper-image[_ngcontent-%COMP%]{height:380px!important}}"]}),e})();var l=o(4006),F=o(5833),g=o(9549),d=o(4385),O=o(3238);function P(e,s){if(1&e&&(t.TgZ(0,"mat-option",7),t._uU(1),t.qZA()),2&e){const n=s.$implicit;t.Q6J("value",n),t.xp6(1),t.hij(" ",n," ")}}let _=(()=>{class e{constructor(n){this.locationService=n,this.locations=[],this.btnIzquierda=!0,this.btnDerecha=!1,this.locationList=new l.NI(""),this.switcherEvent=new t.vpe,this.switcherLocationEvent=new t.vpe}ngOnInit(){this.locations=this.locationService.getLocations()}activarBtnIzquierda(){!this.btnIzquierda&&this.btnDerecha&&this.sendSwitchMessage(),this.btnIzquierda=!0,this.btnDerecha=!1}activarBtnDerecha(){!this.btnDerecha&&this.btnIzquierda&&this.sendSwitchMessage(),this.btnIzquierda=!1,this.btnDerecha=!0}sendSwitchMessage(){this.switcherEvent.emit()}sendSwitchLocationMessage(){this.locationList.value&&this.switcherLocationEvent.emit(this.locationList.value)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(F.a))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-switcher"]],outputs:{switcherEvent:"switcherEvent",switcherLocationEvent:"switcherLocationEvent"},decls:11,vars:4,consts:[[1,"switcher-container"],[1,"filter"],["disableRipple","",3,"formControl","selectionChange"],[3,"value",4,"ngFor","ngForOf"],[1,"switcher__buttons"],[1,"button-left",3,"ngClass","click"],[1,"button-right",3,"ngClass","click"],[3,"value"]],template:function(n,i){1&n&&(t.TgZ(0,"section",0)(1,"mat-form-field",1)(2,"mat-label"),t._uU(3,"Filtrar ubicaci\xf3n"),t.qZA(),t.TgZ(4,"mat-select",2),t.NdJ("selectionChange",function(){return i.sendSwitchLocationMessage()}),t.YNc(5,P,2,2,"mat-option",3),t.qZA()(),t.TgZ(6,"div",4)(7,"button",5),t.NdJ("click",function(){return i.activarBtnIzquierda()}),t._uU(8,"Adoptar"),t.qZA(),t.TgZ(9,"button",6),t.NdJ("click",function(){return i.activarBtnDerecha()}),t._uU(10,"Rescatar"),t.qZA()()()),2&n&&(t.xp6(4),t.Q6J("formControl",i.locationList),t.xp6(1),t.Q6J("ngForOf",i.locations),t.xp6(2),t.Q6J("ngClass",i.btnIzquierda?"active":"inactive"),t.xp6(2),t.Q6J("ngClass",i.btnDerecha?"active":"inactive"))},dependencies:[c.mk,c.sg,g.KE,g.hX,d.gD,O.ey,l.JJ,l.oH],styles:[".switcher-container[_ngcontent-%COMP%]{width:100%;height:60px;padding:18px 5vw;margin-top:6px;margin-bottom:20px;display:flex;justify-content:space-between}.switcher-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:56%;min-width:130px;max-width:220px;margin-right:6px}.switcher-container[_ngcontent-%COMP%]   .switcher__buttons[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:right;margin-top:28px}.switcher-container[_ngcontent-%COMP%]   .switcher__buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:12.5px;color:#000;width:70px;height:38px;margin:0;padding:0;border:solid;border-color:#000;border-width:1px;cursor:pointer}.switcher-container[_ngcontent-%COMP%]   .switcher__buttons[_ngcontent-%COMP%]   .button-left[_ngcontent-%COMP%]{border-radius:4px 0 0 4px;border-right:none}.switcher-container[_ngcontent-%COMP%]   .switcher__buttons[_ngcontent-%COMP%]   .button-right[_ngcontent-%COMP%]{border-radius:0 4px 4px 0}.active[_ngcontent-%COMP%]{background-color:var(--background-gray);font-weight:600;box-shadow:1px 1px 5px #000;font-size:13.2px!important}.inactive[_ngcontent-%COMP%]{background-color:#fff}@media (width >= 1024px){.filter[_ngcontent-%COMP%]{display:none}.switcher-container[_ngcontent-%COMP%]{justify-content:center}}"]}),e})();const y=[{path:"",component:(()=>{class e{constructor(n){this.petService=n,this.pets=[],this.petForFilter=[],this.petsRescue=[],this.petsRescueForFilter=[],this.switcher=!0}ngOnInit(){this.pets=this.petService.getAdoptionPets(),this.petForFilter=this.petService.getAdoptionPets(),this.petsRescue=this.petService.getRescuePets(),this.petsRescueForFilter=this.petService.getRescuePets()}switchComponents(){this.switcher=!this.switcher}switchLocation(n){this.petForFilter=this.pets.filter(i=>i.location==n),this.petsRescueForFilter=this.petsRescue.filter(i=>i.location==n)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(f.O))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home"]],decls:4,vars:4,consts:[[3,"switcherEvent","switcherLocationEvent"],[3,"ngClass","pets"]],template:function(n,i){1&n&&(t._UZ(0,"app-carousel"),t.TgZ(1,"app-switcher",0),t.NdJ("switcherEvent",function(){return i.switchComponents()})("switcherLocationEvent",function(h){return i.switchLocation(h)}),t.qZA(),t._UZ(2,"app-cards",1)(3,"app-rescue-cards",1)),2&n&&(t.xp6(2),t.Q6J("ngClass",i.switcher?"active":"inactive")("pets",i.petForFilter),t.xp6(1),t.Q6J("ngClass",i.switcher?"inactive":"active")("pets",i.petsRescueForFilter))},dependencies:[c.mk,v.s,w.o,x,_],styles:[".active[_ngcontent-%COMP%]{display:block}.inactive[_ngcontent-%COMP%]{display:none}"]}),e})(),title:"Home"}];let J=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.Bz.forChild(y),u.Bz]}),e})();var T=o(3546),H=o(7392),Z=o(5112);let L=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.ez,J,p.kz,H.Ps,T.QW,d.LD,Z.m,l.UX]}),e})()}}]);