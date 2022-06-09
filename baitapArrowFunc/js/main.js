const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];

const buttonJS = () => {
    const content = colorList.reduce((total, ele, index) => {
        total += `
        <button class="color-button ${ele}" onclick="changeColor(${index})"></button>
        `;
        return total;
    }, "");

    document.getElementById('colorContainer').innerHTML = content;
}

buttonJS();

const changeColor = (index) => {
    const collection = document.getElementsByClassName("color-button");

    for (let i = 0; i < collection.length; i++) {
        collection[i].classList.remove('active');
    }

    document.getElementsByClassName('color-button')[index].classList.add('active');
    document.getElementById('house').className = "house";
    document.getElementById('house').classList.add(colorList[index]);
}
