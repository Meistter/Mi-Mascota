"use strict";(self.webpackChunkmi_mascota=self.webpackChunkmi_mascota||[]).push([[390],{4390:(x,s,o)=>{o.r(s),o.d(s,{PetCategoriesModule:()=>y});var c=o(6895),a=o(3060),e=o(4650),g=o(8173),l=o(691),p=o(3124),h=o(2102);function u(t,i){if(1&t&&(e.TgZ(0,"h2")(1,"b"),e._uU(2,"Tama\xf1o: "),e.qZA(),e.TgZ(3,"p"),e._uU(4),e.qZA()()),2&t){const n=e.oxw();e.xp6(4),e.Oqu(n.getFilterName())}}const m=[{path:"",component:(()=>{class t{constructor(n,r,C,P){this.petService=n,this.route=r,this.router=C,this.categoryService=P,this.pets=[],this.categoryName=void 0,this.categoryId=null,this.sizeFilter=null,this.breed="Perro",this.location="Barquisimeto",this.size="Peque\xf1o"}ngOnInit(){this.route.paramMap.subscribe(n=>{this.categoryId=n.get("id"),this.categoryId&&(this.pets=this.petService.getPetsByCategory(this.categoryId),this.categoryName=this.categoryService.getCategoryName(this.categoryId)),null==this.categoryName&&this.router.navigate(["/none"])}),this.route.queryParamMap.subscribe(n=>{this.sizeFilter=n.get("filter"),this.categoryId&&(this.pets=this.petService.getPetsByCategory(this.categoryId))})}getFilterName(){return"big"==this.sizeFilter?"Grande":"regular"==this.sizeFilter?"Mediano":"small"==this.sizeFilter&&"Peque\xf1o"}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(g.O),e.Y36(a.gz),e.Y36(a.F0),e.Y36(l.H))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-pet-category"]],decls:17,vars:5,consts:[[1,"pet-search-container"],[1,"pet-search-content"],[4,"ngIf"],[3,"pets"]],template:function(n,r){1&n&&(e.TgZ(0,"section",0)(1,"h1"),e._uU(2),e.qZA(),e.TgZ(3,"div",1)(4,"h2")(5,"b"),e._uU(6,"Especie: "),e.qZA(),e.TgZ(7,"p"),e._uU(8),e.qZA()(),e.TgZ(9,"h2")(10,"b"),e._uU(11,"Ubicaci\xf3n: "),e.qZA(),e.TgZ(12,"p"),e._uU(13),e.qZA()(),e.YNc(14,u,5,1,"h2",2),e.qZA()(),e._UZ(15,"app-cards",3)(16,"app-related")),2&n&&(e.xp6(2),e.hij("",r.categoryName,"s"),e.xp6(6),e.Oqu(r.categoryName),e.xp6(5),e.Oqu(r.location),e.xp6(1),e.Q6J("ngIf",r.sizeFilter),e.xp6(1),e.Q6J("pets",r.pets))},dependencies:[c.O5,p.f,h.s],styles:[".pet-search-container[_ngcontent-%COMP%]{display:flex;align-items:left;flex-direction:column;margin:12px 0 10px 20px}.pet-search-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:IBM Plex Sans KR;font-size:30px;font-weight:600;margin-left:2px}.pet-search-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{display:flex;flex-direction:row;font-family:Inter;font-size:13px;font-weight:400;margin-right:10px;margin-bottom:4px}.pet-search-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-decoration:underline}.pet-search-container[_ngcontent-%COMP%]   .pet-search-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap}"]}),t})(),title:"Categoria"}];let d=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[a.Bz.forChild(m),a.Bz]}),t})();var f=o(5112);let y=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.ez,d,f.m]}),t})()}}]);