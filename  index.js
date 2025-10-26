 
        
       


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

        // blackjack game
        
         
        let Cards = []
        let sum = 0
        let hasBlackJack = false 
        let isAlive = false 
        let message = ""

        let messageEl = document.getElementById("message-el");
        let CradEl = document.getElementById("Crad-el");
        let SumEl = document.querySelector("#Sum-el")

        let player = {
            name : "Ashraf",
            chips : 144
        }
        let playerEl = document.querySelector("#player-el")
        playerEl.textContent = player.name + " : " + player.chips

        function getRandomCard() {
            let randomCard = Math.floor(Math.random()* 13) + 1

            if (randomCard === 1){
                console.log(" the IF 1 is  -- "+randomCard)
                return randomCard = 11
            }else if (randomCard > 10 ){
                console.log(" the IF  more 10 is  -- "+randomCard)
                return randomCard = 10
            } else {
                return randomCard
            } 
             
        }

         function balckkack() {
             
            CradEl.textContent = " Cards : "
            if(sum <= 20){
                message = "Do you want to drew a new card "
            }else if (sum===21){
                message = "Wohoo ! Youve Got BlackJack"
                let hasBlackJack = true 
            }else {
                message = "your out of the game"
                isAlive = false
            }

            messageEl.textContent = message
            let i = 0 
            
            for (i=0 ; i<= Cards.length-1 ; i++){
                 
                 CradEl.textContent += Cards[i] + " ";

            }
           
            SumEl.textContent = "Sum : " + sum 
         }

         function cardBtn() {
            if (isAlive ==true && hasBlackJack == false){
            let newCard = getRandomCard() 
            sum += newCard
            Cards.push(newCard);
            balckkack();
         } 
        }

         function startGame(){
            isAlive = true
            let firstCard = getRandomCard()
            let secondCard = getRandomCard()
            Cards = [firstCard,secondCard]
            sum = firstCard + secondCard
            balckkack()
         }

         
            if (isAlive == false){
                function newCard() {
                let card = getRandomCard()
                sum += card
                Cards.push(card)
                balckkack()
               }
            } 
            
         







         let contact = ["ashraf" , 30 , true]
         contact.push("Engineer");
         contact.pop();
         contact.pop();
         contact.pop();
         console.log(contact);

          
         function floor() {
            let floorq = Math.floor(Math.random() * 6) + 1
            return floorq
         }
         let Vfloor = floor()
         console.log(" the rand -- "+Vfloor)
        
         
// objects 

 let person = {
    name : " Ashraf " ,
    age : 32 ,
    country : "Yemen" ,
     
 }

 let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]
 largeCountries.shift()
 largeCountries.unshift("China")
 largeCountries.pop()
 largeCountries.push("Pakistan")
 
 


    let hands = ["rock","paper","scissor"]
    let randomN = Math.floor( Math.random()* 3 )
    //    console.log(hands[randomN]); 

        


    //    PassWord Genertor
   function GeneratePass() {

        const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X",
            "Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", 
            "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[",
            "}","]",",","|",":",";","<",">",".","?",
            "/"];
            let PasswordTOne = document.getElementById("PasswordTOne")
            
            let password = ""
            const passwordLength = 15;
            let i = 0
            for (i=0 ; i <  passwordLength ;  i++){
            let randomNum = Math.floor(Math.random()*characters.length)
            
            let randomChar = characters[randomNum]

            password += randomChar;
            }

            PasswordTOne.textContent = password
    }


    let myLeads = []
    const inputEl = document.getElementById("input-el")
    const inputBtn = document.getElementById("input-btn");
    const ulEl = document.getElementById("ul_el")

    inputBtn.addEventListener("click",function(){
        myLeads.push(inputEl.value);
        
        renderLeads()
        inputEl.value = ""
    })

    function renderLeads(){
        let listItems = ""
        let i = 0 
        for(i=0 ; i < myLeads.length ;i++){

           
             // listItems += "<li><a target='_blank' href='"+ myLeads[i]+"'>" + myLeads[i] + "</a></li>"
             listItems += `
             <li>
                <a target='_blank' href='${myLeads[i]}'>
                  ${myLeads[i]}    
                </a>
             </li>`

             // const li = document.createElement("li")
            // li.textContent = myLeads[i] 
            // ulEl.append(li)

        }
        ulEl.innerHTML = listItems 
    }
    

       localStorage.setItem("keyOne","www.aljabal.com");
    console.log(localStorage.getItem("keyOne")); 
    //  localStorage.clear() 









    

    let inputDevd = document.getElementById("input-devd")

    const button =  document.createElement("button")

    button.textContent = "Buy Now"
    inputDevd.append(button)

     