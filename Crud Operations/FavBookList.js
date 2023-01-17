let book = [];
function addBook() {
    book.push(document.getElementById("txtBook").value);
    const list1 = document.getElementById("lstItems")
    list1.innerHTML = "";
    for (const list of book) {
        const value = "<li>" + list + "</li>"
        list1.innerHTML += value;
    }
}