const inputFile = document.getElementById("file");
const audio = document.getElementById("audio");

inputFile.addEventListener("change", function() {
    const file = inputFile.files[0];
    const audiourl = URL.createObjectURL(file);
    audio.setAttribute("src", audiourl);
    audio.play();
})
