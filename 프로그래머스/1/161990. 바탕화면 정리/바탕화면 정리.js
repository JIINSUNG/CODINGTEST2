function solution(wallpaper) {
    var answer = [];
    
    // left right top down
    
    let left = 100000
    let right = -1 
    let top = 100000
    let bottom = -1
    
    
    for(let i =0; i < wallpaper.length; i++){
        for (let j=0; j < wallpaper[0].length; j++){
            if(wallpaper[i][j] === '#'){
                left = Math.min(left, j)
                right = Math.max(right, j)
                top = Math.min(top, i)
                bottom = Math.max(bottom, i)
            }
        }
    }
    
    return [top, left, bottom+1, right+1]
    
    
    
}