function solution(today, terms, privacies) {
    var answer = [];
    
    const termMap = new Map();
    const contractMap = new Map();
    
    for(const term of terms){
        const [key, value] = term.split(' ');
        contractMap.set(key, value * 28)
    }
    
    for (const privacy of privacies){
        const [day, term] = privacy.split(' ')
        termMap.set(term, day)
    }
    
    
    for(let i =0; i< privacies.length; i++){
        const [privacyDate, target] = privacies[i].split(' ')
        const [year, month, day] = privacyDate.split('.')
        const [tyear, tmonth, tday] = today.split('.')
        
        const termDate = Number(year)*12*28 + Number(month)*28 + Number(day)
        const todayDate = Number(tyear)*12*28 + Number(tmonth)*28 + Number(tday)
        
        if(todayDate-termDate >= contractMap.get(target)){
            answer.push(i+1)
        }

    }
    
    return answer;
}