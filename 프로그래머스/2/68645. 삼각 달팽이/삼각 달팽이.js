function solution(n) {
    var answer = [];
    const triangle = []
    for (let i=0; i<n; i++){
        triangle.push(Array.from({length : n}, () => 0))
    }
    
    // 2. 변수 설정
    let num = 1; // 채울 시작 숫자
    let x = -1;  // 현재 행 (row) 인덱스. 첫 이동(아래)에서 0이 되도록 -1로 시작.
    let y = 0;   // 현재 열 (column) 인덱스
    
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            
            // 방향 결정 및 좌표 업데이트
            if (i % 3 === 0) { // 0: 아래로 (x 좌표 증가)
                x++;
            } else if (i % 3 === 1) { // 1: 오른쪽으로 (y 좌표 증가)
                y++;
            } else if (i % 3 === 2) { // 2: 대각선 위로 (x, y 좌표 감소)
                x--;
                y--;
            }
            
            // 배열에 숫자 기록
            triangle[x][y] = num;
            num++;
        }
    }
    
    
    
    
    const result = [];
    for(let i=0; i<n; i++){
        for (let j=0; j<n; j++){
            if(triangle[i][j] !== 0){
                result.push(triangle[i][j])
            }
        }
    }
    
    
    return result;
}

