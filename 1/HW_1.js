// Задание 1
let musicCollection = [
  {
    title: "Альбом 1",
    artist: "Группа 1",
    year: "2013"
  },
  {
    title: "Альбом 2",
    artist: "Певец",
    year: "2003"
  },
  {
    title: "Альбом 3",
    artist: "Орекстр",
    year: "1985"
  },
  {
    title: "Альбом 4",
    artist: "Ансабль",
    year: "1999"
  }
];


musicCollection[Symbol.iterator] = function () {
  let current = 0;
  return {
    next() {
      if (current < musicCollection.length) {
        return {
          done: false,
          value: musicCollection[current++],
        };
      } else {
        return {
          done: true
        };
      }
    }
  }
}


for (const album of musicCollection) {
  console.log(`${album.title} - ${album.artist} (${album.year})`);
}

// Задание 2

let books = new Map();
let meals = new Map();
meals.set('Пицца "Маргарита"',  'Виктор')
     .set('Пицца "Пепперони"',  'Виктор')
     .set('Суши "Филадельфия"',  'Ольга')
     .set('Суши "Калифорния"',  'Ольга')
     .set('Тирамису',  'Дмитрий')
     .set('Чизкейк',  'Дмитрий');
let client_1 = {
  name: 'Алексей',
  order: ['Пицца "Пепперони"', 'Тирамису'],
};
let client_2 = {
  name: 'Мария ',
  order: ['Суши "Калифорния"', 'Пицца "Маргарита"']
};
let client_3 = {
  name: 'Ирина ',
  order: ['Чизкейк']
};

function cook(array, map) {
  let cook = [];
  array.forEach(pos => {
    if(map.has(pos)){
      cook.push(map.get(pos));
    }})
  return cook;
};

books.set(client_1, cook(client_1.order, meals));

console.log(books);