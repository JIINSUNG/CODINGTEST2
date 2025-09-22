function solution(friends, gifts) {
    var answer = 0;
    
    // 선물을 누구에게 주었는지
    const giftMap = {}
    
    // 선물 수치
    const giftPower = {}
    
    // 선물 받은 갯수
    const sendGiftMap = {}
    
    for (const friend of friends){
        giftMap[friend] = {}
        giftPower[friend] = 0 
        sendGiftMap[friend] = 0
    }
    
    for (const gift of gifts){
        const [gifter, giftee] = gift.split(' ')
        
        giftMap[gifter][giftee] = (giftMap[gifter][giftee] || 0) + 1;
        giftPower[gifter] += 1
        giftPower[giftee] -= 1
    }
    for(let i=0; i< friends.length; i++){
        for (let j=i+1; j < friends.length; j++){
            
            // a가 b에게 준 선물 갯수
            const a = giftMap[friends[i]][friends[j]] || 0
            
            // b가 a에게 준 선물 갯수
            const b = giftMap[friends[j]][friends[i]] || 0
            
            if(a > b){
                sendGiftMap[friends[i]] += 1 
            }else if (b > a){
                sendGiftMap[friends[j]] += 1 
            }
            else {         
                    const aValue = giftPower[friends[i]]
                    const bValue = giftPower[friends[j]]
                    if(aValue > bValue){
                        sendGiftMap[friends[i]] += 1 
                    } else if (aValue < bValue){
                        sendGiftMap[friends[j]] += 1 
                    } else {
                        // 선물지수마저 동일하다면 pass
                        continue 
                    }

            }

        }
    }
    
    for (const key in sendGiftMap){
        answer = Math.max(answer, sendGiftMap[key])
    }
    
    return answer;
}