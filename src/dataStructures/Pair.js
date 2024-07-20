class Pair {
    constructor() {
        this.one = null;
        this.two = null;
    }

    set(a, b) {
        if (!a || !b) return;
        this.one = a;
        this.two = b;
    }

    first() {
        return this.one;
    }

    second() {
        return this.two;
    }
}

export default Pair;