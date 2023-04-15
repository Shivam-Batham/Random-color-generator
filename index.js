const containercolor = ()=>{
    const color = Math.floor(Math.random()*16777215+1);
    const textcolor = "#" + color.toString(16);
    // const heading = code + "2";
    document.getElementById("c").style.backgroundColor=textcolor;
    //
    let boxShadowcolor=color;
    document.getElementById("c").style.boxShadow='5px 5px 10px white';
    // document.getElementsByClassName("textcolor").style.color=heading;
    console.log(textcolor);
}

const getcolor = ()=>{
    const randomcolor = Math.floor(Math.random()*16777215);
    const code = "#" + randomcolor.toString(16);
    
    // console.log(randomcolor,code);
    document.body.style.background=code;
    document.getElementById("text").innerText=code;
    document.getElementById("btn").style.color=code;
    document.getElementById("text").style.color=code;
    
    
    //
    containercolor();
}
document.getElementById("btn").addEventListener("click",getcolor);
getcolor();



