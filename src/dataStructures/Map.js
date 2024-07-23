class Map {
    constructor() {
        // Initialize an empty object to store key-value pairs and a size variable
        this.obj = {};
        this.size = 0;
    }

    // Convert a key object with row and col properties to a string
    getKeyString(key) {
        const { row, col } = key;
        let keyString = `${row} ${col}`;
        return keyString;
    }

    // Set a value in the map
    set(key, value) {
        const keyString = this.getKeyString(key);
        // If the key is not already in the map, increment the size
        if (!this.obj.hasOwnProperty(keyString)) {
            this.size = this.size + 1;
        }
        // Add or update the key-value pair in the map
        this.obj[keyString] = value;
    }

    // Delete a key-value pair from the map
    delete(key) {
        const keyString = this.getKeyString(key);
        // If the key exists in the map, decrement the size and delete the key
        if (this.obj.hasOwnProperty(keyString)) {
            this.size--;
            delete this.obj[keyString];
        }
    }

    // Check if a key exists in the map
    has(key) {
        const keyString = this.getKeyString(key);
        return this.obj.hasOwnProperty(keyString);
    }

    // Get the value associated with a key
    get(key) {
        const keyString = this.getKeyString(key);
        if (this.obj.hasOwnProperty(keyString)) {
            return this.obj[keyString];
        }
    }

    // Check if the map is empty
    isEmpty() {
        return this.size === 0;
    }

    // Get the number of key-value pairs in the map
    len() {
        return this.size;
    }

    // Clear all key-value pairs from the map
    clear() {
        this.obj = {};
        this.size = 0;
    }

    // Print the map (for testing purposes)
    print() {
        console.log(this.obj);
    }
}

export default Map; // Export the Map class as the default export
