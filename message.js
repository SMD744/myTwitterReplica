let isCollapse = true;
function expandCollapse(){
    isCollapse= !isCollapse;
    if (isCollapse==true){
        document.querySelector(".Message-bracket").style.bottom ="0";
        document.querySelector(".expand-1").style.display ="block";
        document.querySelector(".collapse-btn-1").style.display ="none";
        
    }
    else{
        document.querySelector(".Message-bracket").style.bottom="-65%";
        document.querySelector(".expand-1").style.display = "none";
        document.querySelector(".collapse-btn-1").style.display ="block";

    }
}
expandCollapse();