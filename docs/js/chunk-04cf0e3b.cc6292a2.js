(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04cf0e3b"],{5937:function(e,t,a){},"686f":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Nav"},[a("el-row",{staticClass:"Nav-Info",attrs:{gutter:20}},[a("el-col",{attrs:{xs:6,sm:4,md:3,lg:2,xl:2,offset:1}},[a("el-button",{staticClass:"Nav-Info-li",attrs:{type:"primary",size:"small"},on:{click:function(t){e.NavShow=!0}}},[e._v("添加")])],1)],1),a("el-row",{staticClass:"Nav-list"},[a("el-col",{attrs:{span:24}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{type:"index",label:"序",width:"50"}}),a("el-table-column",{attrs:{prop:"date",label:"名称",width:"220"}}),a("el-table-column",{attrs:{prop:"name",label:"图片",width:"120"}}),a("el-table-column",{attrs:{prop:"name",label:"跳转地址"}}),a("el-table-column",{attrs:{prop:"name",label:"排序",width:"120"}}),a("el-table-column",{attrs:{prop:"Navdress",label:"操作"}})],1)],1)],1),a("el-dialog",{attrs:{title:"添加导航",visible:e.NavShow},on:{"update:visible":function(t){e.NavShow=t}}},[a("el-form",{ref:"NavForm",attrs:{model:e.NavForm,rules:e.NavRules}},[a("el-form-item",{attrs:{label:"导航名称","label-width":e.NavWidth,prop:"name"}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入导航名称"},model:{value:e.NavForm.name,callback:function(t){e.$set(e.NavForm,"name",t)},expression:"NavForm.name"}})],1),a("el-form-item",{attrs:{label:"导航图片","label-width":e.NavWidth,prop:"url"}},[a("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/","list-type":"picture-card","on-preview":e.handlePictureCardPreview,"on-remove":e.handleRemove}},[a("i",{staticClass:"el-icon-plus"})]),a("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1),a("el-form-item",{attrs:{label:"跳转类型","label-width":e.NavWidth,prop:"type"}},[a("el-select",{attrs:{placeholder:"请选择跳转类型"},model:{value:e.NavForm.type,callback:function(t){e.$set(e.NavForm,"type",t)},expression:"NavForm.type"}},[a("el-option",{attrs:{label:"外部连接",value:0}}),a("el-option",{attrs:{label:"内部连接",value:1}})],1)],1),a("el-form-item",{attrs:{label:"外部链接地址","label-width":e.NavWidth,prop:"linl"}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入外部链接地址"},model:{value:e.NavForm.link,callback:function(t){e.$set(e.NavForm,"link",t)},expression:"NavForm.link"}})],1),a("el-form-item",{attrs:{label:"内部链接地址","label-width":e.NavWidth,prop:"linl"}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入内部链接地址"},model:{value:e.NavForm.router,callback:function(t){e.$set(e.NavForm,"router",t)},expression:"NavForm.router"}})],1),a("el-form-item",{attrs:{label:"排序","label-width":e.NavWidth,prop:"sort"}},[a("el-input-number",{attrs:{step:1,"step-strictly":""},model:{value:e.NavForm.sort,callback:function(t){e.$set(e.NavForm,"sort",t)},expression:"NavForm.sort"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.NavSubmit("NavForm")}}},[e._v("添 加")])],1)],1)],1)},r=[],o={data:function(){var e=function(e,t,a){var l=/^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/;""===t?a(new Error("请输入链接地址")):l.test(t)?a():a(new Error("请输入正确的网址"))};return{tableData:[],dialogImageUrl:"",dialogVisible:!1,NavShow:!1,NavForm:{name:"",type:"",linl:"",url:"",sort:1},NavRules:{name:[{required:!0,message:"请输入轮播图名称",trigger:"blur"},{min:1,max:10,message:"长度为 1~10 个字符",trigger:"blur"}],type:[{required:!0,message:"请选择跳转类型",trigger:"change"}],activity:[{required:!0,message:"请选择活动类型",trigger:"change"}],url:[{required:!0,message:"请选择图片",trigger:"change"}],linl:[{required:!0,validator:e,trigger:"blur"}],sort:[{required:!0,message:"请输入排序权重",trigger:"blur"}]},NavWidth:"120px"}},methods:{NavSubmit:function(e){this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")}))},handleRemove:function(e,t){console.log(e,t)},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0}}},i=o,s=(a("d85e"),a("2877")),n=Object(s["a"])(i,l,r,!1,null,"13047712",null);t["default"]=n.exports},d85e:function(e,t,a){"use strict";var l=a("5937"),r=a.n(l);r.a}}]);