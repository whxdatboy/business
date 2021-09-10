// import $ from 'jquery';

// document.addEventListener('DOMContentLoaded', function() {
//   const form = $('.modal-form'),
//         regName = /^[А-ЯЁа-яё]*(\s[А-ЯЁа-яё]*){2}$/i,
//         regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z0-9]$/i,
//         regTel = /^\+7\s\d{3}\s\d{3}-\d{2}-\d{2}$/;

//         let isChecked = false;

//         form.addEventListener("submit", async(e) => {
//           e.preventDefault();
//           const formData = new FormData(form);

//           const validName = regName.text(formData.get("recall-name")),
//                 validCompName = regName.text(formData.get("recall-company")),
//                 validTel = regTel.text(formData.get("recall-phone")),
//                 validEmail = regEmail.text(formData.get("recall-email"))

//                 if (!validEmail || !validName || !validCompName || !validTel) {
//                   alert(`
//                     ${!validName ? "Введите корректное имя\r\n" : ""}
//                     ${!validCompName ? "Введите корректное название компании\r\n" : ""}
//                     ${!validTel ? "Введите корректный номер телефона\r\n" : ""}
//                     ${!validEmail ? "Введите корректный адрес\r\n" : ""}
//                   `);
//                   return;
//                 }
//         }

//         )
// })
