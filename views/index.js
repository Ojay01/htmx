const createHomepageTemplate = () => /*html*/`
  <!DOCTYPE html>
  <html>
    <head>
      <title>My Reading List</title>
      <script src="https://unpkg.com/htmx.org@2.0.2"></script>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <header>
        <h1>My Reading List</h1>
      </header>

      <main>
        <div class="book-list">
          <button hx-get="/book" hx-trigger="mouseenter"  hx-target=".book-list"> Show Button</button>
        </div>


        <div class="add-book-form">
          <h2>What do you want to read?</h2>
          <form >
          <input id="title"  type="text" name="title" placeholder="title"/>
          <input id="author"  type="text" name="author" placeholder="author"/>
          <button hx-on:htmx:after-request="document.querySelector('form').reset()" hx-on:click="console.log('New Book Added', event)" hx-post="/book" hx-target=".book-list ul" hx-swap="beforeend">Add Book</button>
        </form>
        </div>
      </main>
    </body>
  </html>
`;

export default createHomepageTemplate;