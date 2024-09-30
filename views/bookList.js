import BOOKS_DATA from "../data/data.js"
import getBook from "./book.js"

const bookList = () => /*html*/`
<ul>
    ${BOOKS_DATA.map((book) => getBook(book)).join('')}
</ul>
`

export default bookList