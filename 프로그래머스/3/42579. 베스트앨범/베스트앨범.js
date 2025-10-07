function solution(genres, plays) {
    var answer = [];
    
    // 재생 빈도 저장용
    const playMap = {}
    
    // 각 노래 별 횟수, 인덱스 저장요
    const idxMap = {}
    
    for(let i=0; i< genres.length; i++){
        idxMap[genres[i]] = [] 
    }
    
    for (let i =0; i< genres.length; i++){
        playMap[genres[i]] = (playMap[genres[i]] || 0) + plays[i]
        idxMap[genres[i]].push([plays[i], i])
    }
    
    const sortedArr = Object.entries(playMap).sort((a, b) => b[1] - a[1])
    
    for (const [key, value] of sortedArr){
        const targetArr = idxMap[key].sort((a, b) => {
        if (a[0] !== b[0]) {
            return b[0] - a[0]; 
        }
        return a[1] - b[1];
        })
        let i = 0
        while (targetArr.length > 0 && i < 2){
            i++
            const target = targetArr.shift(); 
            answer.push(target[1])
        }
    }
    
    
    return answer;
}