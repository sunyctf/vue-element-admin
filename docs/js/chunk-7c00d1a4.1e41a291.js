(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c00d1a4"],{1557:function(e,t,a){"use strict";var l=a("e9a5"),n=a.n(l);n.a},5442:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"goodsindex"},[a("el-row",{staticClass:"goodsindex-queryInfo",attrs:{gutter:20}},[a("el-col",{attrs:{xs:8,sm:6,md:6,lg:4,xl:4}},[a("el-input",{staticClass:"goodsindex-queryInfo-li",attrs:{clearable:"",size:"small",placeholder:"请输入产品名称"},model:{value:e.queryInfo.name,callback:function(t){e.$set(e.queryInfo,"name",t)},expression:"queryInfo.name"}})],1),a("el-col",{attrs:{xs:8,sm:6,md:6,lg:4,xl:4}},[a("el-select",{staticClass:"goodsindex-queryInfo-li",attrs:{size:"small",clearable:"",placeholder:"请选择产品分类"},model:{value:e.queryInfo.type,callback:function(t){e.$set(e.queryInfo,"type",t)},expression:"queryInfo.type"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.value,value:e.value}})})),1)],1),a("el-col",{attrs:{xs:6,sm:4,md:3,lg:2,xl:2}},[a("el-button",{staticClass:"goodsindex-queryInfo-li",attrs:{type:"primary",size:"small"}},[e._v("搜索")])],1)],1),a("el-row",{staticClass:"goodsindex-list",attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",size:"small"}},[a("el-table-column",{attrs:{type:"index",label:"序",width:"50"}}),a("el-table-column",{attrs:{prop:"date",label:"产品名称",width:"180"}}),a("el-table-column",{attrs:{prop:"name",label:"产品图片",width:"120"}}),a("el-table-column",{attrs:{prop:"name",label:"原件",width:"80"}}),a("el-table-column",{attrs:{prop:"name",label:"现价",width:"80"}}),a("el-table-column",{attrs:{prop:"name",label:"总量",width:"80"}}),a("el-table-column",{attrs:{prop:"name",label:"库存",width:"80"}}),a("el-table-column",{attrs:{prop:"name",label:"下架人",width:"140"}}),a("el-table-column",{attrs:{prop:"name",label:"下架时间",width:"180"}}),a("el-table-column",{attrs:{prop:"name",label:"下架原因",width:"220"}}),a("el-table-column",{attrs:{prop:"address",label:"操作"}})],1)],1)],1),a("el-row",{staticClass:"goodsindex-list",attrs:{gutter:20}},[a("el-col",{staticClass:"goodsindex-page-box",attrs:{span:24}},[a("el-pagination",{attrs:{"hide-on-single-page":!0,"current-page":e.queryInfo.page,"page-sizes":[10,20,50,100],"page-size":e.queryInfo.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:400},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)],1)},n=[],s={data:function(){return{queryInfo:{name:"",type:"",page:1,pageSize:10},options:[{label:1,value:"安心蔬菜"},{label:2,value:"新鲜牛奶"}],tableData:[]}},methods:{handleSizeChange:function(){},handleCurrentChange:function(){}}},o=s,r=(a("1557"),a("2877")),i=Object(r["a"])(o,l,n,!1,null,"27946105",null);t["default"]=i.exports},e9a5:function(e,t,a){}}]);