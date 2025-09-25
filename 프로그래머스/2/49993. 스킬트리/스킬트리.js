function solution(skill, skill_trees) {
    var answer = 0;
    
    const canRegist = (skill_tree) => {
        
        // skill 중 현재 배워야 하는 순서의 idx
        let targetIdx = 0
        let isCan = true
            for (const char of skill_tree){
                const idx = skill.indexOf(char)
                if(idx !== -1 && idx === targetIdx){
                    targetIdx++
                } else if(idx !== -1){
                    return false
                }
            }
        
        return isCan 
    }
    
    for (const skill_tree of skill_trees){
        if(canRegist(skill_tree)){
            console.log(skill_tree, canRegist(skill_tree))
            answer += 1
        }
    }
    
    
    return answer;
}