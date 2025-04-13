// Задание 1

class Library {
  #books = [];
  constructor(arr) {
    let repeats = 0;
    arr.forEach(element => {
      let list = arr.filter(item => item === element).length;
      if (list > 1) {
        repeats++;
      }
     })
    if (repeats === 0){
      this.#books = arr;
    } else {
      console.log('Есть повтор');
    }
  }

  get allBooks(){
    return console.log(this.#books);
  }

  addBooks(title) {
    if(!this.#books.includes(title)){
      this.#books.push(title);
    } else{
      throw new Error("Такая книга уже есть");
    }
  }

  removeBook(title) {
    if(this.#books.includes(title)){
      //delete this.#books[this.#books.findIndex(item => item === title)]
      this.#books = this.#books.filter(item => item !== title);
    } else{
      throw new Error("Такой книги нет");
    }
  }
  hasBook(title) {
    if(this.#books.includes(title)){
      console.log('true');
      return true;
    } else{
      console.log('false');
      return false;;
    }
  }
}



let library = new Library(['Книга 1', 'Книга 2', 'Книга 3', 'Книга 4']);
library.allBooks;
library.addBooks('Книга 6');
library.allBooks;

library.hasBook('Книга 6');
library.hasBook('Книга 7');

//library.removeBook('Книга 8');
library.allBooks;


// Задание 2
const nameEl = document.querySelector('.goods_name');
const textEl = document.querySelector('.goods_review');
const btnEl = document.querySelector('.btn');
const reviewEl = document.querySelector('.review');


btnEl.addEventListener('click', function addReview() {
  const name = nameEl.value;
  const text = textEl.value;
  console.log(name, text);
  let len = text.split(' ').join('').length;
  if (len > 50 && len < 500) {
    let reviewNew = document.createElement('div');
    let reviewNewName = document.createElement('h2');
    let reviewNewText = document.createElement('p');
    reviewNew.appendChild(reviewNewName);
    reviewNew.appendChild(reviewNewText);
    reviewNewName.textContent = name;
    reviewNewText.textContent = text;
    reviewEl.appendChild(reviewNew);
  } else {
    throw new Error("Размер отзыва нарушен");
  }
})

const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
    {
      id: "1",
      text: "Отличный телефон! Батарея держится долго.",
    },
    {
      id: "2",
      text: "Камера супер, фото выглядят просто потрясающе.",
    },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
    {
      id: "3",
      text: "Интересный дизайн, но дорогой.",
    },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
    {
      id: "4",
      text: "Люблю играть на PS5, графика на высоте.",
    },
    ],
  },
];
initialData.forEach(element => {
  let reviewNew = document.createElement('div');
  let reviewNewName = document.createElement('h2');
  let reviewNewText = document.createElement('p');
  reviewNew.appendChild(reviewNewName);
  reviewNewName.textContent = element.product;
  const rev = element.reviews;
  element.reviews.forEach(element => {
    reviewNewText.textContent = element.text;
    reviewNew.appendChild(reviewNewText);
  });
  reviewEl.appendChild(reviewNew);
});