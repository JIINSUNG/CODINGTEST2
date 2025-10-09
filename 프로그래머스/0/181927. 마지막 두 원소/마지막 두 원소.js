function solution(num_list) {
    var answer = [...num_list];
    
    if (num_list.at(-1) > num_list.at(-2)){
        answer.push(num_list.at(-1) - num_list.at(-2))
    } else {
        answer.push(num_list.at(-1) * 2)
    }
    return answer;
}