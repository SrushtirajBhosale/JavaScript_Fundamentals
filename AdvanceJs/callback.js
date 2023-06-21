function fun1(){
    console.log('fun1 started');
    // debugger;
    fun2();
    console.log('fun1 end');
} 

function fun2(){
    // debugger;
    console.log('fun2 started');
    fun3();
    // debugger;
    console.log('fun2 ended');
}

function fun3(){
    // debugger;
    console.log('fun3 started');
}
// debugger;
fun1();