function solution(keymap, targets) {
    var answer = [];
    // 각 버튼을 누를 수 있는 가장 짧은 경우를 구하기
    const minMap = new Map()
    for (const keypad of keymap){
        for(const key of keypad){
            minMap.set(key, Math.min((minMap.get(key) || 101), keypad.indexOf(key)+1))
        }
    }
    
    for (const target of targets){
        let count = 0
        for (const key of target){
            count += minMap.get(key)
            if(!minMap.has(key)){
                count = -1
                break
            }
        }
        answer.push(count)   
    }
    
    
    return answer;
}