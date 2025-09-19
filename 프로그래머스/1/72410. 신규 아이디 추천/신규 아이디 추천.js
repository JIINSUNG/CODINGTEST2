function solution(new_id) {
    var answer = '';
    
    const checkAlpha = (char) => {
        const code = char.charCodeAt(0);
        return code >= 97 && code <= 122;
};
    
    const step1 = (id) => {
        return id.toLowerCase();
    }
    
    const step2 = (id) => {
        let filteredId = ''
        for(const value of id){
            if(!isNaN(value) || value ==='-' || value =='_' || value=='.' || checkAlpha(value)){
                filteredId += value
            }
        }
        return filteredId        
    }
    const step3 = (id) => {
        let filteredId = ''
        let last = ''
        
        for(const value of id){
            if(value === '.' && last==='.'){
                continue
            } else if (value === '.'){
                last='.'
                filteredId += '.'
            } else {
                last = ''
                filteredId += value
            }
        }
        return filteredId
        
    }
    
    const step4 = (id) => {
        // 첫문자, 마지막문자가 . 이라면 제거
        if(id.at(0) === '.'){
            id = id.substring(1)
        }
        if(id.at(-1) === '.'){
            id = id.substring(0, id.length-1)
        }
        return id 
    }
    
    const step5 = (id) => {
        if(id === ''){
            return 'a'
        }
        return id
    }
    
    const step6 = (id) => {
        if(id.length >= 16){
            id = id.substring(0, 15)
            if (id.at(-1) === '.')
            {
                id = id.substring(0, id.length-1)
            }
            return id
        }
        return id 
    }
    
    const step7 = (id) => {
        if(id.length <= 2){
            while(id.length < 3){
                id += id.at(-1)
            }
        }
        return id
    }
    
    
    new_id = step1(new_id)
    new_id = step2(new_id)
    new_id = step3(new_id)
    new_id = step4(new_id)
    new_id = step5(new_id)
    new_id = step6(new_id)
    new_id = step7(new_id)
    
    return new_id;
}