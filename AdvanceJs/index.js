function fullStaryLine (n) {
    let str = "";
    for (let i = 0; i < n; i++) {
        str = str + "*"
    }
    console.log(str);
}

function partialStaryLine (n) {
    let str = "";
    str = str + "*";
    for (let i = 0; i < (n - 2); i++) {
        str += " ";        
    }
    str = str + "*";
    console.log(str);
}

function hollowStaryPattern(n) {
    fullStaryLine(n);
    for (let i = 0; i < (n - 2); i++) {
        partialStaryLine(n);
    }
    fullStaryLine(n);
}

hollowStaryPattern(11)