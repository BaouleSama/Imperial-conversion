    const user_number = document.querySelector(".input-number");

    const meter_feet = document.getElementById("meter_feet")
    const liter_gallon = document.getElementById("liter_gallon")
    const kilo_pound = document.getElementById("kilo_pound")
    const  input = document.getElementById("input")



    
   

    input.addEventListener('keypress', function(e){
        if(e.key == 'Enter'){

            const meter = input.value *3.28
            const feet = input.value/3.28
        
            const liter = input.value *0.264172
            const gallon = input.value /0.264172
        
            const kilos = input.value * 2.20462
            const pounds = input.value / 2.20462
            
            meter_feet.textContent = ` ${input.value} meters = ${meter} feets | ${input.value} feet = ${feet.toFixed(3)} meters`
            liter_gallon.textContent = ` ${input.value} liters = ${liter.toFixed(3)} gallons | ${input.value} gallons = ${gallon.toFixed(3)} liters`
            kilo_pound.textContent = ` ${input.value} kilos = ${kilos.toFixed(3)} pounds | ${input.value} pounds = ${pounds.toFixed(3)} kilos`
        }
    })
  



    // addEventListener('keyup')

    // 20 meters = 65.616 feet | 20 feet = 6.096 meters

   