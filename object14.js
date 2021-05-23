 let stringcarinfo="Prius,2017,red,automatic,y,y,y,n,n,y,10000#Ionic,2020,blue,automatic,y,y,y,y,y,y,13000#Audi,2013,gray,manual,y,y,n,n,n,n,7500#Golf,1995,black,manual,n,n,n,n,n,n,2100#Kia,2007,white,automatic,n,y,n,n,n,n,5300#Mercedes,1998,silver,automatic,y,y,y,n,n,n,8600";
 function car(string){
   let  stringtoarray=string.split("#");
  let arraynew=stringtoarray.map(a =>a.split(","));
    function torepplace(array){
    return array.map(a => a.map(b => (b=="n")?"no":(b=="y")?"yes":b));
    };
   
   
let emptyarray=[];  
// for(let i=0;i<torepplace(arraynew).length;i++){
    
//     for(let j=0;j<formarray.length;j++){
//      if(Array.isArray(formarray[j][1])){
//         for(let m=0;m<formarray[j][1].length;m++){
            // [formarray[j][1][m][1]]=torepplace(arraynew)[i].slice(m+j,torepplace(arraynew)[i].length);
//         }
//      }
//      else if (formarray[j][1]==""){
//         [formarray[j][1]]=torepplace(arraynew)[i].slice(j,torepplace(arraynew)[i].length);
//                }
                
//       }
     
//     emptyarray.push(formarray);
//     }
//     return emptyarray;

 torepplace(arraynew).map((a) => {
 let  formarray=[["Type",""],["Model",""],["Color",""],["Transmission",""],["Features",[["AC",""],["Electric Windows",""],
 ["Electric Mirrors",""],["Sunroof",""],["Auto-park",""],["Cruise Control",""],["Price",""]]]];
 formarray.map((b,index) => 
(Array.isArray(b[1]))?(b[1].map((c,ind) => [c[1]]=a.slice(index+ind,a.length)),b[1]=Object.fromEntries(b[1])):
(b[1]=="")?[b[1]]=a.slice(index,a.length):false);  emptyarray.push(Object.fromEntries(formarray))});
  
    function calcprice(array){
    return array.map(function total(value) {
      let carModel,transmission,ac,electricwindows,sunroof,autopark,cruisecontrol;
      (value.Model>=2015)?carModel=0.1:(value.Model>=2010&&value.Model<=2014)?carmode=0.08:
      (value.Model>=2005&&value.Model<=2009)?carModel=0.06:(value.Model>=2000&&value.Model<=2004)?carModel=0.04:
      (value.Model<=1999)?carModel=0.02:carModel=0;
      transmission=(value.Transmission=="automatic")?0.03:false;
      ac=(value.Features["AC"]=="yes")?0.05:false;
      electricwindows=(value.Features["Electric Windows"]=="yes")?0.08:false;
      sunroof=(value.Features.Sunroof=="yes")?0.07:false;
      autopark=(value.Features["Auto-park"])?0.05:false;
      cruisecontrol=(value.Features["Cruise Control"])?0.04:false;

      let totalprice=+value.Features.Price;
      return  value.Features.Price=totalprice+totalprice*carModel+transmission*totalprice+totalprice*ac
      +totalprice*electricwindows+totalprice*sunroof+totalprice*autopark+totalprice*cruisecontrol,value})
      
    };
 torepplace(arraynew);
 return calcprice(emptyarray);
}
 console.log(car(stringcarinfo));
 