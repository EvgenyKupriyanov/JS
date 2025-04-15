const nameEl = document.querySelector('.goods_name');
const textEl = document.querySelector('.goods_review');
const btnEl = document.querySelector('.btn');


btnEl.addEventListener('click', function addReview() {

  const name = nameEl.value;
  const text = textEl.value;
  let reviewList = JSON.parse(localStorage.getItem(name)) || [];

  reviewList.push(text);
  localStorage.setItem(name, reviewList);
  localStorage.setItem(name, JSON.stringify(reviewList));
  alert('Отзыв добавлен');
  nameEl.value = '';
  textEl.value = '';
});

const listEl = document.querySelector('.list');

let list = localStorage.getItem()
console.log(list);







