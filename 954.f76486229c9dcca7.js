"use strict";(self.webpackChunkmi_mascota=self.webpackChunkmi_mascota||[]).push([[954],{2954:(b,u,a)=>{a.r(u),a.d(u,{PetCategoriesModule:()=>Z});var l=a(6895),r=a(2510),t=a(4650),h=a(5833),C=a(770),M=a(691),d=a(2102),p=a(7392);function m(i,c){if(1&i&&(t.TgZ(0,"h1"),t._uU(1),t.qZA()),2&i){const n=t.oxw();t.xp6(1),t.hij("",n.categoryName,"s")}}function y(i,c){if(1&i){const n=t.EpF();t.TgZ(0,"li",20),t.NdJ("click",function(){const s=t.CHM(n).$implicit,g=t.oxw();return g.changeStatusMenu(),t.KtG(g.updateLocation(s))}),t._uU(1),t.qZA()}if(2&i){const n=c.$implicit;t.xp6(1),t.Oqu(n)}}const _=function(){return{filter:"all"}},P=function(){return{filter:"big"}},f=function(){return{filter:"regular"}},O=function(){return{filter:"small"}};function x(i,c){if(1&i){const n=t.EpF();t.TgZ(0,"article",21)(1,"b"),t._uU(2,"Tama\xf1o: "),t.qZA(),t.TgZ(3,"p",22),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return o.changeStatusSizeMenu(),o.closeCategoryMenu(),t.KtG(o.closeMenu())}),t._uU(4),t.qZA(),t.TgZ(5,"mat-icon",23),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return o.changeStatusSizeMenu(),o.closeCategoryMenu(),t.KtG(o.closeMenu())}),t._uU(6,"expand_more"),t.qZA(),t.TgZ(7,"ul",24)(8,"li",7),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.changeStatusSizeMenu())}),t._uU(9,"Todos"),t.qZA(),t.TgZ(10,"li",7),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.changeStatusSizeMenu())}),t._uU(11,"Grande"),t.qZA(),t.TgZ(12,"li",7),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.changeStatusSizeMenu())}),t._uU(13,"Mediano"),t.qZA(),t.TgZ(14,"li",7),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.changeStatusSizeMenu())}),t._uU(15,"Peque\xf1o"),t.qZA()()()}if(2&i){const n=t.oxw();t.xp6(4),t.Oqu(n.getFilterName()),t.xp6(3),t.Q6J("ngClass",n.statusSizeMenu?"active":"inactive"),t.xp6(1),t.Q6J("queryParams",t.DdM(6,_)),t.xp6(2),t.Q6J("queryParams",t.DdM(7,P)),t.xp6(2),t.Q6J("queryParams",t.DdM(8,f)),t.xp6(2),t.Q6J("queryParams",t.DdM(9,O))}}function v(i,c){if(1&i&&t._UZ(0,"app-cards",25),2&i){const n=t.oxw();t.Q6J("pets",n.pets)}}function z(i,c){1&i&&(t.TgZ(0,"div",26)(1,"h1"),t._uU(2,"No se encuentran registros para esta ubicaci\xf3n"),t.qZA(),t._UZ(3,"img",27),t.qZA())}const k=[{path:"",component:(()=>{class i{constructor(n,e,o,s,g){this.locationService=n,this.petService=e,this.route=o,this.router=s,this.categoryService=g,this.pets=[],this.MainPets=[],this.LocPets=[],this.locations=[],this.statusMenu=!1,this.statusCategoryMenu=!1,this.statusSizeMenu=!1,this.categoryName=void 0,this.categoryId=null,this.sizeFilter=null,this.breed="",this.location="",this.size="",this.emptyMessage=!1}ngOnInit(){this.locations=this.locationService.getLocations(),setTimeout(()=>{this.route.paramMap.subscribe(n=>{this.categoryId=n.get("id"),this.categoryId&&(this.pets=this.petService.getPetsByCategory(this.categoryId),this.categoryName=this.categoryService.getCategoryName(this.categoryId),this.emptyMessage=0==this.pets.length,null==this.categoryName&&this.router.navigate(["/none"]))}),this.locationService.location$.subscribe(n=>{this.sizeFilter="all",this.categoryId&&n&&(this.location=n,this.LocPets=this.petService.getPetsByCategory(this.categoryId),this.pets=this.LocPets,this.emptyMessage=0==this.pets.length),this.route.queryParamMap.subscribe(e=>{this.sizeFilter=e.get("filter"),this.pets=this.sizeFilter&&"all"!==this.sizeFilter?this.LocPets.filter(o=>o.size==this.sizeFilter):this.LocPets,this.emptyMessage=0==this.pets.length})})},1e3)}onClickEvent(n){var o=n.target.id;"category"!=o&&"location"!=o&&"size"!=o&&(this.closeMenu(),this.closeCategoryMenu(),this.closeSizeMenu())}getFilterName(){return"big"==this.sizeFilter?"Grande":"regular"==this.sizeFilter?"Mediano":"small"==this.sizeFilter?"Peque\xf1o":"Todos"}changeStatusMenu(){this.statusMenu=!this.statusMenu}changeStatusCategoryMenu(){this.statusCategoryMenu=!this.statusCategoryMenu}changeStatusSizeMenu(){this.statusSizeMenu=!this.statusSizeMenu}updateLocation(n){this.locationService.location$.next(n),this.location=n}closeMenu(){this.statusMenu=!1}closeCategoryMenu(){this.statusCategoryMenu=!1}closeSizeMenu(){this.statusSizeMenu=!1}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(h.a),t.Y36(C.O),t.Y36(r.gz),t.Y36(r.F0),t.Y36(M.H))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-pet-category"]],hostBindings:function(n,e){1&n&&t.NdJ("click",function(s){return e.onClickEvent(s)},!1,t.evT)},decls:33,vars:11,consts:[[1,"pet-search-container"],[4,"ngIf"],[1,"pet-search-content"],[1,"categoryMenu"],["id","category",3,"click"],["id","category",2,"font-size","20px","cursor","pointer",3,"click"],[1,"category-menu",3,"ngClass"],["routerLink","/pet-category/0",3,"queryParams","click"],["routerLink","/pet-category/1",3,"click"],["routerLink","/pet-category/2",3,"click"],["routerLink","/pet-category/3",3,"click"],["routerLink","/pet-category/4",3,"click"],[1,"locationMenu"],["id","location",3,"click"],["id","location",2,"font-size","20px","cursor","pointer",3,"click"],[1,"location-menu",3,"ngClass"],[3,"click",4,"ngFor","ngForOf"],["class","sizeMenu",4,"ngIf"],[3,"pets",4,"ngIf"],["class","empty",4,"ngIf"],[3,"click"],[1,"sizeMenu"],["id","size",3,"click"],["id","size",2,"font-size","20px","cursor","pointer",3,"click"],[1,"size-menu",3,"ngClass"],[3,"pets"],[1,"empty"],["src","https://i.postimg.cc/zDy85GQb/sad-pug-dog-kawaii-dog-breeds-illustration-vector.jpg","alt",""]],template:function(n,e){1&n&&(t.TgZ(0,"section",0),t.YNc(1,m,2,1,"h1",1),t.TgZ(2,"div",2)(3,"article",3)(4,"b"),t._uU(5,"Especie: "),t.qZA(),t.TgZ(6,"p",4),t.NdJ("click",function(){return e.changeStatusCategoryMenu(),e.closeMenu(),e.closeSizeMenu()}),t._uU(7),t.qZA(),t.TgZ(8,"mat-icon",5),t.NdJ("click",function(){return e.changeStatusCategoryMenu(),e.closeMenu(),e.closeSizeMenu()}),t._uU(9,"expand_more"),t.qZA(),t.TgZ(10,"ul",6)(11,"li",7),t.NdJ("click",function(){return e.changeStatusCategoryMenu()}),t._uU(12,"Perros"),t.qZA(),t.TgZ(13,"li",8),t.NdJ("click",function(){return e.changeStatusCategoryMenu()}),t._uU(14,"Gatos"),t.qZA(),t.TgZ(15,"li",9),t.NdJ("click",function(){return e.changeStatusCategoryMenu()}),t._uU(16,"Aves"),t.qZA(),t.TgZ(17,"li",10),t.NdJ("click",function(){return e.changeStatusCategoryMenu()}),t._uU(18,"Tortugas"),t.qZA(),t.TgZ(19,"li",11),t.NdJ("click",function(){return e.changeStatusCategoryMenu()}),t._uU(20,"Conejos"),t.qZA()()(),t.TgZ(21,"article",12)(22,"b"),t._uU(23,"Ubicaci\xf3n: "),t.qZA(),t.TgZ(24,"p",13),t.NdJ("click",function(){return e.changeStatusMenu(),e.closeCategoryMenu(),e.closeSizeMenu()}),t._uU(25),t.qZA(),t.TgZ(26,"mat-icon",14),t.NdJ("click",function(){return e.changeStatusMenu(),e.closeCategoryMenu(),e.closeSizeMenu()}),t._uU(27,"expand_more"),t.qZA(),t.TgZ(28,"ul",15),t.YNc(29,y,2,1,"li",16),t.qZA()(),t.YNc(30,x,16,10,"article",17),t.qZA()(),t.YNc(31,v,1,1,"app-cards",18),t.YNc(32,z,4,0,"div",19)),2&n&&(t.xp6(1),t.Q6J("ngIf",e.categoryName),t.xp6(6),t.Oqu(e.categoryName),t.xp6(3),t.Q6J("ngClass",e.statusCategoryMenu?"active":"inactive"),t.xp6(1),t.Q6J("queryParams",t.DdM(10,_)),t.xp6(14),t.Oqu(e.location),t.xp6(3),t.Q6J("ngClass",e.statusMenu?"active":"inactive"),t.xp6(1),t.Q6J("ngForOf",e.locations),t.xp6(1),t.Q6J("ngIf",e.sizeFilter),t.xp6(1),t.Q6J("ngIf",!e.emptyMessage),t.xp6(1),t.Q6J("ngIf",e.emptyMessage))},dependencies:[l.mk,l.sg,l.O5,r.rH,d.s,p.Hw],styles:[".pet-search-container[_ngcontent-%COMP%]{display:flex;align-items:left;flex-direction:column;margin:12px 0 10px 20px}.pet-search-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:IBM Plex Sans KR;font-size:30px;font-weight:600;margin-left:2px}.pet-search-container[_ngcontent-%COMP%]   .pet-search-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap}.pet-search-container[_ngcontent-%COMP%]   .pet-search-content[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{display:flex;flex-direction:row;font-family:Inter;font-size:14px;font-weight:400;margin-right:10px;margin-bottom:4px}.pet-search-container[_ngcontent-%COMP%]   .pet-search-content[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-decoration:underline;cursor:pointer}.pet-search-container[_ngcontent-%COMP%]   .pet-search-content[_ngcontent-%COMP%]   .locationMenu[_ngcontent-%COMP%]{position:relative}.pet-search-container[_ngcontent-%COMP%]   .pet-search-content[_ngcontent-%COMP%]   .locationMenu[_ngcontent-%COMP%]   .location-menu[_ngcontent-%COMP%]{position:absolute;z-index:5;width:120px;height:auto;top:18px;right:0;transition:opacity .2s ease-in-out}.pet-search-container[_ngcontent-%COMP%]   .pet-search-content[_ngcontent-%COMP%]   .locationMenu[_ngcontent-%COMP%]   .location-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background-color:#fff;width:100%;height:30px;padding:4px;text-align:center;font-size:14px;text-decoration:none;list-style:none;border:solid;border-color:var(--menu-border-color);border-width:1px;transition:all .15s ease-out;cursor:pointer}.pet-search-container[_ngcontent-%COMP%]   .pet-search-content[_ngcontent-%COMP%]   .locationMenu[_ngcontent-%COMP%]   .location-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:var(--navbar-selected-first)}.pet-search-container[_ngcontent-%COMP%]   .pet-search-content[_ngcontent-%COMP%]   .categoryMenu[_ngcontent-%COMP%]{position:relative}.pet-search-container[_ngcontent-%COMP%]   .pet-search-content[_ngcontent-%COMP%]   .categoryMenu[_ngcontent-%COMP%]   .category-menu[_ngcontent-%COMP%]{position:absolute;z-index:5;width:102px;height:auto;top:18px;right:0;transition:opacity .2s ease-in-out}.pet-search-container[_ngcontent-%COMP%]   .pet-search-content[_ngcontent-%COMP%]   .categoryMenu[_ngcontent-%COMP%]   .category-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background-color:#fff;width:100%;height:30px;padding:4px;text-align:center;font-size:14px;text-decoration:none;list-style:none;border:solid;border-color:var(--menu-border-color);border-width:1px;transition:all .15s ease-out;cursor:pointer}.pet-search-container[_ngcontent-%COMP%]   .pet-search-content[_ngcontent-%COMP%]   .categoryMenu[_ngcontent-%COMP%]   .category-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:var(--navbar-selected-first)}.pet-search-container[_ngcontent-%COMP%]   .pet-search-content[_ngcontent-%COMP%]   .sizeMenu[_ngcontent-%COMP%]{position:relative}.pet-search-container[_ngcontent-%COMP%]   .pet-search-content[_ngcontent-%COMP%]   .sizeMenu[_ngcontent-%COMP%]   .size-menu[_ngcontent-%COMP%]{position:absolute;z-index:5;width:102px;height:auto;top:18px;right:0;transition:opacity .2s ease-in-out}.pet-search-container[_ngcontent-%COMP%]   .pet-search-content[_ngcontent-%COMP%]   .sizeMenu[_ngcontent-%COMP%]   .size-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background-color:#fff;width:100%;height:30px;padding:4px;text-align:center;font-size:14px;text-decoration:none;list-style:none;border:solid;border-color:var(--menu-border-color);border-width:1px;transition:all .15s ease-out;cursor:pointer}.pet-search-container[_ngcontent-%COMP%]   .pet-search-content[_ngcontent-%COMP%]   .sizeMenu[_ngcontent-%COMP%]   .size-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:var(--navbar-selected-first)}.active[_ngcontent-%COMP%]{opacity:1!important;visibility:visible}.inactive[_ngcontent-%COMP%]{opacity:0!important;visibility:hidden}@media (width >= 1024px){.locationMenu[_ngcontent-%COMP%]{display:none!important}}.empty[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;margin-top:60px;margin-bottom:160px;text-align:center}.empty[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-width:380px}"]}),i})(),title:"Categoria"}];let T=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[r.Bz.forChild(k),r.Bz]}),i})();var S=a(5112);let Z=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[l.ez,T,S.m,p.Ps]}),i})()}}]);