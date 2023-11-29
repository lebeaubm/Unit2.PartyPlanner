let array = []
let array2=[]
const target = document.querySelector(".target")


function render() {
    const html = array.map((mark) => {
        return `<li> ID: ${mark.id} Name ${mark.name}  Description${mark.description} date:${mark.date}  location: ${mark.location}  </li>`
    })
    //console.log(html.join(""))
    target.innerHTML = html.join("")

}


async function fetchs(){
    const response = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310/events")
    //console.log(response)
    const daData = await response.json()
    array = daData.data;
    console.log(array)
    console.log(array[0])
    render()
}

fetchs()