(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0cfa869f"],{"5c21":function(t,e,o){},81192:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"CouponList"},[o("el-row",{staticClass:"CouponList-Info",attrs:{gutter:20}},[o("el-col",{attrs:{xs:6,sm:4,md:3,lg:2,xl:2,offset:1}},[o("el-button",{staticClass:"CouponList-Info-li",attrs:{type:"primary",size:"small"},on:{click:function(e){t.CouponListShow=!0}}},[t._v("添加优惠券")])],1)],1),o("el-row",{staticClass:"CouponList-list"},[o("el-col",{attrs:{span:24}},[o("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[o("el-table-column",{attrs:{type:"index",label:"序",width:"50"}}),o("el-table-column",{attrs:{prop:"date",label:"优惠券名称",width:"220"}}),o("el-table-column",{attrs:{prop:"date",label:"优惠金额",width:"220"}}),o("el-table-column",{attrs:{prop:"name",label:"最低满减条件",width:"220"}}),o("el-table-column",{attrs:{prop:"name",label:"开始时间",width:"220"}}),o("el-table-column",{attrs:{prop:"name",label:"结束时间",width:"220"}}),o("el-table-column",{attrs:{prop:"coupontype",label:"有效期描述",width:"220"}}),o("el-table-column",{attrs:{prop:"name",label:"上线",width:"120"}}),o("el-table-column",{attrs:{prop:"address",label:"操作"}})],1)],1)],1),o("el-dialog",{attrs:{title:"添加优惠券",visible:t.CouponListShow},on:{"update:visible":function(e){t.CouponListShow=e}}},[o("el-form",{ref:"CouponListForm",attrs:{model:t.CouponListForm,rules:t.CouponListRules}},[o("el-form-item",{attrs:{label:"优惠券名称","label-width":t.CouponListWidth,prop:"name"}},[o("el-input",{attrs:{autocomplete:"off",placeholder:"请输入优惠券名称"},model:{value:t.CouponListForm.name,callback:function(e){t.$set(t.CouponListForm,"name",e)},expression:"CouponListForm.name"}})],1),o("el-form-item",{attrs:{label:"优惠券金额","label-width":t.CouponListWidth,prop:"amount"}},[o("el-input-number",{attrs:{precision:2,step:.1,min:.1,max:1e3},model:{value:t.CouponListForm.amount,callback:function(e){t.$set(t.CouponListForm,"amount",e)},expression:"CouponListForm.amount"}})],1),o("el-form-item",{attrs:{label:"最低满减金额","label-width":t.CouponListWidth,prop:"sum"}},[o("el-input-number",{attrs:{precision:2,step:.1,min:0,max:1e3},model:{value:t.CouponListForm.sum,callback:function(e){t.$set(t.CouponListForm,"sum",e)},expression:"CouponListForm.sum"}})],1),o("el-form-item",{attrs:{label:"开始时间","label-width":t.CouponListWidth,prop:"start"}},[o("el-date-picker",{attrs:{type:"date",placeholder:"选择开始时间"},model:{value:t.CouponListForm.start,callback:function(e){t.$set(t.CouponListForm,"start",e)},expression:"CouponListForm.start"}})],1),o("el-form-item",{attrs:{label:"结束时间","label-width":t.CouponListWidth,prop:"end"}},[o("el-date-picker",{attrs:{type:"date",placeholder:"选择结束时间"},model:{value:t.CouponListForm.end,callback:function(e){t.$set(t.CouponListForm,"end",e)},expression:"CouponListForm.end"}})],1),o("el-form-item",{attrs:{label:"有效期描述","label-width":t.CouponListWidth,prop:"message"}},[o("el-input",{attrs:{autocomplete:"off",placeholder:"请输入使用须知"},model:{value:t.CouponListForm.message,callback:function(e){t.$set(t.CouponListForm,"message",e)},expression:"CouponListForm.message"}})],1)],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.CouponListSubmit("CouponListForm")}}},[t._v("添 加")])],1)],1)],1)},a=[],l={data:function(){return{tableData:[],CouponListShow:!1,CouponListForm:{name:"",start:"",end:"",amount:.1,sum:0,message:""},CouponListRules:{name:[{required:!0,message:"请输入优惠券类型",trigger:"blur"},{min:2,max:10,message:"长度在 2 到 10 个字符",trigger:"blur"}],message:[{required:!0,message:"请输入使用有限期描述",trigger:"blur"},{min:2,max:25,message:"长度在 2 到 25 个字符",trigger:"blur"}],amount:[{required:!0,message:"请输入优惠券金额",trigger:"blur"}],sum:[{required:!0,message:"请输入优惠券最低满减金额",trigger:"blur"}],start:[{required:!0,message:"请选择开始时间",trigger:"blur"}],end:[{required:!0,message:"请选择结束时间",trigger:"blur"}]},CouponListWidth:"120px"}},methods:{CouponListSubmit:function(t){this.$refs[t].validate((function(t){if(!t)return console.log("error submit!!"),!1;alert("submit!")}))}}},r=l,i=(o("cf4c"),o("2877")),n=Object(i["a"])(r,s,a,!1,null,"e9ad2c3a",null);e["default"]=n.exports},cf4c:function(t,e,o){"use strict";var s=o("5c21"),a=o.n(s);a.a}}]);