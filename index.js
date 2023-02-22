const button = document.getElementById('button')



button.addEventListener('click', () => {

    const usuario = document.getElementById("usser").value
    const pass = document.getElementById("pssword").value
    const option = document.getElementById("opt").value

    const newPost = {
        User: usuario,
        Password: pass,
        option: option
    }

    fetch('https://www.php.engenius.com.co/DatabaseIE.php', {
            method: 'POST',
            body: JSON.stringify(newPost),
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => console.log(data))


})