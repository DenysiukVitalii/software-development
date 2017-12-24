class HashTable {
    constructor() {
        this._map = [];
    }

    _hashKey(key, hash = 0) {
        for (let i = 0; i < key.length; i++) {
            hash = ((hash << 5) - hash) + key.charCodeAt(i) | 0;
            hash &= hash;
        }
        return hash;
    }

    set(key, value) {
        this._map[this._hashKey(key, 2)] = value;
    }

    get(key) {
        return this._map[this._hashKey(key, 2)] || undefined;
    }

    remove(key) {
        delete this._map[this._hashKey(key, 2)];
    } 
}

const developers = new HashTable();

developers.set('John', 'junior');
developers.set('Mike', 'senior');
developers.set('Carl', 'middle');

console.log(developers.get('John'));
console.log(developers.get('Carl'));
console.log(developers.get('Mike'));