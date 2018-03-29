'use strict';

var axios = require('axios');
var form = document.querySelector('.main__form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    axios.get('xd');
});