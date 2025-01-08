    const h3 = document.querySelector("h3");
    const button = document.querySelector("button");
    // console.log('object')
    button.addEventListener('click',() => {
    if (h3.innerHTML ==='Stranger') {
        h3.innerHTML='Friends'
        button.innerHTML="Unfollow"
        h3.style.color='red'
        button.style.background='red'
    } else {
        h3.innerHTML='Stranger';
        // h3.innerHTML='Stranger'
        button.innerHTML="Follow"
        h3.style.color='royalblue'
        button.style.background='royalblue'
    }
    })

