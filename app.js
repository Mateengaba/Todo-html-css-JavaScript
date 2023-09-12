
var ulParent = document.getElementById("ulParent")
var todoInput = document.getElementById("todoInput")


function addTodo(){

    if (!todoInput.value) {
        alert("ENTER TODO VALUEs")
        return
    }

    //Create Element  li
    var liElement = document.createElement("li")

        //Element assine class name.
    liElement.className = "lichild"

        //create Li text 
    var liTxt = document.createTextNode(todoInput.value)


    //appendChild in Li
    liElement.appendChild(liTxt)
   
  console.log(liElement)
console.log(todoInput)




// creat aad & delete btn


    //Create Element  div
    var div = document.createElement("div")

    //Create edit button
var editBtn = document.createElement("button")

    //Create edit text
var editTxt = document.createTextNode("EDIT")
editBtn.appendChild(editTxt)
editBtn.className = "editbuttun"

//Set edit Attribute.

editBtn.setAttribute("onclick", "editTodo(this)")




//delete button
var deleteBtn = document.createElement("button")
var deleteTxt = document.createTextNode("DELETE")
deleteBtn.appendChild(deleteTxt)

//Set delete Attribute.

deleteBtn.setAttribute("onclick", "deleteTodo(this)")

deleteBtn.className = ("deleteButtun")


div.appendChild(editBtn)
div.appendChild(deleteBtn)
//console.log(deleteBtn)

liElement.appendChild(div)


    //appendChild in UL 
    ulParent.appendChild(liElement)


    //prass delete btn emty string.
    todoInput.value = ""


}


function editTodo(btn){

var li = btn.parentNode.parentNode

var placeHolder = li.firstChild.nodeValue

var editValue = prompt("Edit Todo", placeHolder)

li.firstChild.nodeValue = editValue



// console.log("btn", btn)
// console.log("placeHolder", placeHolder)
// console.log("editValue", editValue)


}


function deleteTodo(elem) {

  var del = elem.parentNode.parentNode.remove()

console.log(del)

}




function deleteAll(){

    ulParent.innerHTML = ""

}
