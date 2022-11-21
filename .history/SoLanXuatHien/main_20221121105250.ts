function countNumber(_number: number[], _value: number): number{
    let _count: number = 0;
    _number.slice().filter(value => value === _value).forEach(value => _count++);
    return _count;
}
le