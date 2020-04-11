class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.start = null;
        this.length = 0;
    }

    addAtEnd(item) {
        const node = new Node(item);
        if (!this.start) {
            this.start = node;
        } else {
            let pointer = this.start;
            while (pointer.next) {
                pointer = pointer.next;
            }
            pointer.next = node;
        }
        this.length++;
    }

    addAtStart(item) {
        const node = new Node(item);
        node.next = this.start;
        this.start = node;
        this.length++;
    }

    addAt(item, index) {
        const node = new Node(item);
        let p_index = 1;
        let pointer = this.start;
        while (pointer.next) {
            if (p_index === index) {
                break;
            }
            p_index++;
            pointer = pointer.next;
        }
        node.next = pointer.next;
        pointer.next = node;
        this.length++;
    }

    removeAt(index) {
        let p_index = 1;
        let pointer = this.start;
        while (pointer.next) {
            if (p_index === index) {
                break;
            }
            pointer = pointer.next;
        }
        pointer.next = pointer.next.next;
        this.length--;
    }

    remove(item) {
        let pointer = this.start;
        while (pointer.next) {
            if (pointer.next.element === item) {
                pointer.next = pointer.next.next;
                break;
            }
            pointer = pointer.next;
        }
        this.length--;
    }

    removeLast() {
        let pointer = this.start;
        for (let i = 1; i < this.length - 1; i++) {
            pointer = pointer.next;
        }
        pointer.next = null;
        this.length--;
    }

    search(item) {
        let index = -1;
        let pointer = this.start;
        while (pointer) {
            index++;
            if (pointer.element === item) {
                return index;
            }
            pointer = pointer.next;
        }
        return -1;
    }

    show() {
        let pointer = this.start;
        while (pointer) {
            log(pointer.element);
            pointer = pointer.next;
        }
    }
}

class HashMap {
    constructor() {
    }

    set(key, value) {
        this[key] = value;
    }

    get(key) {
        return this[key];
    }

    isKeyExists(key) {
        let result = false;
        Object.keys(this).forEach(k => {
            if (k === key) {
                result = true;
            }
        })
        return result;
    }
}

class ArrayUtill {
    static removeAt(arr, index) {
        return arr.splice(index, 1);
    }

    static removeFirst(arr, item) {
        const index = arr.indexOf(item);
        return arr.splice(index, 1);
    }

    static removeAll(arr, item) {
        let index = arr.indexOf(item);
        do {
            arr = arr.splice(index, 1);
            index = arr.indexOf(item);
        } while (index !== -1);
        return arr;
    }

    static addAt(arr, index, newItem) {
        return arr.splice(index, 0, newItem);
    }

    static isPrime(n) {
        if (n === 1) {
            return false;
        } else if (n === 2) {
            return true;
        } else {
            for (let x = 2; x < n; x++) {
                if (n % x === 0) {
                    return false;
                }
            }
            return true;
        }
    }

    static pop(arr) {
        return arr.splice(arr.length - 1, 1);
    }

    static sort(arr) {
        return arr.sort(compareNumber);
    }
}

class NumberUtill {
    static compareNumber(a, b) {
        return a - b;
    }
}

function log(text) {
    console.log(text);
}

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;
});

process.stdin.on("end", function () {
    main(stdin_input);
});

function main(input) {
    const inputLines = input.split('\n');
    const inputs = [];
    inputLines.forEach(line => {
        inputs.push(line.split(' ').map(_strInp => parseInt(_strInp)));
    });
    const T = inputs[0][0];
    for (let testCase = 0; testCase < T; testCase++) {
        let tc_lines = testCase * 1;
        let m = inputs[tc_lines + 1][1];
        let n = inputs[tc_lines + 1][0];
    }
}
