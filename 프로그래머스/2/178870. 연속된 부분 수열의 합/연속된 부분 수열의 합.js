function solution(sequence, k) {
    var candidate = [];
    let i=0
    let j=0
    let sum = sequence[0]
    
    while(i <= j && j < sequence.length && i < sequence.length){
        if (sum === k){
            candidate.push([i, j])
            sum -= sequence[i]
            i++
        }
        else if (sum < k){
            j++
            sum += sequence[j]
        } else {
            sum -= sequence[i]
            i++
        }
    }
    
    candidate.sort((a, b) => {
        const lenA = a[1] - a[0];
        const lenB = b[1] - b[0];

        if (lenA !== lenB) {
            return lenA - lenB;
        }
        
        return a[0] - b[0];
    });
    
    return candidate[0]

}