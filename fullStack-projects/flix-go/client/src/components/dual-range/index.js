import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { changeMainParams } from '../../actions'

let tmpPox

const DualRange = props => {
    const {
        step,
        mainParams,
        changeParams,
        lineStyles,
        control1Styles,
        setControl1Styles,
        control2Styles,
        setControl2Styles,
        betweenLineStyles,
        setBetweenLineStyles,
        typeRange
    } = props

    // ------------------------------------------------ filterParams[typeRange]
    const [line, setLine] = useState(null)

    const firstFunc = () => {
        let tmpObj1 = {...control1Styles}
        let tmpObj2 = {...control2Styles}
        let tmpLineStyles = {...betweenLineStyles}
        const halfSize = tmpObj1.size / 2

        const diff = step[2] - step[1]
        let tmp1new = (mainParams[typeRange][0] - step[1]) / diff
        let tmp2new = (step[2] - mainParams[typeRange][1]) / diff
        let tmp1newPr = parseFloat(tmp1new.toPrecision(4))
        let tmp2newPr = parseFloat(tmp2new.toPrecision(4))

        tmpObj1.position[0] = (tmp1newPr * lineStyles.width) - halfSize
        tmpObj2.position[0] = (tmp2newPr * lineStyles.width) - halfSize

        setControl1Styles(tmpObj1)
        setControl2Styles(tmpObj2)

        let value1 = control1Styles.position[0] + halfSize
        let value2 = lineStyles.width - (control2Styles.position[0] + halfSize)

        tmpLineStyles.marginLeft = value1
        tmpLineStyles.width = value2 - value1
        setBetweenLineStyles(tmpLineStyles)
    }
 
    useEffect(() => {
        firstFunc()
    }, [])

    const computedOffset = obj => {
        let tmp = obj.offsetLeft

        if(obj.offsetParent.localName !== 'body'){
            tmp += computedOffset(obj.offsetParent)
        }

        return tmp
    }

    const mouseMoveFunc1 = e => {
        const { width } = lineStyles
        let tmpObj = {...control1Styles}
        const halfSize = tmpObj.size / 2
        const offsetLeft = computedOffset(line)

        let value1 = control1Styles.position[0] + halfSize
        let value2 = width - (control2Styles.position[0] + halfSize)
        let value = e.pageX - offsetLeft + halfSize

        const minValue = offsetLeft - halfSize
        const maxValue = offsetLeft + width - halfSize
        const current = e.pageX - offsetLeft
        let currentPercent = (current / (maxValue - minValue)) * 100

        if(e.pageX >= offsetLeft + width){
            currentPercent = 100
        }
        if(e.pageX <= offsetLeft){
            currentPercent = 0
        }

        if(value - halfSize <= value2){
            if(parseInt(step[0]) === step[0]){
                const diff = step[2] - step[1]
                const resultCal = Math.floor(currentPercent * diff / step[0] / 100)
                
                if(resultCal !== tmpPox){
                    tmpPox = resultCal
                    let tmp = mainParams[typeRange]
                    tmp[0] = (resultCal * step[0]) + step[1]
                    changeParams(typeRange, tmp)
                    // setCurrentValue([...tmp])

                    let tmpnew = parseFloat(((mainParams[typeRange][0] - step[1]) / diff).toPrecision(2))
                    tmpObj.position[0] = (tmpnew * lineStyles.width) - halfSize
                    setControl1Styles(tmpObj)

                    value1 = control1Styles.position[0] + halfSize
                    value2 = width - (control2Styles.position[0] + halfSize)
                    value = e.pageX - offsetLeft + halfSize
    
                    setBetweenLineStyles({
                        ...betweenLineStyles,
                        marginLeft: value1,
                        width: value2 - value1
                    })
                }
            } else {
                const diff = step[2] - step[1]
                const resultCal = Math.floor(parseFloat((currentPercent * diff / step[0] / 100).toPrecision(2)))

                if(resultCal !== tmpPox){
                    tmpPox = resultCal
                    let tmp = mainParams[typeRange]
                    tmp[0] = parseFloat(((resultCal * step[0]) + step[1]).toPrecision(2))
                    changeParams(typeRange, tmp)
                    // setCurrentValue([...tmp])

                    let tmpnew = parseFloat(((mainParams[typeRange][0] - step[1]) / diff).toPrecision(2))
                    tmpObj.position[0] = (tmpnew * lineStyles.width) - halfSize
                    setControl1Styles(tmpObj)

                    value1 = control1Styles.position[0] + halfSize
                    value2 = width - (control2Styles.position[0] + halfSize)
                    value = e.pageX - offsetLeft + halfSize
    
                    setBetweenLineStyles({
                        ...betweenLineStyles,
                        marginLeft: value1,
                        width: value2 - value1
                    })
                }
            }
        }
    }

    const mouseMoveFunc2 = e => {
        const { width } = lineStyles
        let tmpObj = {...control2Styles}
        const halfSize = tmpObj.size / 2
        const offsetLeft = computedOffset(line)

        let value1 = control1Styles.position[0] + halfSize
        let value2 = width - (control2Styles.position[0] + halfSize)
        let value = e.pageX - offsetLeft - halfSize

        const minValue = offsetLeft - halfSize
        const maxValue = offsetLeft + width - halfSize
        const current = width - (e.pageX - offsetLeft)
        let currentPercent = (current / (maxValue - minValue)) * 100

        if(e.pageX >= offsetLeft + width){
            currentPercent = 0
        }
        if(e.pageX <= offsetLeft){
            currentPercent = 100
        }

        if(value + halfSize >= value1){
            if(parseInt(step[0]) === step[0]){
                const diff = step[2] - step[1]
                const resultCal = Math.floor(currentPercent * diff / step[0] / 100)
    
                if(resultCal !== tmpPox){
                    tmpPox = resultCal
                    let tmp = mainParams[typeRange]
                    tmp[1] = diff - (resultCal * step[0]) + step[1]
                    changeParams(typeRange, tmp)
                    // setCurrentValue([...tmp])
    
                    let tmpnew = Math.abs(parseFloat(((mainParams[typeRange][1] - diff - step[1]) / diff).toPrecision(2)))
                    tmpObj.position[0] = (tmpnew * lineStyles.width) - halfSize
                    setControl2Styles(tmpObj)
    
                    value1 = control1Styles.position[0] + halfSize
                    value2 = width - (control2Styles.position[0] + halfSize)
                    value = e.pageX - offsetLeft + halfSize
    
                    setBetweenLineStyles({
                        ...betweenLineStyles,
                        marginLeft: value1,
                        width: value2 - value1
                    })
                }
            } else {
                const diff = step[2] - step[1]
                const resultCal = Math.floor(parseFloat((currentPercent * diff / step[0] / 100).toPrecision(2)))
    
                if(resultCal !== tmpPox){
                    tmpPox = resultCal
                    let tmp = mainParams[typeRange]
                    tmp[1] = parseFloat((diff - (resultCal * step[0]) + step[1]).toPrecision(2))
                    changeParams(typeRange, tmp)
                    // setCurrentValue([...tmp])
    
                    let tmpnew = Math.abs(parseFloat(((mainParams[typeRange][1] - diff - step[1]) / diff).toPrecision(2)))
                    tmpObj.position[0] = (tmpnew * lineStyles.width) - halfSize
                    setControl2Styles(tmpObj)
    
                    value1 = control1Styles.position[0] + halfSize
                    value2 = width - (control2Styles.position[0] + halfSize)
                    value = e.pageX - offsetLeft + halfSize
    
                    setBetweenLineStyles({
                        ...betweenLineStyles,
                        marginLeft: value1,
                        width: value2 - value1
                    })
                }
            }
        }
    }

    const mouseUpFunc1 = () => {
        document.removeEventListener('mousemove', mouseMoveFunc1)
    }

    const mouseUpFunc2 = () => {
        document.removeEventListener('mousemove', mouseMoveFunc2)
    }

    const control1MouseDownFunc = () => {
        document.addEventListener('mousemove', mouseMoveFunc1)
        document.addEventListener('mouseup', mouseUpFunc1)
    }

    const control2MouseDownFunc = () => {
        document.addEventListener('mousemove', mouseMoveFunc2)
        document.addEventListener('mouseup', mouseUpFunc2)
    }

    return(
        <div className='dual--range--box'>
            <div
                className="dual--range--line"
                ref={(refLine) => setLine(refLine)}
                style={{
                    height: `${lineStyles.height}px`,
                    width: `${lineStyles.width}px`,
                    backgroundColor: lineStyles.bgColor
                }}
            >
                <div
                    className='dual--range--between--line'
                    style={{
                        width: `${betweenLineStyles.width}px`,
                        marginLeft: `${betweenLineStyles.marginLeft}px`,
                        background: betweenLineStyles.bg
                    }}
                ></div>
                <div
                    className="control--1"
                    onMouseDown={control1MouseDownFunc}
                    style={{
                        width: `${control1Styles.size}px`,
                        height: `${control1Styles.size}px`,
                        backgroundColor: control1Styles.bgColor,
                        boxShadow: control1Styles.boxShadow,
                        left: control1Styles.position[0],
                        top: control1Styles.position[1],
                    }}
                ></div>
                <div
                    className="control--2"
                    onMouseDown={control2MouseDownFunc}
                    style={{
                        width: `${control2Styles.size}px`,
                        height: `${control2Styles.size}px`,
                        backgroundColor: control2Styles.bgColor,
                        boxShadow: control2Styles.boxShadow,
                        right: control2Styles.position[0],
                        top: control2Styles.position[1]
                    }}
                ></div>
            </div>
        </div>
    )

}

const mapStateToProps = ({ mainParams }) => ({
    mainParams
})

const mapDispatchToProps = dispatch => ({
    changeParams: (keyType, newValue) => dispatch(changeMainParams(keyType, newValue))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null
)(DualRange)




// const handleIncrease = index => {
//     if(currentValue[index] + step[0] <= step[2]){
//         if(index === 0 && currentValue[0] + step[0] <= currentValue[1]){
//             let tmp = [...currentValue]
//             if(parseInt(step[0]) === step[0]){
//                 tmp[0] += step[0]
//             } else {
//                 tmp[0] = parseFloat((tmp[0] + step[0]).toPrecision(2))
//             }
//             setCurrentValue(tmp)
//             const { width } = lineStyles
//             const partNumber = parseFloat(tmp[0]/step[0])
//             const part = parseFloat(width/(step[2]/step[0]))
//             let tmpObj = {...control1Styles}
//             const halfSize = tmpObj.size / 2
//             tmpObj.position[0] = (part * partNumber) - halfSize
//             setControl1Styles(tmpObj)
//             const value1 = control1Styles.position[0] + halfSize
//             const value2 = width - (control2Styles.position[0] + halfSize)
//             setBetweenLineStyles({
//                 ...betweenLineStyles,
//                 marginLeft: value1,
//                 width: value2 - value1
//             })
//         }

//         if(index === 1){
//             let tmp = [...currentValue]
//             if(parseInt(step[0]) === step[0]){
//                 tmp[1] += step[0]
//             } else {
//                 tmp[1] = parseFloat((tmp[1] + step[0]).toPrecision(2))
//             }
//             setCurrentValue(tmp)
//             const { width } = lineStyles
//             const partNumber = parseFloat(tmp[1]/step[0])
//             const part = parseFloat(width/(step[2]/step[0]))
//             let tmpObj = {...control2Styles}
//             const halfSize = tmpObj.size / 2
//             tmpObj.position[0] = width - ((part * partNumber) + halfSize)
//             setControl2Styles(tmpObj)
//             const value1 = control1Styles.position[0] + halfSize
//             const value2 = width - (control2Styles.position[0] + halfSize)
//             setBetweenLineStyles({
//                 ...betweenLineStyles,
//                 marginLeft: value1,
//                 width: value2 - value1
//             })
//         }
//     }
// }

// const handleDescrease = index => {
//     if(currentValue[index] - step[0] >= step[1]){
//         if(index === 1 && currentValue[1] - step[0] >= currentValue[0]){
//             let tmp = [...currentValue]
//             if(parseInt(step[0]) === step[0]){
//                 tmp[1] -= step[0]
//             } else {
//                 tmp[1] = parseFloat((tmp[1] - step[0]).toPrecision(2))
//             }
//             setCurrentValue(tmp)
//             const { width } = lineStyles
//             const partNumber = parseFloat(tmp[1]/step[0])
//             const part = parseFloat(width/(step[2]/step[0]))
//             let tmpObj = {...control2Styles}
//             const halfSize = tmpObj.size / 2
//             tmpObj.position[0] = width - ((part * partNumber) + halfSize)
//             setControl2Styles(tmpObj)
//             const value1 = control1Styles.position[0] + halfSize
//             const value2 = width - (control2Styles.position[0] + halfSize)
//             setBetweenLineStyles({
//                 ...betweenLineStyles,
//                 marginLeft: value1,
//                 width: value2 - value1
//             })
//         }

//         if(index === 0){
//             let tmp = [...currentValue]
//             if(parseInt(step[0]) === step[0]){
//                 tmp[0] -= step[0]
//             } else {
//                 tmp[0] = parseFloat((tmp[0] - step[0]).toPrecision(2))
//             }
//             setCurrentValue(tmp)
//             const { width } = lineStyles
//             const partNumber = parseFloat(tmp[0]/step[0])
//             const part = parseFloat(width/(step[2]/step[0]))
//             let tmpObj = {...control1Styles}
//             const halfSize = tmpObj.size / 2
//             tmpObj.position[0] = (part * partNumber) - halfSize
//             setControl1Styles(tmpObj)
//             const value1 = control1Styles.position[0] + halfSize
//             const value2 = width - (control2Styles.position[0] + halfSize)
//             setBetweenLineStyles({
//                 ...betweenLineStyles,
//                 marginLeft: value1,
//                 width: value2 - value1
//             })
//         }
//     }
// }