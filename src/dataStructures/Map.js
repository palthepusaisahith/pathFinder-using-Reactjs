class Map {
    constructor() {
        this.obj = {};
        this.size = 0;
    }

    getKeyString(key) {
        const { row, col } = key;
        let keyString = `${row} ${col}`;
        return keyString;
    }

    set(key, value) {
        const keyString = this.getKeyString(key);
        if (!this.obj.hasOwnProperty(keyString)) {
            this.size = this.size + 1;
        }
        this.obj[keyString] = value;
    }

    delete(key) {
        const keyString = this.getKeyString(key);
        if (this.obj.hasOwnProperty(keyString)) {
            this.size--;
            delete this.data[keyString];
        }
    }

    has(key) {
        const keyString = this.getKeyString(key);
        return this.obj.hasOwnProperty(keyString);
    }

    get(key) {
        const keyString = this.getKeyString(key);
        if (this.obj.hasOwnProperty(keyString)) {
            return this.obj[keyString];
        }
    }

    isEmpty() {
        return this.size === 0;
    }

    len() {
        return this.size;
    }

    clear() {
        this.obj = {};
        this.size = 0;
    }

    print() {
        // this is only to test
        console.log(this.obj);
    }
}

export default Map;