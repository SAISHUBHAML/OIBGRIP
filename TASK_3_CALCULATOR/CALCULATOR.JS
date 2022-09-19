function calculate() {
    const temp = document.getElementById('temp').value;
    if (isNaN(temp)) {
        alert("Enter the temperature in Numericals");
    }
    else {
        const tempmod = document.getElementById('tempch');
        let tempmodin = tempch.options[tempmod.selectedIndex].value;
        let result;
        const c_to_f = (celsius) => {
            let fahrenheit = Math.round((celsius * 9 / 5) + 32);
            return fahrenheit;
        };
        const f_to_c = (Fahrenheit) => {
            let celsius = Math.round((Fahrenheit - 32) * 5 / 9);
            return celsius;
        };
        if (tempmodin == 'celsius') {
            result = c_to_f(temp);
            document.getElementById('resultcon').innerHTML = `=${result} fahrenheit`;
        }
        else {
            result = f_to_c(temp);
            document.getElementById('resultcon').innerHTML = `=${result} celsius `;
        }
    }
}
