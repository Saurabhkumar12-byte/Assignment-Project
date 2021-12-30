const textBox = document.querySelector(".textBox-container");
const inputText = document.querySelector(".inputText");
// console.log(inputText.textContent)

inputText.addEventListener("keydown", (e)=>{
    let key = e.key;
    if (key==="Shift") {
        if (inputText.value) {
            let div = document.createElement("div");
            // div.setAttribute("class","showText");
            div.innerHTML=`<textarea name="" id="showText" cols="50" rows="6" class="inputText" contenteditable="false">${inputText.value}</textarea>`;
            textBox.appendChild(div);
            inputText.value="";
            let id= document.querySelector("#showText");
            id.content
        }
        else{
            return alert("please write something first");
        }
    }
    
})


