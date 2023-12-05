function changePage(e){
    e.preventDefault()
    let mail = document.querySelector('#email');
    let password = document.querySelector('#password');
    if(password.value && mail.value){
        registerUser(password.value, mail.value);
    }
}

const registerUser = (password, mail) =>{
    const registrationData = {
        email: mail,
        password: password
      };
      console.log(registrationData.password);
    console.log(registrationData.email);
      
      fetch('https://dc51-62-173-45-70.ngrok.io/recipe-management/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(registrationData)
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
            // this.location.href = 'menu/menu.html';
            console.log('Registration Successful:', data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
      
}
