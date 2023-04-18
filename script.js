const inputBox = document.querySelector("#input-box");
const list = document.querySelector(".list-container");

function clicked(){
    if(inputBox.value === ''){
        alert("Please Enter Some Text!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li);   
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
}

list.addEventListener("click", (event) => {
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
    }else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
    }
},false)