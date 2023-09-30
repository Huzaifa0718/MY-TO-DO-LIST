let inputBox = document.getElementById("things");
function add() {
  if (inputBox.value === '') {
    alert("kuch likho bhai");
  }
  else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value
    document.getElementById("mylist").appendChild(li)
    li.classList.add('styled-li');
    li.style.fontSize = "18px"; // Change font size
    li.style.fontStyle = "italic"; // Change font style
    li.style.fontWeight = "bold"; // Change font weight

    let span = document.createElement("span");
    span.classList.add('styled-span');
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
};
document.getElementById("mylist").addEventListener("click", function(e) {
  if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
})





//ye saare concepts ko try kiye hai / sikhe hai

// document.getElementById("first").innerHTML = "HELLO HUZAIFA"
// document.getElementsByTagName("p")[0].innerHTML="HEY I AM A FRONTEND DEVELOPER";
//   name = document.getElementsByClassName("web")[1].innerHTML.toString().toUpperCase()
//  document.getElementsByClassName("web")[1].innerHTML = name;
// document.querySelectorAll("p.web")
// document.getElementsByClassName("active")[0].style.color ="red"


// function newFunction() {
//     document.body.firstElementChild.firstElementChild.style.color = "green";
//     document.body.firstElementChild.lastElementChild.style.color = "green";
// }

// function myfunction(){
// let div = document.createElement("li")
// div.innerHTML =document.getElementById("things").value
// document.body.childNodes[7].append(div)
  // document.body.childNodes[5].before(div)
// }

// function edit(){
//   let div = document.createElement("li") 
// div.innerHTML = document.getElementById("things").value
// document.body.firstElementChild.firstElementChild.replaceWith(div)
// }
// function adding(){
// let node = document.createElement("li")
// node.innerHTML = prompt("")
// document.body.firstElementChild.appendChild(node)
// }

// function adding(){
// let node = document.createElement("li")
// let textnode = document.getElementById("things").innerHTML
// node.appendChild(textnode)
// document.body.firstElementChild.appendChild(node)
// }
// // function remove(){
//  const list = document.getElementById("myList");
//   list.removeChild(list.firstElementChild);
// // }


// yahi sahi function hai add karne ka

// ye kaam karta hai mast
// function remove(){
// document.getElementById("mylist").firstElementChild.remove()
// }



// delete buttons(){
//   let html = <button>delete</button>
//   document.getElementById("mylist").insertAdjacentHTML("beforeend", html);
// }
