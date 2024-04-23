const url = "data.json";
let data;
fetch(url).then(res => res.json()).then(res => {
    showData(res)
    data = res
})
function showData(arr){
    arr.crew.forEach((item,index)=>{
        document.getElementById("astronaut").innerHTML = `<img src="${item.images.png}"/>`
        document.getElementById("ball").innerHTML += `<div id="balls${index}"  onclick="change('${item.name}')" class="balls"></div>` 
    })
}
function change(names){
    let currentData = data.crew.find(item => item.name == names)
    document.getElementById("astronaut_name").innerHTML = currentData.name
    document.getElementById("astronaut_position").innerHTML = currentData.role
    document.getElementById("astronaut_bio").innerHTML = currentData.bio
    document.getElementById("astronaut").innerHTML =`<img src="${currentData.images.png}"/>`

}