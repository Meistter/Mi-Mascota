"use strict";(self.webpackChunkmi_mascota=self.webpackChunkmi_mascota||[]).push([[536],{9536:(y,a,o)=>{o.r(a),o.d(a,{LostPetsModule:()=>P});var c=o(6895),l=o(2510),t=o(4650),p=o(770),r=o(5833),m=o(1143);function u(e,n){if(1&e&&(t.TgZ(0,"section",2)(1,"h1"),t._uU(2,"Mascotas Extraviadas"),t.qZA(),t.TgZ(3,"h2"),t._uU(4,"Ayuda una mascota a volver a su hogar"),t.qZA(),t._UZ(5,"app-rescue-cards",3),t.qZA()),2&e){const s=t.oxw();t.xp6(5),t.Q6J("lostDetail",s.lostDetail)("pets",s.pets)}}function g(e,n){1&e&&(t.TgZ(0,"div",4)(1,"h1"),t._uU(2,"No se encuentran registros para esta ubicaci\xf3n"),t.qZA(),t._UZ(3,"img",5),t.qZA())}const d=[{path:"",component:(()=>{class e{constructor(s,i){this.petService=s,this.locationService=i,this.lostDetail=!0,this.pets=[],this.petForFilter=[],this.emptyMessage=!1}ngOnInit(){setTimeout(()=>{this.pets=this.petService.getLostPets(),this.locationService.location$.subscribe(s=>{s&&(this.pets=this.petService.getLostPets(),this.emptyMessage=0==this.pets.length)})},1e3)}}return e.\u0275fac=function(s){return new(s||e)(t.Y36(p.O),t.Y36(r.a))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-lost-pets"]],decls:2,vars:2,consts:[["class","lost-pets-container",4,"ngIf"],["class","empty",4,"ngIf"],[1,"lost-pets-container"],[3,"lostDetail","pets"],[1,"empty"],["src","https://i.postimg.cc/zDy85GQb/sad-pug-dog-kawaii-dog-breeds-illustration-vector.jpg","alt",""]],template:function(s,i){1&s&&(t.YNc(0,u,6,2,"section",0),t.YNc(1,g,4,0,"div",1)),2&s&&(t.Q6J("ngIf",!i.emptyMessage),t.xp6(1),t.Q6J("ngIf",i.emptyMessage))},dependencies:[c.O5,m.o],styles:[".lost-pets-container[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column}.lost-pets-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:IBM Plex Sans KR;font-size:22px;font-weight:600;margin-top:22px}.lost-pets-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:Inter;font-size:14px;font-weight:400}.empty[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;margin-top:60px;margin-bottom:160px;text-align:center}.empty[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-width:380px}"]}),e})(),title:"Mascotas Perdidas"}];let f=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.Bz.forChild(d),l.Bz]}),e})();var h=o(5112);let P=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.ez,f,h.m]}),e})()}}]);