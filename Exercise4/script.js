const books = [
    {title: 1984, author: "George Orwell"},
    {title: "In Search of Lost Time", author: "Marcel Proust"},
    {title: "Don Quixote", author: "Miguel de Cervantes"},
    {title: "Moby Dick", author: "Herman Melville"}
]

function deleteBooks(book) {
    return !book.author.includes("Orwell") & !book.author.includes("Melville");
}

res = books.filter(deleteBooks);

console.log(res);

function changeColor() {
    document.getElementById("content").style.color = "blue";
}

function changeContent() {
    document.getElementById("content").innerHTML = "Bye-Bye World";
}

let p1, p2, p3, p4;

function setup() {
    createCanvas(500, 500);
    p1 = new Particle(300, 300);
    p2 = new Box(300, 300);
    p3 = new Triangle(300, 300);
    p4 = new Box(200, 200);
}

function draw() {
    background(0);
    p1.update();
    p1.show();
    p2.update();
    p2.show();
    p3.update();
    p3.show();
    p4.rotate();
}