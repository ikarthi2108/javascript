
var number=prompt("Enter a number: ")

function perfectNumber(number){
     let sum=0;
     for(let i=1;i<number;i++){
        if(number%i==0){
            sum += i;
        }
     }
     if(sum==number){
        document.write("perfect number");
     }
     else{
        document.write("Not perfect number");
     }
}

function factorial(number){
      fact=1,i=1;
      do{
        fact=fact *i;
        i++;
      }
      while(number>=i)
      document.write(fact);
}

function fibonacci(number){
    t1 = 0, t2 = 1, nextTerm = 0;
    document.write(t1 +" "+t2 +" ");
     nextTerm = t1 + t2;

while(0<number) {
      document.write(nextTerm + " ");
      t1 = t2;
      t2 = nextTerm;
      nextTerm = t1 + t2;
      number--;
}
}
   
