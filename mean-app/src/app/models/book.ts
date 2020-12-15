export class Book {

    constructor() {
        this._id = "";
        this.isbn = "";
        this.title = "";
        this.author = "";
        this.description = "";
        this.published_year = "";
        this.publisher = "";
        this.updated_date = new Date;
    }

    _id?: any;
    isbn?: string;
    title?: string;
    author?: string;
    description?: string;
    published_year?: string;
    publisher?: string;
    updated_date?: Date    
}
