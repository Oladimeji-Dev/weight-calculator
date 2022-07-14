var overall = document.querySelector('.overall');
           overall.style.visibility = 'hidden';  
        let input = document.getElementById('input')
        input.addEventListener('input',calculate);
        function calculate(e){
            let value = e.target.value;
            if( isNaN(value) ){
                overall.style.visibility = 'hidden';  
                let nanBoard = document.querySelector(".nan-board");
                nanBoard.style.display = "block"
                setTimeout(function() {
                    nanBoard.style.display = "none";
                },2000);
                
                
            }else{
                overall.style.visibility = 'visible';  
                let gramOutput = document.querySelector(".gram-output");
                let kiloOutput = document.querySelector(".kilo-output");
                let ounceOutput = document.querySelector(".ounce-output");
                gramOutput.innerHTML = value/0.0022046;
                kiloOutput.innerHTML = value/2.2046;
                ounceOutput.innerHTML = value*16;
            }
        }