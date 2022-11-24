// project-intro
const projectIntro = document.createElement('div')
projectIntro.classList.add('project-intro')
document.body.append(projectIntro)
// project intro image
const projectIntroImage = document.createElement('img')
projectIntroImage.setAttribute('src', './images/bookshop image.jpg')
projectIntro.append(projectIntroImage)
// project intro title
const projectIntroTitle = document.createElement('h1')
projectIntroTitle.innerHTML = 'Welcome to amazing book shop!'
projectIntro.append(projectIntroTitle)

// sections
const sections = document.createElement('div')
sections.classList.add('sections')
document.body.append(sections)

// section1
const section1 = document.createElement('div')
section1.classList.add('section-1')
sections.append(section1)
// book catalog title
const bookCatalogTitle = document.createElement('h2')
bookCatalogTitle.classList.add('book-catalog-title')
bookCatalogTitle.innerHTML = 'Book Catalog'
section1.append(bookCatalogTitle)
// catalog container
const catalogContainer = document.createElement('div')
catalogContainer.classList.add('catalog-container')
section1.append(catalogContainer)

function updateDOM() {
	bookArray.forEach(book => {
		// catalog
		const catalog = document.createElement('div')
		catalog.classList.add('catalog')
		// catalog image
		const catalogImage = document.createElement('img')
		catalogImage.src = book.imageLink
		catalogImage.title = book.title
		// catalog data
		const catalogData = document.createElement('div')
		catalogData.classList.add('catalog-data')
		// catalog info
		const catalogInfo = document.createElement('div')
		catalogInfo.classList.add('catalog-info')
		// catalog buttons
		const catalogButtons = document.createElement('div')
		catalogButtons.classList.add('catalog-buttons')
		// catalog author
		const catalogAuthor = document.createElement('h4')
		catalogAuthor.classList.add('catalog-author')
		catalogAuthor.textContent = book.author
		// catalog title
		const catalogTitle = document.createElement('h3')
		catalogTitle.classList.add('catalog-title')
		catalogTitle.textContent = book.title
		// catalog price
		const catalogPrice = document.createElement('h4')
		catalogPrice.classList.add('catalog-price')
		catalogPrice.textContent = 'Price: ' + '$' + book.price
		// show more button
		const showBtn = document.createElement('button')
		showBtn.classList.add('show-more')
		showBtn.textContent = 'Show more'
		showBtn.addEventListener('click', show.bind(null, book.id))
		function show(id) {
			bookArray.forEach(book => {
				if (book.id == id) {
					showMoreInfo(book)
				}
			})
		}
		function showMoreInfo(book) {
			// info container
			const infoContainer = document.createElement('div')
			infoContainer.classList.add('info-container')
			// info title
			const infoTitle = document.createElement('h3')
			infoTitle.textContent = book.title
			infoTitle.classList.add('info-title')
			// info title
			const info = document.createElement('p')
			info.textContent = book.description
			info.classList.add('info')
			// close button
			const infoCloseButton = document.createElement('button')
			infoCloseButton.classList.add('info-close')
			infoCloseButton.textContent = 'Close'
			infoCloseButton.addEventListener('click', () => {
				infoContainer.classList.add('order-disabled')
			})
			infoContainer.append(infoTitle, info, infoCloseButton)
			// catalog.append(infoContainer)
			catalog.append(infoContainer)
		}
		// add to bag button
		const addBtn = document.createElement('button')
		addBtn.classList.add('add-bag')
		addBtn.textContent = 'Add to bag'
		addBtn.addEventListener('click', add.bind(null, book.id))

		catalog.append(catalogImage, catalogData)
		catalogData.append(catalogInfo, catalogButtons)
		catalogInfo.append(catalogAuthor, catalogTitle, catalogPrice)
		catalogButtons.append(showBtn, addBtn)
		catalogContainer.append(catalog)
	})
}

// section 2
const section2 = document.createElement('div')
section2.classList.add('section-2')
sections.append(section2)
// order book title
const orderBookTitle = document.createElement('h2')
orderBookTitle.classList.add('order-book-title')
orderBookTitle.innerHTML = 'Order books'
section2.append(orderBookTitle)
// order container
const orderContainer = document.createElement('div')
orderContainer.classList.add('order-container')
section2.append(orderContainer)
// order total
const totalOrder = document.createElement('div')
totalOrder.classList.add('order-total')
section2.append(totalOrder)

// order total p
let count = 0
const orderCost = document.createElement('p')
orderCost.textContent = `Total: $${count}`
const orderPage = document.createElement('a')
orderPage.textContent = 'Confirmation order'
orderPage.href = './order.html'
orderPage.target = '_blank'
totalOrder.append(orderCost, orderPage)

// api url
const apiUrl = './books.json'
let bookArray = []

function add(id) {
	bookArray.forEach(book => {
		if (book.id == id) {
			updateOrder(book)
		}
	})
}

function updateOrder(book) {
	// order
	const order = document.createElement('div')
	order.classList.add('order')
	// order image
	const orderImage = document.createElement('img')
	orderImage.src = book.imageLink
	orderImage.title = book.title
	// order data
	const orderData = document.createElement('div')
	orderData.classList.add('order-data')
	// order info
	const orderInfo = document.createElement('div')
	orderInfo.classList.add('order-info')
	// order author
	const orderAuthor = document.createElement('h4')
	orderAuthor.classList.add('order-author')
	orderAuthor.textContent = book.author
	// order title
	const orderTitle = document.createElement('h3')
	orderTitle.classList.add('order-title')
	orderTitle.textContent = book.title
	// x icon
	const xIcon = document.createElement('div')
	xIcon.classList.add('x-icon')
	// x button
	const xButton = document.createElement('button')
	xButton.innerHTML = '<i class="fa-solid fa-x"></i>'
	xIcon.append(xButton)
	// order full price
	orderCost.textContent = `Total: $${(count += book.price)}`

	xButton.addEventListener('click', () => {
		order.classList.add('order-disabled')
		orderCost.textContent = `Total: $${(count -= book.price)}`
	})

	orderContainer.append(order)
	order.append(orderImage, orderData, xIcon)
	orderData.append(orderInfo)
	orderInfo.append(orderAuthor, orderTitle)
}

// getting books from api
async function getBooks() {
	try {
		const response = await fetch(apiUrl)
		bookArray = await response.json()
		updateDOM()
		console.log(bookArray)
	} catch (error) {
		console.log(error)
	}
}
getBooks()
