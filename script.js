const url = "data.json";
let data;
fetch(url).then(res => res.json()).then(res => {
    showData(res)
    data = res
})

function showData(arr) {
    arr.destinations.forEach((element, index) => {
        document.getElementById("planetnames").innerHTML += `<p id="planet${index}" onclick="show('${element.name}',this)">${element.name}</p>`
        
    }) 
}
function show(e,i) {
    let para = document.querySelectorAll("#planetnames p")
    para.forEach(item=>item.classList.remove("selected"))
    i.classList.add("selected")
    document.getElementById("planetnames").borderBottomColor = 'white'
    let currentData = data.destinations.find(item => item.name == e)
    document.getElementById("planetimages").innerHTML = `<img src="${currentData.images.png}"/>`
    document.getElementById("planet").innerHTML = currentData.name
    document.getElementById("planet_info").innerHTML = currentData.description
}
