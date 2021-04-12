export class Books {
    id: string;
    author: string;
    title:string;
    isbn:string;

    constructor(id:string, author:string, title:string,isbn:string){
        this.id=id;
        this.author=author;
        this.title=title;
        this.isbn=isbn;
    }
}
