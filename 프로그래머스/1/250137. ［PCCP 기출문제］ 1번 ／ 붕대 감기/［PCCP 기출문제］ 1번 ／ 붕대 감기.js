function solution(bandage, health, attacks) {
    var answer = 0;
    
    let time = 0
    const maxHealth = health
    let healTime = 0
    
    while(attacks.length > 0){
        time += 1
        if(attacks[0][0] === time){
            const attack = attacks.shift()
            health -= attack[1]
            healTime = 0 // 힐 중이었다면 초기화
            if(health <= 0){
                return -1
            }
            continue
        }
        
        if(health < maxHealth){
            healTime += 1
            health += bandage[1]
            
            if(healTime === bandage[0]){
                health += bandage[2]
                healTime = 0
            }
            
            
            if(health > maxHealth){
                health = maxHealth
            }
        }
    }
    
    
    
    
    return health
}