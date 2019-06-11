var toLowerCase = function(str) {
    let i = 0;
    let lowerCase = "";

    while (i < str.length) {
        lowerCase += String.fromCharCode(str.charCodeAt(i) | 0x20);
        i++;
    }
    return lowerCase;
};
