const textBox = document.querySelector(".textBox-container");
const inputText = document.querySelector(".inputText");
const quote =document.querySelector(".quotes")
const quoteBox = document.querySelector(".Quote-area");
const cardWrapper= document.querySelector(".card-wrapper");
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

const getQuote = async ()=>{
    let data = await fetch("https://api.quotable.io/random");
    let parsed = await data.json();
    console.log(parsed);
    
    let div = document.createElement("div");
            // div.setAttribute("class","showText");
            div.innerHTML=`<div class="card text-white  mb-3 mx-auto my-5" style="max-width: 55rem; ">
            <div class="card-header text-danger">Quote of the Day</div>
            
            <div class="card-body">
              
              <p class="card-text">${parsed.content}</p>
              <h2 class="card-title text-success">By ${parsed.author}</h2>
            </div>
          </div>`;
            cardWrapper.appendChild(div);
    setInterval(()=>{cardWrapper.innerHTML="";},10000)
}

quote.addEventListener("click", getQuote);




