"use strict";(self.webpackChunkmi_mascota=self.webpackChunkmi_mascota||[]).push([[195],{6195:(z,m,s)=>{s.r(m),s.d(m,{HomeModule:()=>J});var r=s(6895),l=s(9485),u=s(3060),t=s(4650),d=s(8173),f=s(2102),v=s(1143),c=s(8879),C=s(7445);let w=(()=>{class e{constructor(){this.slides=[{url_mobile:"https://i.postimg.cc/8z4n2gr8/mascotas-Header.jpg",url_full:"https://i.postimg.cc/8z4n2gr8/mascotas-Header.jpg",alt:"pet-header-img"},{url_mobile:"https://i.postimg.cc/7PV4xdzV/pet2header-min.jpg",url_full:"https://i.postimg.cc/7PV4xdzV/pet2header-min.jpg",alt:"pet-header-img"},{url_mobile:"https://i.postimg.cc/N03sHXGk/gato.webp",url_full:"https://i.postimg.cc/N03sHXGk/gato.webp",alt:"pet-header-img"},{url_mobile:"https://i.postimg.cc/mD7bNrtf/petheade4.webp",url_full:"https://i.postimg.cc/mD7bNrtf/petheade4.webp",alt:"pet-header-img"},{url_mobile:"https://i.postimg.cc/50qksXZN/banner-notext-min.jpg",url_full:"https://i.postimg.cc/50qksXZN/banner-notext-min.jpg",alt:"pet-header-img"}]}getSlides(){return this.slides}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function b(e,i){if(1&e&&(t.TgZ(0,"a",4),t._UZ(1,"img",5),t.qZA()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.Q6J("src",n.url_mobile,t.LSH)}}function M(e,i){1&e&&t.YNc(0,b,2,1,"ng-template",3)}c.ZP.use([c.W_,c.tl,c.LW,c.s5]);let _=(()=>{class e{constructor(n){this.slideService=n,this.slides=[],this.config={loop:!0,slidesPerView:1,spaceBetween:0,navigation:!1,pagination:{clickable:!0},scrollbar:{draggable:!0}}}ngOnInit(){this.slides=this.slideService.getSlides()}automatico(n){(0,C.F)(12e3).subscribe(()=>{n.slideNext(850)})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(w))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-carousel"]],decls:3,vars:2,consts:[[1,"carousel-container"],[3,"config","swiper"],[4,"ngFor","ngForOf"],["swiperSlide",""],["target","_blank",3,"href"],["alt","foto",1,"swiper-image",3,"src"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"swiper",1),t.NdJ("swiper",function(p){return o.automatico(p)}),t.YNc(2,M,1,0,null,2),t.qZA()()),2&n&&(t.xp6(1),t.Q6J("config",o.config),t.xp6(1),t.Q6J("ngForOf",o.slides))},dependencies:[r.sg,l.nF,l.YC],styles:[".swiper-image[_ngcontent-%COMP%]{width:100%!important;height:182px!important;display:block!important;object-fit:cover;padding:0;margin-bottom:-6px}"]}),e})();var h=s(9549),g=s(4385),S=s(3238);function x(e,i){if(1&e&&(t.TgZ(0,"mat-option",6),t._uU(1),t.qZA()),2&e){const n=i.$implicit;t.Q6J("value",n.value),t.xp6(1),t.hij(" ",n.value," ")}}let O=(()=>{class e{constructor(){this.locations=[{value:"Barquisimeto"},{value:"Valencia"},{value:"Maracaibo"},{value:"Caracas"},{value:"Texas"}],this.selected="Barquisimeto",this.btnIzquierda=!1,this.btnDerecha=!0,this.switcherEvent=new t.vpe}activarBtnIzquierda(){this.btnIzquierda=!0,this.btnDerecha=!1,this.sendSwitchMessage()}activarBtnDerecha(){this.btnIzquierda=!1,this.btnDerecha=!0,this.sendSwitchMessage()}sendSwitchMessage(){this.switcherEvent.emit()}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-switcher"]],outputs:{switcherEvent:"switcherEvent"},decls:11,vars:4,consts:[[1,"switcher-container"],["disableRipple","",3,"value","valueChange"],[3,"value",4,"ngFor","ngForOf"],[1,"switcher__buttons"],[1,"button-left",3,"ngClass","click"],[1,"button-right",3,"ngClass","click"],[3,"value"]],template:function(n,o){1&n&&(t.TgZ(0,"section",0)(1,"mat-form-field")(2,"mat-label"),t._uU(3,"Ubicaci\xf3n"),t.qZA(),t.TgZ(4,"mat-select",1),t.NdJ("valueChange",function(p){return o.selected=p}),t.YNc(5,x,2,2,"mat-option",2),t.qZA()(),t.TgZ(6,"div",3)(7,"button",4),t.NdJ("click",function(){return o.activarBtnIzquierda()}),t._uU(8,"Adoptar"),t.qZA(),t.TgZ(9,"button",5),t.NdJ("click",function(){return o.activarBtnDerecha()}),t._uU(10,"Rescatar"),t.qZA()()()),2&n&&(t.xp6(4),t.Q6J("value",o.selected),t.xp6(1),t.Q6J("ngForOf",o.locations),t.xp6(2),t.Q6J("ngClass",o.btnIzquierda?"active":"inactive"),t.xp6(2),t.Q6J("ngClass",o.btnDerecha?"active":"inactive"))},dependencies:[r.mk,r.sg,h.KE,h.hX,g.gD,S.ey],styles:[".switcher-container[_ngcontent-%COMP%]{width:100%;height:60px;padding:18px;margin-top:6px;margin-bottom:20px;display:flex;justify-content:space-between}.switcher-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:56%;min-width:130px;max-width:220px;margin-right:6px}.switcher-container[_ngcontent-%COMP%]   .switcher__buttons[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:right;margin-top:28px}.switcher-container[_ngcontent-%COMP%]   .switcher__buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:13px;font-weight:600;color:#000;width:70px;height:38px;margin:0;padding:0;border:solid;border-color:#000;border-width:1px;cursor:pointer}.switcher-container[_ngcontent-%COMP%]   .switcher__buttons[_ngcontent-%COMP%]   .button-left[_ngcontent-%COMP%]{border-radius:4px 0 0 4px;border-right:none}.switcher-container[_ngcontent-%COMP%]   .switcher__buttons[_ngcontent-%COMP%]   .button-right[_ngcontent-%COMP%]{border-radius:0 4px 4px 0}.active[_ngcontent-%COMP%]{background-color:var(--background-gray)}.inactive[_ngcontent-%COMP%]{background-color:#fff}"]}),e})();const P=[{path:"",component:(()=>{class e{constructor(n){this.petService=n,this.pets=[],this.petsRescue=[],this.switcher=!1}ngOnInit(){this.pets=this.petService.getAdoptionPets(),this.petsRescue=this.petService.getRescuePets()}switchComponents(){this.switcher=!this.switcher}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(d.O))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home"]],decls:4,vars:4,consts:[[3,"switcherEvent"],[3,"ngClass","pets"]],template:function(n,o){1&n&&(t._UZ(0,"app-carousel"),t.TgZ(1,"app-switcher",0),t.NdJ("switcherEvent",function(){return o.switchComponents()}),t.qZA(),t._UZ(2,"app-cards",1)(3,"app-rescue-cards",1)),2&n&&(t.xp6(2),t.Q6J("ngClass",o.switcher?"active":"inactive")("pets",o.pets),t.xp6(1),t.Q6J("ngClass",o.switcher?"inactive":"active")("pets",o.petsRescue))},dependencies:[r.mk,f.s,v.o,_,O],styles:[".active[_ngcontent-%COMP%]{display:block}.inactive[_ngcontent-%COMP%]{display:none}"]}),e})(),title:"Home"}];let y=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.Bz.forChild(P),u.Bz]}),e})();var Z=s(3546),T=s(7392),H=s(5112);let J=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[r.ez,y,l.kz,T.Ps,Z.QW,g.LD,H.m]}),e})()}}]);