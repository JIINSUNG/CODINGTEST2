function solution(n, lost, reserve) {
    var answer = 0;
    // 나를 기준으로 내 체육복이 있으며 뒤 학생에게 빌려줄 수 있는 경우엔 무조건 빌려주기
    
    const arr = Array.from({length : n}, () => 1)
    
    for (let i=0; i< lost.length; i++){
        arr[lost[i]-1] -= 1
    }
    
    for (let i=0; i< reserve.length; i++){
        arr[reserve[i]-1] += 1
    }
    
    
    for (let i=0; i< arr.length; i++){
        // 체육복이 있으면 패스
        if(arr[i] >= 1){
            continue
        }
        
        // 체육복을 도난당해 빌려야 하는 경우
        else{
            // 앞에서 빌릴 수 있는 경우
            if(i-1 >= 0 && arr[i-1] >= 2){
                arr[i] = 1
                arr[i-1] -= 1
            }
            else if(i+1 < arr.length && arr[i+1] >= 2){
                arr[i+1] -= 1
                arr[i] = 1
            }
        }
    }

    for(const value of arr){
        if (value >= 1){
            answer += 1
        }
    }
    
    return answer
}