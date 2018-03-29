let form = document.querySelector('.main__form');
let modal = document.querySelector('.modal');
let modal__button = document.querySelector('.modal__button');

let h2 = document.createElement('h2');
h2.classList.add('modal__header');

modal.appendChild(h2);

let section = document.createElement('section');
section.classList.add('modal__conversion');

modal.appendChild(section);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let amount = document.querySelector('#currency__amount');
    let currency = document.querySelector('#currency');
    let date = document.querySelector('#date');

    let data = {
        'amount': amount.value,
        'currency': currency.value,
        'date': date.value
    };

    axios.post('http://localhost:8080/api/conversion', data)
        .then(response => {

            h2.innerHTML = `Wymienione zostało: ${data['amount']} ${data['currency']}`;
            section.innerHTML = `Na: ${response.data} PLN`;

            modal.classList.remove('modal--disabled');
            modal.classList.add('modal--active');

            console.log(response.data);

            modal__button.addEventListener('click', () => {
                modal.classList.remove('modal--active');
                modal.classList.add('modal--disabled');
            });
        });

    // console.log(data);
});

