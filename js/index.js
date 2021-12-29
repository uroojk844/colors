const colors = {r1:0,g1:0,b1:0,a1:100,r2:0,g2:0,b2:0,a2:100}

function generator(elem, c = 1) {
    const op = document.querySelector(`${elem} .output .value`);
    
    document.querySelectorAll(`${elem} input`).forEach(input => {
        input.oninput = (e) => {
            if (e.target.id == 'red')
                colors[`r${c}`] = e.target.value
            else if (e.target.id == 'green')
                colors[`g${c}`] = e.target.value
            else if (e.target.id == 'blue')
                colors[`b${c}`] = e.target.value
            else if (e.target.id == 'alpha')
                colors[`a${c}`] = e.target.value
            op.style.backgroundColor = `rgba(${colors[`r${c}`]}, ${colors[`g${c}`]}, ${colors[`b${c}`]}, ${colors[`a${c}`] / 100})`;
            document.querySelector(`${elem} .codes .rgb`).innerText = `rgba(${colors[`r${c}`]}, ${colors[`g${c}`]}, ${colors[`b${c}`]}, ${colors[`a${c}`] / 100})`;
            document.querySelector(".preview .value").style.backgroundColor = `rgba(${colors.r1}, ${colors.g1}, ${colors.b1}, ${colors.a1 / 100})`;
            document.querySelector(".preview .value").style.color = `rgba(${colors.r2}, ${colors.g2}, ${colors.b2}, ${colors.a2 / 100})`;
            
            document.querySelector(".bg").innerText = `rgba(${colors.r1}, ${colors.g1}, ${colors.b1}, ${colors.a1 / 100})`;
            document.querySelector(".fg").innerText = `rgba(${colors.r2}, ${colors.g2}, ${colors.b2}, ${colors.a2 / 100})`;
        }
    })
    
    document.querySelector(`${elem} .rgb + i`).onclick = (e) => {
        navigator.clipboard.writeText(`rgba(${colors[`r${c}`]}, ${colors[`g${c}`]}, ${colors[`b${c}`]}, ${colors[`a${c}`] / 100})`);
        copied()
    }
}

generator(".col:first-child")
generator(".col:nth-child(2)", 2)

document.querySelector(`.copyCode`).onclick = () => {
    navigator.clipboard.writeText(document.querySelector('.css').innerText);
    copied()
}

function copied() {
    document.querySelector('.toast').classList.toggle("active");
    setTimeout(() => {
        document.querySelector('.toast').classList.toggle("active");
    }, 1000);
}

document.querySelector(`.bold`).onclick = () => {
    document.querySelector('.preview .value').classList.toggle("bold");
}

document.querySelector(`.italic`).onclick = () => {
    document.querySelector('.preview .value').classList.toggle("italic");
}

var textSize = 16;

document.querySelector(`.plus`).onclick = () => {
    textSize++;
    document.querySelector('.preview .value').style.fontSize = `${textSize}px`;
}

document.querySelector(`.minus`).onclick = () => {
    textSize--;
    document.querySelector('.preview .value').style.fontSize = `${textSize}px`;
}