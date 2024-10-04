const getBook = (book) => /*html*/`
    <li data-id="${book.id}" >
        <div class="details" hx-target="closest li" hx-get="/book/edit/${book.id}">
        <h3> ${book.title}</h3>
        <p> ${book.author}</p>
        </div>
        <button hx-delete="/book/${book.id}" hx-target="closest li" hx-swap="outerHTML"> Delete</button>
    </li>
`

export default getBook