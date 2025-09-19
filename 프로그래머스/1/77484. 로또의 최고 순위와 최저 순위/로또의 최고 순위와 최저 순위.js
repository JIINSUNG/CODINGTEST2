function solution(lottos, win_nums) {
    var answer = [];
    let correct = 0;
    const win_prize = [6, 6, 5, 4, 3, 2, 1]
    
    let zeroCount = lottos.filter((num) => num === 0).length
    win_nums = new Set(win_nums)
    
    for (const number of lottos){
        if (win_nums.has(number)){
            correct += 1
        }
    }
    
    return [win_prize[correct+zeroCount], win_prize[correct]];
}