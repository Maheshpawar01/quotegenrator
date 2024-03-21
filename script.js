const quotes = {
    " -Dalai Lama": '"The purpose of our lives is to be happy."',
    " -John Lennon": '"Life is what happens when you are busy making other plans."',
    " -Stephen King": '"Get busy living or get busy dying."'
};

document.querySelector("#generate").addEventListener("click", () => {
    generate();
});

function generate() {
    const authors = Object.keys(quotes); // Corrected: "object" should be "Object"
    const author = authors[Math.floor(Math.random() * authors.length)];

    const quote = quotes[author];

    document.querySelector("#quote").textContent = quote;
    document.querySelector("#author").textContent = author;
}

window.onload = function() {
    generate();
};
