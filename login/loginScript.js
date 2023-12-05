function changePage(e){
    e.preventDefault()
    let mail = document.querySelector('#email');
    let password = document.querySelector('#password');
    console.log(password.value);
    console.log(mail.value);
    this.location.href = 'menu/menu.html';

}
