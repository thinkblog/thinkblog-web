import{P as d}from"./Post-574e22f0.mjs";import{_ as u,d as h,r as i,o as g,a as c,b as t,w as l,F as m,f as C}from"./bootstrap-fab435f2.mjs";const b=h({data(){return{tableData:[],pagination:{total:0,index:0,size:10}}},created(){this.loadData()},methods:{loadData(){d.getList({current:this.pagination.index,size:this.pagination.size}).then(e=>{this.tableData=e.records,this.pagination.index=e.current,this.pagination.total=e.total})},handleSizeChange(e){this.pagination.size=e,this.loadData()},handleCurrentChange(e){this.pagination.index=e,this.loadData()},handleEdit(e,n){this.$router.push({path:"/admin/editor",query:{cid:n.cid}})}}}),_=C("Edit");function f(e,n,z,F,D,$){const a=i("el-table-column"),r=i("el-button"),s=i("el-table"),p=i("el-pagination");return g(),c(m,null,[t(s,{data:e.tableData,height:"560",stripe:""},{default:l(()=>[t(a,{prop:"title",label:"\u6807\u9898",width:"140"}),t(a,{prop:"desc",label:"\u6458\u8981",width:"200"}),t(a,{prop:"created",label:"\u521B\u5EFA\u65F6\u95F4"}),t(a,{prop:"updateTime",label:"\u66F4\u65B0\u65F6\u95F4"}),t(a,{prop:"operation",label:"\u64CD\u4F5C"},{default:l(o=>[t(r,{size:"mini",onClick:x=>e.handleEdit(o.$index,o.row)},{default:l(()=>[_]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),t(p,{currentPage:e.pagination.index,"onUpdate:currentPage":n[0]||(n[0]=o=>e.pagination.index=o),"page-sizes":[10,20,30,40],"page-size":e.pagination.size,layout:"total, sizes, prev, pager, next, jumper",total:e.pagination.total,onSizeChange:e.handleSizeChange,onCurrentChange:e.handleCurrentChange},null,8,["currentPage","page-size","total","onSizeChange","onCurrentChange"])],64)}var E=u(b,[["render",f]]);export{E as default};
