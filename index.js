const colorPicked = document.getElementById("colorpicker");
const hexColor = document.getElementById("hexcolor");
const copyBtn = document.getElementById("copyBtn");
const toolTip = document.getElementById("myTooltip");

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(hexColor.innerHTML)
    toolTip.innerHTML = `Copied: ${hexColor.innerHTML}`
})

colorPicked.addEventListener("input", () => {
    const theColor = colorPicked.value;
    hexColor.innerText = theColor;
})