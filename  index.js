        
       


        let saveEl  = document.getElementById("save-el");
        let saveBtn = document.getElementById("save-btn")
        let basicNm = document.getElementById("basicNm");
        let count = 0
        function incremnt() {
            
            count +=  1 ;
            basicNm.textContent = count
            console.log(count)
            }
        function save() {
            let saveCount = " " + count + " - ";
            saveEl.textContent += saveCount
            
            count = 0
            basicNm.textContent = count
            
        }





        let welcomeEl = document.getElementById("welcome-el");
        let name = "Ashraf "
        let greeting = " Welcome Eng"

        let welcome = name + greeting

        welcomeEl.innerText = welcome
        welcomeEl.innerText += " Done"



 


        function nike() {
            let errorMessage = "THere's an Error XdX"
            let error = document.getElementById("error");
            error.textContent = errorMessage

        }



        let num1 = 8
        let num2 = 2
        let result = document.getElementById("result");
        document.getElementById("num1-el").textContent = num1
        document.getElementById("num2-el").textContent = num2

        function add() {
           let sumresult =   num1 + num2 + " /"
           result.textContent += sumresult
            
          
        }
        function subtract() {
            let sumresult =   num1 - num2 + " /"
            result.textContent = " sum "  + sumresult
             
         }
         function divivde() {
            let sumresult =   num1 / num2 + " /"
            result.textContent =  ""+ sumresult
             
         } 
         function multipaly() {
            let sumresult =   num1 * num2 + " /"
            result.textContent += sumresult
             
         }

         