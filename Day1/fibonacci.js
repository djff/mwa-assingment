function fib(num){
    if(num < 0){
        return 0;
    }
    else if(num < 2){
        return 1;
    }
    else { return fib(num-1) + fib(num-2); }
}

module.exports = fib;