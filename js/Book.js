class Book {
    constructor(bookGoogle) {
       this.title = bookGoogle.volumeInfo.title;
       this.id = bookGoogle.id;
       this.author = bookGoogle.volumeInfo.authors[0];
       this.description = DomManipulator.setDescription(bookGoogle.volumeInfo.description);
       this.image=bookGoogle.volumeInfo.imageLinks !=null ? bookGoogle.volumeInfo.imageLinks.thumbnail : "./unavailable.png";
    }
}
