function solution(n, k) {
    var answer = 0;
    
    
    const splitarr = n.toString(k).split(0)
    const isPrime = (num) => {
        
        if(num <2){
            return false
        }
        
        for(let i=2; i <= Math.floor(num**0.5); i++){
            if(num % i === 0){
                return false
            }
        }
        return true 
    }
    
    for(const num of splitarr){
        if(num===''){
            continue
        }
        
        if(isPrime(num)){
            answer += 1
        }
        
    }
    
    
    return answer;
}