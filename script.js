const units = {
    force: ["Newton", "Kilonewton", "Dyne", "Pound-force"],
    length: ["Meter", "Kilometer", "Centimeter", "Millimeter", "Micrometer", "Nanometer", "Mile", "Yard", "Foot", "Inch"],
    volume: ["Liter", "Milliliter", "Cubic meter", "Cubic centimeter", "Cubic inch", "Cubic foot", "Gallon (US)", "Gallon (UK)", "Pint (US)", "Pint (UK)"]
};

const conversionFactors = {
    force: {
        "Newton_Kilonewton": 0.001,
        "Kilonewton_Newton": 1000,
        "Newton_Dyne": 100000,
        "Dyne_Newton": 0.00001,
        "Newton_Pound-force": 0.224809,
        "Pound-force_Newton": 4.44822
    },
    length: {
        "Meter_Kilometer": 0.001,
        "Kilometer_Meter": 1000,
        "Meter_Centimeter": 100,
        "Centimeter_Meter": 0.01,
        "Meter_Millimeter": 1000,
        "Millimeter_Meter": 0.001,
        "Meter_Micrometer": 1000000,
        "Micrometer_Meter": 0.000001,
        "Meter_Nanometer": 1000000000,
        "Nanometer_Meter": 0.000000001,
        "Meter_Mile": 0.000621371,
        "Mile_Meter": 1609.34,
        "Meter_Yard": 1.09361,
        "Yard_Meter": 0.9144,
        "Meter_Foot": 3.28084,
        "Foot_Meter": 0.3048,
        "Meter_Inch": 39.3701,
        "Inch_Meter": 0.0254
    },
    volume: {
        "Liter_Milliliter": 1000,
        "Milliliter_Liter": 0.001,
        "Liter_Cubic meter": 0.001,
        "Cubic meter_Liter": 1000,
        "Liter_Cubic centimeter": 1000,
        "Cubic centimeter_Liter": 0.001,
        "Liter_Cubic inch": 61.0237,
        "Cubic inch_Liter": 0.0163871,
        "Liter_Cubic foot": 0.0353147,
        "Cubic foot_Liter": 28.3168,
        "Liter_Gallon (US)": 0.264172,
        "Gallon (US)_Liter": 3.78541,
        "Liter_Gallon (UK)": 0.219969,
        "Gallon (UK)_Liter": 4.54609,
        "Liter_Pint (US)": 2.11338,
        "Pint (US)_Liter": 0.473176,
        "Liter_Pint (UK)": 1.75975,
        "Pint (UK)_Liter": 0.568261,
        "Cubic meter_Cubic centimeter": 1000000,
        "Cubic centimeter_Cubic meter": 0.000001,
        "Cubic meter_Cubic inch": 61023.7,
        "Cubic inch_Cubic meter": 0.0000163871,
        "Cubic meter_Cubic foot": 35.3147,
        "Cubic foot_Cubic meter": 0.0283168
    }
};

function populateUnits() {
    const unitType = document.getElementById('unitType').value;
    const inputUnit = document.getElementById('inputUnit');
    const outputUnit = document.getElementById('outputUnit');
    
    inputUnit.innerHTML = "";
    outputUnit.innerHTML = "";

    units[unitType].forEach(unit => {
        const option1 = document.createElement('option');
        option1.value = unit;
        option1.textContent = unit;
        inputUnit.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = unit;
        option2.textContent = unit;
        outputUnit.appendChild(option2);
    });
}

function convert() {
    const unitType = document.getElementById('unitType').value;
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    const inputValue = document.getElementById('inputValue').value;

    const key = `${inputUnit}_${outputUnit}`;
    const factor = conversionFactors[unitType][key];

    if (factor !== undefined) {
        const outputValue = inputValue * factor;
        document.getElementById('result').textContent = `Result: ${outputValue} ${outputUnit}`;
    } else {
        document.getElementById('result').textContent = "Conversion not supported!";
    }
}

window.onload = populateUnits;
