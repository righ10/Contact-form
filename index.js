const validateEmail= function(email){
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
};

const handleSubmit = function(e){
e.preventDefault();

const first = document.getElementById("fname");
const last = document.getElementById("lname");
const email = document.getElementById("email");
const query = document.getElementById("query")
const message= document.getElementById("msg")
const consent= document.getElementById("inputBox")
const submitBtn = document.getElementById("submit")

const fnameError= document.getElementById("fname-error")
const lnameError = document.getElementById("lname-error")
const emailError = document.getElementById("email-error")
const queryError = document.getElementById('query-error')
const support = document.getElementById('support')
const messageError = document.getElementById("message-error")
const consentError = document.getElementById("consent-error")

const success = document.getElementById("success")

let hasError=false;
if(first.value===""){
    fnameError.innerHTML= "This field is required";
    first.style.border="1px solid red"
    hasError= true
}else(
    fnameError.innerHTML= ""
)

if(last.value===""){
    lnameError.innerHTML= "This field is required";
    last.style.border="1px solid red"
    hasError= true
}else(
    fnameError.innerHTML= ""
)

if(email.value===""){
    emailError.innerHTML= "This field is required";
    email.style.border="1px solid red"
    hasError= true
}else(
    fnameError.innerHTML= ""
)

/*const request= document.querySelectorAll('.req')

var checked =document.querySelector('input[type="radio"]:checked');
console.log(checked)
if(checked){
    queryError.innerHTML = ""
}else{
    queryError.innerHTML = "Please Select a Query Type";
    
    border
    hasError=true
}*/
    var req= document.querySelectorAll('.req')
    var radio = document.getElementById("general")
    var radio2 = document.getElementById("support")
    for (i = 0; i <req.length; i++){
        if (radio.checked  ===false){
            req[i].style.border= "1px solid red"
            queryError.innerHTML = "Please Select a Query Type";
            hasError = true
        }else{
            req[i].style.border = ""
        }
    }










if(message.value===""){
    messageError.innerHTML= "This field is required";
    message.style.border="1px solid red"
    hasError= true
}else(
    messageError.innerHTML= ""
)

var consentBox = document.querySelector('input[type="checkbox"]:checked');
if(consentBox){
    consentError.innerHTML = ""
}else{
    consentError.innerHTML = "To submit this form, please consent to being contacted"
}

if (hasError === false){
    success.style.display = "block"
}else{
    success.style.display = "none"
}

if(hasError){
 return;   
}


}

const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);


document.querySelector('.query').addEventListener("change", (evt) =>{
    evt.currentTarget
    .querySelectorAll('.active')
    .forEach(element =>{
        element.classList.remove('active')
    })



    evt.target
    .closest(".req")
    .classList.add('active')

}, true);



/*document.getElementById('support').addEventListener("change", (evt) =>{
    evt.target
    .closest(".supportType")
    .classList.add('active');
}, true);*/
