var flag = 0;

function muda_cor(){
    let body = document.getElementById("bg");
    flag = Math.floor(Math.random() * (8 - 1 + 1 + 1));
    switch(flag){
        case 1:
            body.style.backgroundColor = "#579bc9";
            body.style.color = "#ffffff";
            flag = Math.floor(Math.random() * (8 - 1 + 1 + 1));
            break;
        case 2:
            body.style.backgroundColor = "#483d8b";
            body.style.color = "#ffffff";
            flag = Math.floor(Math.random() * (8 - 1 + 1 + 1));
            break;
        case 3:
            body.style.backgroundColor = "#ffffff";
            body.style.color = "#000000";
            flag = Math.floor(Math.random() * (8 - 1 + 1 + 1));
            break;
        case 4:
            body.style.backgroundColor = "#ff00aa";
            body.style.color = "#ffffff";
            flag = Math.floor(Math.random() * (8 - 1 + 1 + 1));
            break;
        case 5:
            body.style.backgroundColor = "#43c443";
            body.style.color = "#ffffff";
            flag = Math.floor(Math.random() * (8 - 1 + 1 + 1));
            break;
        case 6:
            body.style.backgroundColor = "#b7c53d";
            body.style.color = "#ffffff";
            flag = Math.floor(Math.random() * (8 - 1 + 1 + 1));
            break;
        case 7:
            body.style.backgroundColor = "#810000";
            body.style.color = "#ffffff";
            flag = Math.floor(Math.random() * (8 - 1 + 1 + 1));
            break;
        case 8:
            body.style.backgroundColor = "#ff0000";
            body.style.color = "#ffffff";
            flag = Math.floor(Math.random() * (8 - 1 + 1 + 1));
            break;        
    }
}