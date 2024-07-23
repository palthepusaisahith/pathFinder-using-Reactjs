class Pair {
    constructor() {
        // Initialize the properties to store the pair of values
        this.one = null;
        this.two = null;
    }

    // Set the pair of values if both are provided
    set(a, b) {
        if (!a || !b) return; // Return if either value is falsy
        this.one = a;
        this.two = b;
    }

    // Get the first value of the pair
    first() {
        return this.one;
    }

    // Get the second value of the pair
    second() {
        return this.two;
    }
}

export default Pair; // Export the Pair class as the default export
