class Queue {
    constructor() {
        this.arr = [];
    }

    push(ele) {
        return this.arr.push(ele);
    }

    pop() {
        if (this.arr.length > 0)
            return this.arr.shift();
    }

    isEmpty() {
        return this.arr.length === 0;
    }

    front() {
        if (this.arr.length > 0)
            return this.arr[0];
    }

    clear() {
        this.arr = [];
    }

    len() {
        return this.arr.length;
    }

    print() {
        // only for test
        console.log(this.arr);
    }
}

export default Queue;