import $ from 'jquery';

document.addEventListener('DOMContentLoaded', function() {
  let inputSearch = document.querySelector('input[type="search"]'),
      btnDelete = $('.btn-delete');

  btnDelete.on('click', function() {
    inputSearch.value = '';
  });
});
