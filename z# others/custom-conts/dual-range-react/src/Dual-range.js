import React, { useState } from 'react'

let tmpPox

const DualRange = (props) => {
    const {
        step,
        currentValue,
        setCurrentValue,
        lineStyles,
        control1Styles,
        setControl1Styles,
        control2Styles,
        setControl2Styles
    } = props

    // ------------------------------------------------
    const [line, setLine] = useState(null)
    const [betweenLineStyles, setBetweenLineStyles] = useState({
        width: 0,
        marginLeft: 0,
        bg: 'linear-gradient(90deg, #ff55a5 0%, #ff5869 100%)',
    })
    // ------------------------------------------------
 
    useState(() => {
        let value1 = control1Styles.position[0] + (control1Styles.size / 2)
        let value2 = lineStyles.width - (control2Styles.position[0] + (control2Styles.size / 2))

        setBetweenLineStyles({...betweenLineStyles, width: value2 - value1})
    }, [])

    const handleIncrease = index => {
        if(currentValue[index] + step[0] <= step[2]){
            if(index === 0 && currentValue[0] + step[0] <= currentValue[1]){
                let tmp = [...currentValue]
                if(parseInt(step[0]) === step[0]){
                    tmp[0] += step[0]
                } else {
                    tmp[0] = parseFloat((tmp[0] + step[0]).toPrecision(2))
                }
                setCurrentValue(tmp)
                const { width } = lineStyles
                const partNumber = parseFloat(tmp[0]/step[0])
                const part = parseFloat(width/(step[2]/step[0]))
                let tmpObj = {...control1Styles}
                const halfSize = tmpObj.size / 2
                tmpObj.position[0] = (part * partNumber) - halfSize
                setControl1Styles(tmpObj)
                const value1 = control1Styles.position[0] + halfSize
                const value2 = width - (control2Styles.position[0] + halfSize)
                setBetweenLineStyles({
                    ...betweenLineStyles,
                    marginLeft: value1,
                    width: value2 - value1
                })
            }

            if(index === 1){
                let tmp = [...currentValue]
                if(parseInt(step[0]) === step[0]){
                    tmp[1] += step[0]
                } else {
                    tmp[1] = parseFloat((tmp[1] + step[0]).toPrecision(2))
                }
                setCurrentValue(tmp)
                const { width } = lineStyles
                const partNumber = parseFloat(tmp[1]/step[0])
                const part = parseFloat(width/(step[2]/step[0]))
                let tmpObj = {...control2Styles}
                const halfSize = tmpObj.size / 2
                tmpObj.position[0] = width - ((part * partNumber) + halfSize)
                setControl2Styles(tmpObj)
                const value1 = control1Styles.position[0] + halfSize
                const value2 = width - (control2Styles.position[0] + halfSize)
                setBetweenLineStyles({
                    ...betweenLineStyles,
                    marginLeft: value1,
                    width: value2 - value1
                })
            }
        }
    }

    const handleDescrease = index => {
        if(currentValue[index] - step[0] >= step[1]){
            if(index === 1 && currentValue[1] - step[0] >= currentValue[0]){
                let tmp = [...currentValue]
                if(parseInt(step[0]) === step[0]){
                    tmp[1] -= step[0]
                } else {
                    tmp[1] = parseFloat((tmp[1] - step[0]).toPrecision(2))
                }
                setCurrentValue(tmp)
                const { width } = lineStyles
                const partNumber = parseFloat(tmp[1]/step[0])
                const part = parseFloat(width/(step[2]/step[0]))
                let tmpObj = {...control2Styles}
                const halfSize = tmpObj.size / 2
                tmpObj.position[0] = width - ((part * partNumber) + halfSize)
                setControl2Styles(tmpObj)
                const value1 = control1Styles.position[0] + halfSize
                const value2 = width - (control2Styles.position[0] + halfSize)
                setBetweenLineStyles({
                    ...betweenLineStyles,
                    marginLeft: value1,
                    width: value2 - value1
                })
            }

            if(index === 0){
                let tmp = [...currentValue]
                if(parseInt(step[0]) === step[0]){
                    tmp[0] -= step[0]
                } else {
                    tmp[0] = parseFloat((tmp[0] - step[0]).toPrecision(2))
                }
                setCurrentValue(tmp)
                const { width } = lineStyles
                const partNumber = parseFloat(tmp[0]/step[0])
                const part = parseFloat(width/(step[2]/step[0]))
                let tmpObj = {...control1Styles}
                const halfSize = tmpObj.size / 2
                tmpObj.position[0] = (part * partNumber) - halfSize
                setControl1Styles(tmpObj)
                const value1 = control1Styles.position[0] + halfSize
                const value2 = width - (control2Styles.position[0] + halfSize)
                setBetweenLineStyles({
                    ...betweenLineStyles,
                    marginLeft: value1,
                    width: value2 - value1
                })
            }
        }
    }

    const mouseMoveFunc1 = e => {
        const { width } = lineStyles
        let tmpObj = {...control1Styles}
        const halfSize = tmpObj.size / 2

        let value1 = control1Styles.position[0] + halfSize
        let value2 = width - (control2Styles.position[0] + halfSize)
        let value = e.pageX - line.offsetLeft + halfSize

        const minValue = line.offsetLeft - halfSize
        const maxValue = line.offsetLeft + width - halfSize
        const current = e.pageX - line.offsetLeft
        let currentPercent = (current / (maxValue - minValue)) * 100

        if(e.pageX >= line.offsetLeft + width){
            currentPercent = 100
        }
        if(e.pageX <= line.offsetLeft){
            currentPercent = 0
        }

        // console.log(currentPercent)

        if(value - halfSize <= value2){
            if(parseInt(step[0]) === step[0]){
                const resultCal = Math.floor(((currentPercent * step[2]) / 100) / step[0])
    
                if(resultCal !== tmpPox){
                    tmpPox = resultCal
                    let tmp = [...currentValue]
                    tmp[0] = resultCal * step[0]
                    setCurrentValue([...tmp])
    
                    const part = parseFloat(width/(step[2]/step[0]))
                    tmpObj.position[0] = (resultCal * part) - halfSize
                    setControl1Styles(tmpObj)

                    value1 = control1Styles.position[0] + halfSize
                    value2 = width - (control2Styles.position[0] + halfSize)
                    value = e.pageX - line.offsetLeft + halfSize
    
                    setBetweenLineStyles({
                        ...betweenLineStyles,
                        marginLeft: value1,
                        width: value2 - value1
                    })
                }
            } else {
                const resultCal = Math.floor(parseFloat((((currentPercent * step[2]) / 100) / step[0]).toPrecision(2)))

                if(resultCal !== tmpPox){
                    tmpPox = resultCal
                    let tmp = [...currentValue]
                    tmp[0] = parseFloat((resultCal * step[0]).toPrecision(2))
                    setCurrentValue([...tmp])
    
                    const part = parseFloat(width/(step[2]/step[0]))
                    tmpObj.position[0] = (resultCal * part) - halfSize
                    setControl1Styles(tmpObj)

                    value1 = control1Styles.position[0] + halfSize
                    value2 = width - (control2Styles.position[0] + halfSize)
                    value = e.pageX - line.offsetLeft + halfSize
    
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

        let value1 = control1Styles.position[0] + halfSize
        let value2 = width - (control2Styles.position[0] + halfSize)
        let value = e.pageX - line.offsetLeft - halfSize

        const minValue = line.offsetLeft - halfSize
        const maxValue = line.offsetLeft + width - halfSize
        const current = width - (e.pageX - line.offsetLeft)
        let currentPercent = (current / (maxValue - minValue)) * 100

        if(e.pageX >= line.offsetLeft + width){
            currentPercent = 0
        }
        if(e.pageX <= line.offsetLeft){
            currentPercent = 100
        }

        // console.log(currentPercent)

        if(value + halfSize >= value1){
            if(parseInt(step[0]) === step[0]){
                const resultCal = Math.floor(((currentPercent * step[2]) / 100) / step[0])
    
                if(resultCal !== tmpPox){
                    tmpPox = resultCal
                    let tmp = [...currentValue]
                    tmp[1] = step[2] - (resultCal * step[0])
                    setCurrentValue([...tmp])
    
                    const part = parseFloat(width/(step[2]/step[0]))
                    tmpObj.position[0] = (resultCal * part) - halfSize
                    setControl2Styles(tmpObj)
    
                    value1 = control1Styles.position[0] + halfSize
                    value2 = width - (control2Styles.position[0] + halfSize)
                    value = e.pageX - line.offsetLeft + halfSize
    
                    setBetweenLineStyles({
                        ...betweenLineStyles,
                        marginLeft: value1,
                        width: value2 - value1
                    })
                }
            } else {
                const resultCal = Math.floor(parseFloat((((currentPercent * step[2]) / 100) / step[0]).toPrecision(2)))
    
                if(resultCal !== tmpPox){
                    tmpPox = resultCal
                    let tmp = [...currentValue]
                    tmp[1] = step[2] - (parseFloat((resultCal * step[0]).toPrecision(2)))
                    setCurrentValue([...tmp])
    
                    const part = parseFloat(width/(step[2]/step[0]))
                    tmpObj.position[0] = (resultCal * part) - halfSize
                    setControl2Styles(tmpObj)
    
                    value1 = control1Styles.position[0] + halfSize
                    value2 = width - (control2Styles.position[0] + halfSize)
                    value = e.pageX - line.offsetLeft + halfSize
    
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

export default DualRange