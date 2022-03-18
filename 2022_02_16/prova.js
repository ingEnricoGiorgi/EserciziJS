function inverti(){
let p2 = document.getElementById("2").innerHTML;
let p3 = document.getElementById("3").innerHTML;
//let fp = mp.previousSibling();
document.getElementById("3").innerHTML =p2;
document.getElementById("2").innerHTML =p3;

}
function errata(){
let b = Document.getElementByTagName('body')[0];
alert(b.firstChild)
let cp=b.firstChild

cp=cp.nextSibling;
cp=cp.nextSibling;
console.log(cp);
cp.r=b.removeChild(cp)
b.appenChild(r) 
}
function naviga(id) {
	let element = document.getElementsByTagName(id)[0];
	let a = element.childNodes;
	let c = 0;
	let r = null;
	for (let e of a) {
		if (e.nodeType == 1) {
			c++;
			if (c == 3) {
				r = element.removeChild(e);
			}
			//alert(e.getAttribute('id'));
		}
	}
	element.appendChild(r);
}
