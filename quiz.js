const backButton =  document.getElementById('back-button')
backButton.addEventListener('click', _ => {
    const konfirmasi = confirm('Anda yakin ingin keluar ? ')
    if (konfirmasi) {
        history.back()
    } 
}) 

const containerNavQuestions = document.getElementById('containerNavQuestions')
for (let i = 1; i <= 10; i++) {
    containerNavQuestions.innerHTML += `<button class="w-10 h-10  rounded-[50%] border-border-element border-2 text-white font-semibold text-xl hover:shadow-nav-shadow ">${i}</button>`
}

function NotFound() {
    const ui = `<div>NotFound</div>`
    const sessionStorageCategory = sessionStorage.getItem('Category'),
        sessionStorageLevel = sessionStorage.getItem('Level')
    
    if (sessionStorageLevel === '' && sessionStorageCategory === '') {
        document.body.style.background = 'white'
        document.body.innerHTML = ui
    } 

}
NotFound()
