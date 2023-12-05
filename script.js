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
        "email": mail,
        "password": password
      };

      let xhr = new XMLHttpRequest()
      xhr.open('POST', "https://87f1-105-112-75-119.ngrok.io/recipe-management/register")

      xhr.setRequestHeader('Content-Type', 'application/json')
      
      xhr.send({
        "email": `${mail}`,
        "password": `${password}`
      });

      xhr.onload = function(){
        console.log(xhr.response)
      }

    //   fetch('https://1128-62-173-45-70.ngrok.io/recipe-management/register', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     mode: 'no-cors',
    //     body: registrationData
    //   })
    //     .then(response => {
    //       if (!response.ok) {
    //         throw new Error(`HTTP error! Status: ${response.status}`);
    //       }
    //       return response.json();
    //     })
    //     .then(data => {
    //         // this.location.href = 'menu/menu.html';
    //         console.log('Registration Successful:', data);
    //     })
    //     .catch(error => {
    //       console.error('Error:', error);
    //     });
      
}
