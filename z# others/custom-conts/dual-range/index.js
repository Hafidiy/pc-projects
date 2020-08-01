let container = document.getElementById('container')

let lineStyles = { width: 200 }

let control1Styles = { size: 20, translate: [0, -6], bgColor: '#ff55a5' }

let control2Styles = { size: 20, translate: [0, -6], bgColor: '#ff5860' }

let box
let line
let control1
let control2

const setElements = (tmpObj) => {
    box = tmpObj.box
    line = tmpObj.line
    control1 = tmpObj.control1
    control2 = tmpObj.control2
}

const createElements = () => {
    let box = document.createElement('div')
    let line = document.createElement('div')
    let control1 = document.createElement('div')
    let control2 = document.createElement('div')

    box.className = 'dual--range--box'
    line.className = 'dual--range--line'
    control1.className = 'control--1'
    control2.className = 'control--2'

    line.append(control1)
    line.append(control2)
    box.append(line)
    container.append(box)

    line.style.width = `${lineStyles.width}px`

    control1.style.width = `${control1Styles.size}px`
    control1.style.height = `${control1Styles.size}px`
    control1.style.backgroundColor = control1Styles.bgColor
    control1.style.transform = `translate(${control1Styles.translate[0]}px, ${control1Styles.translate[1]}px)`

    control2.style.width = `${control2Styles.size}px`
    control2.style.height = `${control2Styles.size}px`
    control2.style.backgroundColor = control2Styles.bgColor
    control2.style.transform = `translate(${control2Styles.translate[0]}px, ${control2Styles.translate[1]}px)`

    return { box, line, control1, control2 }
}

const removeElements = () => {
    if(box){
        if(line){
            if(control1){
                line.removeChild(control1)
            }
            if(control2){
                line.removeChild(control2)
            }

            box.removeChild(line)
        }

        container.removeChild(box)
    }

    return { box: undefined, line: undefined, control1: undefined, control2: undefined }
}

setElements(createElements())

let control1Checked
let control2Checked

const windowMouseMove = e => {
    // console.log('pageX: ', e.pageX)
    console.log('position: ', line.left)
    if(e.pageX > line.offsetLeft && e.pageX < line.offsetLeft + lineStyles.width){
        console.log('ichida')
        control1Styles.translate[0] = e.pageX - line.offsetLeft
    }
    setElements(removeElements())
    setElements(createElements())
}

control1.addEventListener('mousedown', e => {
    console.log('onMouseDown')
    window.addEventListener('mousemove', windowMouseMove)
    window.onmouseup = () => {
        window.removeEventListener('mousemove', windowMouseMove)
    }
})

// control1.onmousedown = e => {
    
// }

control2.onmousedown = () => {
    control2Checked = true
}

control2.onmouseup = () => {
    control2Checked = false
}

if(control1Checked){

}