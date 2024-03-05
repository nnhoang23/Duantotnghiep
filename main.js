const tbody = document.getElementById('body');

fetch('http://localhost:3000/products').then(tri =>tri.json()).then(data=>{
    tbody.innerHTML = data.map((item,index)=> {
        return `
         <tr>
            <th scope="row">${index+1}</th>
            <td>${item.name}</td>
            <td><input type="image" src="${item.image}" alt=""></td>
            <td>${item.price}</td>
            <td>
                <button data-id="${item.id}" class="btn btn-danger">Xoá</button>
                <button data-id="${item.id}" class="btn btn-warning">Sửa</button>
                </td>
                
        </tr>
        `

    }).join('')
}).then(()=>{
    const btn_del = document.getElementsByClassName('btn-danger');
    const btn_up = document.getElementsByClassName('btn-warning');
    for (const btnUpElement of btn_up) {
        let id = btnUpElement.dataset.id;
        btnUpElement.addEventListener('click',()=>{
            window.location.href=`add.html?id=${id}`;
        })
    }
    for (const btnDelElement of btn_del) {
        let id = btnDelElement.dataset.id;

            btnDelElement.addEventListener('click',()=>{
                let con = confirm('ban co muon xoa khong')

                if (con){
                fetch(`http://localhost:3000/products/${id}`,{
                    method:'DELETE'
                })
                    alert('xoa thanh cong');
                    window.location.href=''
                }

            })


    }

})