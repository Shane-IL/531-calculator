document.addEventListener('DOMContentLoaded', () => {
    const calcValues = [0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65, 0.6, 0.5, 0.4];

    const btnCalc = document.querySelector('.calc-button');
    const spInput = document.querySelector('.sp-input');
    const dlInput = document.querySelector('.dl-input');
    const bpInput = document.querySelector('.bp-input');
    const sqInput = document.querySelector('.sq-input');

    const calcTable = document.querySelector('.calc-table');

    const titlesHTML = `
    <div class="title placeholder"></div>
    <div class="title title-1rm">1 RM</div>
    <div class="title title-base">90% Base</div>
    <div class="title title-95">95% of base</div>
    <div class="title title-90">90% of base</div>
    <div class="title title-85">85% of base</div>
    <div class="title title-80">80% of base</div>
    <div class="title title-75">75% of base</div>
    <div class="title title-70">70% of base</div>
    <div class="title title-65">65% of base</div>
    <div class="title title-60">60% of base</div>
    <div class="title title-50">50% of base</div>
    <div class="title title-40">40% of base</div>`

    const calculateAndAppend = (table, value, title, classIdentifier) => {
        const base = value*0.9;
        const titleEl = document.createElement('div');
        titleEl.className = `title exercise-title ${classIdentifier}-title`;
        titleEl.innerText = title;
        table.appendChild(titleEl);

        const oneRepMaxEl = document.createElement('div');
        oneRepMaxEl.className = `value ${classIdentifier}-1rm`;
        oneRepMaxEl.innerText = value;
        table.appendChild(oneRepMaxEl);

        const baseEl = document.createElement('div');
        baseEl.className = `value ${classIdentifier}-base`;
        baseEl.innerText = round(base);
        table.appendChild(baseEl);

        calcValues.forEach(calcValue => {
            const printValue = Math.round(calcValue * 100);
            const valueEl = document.createElement('div');
            valueEl.className = `value ${classIdentifier}-${printValue}`;
            valueEl.innerText = round(base*calcValue, 2);
            table.appendChild(valueEl);
        });
    }

    function round(num, decimalPlaces = 0) {
        num = Math.round(num + "e" + decimalPlaces);
        return Number(num + "e" + -decimalPlaces);
    }

    spInput.value = localStorage.getItem('sp1RM') || null;
    dlInput.value = localStorage.getItem('dl1RM') || null;
    bpInput.value = localStorage.getItem('bp1RM') || null;
    sqInput.value = localStorage.getItem('sq1RM') || null;

    btnCalc.addEventListener('click', e => {
        const sp1RM = spInput.value;
        const dl1RM = dlInput.value;
        const bp1RM = bpInput.value;
        const sq1RM = sqInput.value;

        if(sp1RM && dl1RM && bp1RM && sq1RM) {
            calcTable.innerHTML = titlesHTML;

            localStorage.setItem('sp1RM', sp1RM);
            localStorage.setItem('dl1RM', dl1RM);
            localStorage.setItem('bp1RM', bp1RM);
            localStorage.setItem('sq1RM', sq1RM);

            calculateAndAppend(calcTable, sp1RM, "Standing Shoulder Press", "sp");
            calculateAndAppend(calcTable, dl1RM, "Deadlift", "dl");
            calculateAndAppend(calcTable, bp1RM, "Bench Press", "bp");
            calculateAndAppend(calcTable, sq1RM, "Barbell Back Squat", "sq");

        } else {
            alert("missing values")
        }
    })
});