function solution(sticker) {
    var answer = 0;
    
    if (sticker.length === 1){
        return sticker[0]
    }
    
    if (sticker.length === 2){
        return Math.max(sticker[0], sticker[1])
    }
    
    const withOne = sticker.slice(0, sticker.length-1)
    const withOutOne = sticker.slice(1, sticker.length)
    
    const dp = [withOne[0], Math.max(withOne[0], withOne[1])]
    
    const dp2 = [withOutOne[0], Math.max(withOutOne[0], withOutOne[1])]
    
    for(let i=2; i<withOne.length; i++){
        dp[i] = Math.max(dp[i-2] + withOne[i], dp[i-1])
        dp2[i] = Math.max(dp2[i-2] + withOutOne[i], dp2[i-1])
    }
    
    

    return Math.max(dp.at(-1), dp2.at(-1));
}