function solution(array, n) {
    
    array = array.filter((num) => num === n)

    return array.length
}