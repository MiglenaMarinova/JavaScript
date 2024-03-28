function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   
   function onClick () {
      const inputElemnt = document.querySelector('#inputs > textarea');

      let text = JSON.parse(inputElemnt.value);
      
      let bestRestaurants = [];
       
      
      for (const el of text) {
         const[restaurantName, restaurantWorkers] = el.split(' - ');

         let restaurant = bestRestaurants.find(restaurant => restaurant.name === restaurantName);
                  
         if(!restaurant){
            bestRestaurants.push(restaurant ={
               name: restaurantName,
               workers: [],
               averageSalary: 0,
               bestSalary: 0,
            })          
            
         }
         for (const worker of restaurantWorkers.split(', ')) {             
            restaurant.workers.push(employee = {
               employeeName:  worker.split(' ')[0],
               salary: worker.split(' ')[1],
            });
         }

         let sum = restaurant.workers.reduce((acc, current) =>
         acc + Number(current.salary), 0);         
         restaurant.averageSalary = (sum / restaurant.workers.length).toFixed(2);
         
         restaurant.workers.sort((a, b) => b.salary - a.salary);

         let maxSalary = Number.MIN_SAFE_INTEGER;

         for (const employee of restaurant.workers) {
            if(Number(employee.salary) > maxSalary){
               maxSalary = Number(employee.salary).toFixed(2);
            }
         }
         restaurant.bestSalary = maxSalary;
           
      }  

      let sortedRest = bestRestaurants
         .sort((a, b) => Number(b.averageSalary) - Number(a.averageSalary));

      
      let bestRestaurant = sortedRest[0];

      const firstString = document.querySelector('#bestRestaurant > p');
        
      firstString.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary} Best Salary: ${bestRestaurant.bestSalary}`;
      
      const secondString = document.querySelector('#workers > p');

      const foundWorkers = bestRestaurant.workers;
         let output = [];
         for (const worker of foundWorkers) {
            let workerInfo = `Name: ${worker.employeeName} With Salary: ${worker.salary}`;
            output.push(workerInfo)
         }
         secondString.textContent = output.join(' ');

   }

}