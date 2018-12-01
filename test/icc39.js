console.log("---------ifnull---------");
console.log(Ice.ifnull(null));
console.log(Ice.ifnull("abc"));
console.log(Ice.ifnull(null, "def"));
console.log(Ice.ifnull("abc", "def"));
console.log("---------isEmptyColl---------");
var ary = [];
var ary2 = [123];
console.log(Ice.isEmptyColl(null));
console.log(Ice.isEmptyColl(""));
console.log(Ice.isEmptyColl(ary));
console.log(Ice.isEmptyColl(ary2));
console.log("---------notStr---------");
console.log(Ice.notStr(null));
console.log(Ice.notStr(""));
console.log(Ice.notStr("yes", "yes", "no"));
console.log(Ice.notStr("no", "yes", "no"));
console.log("---------confirm---------");
function del(id){
	alert("确认删除,id=" + id);
}

function nothing(id){
	alert("取消删除,id=" + id);
}
// Ice.confirm("是否真的要删除这个文件?",55,del,nothing);
Ice.confirm(null, 55, del);
