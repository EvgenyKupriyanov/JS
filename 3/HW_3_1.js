const listEl = document.querySelector('.list');

for (let i = 0; i < localStorage.length; i++) {
  const liEl = document.createElement('li');
  liEl.textContent = localStorage.key(i)
  listEl.appendChild(liEl);
  liEl.addEventListener('click', ()=>{
    if(!liEl.querySelector('p')) {
      let reviewList = JSON.parse(localStorage.getItem(localStorage.key(i)));
      reviewList.forEach(element => {
        const textEl = document.createElement('p');
        textEl.textContent = element;
        liEl.appendChild(textEl);
        const btnDel = document.createElement('button');
        btnDel.textContent = 'Удалить отзыв'
        textEl.appendChild(btnDel);
        btnDel.addEventListener('click', () => {
          let del = confirm("Точно удалить?");
          if (del) {
            reviewList = reviewList.filter((i) => i !== element);
            localStorage.setItem(localStorage.key(i), JSON.stringify(reviewList));
            textEl.remove();
            if (reviewList.length === 0) {
              liEl.remove();
              localStorage.removeItem(localStorage.key(i));
            }
          }
        });
      });
    }
  });
}











