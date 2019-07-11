const bookBar = document.querySelector('#book-bar')
// form ids
const liReviews = document.querySelector('#li-reviews')
const reviewForm = document.querySelector('#review_form')
// --------------------- EventListener --------------------
bookBar.addEventListener('click', clickOneBook)
// form click
reviewForm.addEventListener('submit', fetchReview)  //when submit event in reviewForm, call the defined function
liReviews.addEventListener('click', eventHandler)


// --------------------- Fetch ----------------------------
fetchDisplayAll()
function fetchDisplayAll(){
  fetch("http://localhost:3000/books")
  .then((res) => (res.json()))
  .then(displayAllBooks)
}

function fetchClickOneBook(id){
  fetch(`http://localhost:3000/books/${id}`)
  .then(res => res.json())
  .then(oneBook)
}


function fetchReview(event){
  // debugger
  const bookId = parseInt(event.target.attributes.dataid.nodeValue)
  const reviewContent = event.target.review.value
  event.preventDefault()
  fetch(`http://localhost:3000/reviews`, {
    method: 'POST',
    headers: {
       'Content-Type': 'application/json',
       // 'Accept': 'application/json'
      },
    body: JSON.stringify({
      book_id: bookId,
      content: reviewContent
    })
  })
  .then(res => res.json())
  .then(review => addShowReview(review, event))

}

// debugger
function eventHandler(event){
  let delButtonIsPressed = event.target.className === "delete-btn"
  if(delButtonIsPressed){

    let id = event.target.parentElement.dataset.id
    event.target.parentElement.remove()
    // debugger
  fetch(`http://localhost:3000/reviews/${id}`, {
    method: 'DELETE'
  })
  // .then(res => res.json())
 }
}
// event.target.nextElementSibling.dataset.id  id for review
// --------------------- DOM ------------------------------
// finds the list of review id, shows the li without having to refresh
function addShowReview(review, event){
  // debugger
   event.target.nextElementSibling.innerHTML +=
   `
   <li data-id="${review.id}">${review.content}

   <button class="delete-btn" id='delete-id'>Delete</button>

   </li>
   `
// <span>${review.likes.length}</span>
   reviewForm.reset()
}

function displayAllBooks(books){
  // event.preventDefault();
    books.forEach(book => {
      // debugger
      bookBar.innerHTML += `
      <div><span class="book_title" id=${book.id}>${book.title}</span></div>
      `
    })
}

// show 1 book
function oneBook(book){
  const book_id = book.id
  const bookInfo = document.querySelector('#book-info')
  bookInfo.innerHTML = `
  <h2 dataid="${book.id}">${book.title}</h2>
  <h4>Author: ${book.author}</h4>
  <h4>Genre: ${book.genre}</h4>
  `
  reviewForm.style = ''
  // setting book id attribute
  reviewForm.setAttribute('dataId', `${book.id}`)

  getReview(book)

}

// list the reviews
function getReview(book){
// debugger
  liReviews.innerHTML = ""
  book.reviews.forEach(review => {
    liReviews.innerHTML += `
    <li data-id="${review.id}">${review.content}

    <button class="delete-btn" id='delete-id'>Delete</button>

    </li>
    `
  })
}

// click one book
function clickOneBook(event){
  event.preventDefault();
  if(event.target.className === "book_title"){
    const id = event.target.id
    fetchClickOneBook(id)
  }
}
