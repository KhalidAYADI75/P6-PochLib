class Books {

    constructor(googleBooks) {
       this.allBooks=[];
       for (let i=0;i<googleBooks.length;i++) {
           this.allBooks.push(new Book(googleBooks[i]));
       }
    }
}