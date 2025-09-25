function solution(order) {
    let container = []
    let subContainer = []
    let pos = 0
    
    let maxv = 0
    for(let i=0; i< order.length; i++){
        maxv = Math.max(maxv, order[i])
    }
    

    // i 가 현재 박스
    for (let i = 1; i <= maxv; i++) {
        if (order[pos] === i) {
            container.push(i)
            // 다음 상자를 가르키게 한다
            pos++
            
            // pos가 전체 오더의 길이이하이고 
            while (pos < order.length && subContainer.length) {
                if (order[pos] === subContainer.at(-1)) {
                    container.push(subContainer.pop())
                    pos++
                } else break
            }
        } else {
            subContainer.push(i)
        }
    }
    
    console.log(container, subContainer)
    
    while (pos < order.length && subContainer.length) {
        if (subContainer.at(-1) === order[pos]) {
            container.push(subContainer.pop())
            pos++
        } else break
    }

    return container.length
}

