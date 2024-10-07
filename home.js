const containerCategory = document.getElementById('container-category')
let Category = ['Geograpy', 'Matematic', 'History', 'Computer', 'Art', 'Politics', 'Sports', 'Animal']
for (const i of Category) {
    containerCategory.innerHTML += `<button class="CategoryButton  w-32 h-7 rounded-xl bg-bg-elementCategorybutton text-white font-medium  lg:hover:shadow-nav-shadow transition duration-200 md:duration-75 " id="false" data-activete="false" >${i}</button>`
}

const CategoryButton = document.querySelectorAll('.CategoryButton')
const arrayCategoryButton = Array.from(CategoryButton)
function saveInSessionStorage() {
    const buttonState = arrayCategoryButton.map(button => {
        return  {id : button.id, backgroundColor : button.style.backgroundColor}
    })
    sessionStorage.setItem('buttonState', JSON.stringify(buttonState))
    
    const levelButtonState = ArrayLevelButton.map(e => {
        return {
            dataActive: e.getAttribute('data-active'),
            backgroundColor: e.style.backgroundColor
        }
    });
    sessionStorage.setItem('levelButtonState', JSON.stringify(levelButtonState));
}


function loadSessionStorage() {
    const buttonStates = JSON.parse(sessionStorage.getItem('buttonState'))
    if (sessionStorage.getItem('buttonState')) {
        buttonStates.map((button, index) => {
            arrayCategoryButton[index].id = button.id
            arrayCategoryButton[index].style.backgroundColor = button.backgroundColor
            if (button.id === 'true') {
                sessionStorage.setItem('Category', arrayCategoryButton[index].textContent); // Set Level
            }
        })
    }
    const levelButtonStates = JSON.parse(sessionStorage.getItem('levelButtonState'));
    if (levelButtonStates) {
        levelButtonStates.map((e, i) => {
            ArrayLevelButton[i].setAttribute('data-active', e.dataActive); 
            ArrayLevelButton[i].style.backgroundColor = e.backgroundColor;
            if (e.dataActive === 'true') {
                sessionStorage.setItem('Level', ArrayLevelButton[i].textContent); // Set Level
            }
        });
    }
    
}
window.addEventListener('load', loadSessionStorage)

sessionStorage.setItem('Category', '')
CategoryButton.forEach((e) => {
    let category = ''
    e.addEventListener('click', function () {
        if (this.id === 'true') {
            this.id = 'false'
            this.style.backgroundColor = '#475569'
            category = ''
        } else {
            if (arrayCategoryButton.filter(e => e.id === 'false').length < 8) {
                let categoryTrue = arrayCategoryButton.filter(e => e.id === 'true')[0]
                categoryTrue.id = 'false'
                categoryTrue.style.backgroundColor = '#475569'
            } 
            this.id = 'true'
            this.style.backgroundColor = '#07c9ff'
            category = this.textContent
        }
        sessionStorage.setItem('Category', category)
        saveInSessionStorage()
    })
})


const levelButton =  document.querySelectorAll('.level-Button')
const ArrayLevelButton =  Array.from(levelButton)
sessionStorage.setItem('Level', '')
levelButton.forEach(button => {
    button.addEventListener('click', function () {
        let level = ''
        if (this.getAttribute('data-active') === 'true') {
            this.setAttribute('data-active', 'false')
            this.style.backgroundColor = '#475569'
            level = ''
        } else {
            if (ArrayLevelButton.filter(e => e.getAttribute('data-active') === 'false').length < 3 ) {
                const levelTrue = ArrayLevelButton.find(e => e.getAttribute('data-active') === 'true')
                levelTrue.setAttribute('data-active', 'false')
                levelTrue.style.backgroundColor = '#475569'
            } 
            this.setAttribute('data-active', 'true')
            this.style.backgroundColor = '#07c9ff'
            level = this.textContent
        }
        sessionStorage.setItem('Level', level)
        saveInSessionStorage()
    })
})

const startButton = document.getElementById('start-button')
startButton.addEventListener('click', _ => {
    if (arrayCategoryButton.find(e => e.id === 'true') && ArrayLevelButton.find(e => e.getAttribute('data-active') === 'true' )) {
        startButton.href = 'quiz.html'
    } else {
        alert('gagal')
    }
})