const url = "data.json";
let data;
fetch(url).then(res => res.json()).then(res => {
    showData(res)
    data = res
})
const numbers = document.getElementById("numbers")
function showData(arr) {
    arr.technology.forEach((element,index) => {
        numbers.innerHTML += `<div onclick="show('${element.name}')" id="number">${index}</div>`
    });
    
}
function show(e) {
    let currentData = data.technology.find(item=>item.name == e)
    document.getElementById("vehicle").innerHTML = currentData.name
    document.getElementById("tech_info").innerHTML = currentData.description
    console.log(window.innerWidth);
    if(window.innerWidth < 768 ){
        document.getElementById("tech_img").innerHTML = `<img src="${currentData.images.landscape}" />`
    }else document.getElementById("tech_img").innerHTML = `<img src="${currentData.images.portrait}" />`
    

}
