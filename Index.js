let num = 1;
let fibonacciArray = fibonacci(num);



function fibonacci(num){
     let array=[];
     if(num==1){
        array=[0];
     }
     if(num>=2){
         array = [0, 1];
         for( i=1; i<num-1; i++){  
         array = [...array, array[i]+array[i-1]];
         }
     }
     return array;
  
}