function paste(){
   return document.getElementById("p1").innerHTML = "Hello World."
}
function forloop(){
   const container = document.getElementById("myForloop");
   for(let i=0;i<=10;i++)
   {
      const numbers = `<label>${i}</label>`;
      container.innerHTML+=numbers;   
   }
}
function whileloop(){
   let i = 0;
   const container = document.getElementById("myWhileloop");
   while(i<10)
   {
      i++;
      const numbers = `<label>${i}</label>`;
      container.innerHTML+=numbers;  
   }

}
function dowhileloop()
{
   let i = 0;
   const container = document.getElementById("myDowhileloop");
   do{
      i++;
      const numbers = `<label>${i}</label>`;
      container.innerHTML+=numbers;
   }
   while(i<10)
}

function factorialize(){
   const n = Number(document.getElementById("Num").value);
   let result = 1 ;
   for(let i = 1 ;i<=n;i++)
   {
      result = result*i;
   }
   document.getElementById("myFactorial").innerHTML = "The factorial of the given number is "+ result +".";

}
function greatest(){
   const a = document.getElementById("a").value;
   const b = document.getElementById("b").value;
   const c = document.getElementById("c").value;
   if(a > b && a>c)
   
      document.getElementById("gNum").innerHTML = "The greatest number amongst the three numbers is "+ a +".";

   
   else if (b>a && b>c)
   
      document.getElementById("gNum").innerHTML ="The greatest number amongst the three numbers is "+ b +".";

   
   else
   
      document.getElementById("gNum").innerHTML ="The greatest number amongst the three numbers is "+ c +".";

}
function calculate(){
   let r = document.getElementById("radius").value;
   let circumference = 2*Math.PI*r;
   console.log(circumference);
   let area =(Math.pow(r,2)*Math.PI);
   console.log(area);
   document.getElementById("ans").innerHTML="The area of the circle is "+area+" and the circumference is "+ circumference + "."
}
function even(){
    let container = document.getElementById("myEven");  
   for (let i = 0;i<=100;i=i+2)
   {
      const evenNumber = `<label>${i},</label>`
      container.innerHTML+=evenNumber;
   }
   

}
function sum(){
   let no1 = Number(document.getElementById("no1").value);
   let no2 = Number(document.getElementById("no2").value);
   let sum = no1 + no2;
   document.getElementById("sum").innerHTML= "The sum of the numbers is "+sum +"."

}

function reverses(){
   let nums = String(document.getElementById("theNum").value);
   let revnum = nums.split('').reverse().join('');
   console.log(revnum);
   document.getElementById("reversednum").innerHTML = "The reverse of the given number is "+ revnum +".";
}

function series()
{
   let a = 1;
   let b = 1;
   let c;
   let n = document.getElementById("noE").value;
   let container = document.getElementById("mySeries");
   let first = `<label>${a}</label>`;
   let second = `<label>${b}</label>`;
   container.innerHTML+= first+"," + second+",";
   let i = 2

   for(i ;i < n;i++)
   {
      c= a+b;
      const seriesnum = `<label>${c},</label>`;
      a=b;
      b=c;
      container.innerHTML += seriesnum;
   }
}
function validate(){
   

   }
