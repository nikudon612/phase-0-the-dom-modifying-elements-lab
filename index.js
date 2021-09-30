var testOne = document.getElementById("main");
testOne.remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "<p>YOUR-NAME is the champion</p>";
document.head.append(newHeader);
