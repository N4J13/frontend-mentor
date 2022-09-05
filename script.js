const submitBtn = document.getElementById('submitBtn')
const rateCard = document.getElementById('rateCard')
const thanksCard = document.getElementById('thanksCard')
const selectBtn = document.getElementsByClassName('select-btn')
let rating = document.getElementById('rating')


submitBtn.addEventListener('click', myFunction =() => {
    rateCard.classList.add('hidden')
    thanksCard.classList.remove('hidden')
})

Array.from(selectBtn).forEach(item => {
    item.addEventListener('click', event => {
        rating.innerHTML = item.innerHTML 
         
    })
 })