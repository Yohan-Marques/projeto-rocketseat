let btn = document.querySelector('.btn')

btn.addEventListener('click', () =>{
    let img = document.querySelector('#profile img')

    let body = document.body

    body.classList.toggle('light')

    if(body.classList.contains('light')){

        img.setAttribute('src','./images/avatar-light.png')

    }else{
        img.setAttribute('src', './images/Avatar.png')
    }


})