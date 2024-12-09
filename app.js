let select = document.querySelector('select')
let articles = document.querySelectorAll('article')
let container = document.querySelector('.container')

select.addEventListener('change', () => {
    for (const article of articles) {
        
        if (select.value == article.dataset.type || select.value == 'All'){
            article.style.display = 'grid'
        }else{
            article.style.display = 'none'
        }
    }
})

let name1 = false

function sortName(event){
    name1 = !name1 
    event.preventDefault();
    container.innerHTML = ' '

    let selected = [...articles].sort((a, b) =>{
       return name1 ? a.dataset.name.localeCompare(b.dataset.name) : b.dataset.name.localeCompare(a.dataset.name)
    })

    

    for (const article of selected) {
        container.appendChild(article)
    }
}

