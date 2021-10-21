/* var count = document.querySelector('span');
var plus_btn = count.previousElementSibling
function plus(){
    var result = count.innerHTML;
        result +=parseInt(result)+1
    console.log(result)
}
 */


function add(){
    var input = document.getElementById('myInput');
    var list = document.getElementById('list');
    var text = document.createTextNode(input.value);
    console.log(text);
    var ul = document.createElement('ul');
    list.appendChild(ul)
    var li = document.createElement('li')
    
    
    var btn = document.createElement('button')
    btn.innerHTML='remove'
    

    if (input.value) {
        li.appendChild(text)
        li.appendChild(btn)
        ul.appendChild(li)
    } else {
        alert('please enter a text')
    }


}