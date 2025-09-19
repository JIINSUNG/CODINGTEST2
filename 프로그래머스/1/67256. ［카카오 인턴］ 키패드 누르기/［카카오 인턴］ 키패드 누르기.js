function solution(numbers, hand) {
    var answer = '';
    
    const leftHand = [3, 0]
    const rightHand = [3, 2]
    const keyPad = {
        1 : [0, 0],
        2 : [0, 1],
        3 : [0, 2],
        4 : [1, 0],
        5 : [1, 1],
        6 : [1, 2],
        7 : [2, 0],
        8 : [2, 1],
        9 : [2, 2],
        0 : [3, 1]
    }

    const calculate = (key) => {
        const target = keyPad[key]

        const leftDist = Math.abs(leftHand[0] - target[0]) + Math.abs(leftHand[1] - target[1])
        const rightDist = Math.abs(rightHand[0] - target[0]) + Math.abs(rightHand[1] - target[1])
        
        return [leftDist, rightDist, target]
    }
    
    for(const num of numbers){
        if (num === 1 || num === 4 || num === 7){
            answer += "L"
            if(num === 1){
                leftHand[0] = 0
                leftHand[1] = 0
                continue
            }
            
            if(num === 4){
                leftHand[0] = 1
                leftHand[1] = 0
                continue
            }
            
            if(num === 7){
                leftHand[0] = 2
                leftHand[1] = 0
            }
        }else if (num === 3 || num ===6 || num === 9){
            answer += "R"
            
            if(num === 3){
                rightHand[0] = 0
                rightHand[1] = 2
                continue
            }
            if(num === 6){
                rightHand[0] = 1
                rightHand[1] = 2                
                continue
            }
            if(num === 9){
                rightHand[0] = 2
                rightHand[1] = 2                
            }
        }   else {
            const [leftDistance, rightDistance, position] = calculate(num)
            if(leftDistance < rightDistance){
                answer += "L"
                leftHand[0] = position[0]
                leftHand[1] = position[1]
            }else if (leftDistance > rightDistance){
                answer += "R"
                rightHand[0] = position[0]
                rightHand[1] = position[1]
            }else {
                if(hand === 'left'){
                    answer += "L"
                    leftHand[0] = position[0]
                    leftHand[1] = position[1]
                }else{
                    answer += "R"
                    rightHand[0] = position[0]
                    rightHand[1] = position[1]
                }
            }
            
        }
    }
    return answer;
}