function myfirstfunk(){
    const ovoci=["Pomidor", "Abrukos", "Ceba"];
    let kilk=ovoci.length;
    
    let b="<ul>";
    for (let a=0;a<kilk;a++) {
        b+="<li>"+ovoci[a]+"</li>";
       
            
        
    }
    b+="</ul>";
    document.getElementById("txt").innerHTML=b;
}
function myarray(){
    let m=[];
    let g=[];
    let result;
    for (let i=0;i<10;i++) {
        
        m[i]=i*2;
        if (i%2===0) {
            g[i]=i;
        }
        
    }
    document.getElementById("txt").innerHTML=m+" "+g;
}