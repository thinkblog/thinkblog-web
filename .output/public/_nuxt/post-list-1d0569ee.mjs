var C=Object.defineProperty,m=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var p=(e,t,a)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))f.call(t,a)&&p(e,a,t[a]);if(s)for(var a of s(t))z.call(t,a)&&p(e,a,t[a]);return e},u=(e,t)=>m(e,b(t));import{_ as D,d as h,P as $,b as l,c as F,e as n,w as r,f as v,o as x}from"./entry-16671c3d.mjs";const P=h({data(){return{tableData:[],pagination:{total:0,index:0,size:10}}},created(){this.loadData()},methods:{loadData(){$.getList({current:this.pagination.index,size:this.pagination.size}).then(e=>{this.tableData=e.records,this.pagination.index=e.current,this.pagination.total=e.total})},handleSizeChange(e){this.pagination.size=e,this.loadData()},handleCurrentChange(e){this.pagination.index=e,this.loadData()},handleEdit(e,t){this.$router.push(`/admin/editor?cid=${t.cid}`)}}}),S=h(u(d({},P),{setup(e,{expose:t}){t();const a={};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}})),w=v("Edit");function E(e,t,a,k,B,j){const i=l("el-table-column"),g=l("el-button"),c=l("el-table"),_=l("el-pagination");return x(),F("div",null,[n(c,{data:e.tableData,height:"560",stripe:""},{default:r(()=>[n(i,{prop:"title",label:"\u6807\u9898",width:"140"}),n(i,{prop:"desc",label:"\u6458\u8981",width:"200"}),n(i,{prop:"created",label:"\u521B\u5EFA\u65F6\u95F4"}),n(i,{prop:"updateTime",label:"\u66F4\u65B0\u65F6\u95F4"}),n(i,{prop:"operation",label:"\u64CD\u4F5C"},{default:r(o=>[n(g,{size:"small",onClick:y=>e.handleEdit(o.$index,o.row)},{default:r(()=>[w]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),n(_,{currentPage:e.pagination.index,"onUpdate:currentPage":t[0]||(t[0]=o=>e.pagination.index=o),"page-sizes":[10,20,30,40],"page-size":e.pagination.size,layout:"total, sizes, prev, pager, next, jumper",total:e.pagination.total,onSizeChange:e.handleSizeChange,onCurrentChange:e.handleCurrentChange},null,8,["currentPage","page-size","total","onSizeChange","onCurrentChange"])])}var N=D(S,[["render",E]]);export{N as default};