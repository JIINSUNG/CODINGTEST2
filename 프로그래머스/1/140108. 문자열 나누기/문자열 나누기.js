function solution(s) {
    
    let answer = 0
    
    // 첫글자 -> x라할때
    // 왼쪽 -> 오른쪽으로 읽으면서 x와 x가 아닌 다른 글자들이 나온 횟수 세기
    
    // 두 횟수 같아지면 멈추고 읽은 문자열 분리 
    
    const calculate = (word) => {
        const target = word[0]
        let targetCount = 1
        let notTargetCount = 0 
        
        for (let i=1; i< word.length; i++){
            if(word.at(i) === target){
                targetCount += 1 
            }
            else {
                notTargetCount += 1
            }
            
            if(targetCount === notTargetCount){
                return word.slice(targetCount+notTargetCount)
            }
        }
        return ""
    }
    
    while(s){
        answer += 1
        s = calculate(s)
    }
    
    return answer;
}