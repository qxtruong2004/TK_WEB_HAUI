function huy(){
    document.getElementById("nhap").value ="";
    document.getElementById("rs").value = "";
}
function check(){
    let input = document.getElementById("nhap").value;
    let cnt = 0;
    for(let i = 0; i < input.length; i++){
        let x = input[i];
        if(x % 2 != 0){
            cnt++;
        }
    }
    document.getElementById("rs").value = cnt;
}