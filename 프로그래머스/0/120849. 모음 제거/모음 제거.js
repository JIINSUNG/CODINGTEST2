function solution(my_string) {
    var answer = '';
    
    const notPronoun = (char) => {
        if(char === 'a' || char === 'o' || char ==='e' || char ==='i' || char ==='u'){
            return false
        }
        return true
    }
    
    
    return [...my_string].filter((char) => notPronoun(char)).join('')
    
}