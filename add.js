const form = document.querySelector('#form')
const name = document.querySelector('#name');
const image = document.querySelector('#image');
const price = document.querySelector('#price');
form.addEventListener('submit',()=>{
    let proN = {
        'name': name.value,
        'price': price.value,
        'image': image.value
    }
    fetch('http://localhost:3000/products',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(proN)
    })
    alert('them thanh cong')
})

