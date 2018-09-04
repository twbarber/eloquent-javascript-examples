class Group {

    constructor() {
        this.values = [];
    }

    static from(values) {
        let group = new Group();
        group.values = values;
        return group;
    }

    add(value) {
        if (!this.values.includes(value)) {
            this.values.add(value);
        }
    }

    delete(value) {
        this.values = this.values.filter(val => val != value);
    }

    has(value) {
        return this.values.includes(value);
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }

}

class GroupIterator {

    constructor(group) {
        this.group = group;
        this.position = 0;
    }

    next() {
        if(this.position >= this.group.values.length) {
            return { 
                done: true 
            };
        } else {
            let result = {
                value: this.group.values[this.position],
                done: false
            };
            this.position++;
            return result;
        }
    }

}

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}
// → a
// → b
// → c