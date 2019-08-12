let navItem = document.getElementsByClassName('js-nav-item');

[].forEach.call( navItem, (item, i, navItem ) => {
  if( window.location.pathname === item.dataset.url ) {
    item.classList.add('active');
  }
});

const contactsBtn          = document.getElementById('contacts_btn');
const contactsForm         = document.getElementById('contacts_form');
const contactsFormName     = document.getElementById('contacts_name');
const contactsFormNickName = document.getElementById('contacts_nickname');
const contactsFormEmail    = document.getElementById('contacts_email');
const contactsFormTextarea = document.getElementById('contacts_textarea1');