
const myBooks = [];

function addItem(item) {
    myBooks.push(item)
}

const getAll = () => myBooks; //Lambda Way

const deleteItem = (index)=> myBooks.splice(index, 1);

const updateItem = (index, item)=>{
    
    myBooks[index] = item;
}



