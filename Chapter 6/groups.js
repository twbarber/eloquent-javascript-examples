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
        if(!this.values.includes(value)) {
            this.values.add(value);
        }
    }

    delete(value) {
        this.values = this.values.filter(val => val != value);
    }

    has(value) {
        return this.values.includes(value);
    }

    
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false