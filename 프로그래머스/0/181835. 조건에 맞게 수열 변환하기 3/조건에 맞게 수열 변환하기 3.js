function solution(arr, k) {
    var answer = [];
    return arr.map((val) => {return k % 2 == 0 ? val + k : val * k});
}