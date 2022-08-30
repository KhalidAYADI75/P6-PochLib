class Search {

    static clickForSearch(event) {
        event.preventDefault();
        if ((document.getElementById("title_book").value == "") || (document.getElementById("author").value == "")) {
            alert ("Vous devez saisir le titre et l'auteur du livre");
        } else {
            return getBooksFromGoogle();
        }
    }
}

async function getBooksFromGoogle() {
    const tbook=document.getElementById("title_book").value;
    const author=document.getElementById("author").value;
    const response = await fetch("https://www.googleapis.com/books/v1/volumes?q="+tbook+"inauthor:"+author+"&key=AIzaSyB9_kmuvdfj1aK_QY8c3JwHzDAYcsWd0HU");
    if (!response.ok) {
        throw new Error(`Erreur de traitement`);
    }
    const bookSearchResults = await response.json();
    let allBooks=new Books(bookSearchResults.items);
    if (allBooks.length==0) {
          document.getElementById("container").innerHTML="</br>Aucun book n'a été trouvé</br></br></br>";
    } else {
        DomManipulator.cellsConstruction(allBooks);
    }
}