const toDoCont = document.getElementById("to-do-container");
const input = document.getElementById("input");
const ekleBtn = document.getElementById("ekle-btn");

const Yap = () => {
  if (input.value === "") {
    alert("todo bos kalamaz");
  } else {
    
    let yeniTodo = document.createElement("div");
    yeniTodo.classList.add("todo-box");
    toDoCont.appendChild(yeniTodo);

    let yapText = document.createElement("p");
    yeniTodo.appendChild(yapText);
    yapText.innerText = input.value;

    let btnDiv = document.createElement("div");
    btnDiv.classList.add("btn-div");
    yeniTodo.appendChild(btnDiv);

    let silButon = document.createElement("button");
    silButon.classList.add("btn");
    silButon.innerText = "sil"
    btnDiv.appendChild(silButon);

    let tammBtn = document.createElement("button");
    tammBtn.classList.add("btn");
    tammBtn.innerText = "tammlandı";
    btnDiv.appendChild(tammBtn);

    const tickle = () =>{
      yapText.classList.toggle("tammdir");
    }
    
    const sil = () =>{
      yeniTodo.remove();
    }

    silButon.addEventListener("click",sil);
    tammBtn.addEventListener("click",tickle); 
  }

  input.value = "";
  input.focus();
};

ekleBtn.onclick = Yap;
