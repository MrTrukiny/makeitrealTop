let reverseString = (s) => {
    let left = 0, right = s.length - 1;
    while (left < right) {
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        ++left;
        --right;
    }
    return s;
};

console.log(reverseString("atacacata"));
console.log(reverseString("Eduardo"));
