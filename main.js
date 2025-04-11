
let massage=prompt("enter massage");

while (typeof massage!="string"  ){
    massage=prompt("enter valid massage");
}
const displaymassage =function(){
    for(let i=1 ;i<=6;i++){
    document.writeln(`<h${i}>${massage}</h${i}>`);
    }
    }

displaymassage();
console.log(typeof massage) ;
