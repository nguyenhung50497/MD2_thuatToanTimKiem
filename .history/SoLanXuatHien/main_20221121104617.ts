class CountNumber<T> {
    private _number: T[];
    private _value: number;
    private _count: number;

    constructor(number: T[], value: number) {
        this._number = number;
        this._value = value;
    }

    static getNumber(): T{
        return this._number;
    }
}