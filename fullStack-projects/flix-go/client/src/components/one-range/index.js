import React, { useState, useEffect } from 'react'

const OneRange = (props) => {
    const {
        step,
        currentValue,
        setCurrentValue,
        lineStyles,
        control1Styles,
        setControl1Styles,
        betweenLineStyles,
        setBetweenLineStyles,
    } = props

    // ------------------------------------------------
    const [line, setLine] = useState(null)

    const computedOffset = obj => {
        let tmp = obj.offsetLeft

        if(obj.offsetParent.localName !== 'body'){
            tmp += computedOffset(obj.offsetParent)
        }

        return tmp
    }

    const firstFunc = () => {
        let tmpObj1 = {...control1Styles}
        let tmpLineStyles = {...betweenLineStyles}
        const halfSize = tmpObj1.size / 2

        const diff = step[2] - step[1]
        let tmp1new = (currentValue - step[1]) / diff
        let tmp1newPr = parseFloat(tmp1new.toPrecision(4))

        tmpObj1.position[0] = (tmp1newPr * lineStyles.width) - halfSize

        setControl1Styles(tmpObj1)

        tmpLineStyles.width = control1Styles.position[0] + halfSize
        setBetweenLineStyles(tmpLineStyles)
    }
 
    useEffect(() => {
        firstFunc()
    }, [])

    const mouseMoveFunc1 = e => {
        const { width } = lineStyles
        let tmpObj = {...control1Styles}
        const halfSize = tmpObj.size / 2
        const offsetLeft = computedOffset(line)

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

        if(parseInt(step[0]) === step[0]){
            const diff = step[2] - step[1]
            const resultCal = Math.floor(currentPercent * diff / step[0] / 100)
            
            let tmp = (resultCal * step[0]) + step[1]
            setCurrentValue(tmp)

            let tmpnew = parseFloat(((tmp - step[1]) / diff).toPrecision(2))
            tmpObj.position[0] = (tmpnew * lineStyles.width) - halfSize
            setControl1Styles(tmpObj)                    

            setBetweenLineStyles({
                ...betweenLineStyles,
                width: control1Styles.position[0] + halfSize
            })
        } else {
            const diff = step[2] - step[1]
            const resultCal = Math.floor(parseFloat((currentPercent * diff / step[0] / 100).toPrecision(2)))

            let tmp = parseFloat(((resultCal * step[0]) + step[1]).toPrecision(2))
            setCurrentValue(tmp)

            let tmpnew = parseFloat(((tmp - step[1]) / diff).toPrecision(2))
            tmpObj.position[0] = (tmpnew * lineStyles.width) - halfSize
            setControl1Styles(tmpObj)

            setBetweenLineStyles({
                ...betweenLineStyles,
                width: control1Styles.position[0] + halfSize
            })
        }
    }

    const mouseUpFunc1 = () => {
        document.removeEventListener('mousemove', mouseMoveFunc1)
    }

    const control1MouseDownFunc = () => {
        document.addEventListener('mousemove', mouseMoveFunc1)
        document.addEventListener('mouseup', mouseUpFunc1)
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
            </div>
        </div>
    )

}

export default OneRange