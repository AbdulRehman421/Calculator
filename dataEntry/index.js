// to store input collections
let inputCollections = []
let inputs = document.querySelectorAll('.inputs');
let dark = 'black'

let decisions = document.getElementsByName('decision')
inputs.forEach(input => {

    input.addEventListener('focus', (e) => {
        navigator.clipboard.readText()
            .then((text) => {
                e.target.value = text
                inputCollections.push(text)

            })
    })
    input.addEventListener('dblclick', () => {
        input.select();
        document.execCommand('copy')
    })
})

// to store decision

let decisionsArray = []
let finalDecision;

decisions.forEach(select => {
    select.addEventListener('click', (e) => {
        decisionsArray.push(e.target.value)
        finalDecision = decisionsArray[decisionsArray.length - 1]

    })

})


let comment = document.querySelector('.comment')


let save = document.querySelector('#saveData')
save.addEventListener('click', (e) => {
    e.preventDefault()
    const dataCollection = []
    let comments = comment.value
    dataCollection.push({ inputs: inputCollections, decision: finalDecision, Comment: comments })
    console.log(dataCollection);
    alert('Data Saved')
})












const html = document.querySelector('html')
const header = document.querySelector('header')
const container = document.querySelector('.container')
const labels = document.querySelectorAll('label')
const darkOn = document.querySelector('#darkOn')
const darkOff = document.querySelector('#darkOff')
const nameDrop = document.querySelectorAll('.nameDrop')
darkOff.style.display = 'none'
darkOn.addEventListener('click', (e) => {
    e.target.style.display = 'none'
    darkOff.style.display = 'inline-block'
    html.style.backgroundColor = 'white';
    inputs.forEach(input => {
        input.style.backgroundColor = dark;
        input.style.color = 'white';
    })


    save.style.backgroundColor = dark
    save.style.color = 'white'

    comment.style.backgroundColor = dark
    comment.style.color = 'white'

    nameDrop.forEach(name => {
        name.style.color = dark
    })

    labels.forEach(label => {
        label.style.color = dark;
    })
    header.style.color = 'black'
    container.style.color = 'black'
    document.querySelector('.pdfbtn').style.border = ' 2px solid black'
})

darkOff.addEventListener('click', (e) => {
    e.target.style.display = 'none'
    darkOn.style.display = 'inline-block'
    html.style.backgroundColor = '#111827';
    inputs.forEach(input => {
        input.style.backgroundColor = '#85dad1';
        input.style.color = dark;
    })


    save.style.backgroundColor = '#85dad1'
    save.style.color = dark

    comment.style.backgroundColor = '#85dad1'
    comment.style.color = dark

    nameDrop.forEach(name => {
        name.style.color = 'white'
    })

    labels.forEach(label => {
        label.style.color = 'white';
    })
    header.style.color = 'white'
    container.style.color = 'white';

})





// let finalDecision = []
// let decision;
// function handleDecision() {
//     decisions.forEach(select => {
//         select.addEventListener('click', (e) => {
//             finalDecision.push(e.target.value)
//             decision = finalDecision[finalDecision.length - 1]

//         })

//     })
//     return decision
// }
// const sol = handleDecision()

// let save = document.querySelector('#saveData')
// save.addEventListener('click', (e) => {
//     e.preventDefault()
//     let saveData = {
//         inputs: inputCollections,
//         decisions: sol,
//     }
//     console.log(sol)

// })

