class Queue {
    constructor() {
        // Initialize an empty array to store queue elements
        this.arr = [];
    }

    // Add an element to the end of the queue
    push(ele) {
        return this.arr.push(ele);
    }

    // Remove and return the element from the front of the queue
    pop() {
        // Only perform the operation if the queue is not empty
        if (this.arr.length > 0) {
            return this.arr.shift(); // Remove the first element from the array
        }
    }

    // Check if the queue is empty
    isEmpty() {
        return this.arr.length === 0;
    }

    // Get the element at the front of the queue without removing it
    front() {
        // Only return the front element if the queue is not empty
        if (this.arr.length > 0) {
            return this.arr[0];
        }
    }

    // Clear all elements from the queue
    clear() {
        this.arr = []; // Reset the array to an empty array
    }

    // Get the number of elements in the queue
    len() {
        return this.arr.length;
    }

    // Print the contents of the queue (for testing purposes)
    print() {
        console.log(this.arr);
    }
}

export default Queue; // Export the Queue class as the default export
