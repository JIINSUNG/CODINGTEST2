def solution(num_list):
    return [len([num for num in num_list if num % 2 == 0]), len([num for num in num_list if num % 2 == 1])]