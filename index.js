document.addEventListener('DOMContentLoaded', () => {
    const calcValues = [0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65, 0.6, 0.5, 0.4];

    const btnCalc = document.querySelector('.calc-button');
    const spInput = document.querySelector('.sp-input');
    const dlInput = document.querySelector('.dl-input');
    const bpInput = document.querySelector('.bp-input');
    const sqInput = document.querySelector('.sq-input');

    const calcTable = document.querySelector('.calc-table');

    const calculateAndAppend = (table, value, title, classIdentifier) => {
        const base = value*0.9;
        const titleEl = document.createElement('div');
        titleEl.className = `exercise-title ${classIdentifier}-title`;
        titleEl.innerText = title;
        table.appendChild(titleEl);

        const oneRepMaxEl = document.createElement('div');
        oneRepMaxEl.className = `value ${classIdentifier}-1rm`;
        oneRepMaxEl.innerText = value;
        table.appendChild(oneRepMaxEl);

        const baseEl = document.createElement('div');
        baseEl.className = `value ${classIdentifier}-base`;
        baseEl.innerText = base;
        table.appendChild(baseEl);

        calcValues.forEach(calcValue => {
            const printValue = Math.round(calcValue * 100);
            const valueEl = document.createElement('div');
            valueEl.className = `value ${classIdentifier}-${printValue}`;
            valueEl.innerText = round((base*calcValue), 2).toFixed(2);
            table.appendChild(valueEl);
        });
    }

    function round(num, decimalPlaces = 0) {
        num = Math.round(num + "e" + decimalPlaces);
        return Number(num + "e" + -decimalPlaces);
    }

    btnCalc.addEventListener('click', e => {
        const sp1RM = spInput.value;
        const dl1RM = dlInput.value;
        const bp1RM = bpInput.value;
        const sq1RM = sqInput.value;

        if(sp1RM && dl1RM && bp1RM && sq1RM) {
            calculateAndAppend(calcTable, sp1RM, "Standing Shoulder Press", "sp");
            calculateAndAppend(calcTable, dl1RM, "Deadlift", "dl");
            calculateAndAppend(calcTable, bp1RM, "Bench Press", "bp");
            calculateAndAppend(calcTable, sq1RM, "Barbell Back Squat", "sq");

        } else {
            alert("missing values")
        }
    })
});