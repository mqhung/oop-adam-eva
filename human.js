class Human{
    constructor(_name, _weight, _gender) {
        this._name = _name;
        this._weight = _weight;
        this._gender = _gender;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get weight() {
        return this._weight;
    }

    set weight(value) {
        this._weight = value;
    }

    get gender() {
        return this._gender;
    }

    set gender(value) {
        this._gender = value;
    }
    say(string){
        return string;
    }
    eat(apple){
        if(apple._weight > 0){
            return this._weight +=1;
        }
    }
    check(apple){
        apple.weight -=1;
        return apple.weight;
    }
}

