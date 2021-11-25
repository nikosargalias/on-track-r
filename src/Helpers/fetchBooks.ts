export function fetchbooks() {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://nyx.vima.ekt.gr:3000/api/books');
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText,
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText,
            });
        };
        xhr.send();
    })
        .then((books) => {
            const booksAsString = books as string;
            const booksArray = JSON.parse(booksAsString);
            return booksArray.books;
        })
        .catch((e) => {
            return e;
        });
}
