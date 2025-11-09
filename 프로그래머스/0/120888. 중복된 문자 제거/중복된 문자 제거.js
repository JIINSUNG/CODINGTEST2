function solution(my_string) {
    var answer = '';
    my_string = Array.from(new Set(my_string.split('')))
    return my_string.join('');
}