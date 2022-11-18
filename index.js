// Book Catalog section
let bookCatalog = document.createElement('section')
bookCatalog.className = 'section1'

// // show button
// let showBtn = document.createElement('div')
// showBtn.innerHTML = '<button>Show More</button>'
// showBtn.className = 'showBtn'

// // add button
// let addBtn = document.createElement('div')
// addBtn.innerHTML = '<button>Add to bag</button>'
// addBtn.className = 'addBtn'
function addBooks(id) {
	console.log(id)
}
function showBooks(data) {
	// Book Catalog title
	let bookTitle = document.createElement('h2')
	bookTitle.innerHTML = 'Book Catalog'
	bookTitle.className = 'catalog-title'
	bookCatalog.prepend(bookTitle)

	//  Demonstrating books
	for (let book of data) {
		let books = document.createElement('div')
		books.className = 'catalog-books'

		// book imagelink
		let bookImageLink = document.createElement('img')
		bookImageLink.setAttribute('src', book.imageLink)

		let ImageWrapper = document.createElement('div')
		ImageWrapper.className = 'catalog-image'

		ImageWrapper.appendChild(bookImageLink)
		books.appendChild(ImageWrapper)

		// Book author
		let bookAuthor = document.createElement('h3')
		bookAuthor.innerHTML = book.author
		bookAuthor.className = 'catalog-author'

		books.appendChild(bookAuthor)
		// book title
		let bookTitle = document.createElement('h2')
		bookTitle.innerHTML = book.title
		bookTitle.className = 'catalog-title'

		books.appendChild(bookTitle)
		// show button
		let showBtn = document.createElement('div')
		showBtn.innerHTML = '<button>Show More</button>'
		showBtn.className = 'showBtn'

		// add button
		let addBtn = document.createElement('div')
		addBtn.innerHTML = '<button>Add to bag</button>'
		addBtn.className = 'addBtn'
		addBtn.addEventListener('click', addBooks.bind(null, book.id))
		// book price
		let bookPrice = document.createElement('h3')
		bookPrice.innerHTML = 'Price:' + '$' + book.price

		let contentWrapper = document.createElement('div')
		contentWrapper.className = 'catalog-data'
		contentWrapper.appendChild(bookAuthor)
		contentWrapper.appendChild(bookTitle)
		contentWrapper.appendChild(bookPrice)

		//  create buttons
		let buttonWrapper = document.createElement('div')
		buttonWrapper.className = 'catalog-buttons'

		buttonWrapper.appendChild(showBtn)
		buttonWrapper.appendChild(addBtn)
		contentWrapper.appendChild(buttonWrapper)
		books.appendChild(contentWrapper)

		bookCatalog.appendChild(books)
		document.body.appendChild(bookCatalog)
	}
}

// function addBooks(data) {
// 	addBtn.addEventListener('click', () => {
// 		console.log(data)
// 	})
// }
// order book section
let orderedBooks = document.createElement('section')
orderedBooks.className = 'section2'

let orderTitle = document.createElement('h2')
orderTitle.className = 'order-title'
orderTitle.innerHTML = 'Order books'
orderedBooks.append(orderTitle)

document.body.append(orderedBooks)

const books = fetch('./books.json') //path to the file with json data
	.then(response => {
		return response.json()
	})
	.then(data => {
		showBooks(data)
		// addBooks(data)
	})
