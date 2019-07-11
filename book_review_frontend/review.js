// const reviewForm = document.querySelector('#review_form')
// const liReviews = document.querySelector('#li-reviews')
// debugger
// --------------------- EventListener --------------------
// reviewForm.addEventListener('submit', submitReview)


// ---------------- fetch ------------------------
// function fetchDisplayReviews(event){
//   fetch(`http://localhost:3000/reviews/{id}`, {
//     method: 'POST',
//     header: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       review: review
//     })
//   })
//   .then(res => res.json())
  // .then(displayReviews)
// }


// ------------------ DOM ---------------------
// function displayReviews(reviews){
//   debugger
//   reviews.liReviews.forEach(review => {
//     liReviews.innerHTML += `
//     <li>${review.c}</li>
//     `
//     liReviews.append(li)
//   })
// }
// displayAllReviews()

// function submitReview(event){
//   event.preventDefault();
//   reviewForm.innerHTML = reviewForm.review.value
// }
