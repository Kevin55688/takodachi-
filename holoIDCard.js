// function getData(data) {
//     const nameList = document.querySelector('.charge-list')
//     nameList.innerHTML = `<li><p>firstName: ${data.results[0].name.first} </p>
//                             <p>lastName: ${data.results[0].name.last} </p>  
//                          </li>`
// }


// fetch('https://randomuser.me/api/')
//     .then(res => res.json())
//     .then(data => getData(data))
//     .catch(err => console.log('error'))



fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => getData(data))
    .catch(err =>'error')

function getData(data) {
    const name = document.querySelector('.name')
    const birth = document.querySelector('.birth')
    const id = document.querySelector('.ID')

    name.innerHTML =`姓名: ${data.results[0].name.first}  ${data.results[0].name.last}`
    birth.innerHTML=`生日 ${data.results[0].dob.date.match(/.{10}/)}`
    id.innerHTML =`ID : ${data.results[0].id.value}`
}

fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err =>'error')
