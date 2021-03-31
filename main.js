
let oldUl = document.querySelector('.item-list')
let btn = document.querySelector('.add')
let input1 = document.querySelector('.name')
let input2 = document.querySelector('.age')
let input3 = document.querySelector('.score')
let selector = document.querySelector('#sorter')
let mainOption = document.querySelector('.mainoption')

let database = [
    { name: 'toshmat', age:'23', score:'80'},
    { name: 'eshmat', age:'22', score:'88'},
    { name: 'vali', age:'20', score:'99'},
    { name: 'sherali', age:'24', score:'69'},
    { name: 'ismoil', age:'25', score:'91'},
    { name: 'gulimoh', age:'17', score:'59'},
    { name: 'diyora', age:'29', score:'85'},
]


function display(src){
    oldUl.innerHTML = null
  
    let i = 1;
    for(let date of src){
        let newLi = document.createElement('li')
        newLi.classList.add('item')
        let newDiv1 = document.createElement('div')
        newDiv1.classList.add('no2')
        let newDiv2 = document.createElement('div')
        newDiv2.classList.add('no4')
        let newSpan1 = document.createElement('span')
        newSpan1.classList.add('no3')
        newSpan1.textContent = i
        let newSpan2 = document.createElement('span')
        newSpan2.classList.add('name-item')
        newSpan2.textContent = date.name
        let newSpan3 = document.createElement('span')
        newSpan3.classList.add('age-item')
        newSpan3.textContent = date.age
        let newSpan4 = document.createElement('span')
        newSpan4.classList.add('score-item')
        newSpan4.textContent = date.score
        
        newDiv1.appendChild(newSpan1)
        newDiv1.appendChild(newSpan2)
        newDiv2.appendChild(newSpan3)
        newDiv2.appendChild(newSpan4)
        newLi.appendChild(newDiv1)
        newLi.appendChild(newDiv2)
        oldUl.appendChild(newLi)
        i++
    }
}
selector.addEventListener('change', ()=>{
    let newSelector=selector.value
    if(newSelector==1){
        let sorted = database.sort(function(a, b) {
            let textA = a.name.toUpperCase()
            let textB = b.name.toUpperCase()
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
        })
        display(sorted)
    }
    if(newSelector==2){
        let sorted = database.sort(function(a, b) {
            let textA = a.age.toString().padStart(9,0)
            let textB = b.age.toString().padStart(9,0)
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
        })
        display(sorted)
    }
    if(newSelector==3){
        let sorted = database.sort(function(a, b) {
            let textA = a.score.toString().padStart(9,0)
            let textB = b.score.toString().padStart(9,0)
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
        })
        display(sorted)
    }
    
})

btn.addEventListener('click', () => {
   if(input1.value != '' && input2.value != '' && input3.value != ''){
        let name = input1.value
        let age = input2.value
        let score = input3.value
        let newDate = {name, age, score}
        database.push(newDate)
        let sorted = database.sort(function(a, b) {
            let textA = a.name.toUpperCase()
            let textB = b.name.toUpperCase()
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
        })
    
        display(sorted)

        input1.value = null
        input2.value = null
        input3.value = null
       
        mainOption.selected = true;
   }
})

let sorted = database.sort(function(a, b) {
    let textA = a.name.toUpperCase()
    let textB = b.name.toUpperCase()
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
})
display(sorted)

