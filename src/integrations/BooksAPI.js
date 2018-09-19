export default class BooksAPI {

    static fetchBooks() {
        return new Promise((resolve,reject) => {
            fetch("http://5ba19980ee710f0014dd765f.mockapi.io/Books")
                .then(data => data.json())
                .then(resolve)
                .catch(reject)
        })
    }
}