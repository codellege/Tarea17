
console.log('loaded')

let b1 = document.getElementById('button1')
let b2 = document.getElementById('button1')
let b3 = document.getElementById('button1')
let a = document.getElementById('alert')

console.log(b1, b2, b3, a)

let pos = 0
let neu = 0
let neg = 0
let sav = 0

b1.addEventListener('click', forloop)


function forloop(e) {

    console.log('forloop running')

    for (let i = 1; i > 0; i++) {

        sav = prompt('Please')

        console.log(i)

        if (Number(sav > 0)) {
            pos++
        } else if (Number(sav < 0)) {
            neg++
        } else if (Number(sav == 0)) {
                neu++
        } else if (sav == 'null') {
            printers(pos, neu, neg)
            break;
        } else if (sav == '') {
            alert('invalido')
        }

    }
}



function printers(Poss, Neus, Negs) {
    let text = `<div class="alert alert-primary" role="alert">
                    <strong>
                    Positivos: ${Poss}<br>
                    Neutrales: ${Neus}<br>
                    Negativos: ${Negs}
                    </strong>
                </div>`
    a.innerHTML = text
}