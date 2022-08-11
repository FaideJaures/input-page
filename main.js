var input = document.getElementsByTagName("input");
var input_date = document.getElementsByClassName("input-date");
var invalid = document.getElementsByClassName("invalid");
var remplir = document.getElementsByClassName("remplir");
const regName = new RegExp("[a-z]+", "gi");
const regNumber = new RegExp("[0-9]{16}", "g");
const regNumber2 = new RegExp("[0-9]", "g");
const regDate = new RegExp("[01][0-9]", "g");
const regDate2 = new RegExp("[0-9]", "g");
var regtab = [];
var comfirmer = document.getElementById("comfirmer");
var comfirmation = [false, false, false, false, false]
function capitalize(value){
    var index = [0];
    var newTab = [];
    for(let i = 0; i < value.length; i++){
        if(value.charAt(i) === " "){
            index.push(i+1);
        }
    }
    for(let i = 0; i < index.length; i++){
        if(i === "undefined" ){
            break;
        }else{
            var newOne = value.substring(index[i], index[i+1])
        }
        let final = newOne[0].toUpperCase() + newOne.slice(1);
        newTab[i] = final;
    }
    
    return value = newTab.join("");
}
function putSpace(value){
    
    for(let i = 0; i < value.length; i++){
        while(value.charAt(i) === " "){
            value = value.replace(value.charAt(i), "")
        }
    }

    var regNumberBis = new RegExp("[0-9]{1,4}", "g");
    var final = value.match(regNumberBis);

    return final.join(" ");
}
function putSpace2(value){
    
    for(let i = 0; i < value.length; i++){
        while(value.charAt(i) === " "){
            value = value.replace(value.charAt(i), "")
        }
    }

    var regNumberBis = new RegExp("[0-9]{3}", "g");
    var final = value.match(regNumberBis);

    return final.join(" ");
}


input[0].addEventListener("input", ()=>{
    if(regName.test(input[0].value)){
        input[0].value = capitalize(input[0].value);
        remplir[0].innerHTML = input[0].value;
        input[0].setAttribute("style", "border: 2px solid ; border-image: var(--input-border-active) 1 round");
        invalid[0].innerHTML = "";
        comfirmation[0] = true;
    }else if(!regName.test(input[0].value) && input[0].value.length > 0){
        input[0].setAttribute("style", "border: 2px solid red");
        invalid[0].innerHTML = "Wrong Format";
        comfirmation[0] = false;
    }
})

input[1].addEventListener("input", ()=>{
    var verified = false;
    if(regNumber.test(input[1].value)){
        input[1].value = putSpace(input[1].value);
        remplir[1].innerHTML = input[1].value;
        input[1].setAttribute("style", "border: 2px solid ; border-image: var(--input-border-active) 1 round");
        invalid[1].innerHTML = "";
        comfirmation[1] = true;
    }else if(!regNumber.test(input[1].value) && input[1].value.length > 0){
        input[1].setAttribute("style", "border: 2px solid red");
        invalid[1].innerHTML = "Wrong Format";
        comfirmation[1] = false;
    }
})

input[2].addEventListener("input", ()=>{
    if(input[2].value.length === 2){
        input[3].focus()
        input[2].blur()
    }
    if(regDate.test(input[2].value) && parseInt(input[2].value) > 0 && parseInt(input[2].value) < 13){
        input[2].setAttribute("style", "border: 2px solid ; border-image: var(--input-border-active) 1 round");
        input[3].setAttribute("style", "border: 2px solid black");
        invalid[2].innerHTML = "";
        comfirmation[2] = true;
    }else if(!regDate.test(input[2].value) && input[2].value.length > 1){
        input[2].setAttribute("style", "border: 2px solid red");
        input[3].setAttribute("style", "border: 2px solid ; border-image: var(--input-border-active) 1 round");
        invalid[2].innerHTML = "Wrong Format";
        comfirmation[2] = false;
    }
})
input[3].addEventListener("input", ()=>{
    var verified = false;
    if(regDate2.test(input[3].value)){
        input[2].setAttribute("style", "border: 2px solid black");
        input[3].setAttribute("style", "border: 2px solid ; border-image: var(--input-border-active) 1 round");
        invalid[2].innerHTML = "";
        comfirmation[3] = true;
    }else if(!regDate2.test(input[3].value) && input[3].value.length > 1){
        input[3].setAttribute("style", "border: 2px solid red");
        input[2].setAttribute("style", "border: 2px solid ; border-image: var(--input-border-active) 1 round");
        invalid[2].innerHTML = "Wrong Format";
        comfirmation[3] = false;
    }
    if(input[3].value.length === 2){
        remplir[2].innerHTML = input[2].value + "/" + input[3].value;
        input[3].blur();
        input[4].focus();
    }
})
input[3].addEventListener("click", ()=>{
    if(input[2].value === ""){
        input[3].blur()
        input[2].focus()
    }
})

input[4].addEventListener("input", ()=>{
    remplir[3].innerHTML = input[4].value;
    if(regNumber2.test(input[4].value) && input[4].value.length === 3){
        input[4].value = putSpace2(input[4].value);
        input[4].setAttribute("style", "border: 2px solid ; border-image: var(--input-border-active) 1 round");
        invalid[3].innerHTML = "";
        comfirmation[4] = true;
    }else if(!regNumber2.test(input[1].value) && input[4].value.length > 0){
        input[4].setAttribute("style", "border: 2px solid red");
        invalid[3].innerHTML = "Wrong Format";
    }
})

for(let i = 0; i < input.length; i++){
    input[i].addEventListener("focusout", ()=>{
        input[i].setAttribute("style", "border: 2px solid black");
    })
}

comfirmer.addEventListener("click", ()=>{

    for(let i = 0; i < input.length - 3 ; i++){
        if(input[i].value.length === 0){
            input[i].style.border = "2px solid red";
            invalid[i].innerHTML = "Can't be blank";
        }
    }

    for(let i = 2; i < 4; i++){
        if(input[i].value.length === 0){
            input[i].style.border = "2px solid red";
            invalid[2].innerHTML = "Can't be blank";
        }
    }
    
    if(input[4].value.length === 0){
        input[4].style.border = "2px solid red";
        invalid[3].innerHTML = "Can't be blank";
    }else{
        invalid[3].innerHTML = "";
    }
    var f = 0;
    for(let i = 0; i < input.length; i++){

        
        console.log(comfirmation[i]);
        if(comfirmation[i] === true){
            f++;
            if(f === 5){
                document.getElementsByTagName("main")[0].style.display = "none";
                document.getElementsByTagName("article")[0].style.display = "flex";
            }
        }else{
            document.getElementsByTagName("main")[0].style.display = "flex";
            document.getElementsByTagName("article")[0].style.display = "none";
        }
    }
    

})