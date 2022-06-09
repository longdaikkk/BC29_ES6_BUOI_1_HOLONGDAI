const string = document.getElementsByClassName('heading')[0].innerHTML;
const chars = [...string];
console.log(chars);

const content = chars.reduce((previousValue, currentValue)=>{
    previousValue += `
        <span>${currentValue}</span>
    `;
    return previousValue;
},"")

document.getElementsByClassName('heading')[0].innerHTML = content;