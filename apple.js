class Apple{
    constructor(_weight) {
        this._weight = _weight;
    }

    get weight() {
        return this._weight;
    }

    set weight(value) {
        this._weight = value;
    }
}