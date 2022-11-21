function countNumber(_number: number[], _value: number): number{
    let _count: number = 0;
    _number.slice().filter(value => value === _value).forEach(value => _count++);
    return _count;
}

countNumber([1,2,5,3,6,9,7,4,2,5,6,1,2,5,2,4,2], 