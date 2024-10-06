function Calculate(id) {    
    let input_one = document.getElementById('inputOne');
    let select_one = document.getElementById('selectOne');

    let input_two = document.getElementById('inputTwo');    
    let select_two = document.getElementById('selectTwo');

    let input = document.getElementById(id);

    input.value = 0;

    if (id == "inputTwo") {
        //Select One lbs
        if (select_one.value == "lbs" && select_two.value == "lbs"){
            input.value = input_one.value
        }
        else if (select_one.value == "lbs" && select_two.value == "ozs"){
            input.value = (input_one.value *16).toFixed(1)
        }
        else if (select_one.value == "lbs" && select_two.value == "kgs"){
            input.value = (input_one.value *.45359237).toFixed(5)
        }
        else if (select_one.value == "lbs" && select_two.value == "stn"){
            input.value = (input_one.value *.0714286).toFixed(5)
        }
        else if (select_one.value == "lbs" && select_two.value == "ton"){
            input.value = (input_one.value *0.000446429).toFixed(5)
        }
        
        //Select One ozs
        else if (select_one.value == "ozs" && select_two.value == "lbs"){
            input.value = (input_one.value * 0.0625).toFixed(4)
        }
        else if (select_one.value == "ozs" && select_two.value == "ozs"){
            input.value = input_one.value
        }
        else if (select_one.value == "ozs" && select_two.value == "kgs"){
            input.value = (input_one.value *.0283495).toFixed(5)
        }
        else if (select_one.value == "ozs" && select_two.value == "stn"){
            input.value = (input_one.value *.00446429).toFixed(5) 
        }
        else if (select_one.value == "ozs" && select_two.value == "ton"){
            input.value = (input_one.value *2.7902e-5).toFixed(5)
        }

        //Select One kgs
        else if (select_one.value == "kgs" && select_two.value == "lbs"){
            input.value = (input_one.value * 2.20462).toFixed(5)
        }
        else if (select_one.value == "kgs" && select_two.value == "ozs"){
            input.value = (input_one.value * 35.274).toFixed(3)
        }
        else if (select_one.value == "kgs" && select_two.value == "kgs"){
            input.value = input_one.value
        }
        else if (select_one.value == "kgs" && select_two.value == "stn"){
            input.value = (input_one.value *.157473).toFixed(5)
        }
        else if (select_one.value == "kgs" && select_two.value == "ton"){
            input.value = (input_one.value *0.000984207).toFixed(5)
        }

        //Select One stn
        else if (select_one.value == "stn" && select_two.value == "lbs"){
            input.value = (input_one.value * 14).toFixed(1)
        }
        else if (select_one.value == "stn" && select_two.value == "ozs"){
            input.value = (input_one.value * 224).toFixed(1)
        }
        else if (select_one.value == "stn" && select_two.value == "kgs"){
            input.value = (input_one.value * 6.35029).toFixed(5)
        }
        else if (select_one.value == "stn" && select_two.value == "stn"){
            input.value = input_one.value
        }
        else if (select_one.value == "stn" && select_two.value == "ton"){
            input.value = (input_one.value *0.00625).toFixed(5)
        }

        //Select One ton
        else if (select_one.value == "ton" && select_two.value == "lbs"){
            input.value = (input_one.value * 2240).toFixed(1)
        }
        else if (select_one.value == "ton" && select_two.value == "ozs"){
            input.value = (input_one.value * 35840).toFixed(1)
        }
        else if (select_one.value == "ton" && select_two.value == "kgs"){
            input.value = (input_one.value * 1016.05).toFixed(2)
        }
        else if (select_one.value == "ton" && select_two.value == "stn"){
            input.value = (input_one.value * 160).toFixed(1)
        }
        else if (select_one.value == "ton" && select_two.value == "ton"){
            input.value = input_one.value
        }
        

    };

    if (id == "inputOne") {
        //Select Two lbs
        if (select_two.value == "lbs" && select_one.value == "lbs"){
            input.value = input_two.value
        }
        else if (select_two.value == "lbs" && select_one.value == "ozs"){
            input.value = (input_two.value *16).toFixed(1)
        }
        else if (select_two.value == "lbs" && select_one.value == "kgs"){
            input.value = (input_two.value *.45359237).toFixed(5)
        }
        else if (select_two.value == "lbs" && select_one.value == "stn"){
            input.value = (input_two.value *.0714286).toFixed(5)
        }
        else if (select_two.value == "lbs" && select_one.value == "ton"){
            input.value = (input_two.value *0.000446429).toFixed(5)
        }

        //Select Two ozs
        else if (select_two.value == "ozs" && select_one.value == "lbs"){
            input.value = (input_two.value * 0.0625).toFixed(4)
        }
        else if (select_two.value == "ozs" && select_one.value == "ozs"){
            input.value = input_two.value
        }
        else if (select_two.value == "ozs" && select_one.value == "kgs"){
            input.value = (input_two.value *.0283495).toFixed(5)
        }
        else if (select_two.value == "ozs" && select_one.value == "stn"){
            input.value = (input_two.value *.00446429).toFixed(5)
        }
        else if (select_two.value == "ozs" && select_one.value == "ton"){
            input.value = (input_two.value *2.7902e-5).toFixed(5)
        }

        //Select Two kgs
        else if (select_two.value == "kgs" && select_one.value == "lbs"){
            input.value = (input_two.value * 2.20462).toFixed(5)
        }
        else if (select_two.value == "kgs" && select_one.value == "ozs"){
            input.value = (input_two.value * 35.274).toFixed(3)
        }
        else if (select_two.value == "kgs" && select_one.value == "kgs"){
            input.value = input_two.value
        }
        else if (select_two.value == "kgs" && select_one.value == "stn"){
            input.value = (input_two.value *.157473).toFixed(5)
        }
        else if (select_two.value == "kgs" && select_one.value == "ton"){
            input.value = (input_two.value *0.000984207).toFixed(5)
        }

        //Select Two stn
        else if (select_two.value == "stn" && select_one.value == "lbs"){
            input.value = (input_two.value * 14).toFixed(1)
        }
        else if (select_two.value == "stn" && select_one.value == "ozs"){
            input.value = (input_two.value * 224).toFixed(1)
        }
        else if (select_two.value == "stn" && select_one.value == "kgs"){
            input.value = (input_two.value * 6.35029).toFixed(5)
        }
        else if (select_two.value == "stn" && select_one.value == "stn"){
            input.value = input_two.value
        }
        else if (select_two.value == "stn" && select_one.value == "ton"){
            input.value = (input_two.value *0.00625).toFixed(5)
        }

        //Select Two ton
        else if (select_two.value == "ton" && select_one.value == "lbs"){
            input.value = (input_two.value * 2240).toFixed(1)
        }
        else if (select_two.value == "ton" && select_one.value == "ozs"){
            input.value = (input_two.value * 35840).toFixed(1)
        }
        else if (select_two.value == "ton" && select_one.value == "kgs"){
            input.value = (input_two.value * 1016.05).toFixed(2)
        }
        else if (select_two.value == "ton" && select_one.value == "stn"){
            input.value = (input_two.value * 160).toFixed(1)
        }
        else if (select_two.value == "ton" && select_one.value == "ton"){
            input.value = input_two.value
        }
    };
};