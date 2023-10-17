const show_formBtn = document.querySelector('.show_form')
const form = document.querySelector('form')
const closebtn = document.querySelector('.closebtn')

let itemTitle = document.querySelector('#item_title')
let itemLink = document.querySelector('#item_link')
let addBtn = document.querySelector('.add_btn')
let linksDisplay = document.querySelector('.links_display')

// showing form box
show_formBtn.addEventListener('click', ()=>{
    form.style.display = 'flex'
    show_formBtn.style.display = 'none'
})

// closing form box and removing input text
closebtn.addEventListener('click', ()=>{
    form.style.display = 'none'
    show_formBtn.style.display = 'block'
    itemTitle.value = ''
    itemLink.value = ''
})

// get form input values and set it to the a function to create an item later
form.addEventListener('submit', (e)=>{
    e.preventDefault()

    const title = itemTitle.value
    const link = itemLink.value

    // call the createItem function when ever the form is subitted
    createItem(title, link)
})

// Add the collected data the Inputform into the localstorage in an object form using {}
const createItem = (title, link) => {
    ItemsArray.push({title, link})
    
    localStorage.setItem('items', JSON.stringify(ItemsArray))

    // reloads the page whenever the createItem function is called
    location.reload()
}

const displayItem = () =>{
    let links = ""
    for(let i = 0; i < ItemsArray.length; i++){
        links += `
        <div class="link">
        <a href="${ItemsArray[i].link}" target="_blank">${ItemsArray[i].title}</a>
        <div class="btns">
            <button class="deletebtn">x</button>
            <button class="editbtn">e</button>
        </div>
    </div>
        `
    }

    linksDisplay.innerHTML = links
}

// ...
const ItemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []

console.log(ItemsArray)
displayItem()
