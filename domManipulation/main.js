var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//Form submit event
form.addEventListener('submit', addItem);
//Delete event
itemList.addEventListener('click', removeItem);
//Filter event
filter.addEventListener('keyup', filterItems);

//Add item
function addItem(e){
    e.preventDefault();

    // console.log(1);

    //Get input value
    var newItem = document.getElementById('item').value;

    //Create new li element
    var li = document.createElement('li');

    //Add class
    li.className = 'list-group-item';

    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //Create del button element
    var deleteBtn = document.createElement('button');

    //Add  classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    //Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    //Append button to li
    li.appendChild(deleteBtn);

    //Append li to list
    itemList.appendChild(li);

}

//Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        // console.log(1)
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
        
    }
}

//Filter items//
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    //Get list 
    var items = itemList.getElementsByTagName('li');
    //Convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLocaleLowerCase().indexOf(text) != -1){
            item.style.display = 'block'
        }
        else {
            item.style.display = 'none';
        }
    })
}

//Future task: built a local storage to save the items in the browser

const inputItem = document.getElementById('item');
const btnSubmit = document.getElementsByClassName('btn btn-dark');


btnSubmit.onclick = function (){
    const key = inputItem.value;
    if (key) {
        localStorage.setItem(key);
        location.reload();
    }
}