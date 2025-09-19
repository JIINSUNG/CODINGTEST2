function solution(ingredient) {
    let answer = 0;
    let stack = [];

    for (let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);

        if (stack.length >= 4) {
            const ingredients = stack.slice(-4);
            if (
                ingredients[0] === 1 &&
                ingredients[1] === 2 &&
                ingredients[2] === 3 &&
                ingredients[3] === 1
            ) {
                stack.splice(stack.length-4, 4)
                answer++;
            }
        }
    }

    return answer;
}