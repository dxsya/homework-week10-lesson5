// TODO 6.1. Дан массив с продуктами,
let db = [
    {
        title: "Samsung S10",
        category: "electronics",
        price: 700,
        desc: "Super phone for your life!",
        img: "https://object.pscloud.io/cms/cms/Photo/img_0_77_1809_0_6.png",
    },
    {
        title: "iPhone 13 Pro",
        category: "electronics",
        price: 1100,
        desc: "One of the most powerful cameras!",
        img: "https://www.tradeinn.com/f/13885/138855059/apple-iphone-13-pro-256gb-6.1-%D0%A1%D0%BC%D0%B0%D1%80%D1%82%D1%84%D0%BE%D0%BD.jpg",
    },
    {
        title: "Apple",
        category: "fruits",
        price: 2,
        desc: "Healthy fruit that is used in many dishes and desserts.",
        img: "https://post.healthline.com/wp-content/uploads/2020/09/health-benefits-of-apples-732x549-thumbnail-732x549.jpg",
    },
    {
        title: "Orange",
        category: "fruits",
        price: 7,
        desc: "Fruit for one of the most popular types of juice.",
        img: "https://www.eatthis.com/wp-content/uploads/sites/4/2021/07/whole-halved-oranges.jpg",
    },
    {
        title: "Audi R8",
        category: "cars",
        price: 98000,
        desc: "A sports car that can reach tremendous speed.",
        img: "https://cdn.motor1.com/images/mgl/JmVR6/s1/2019-audi-r8-onlocation.jpg",
    },
];

let container = document.querySelector(".container");
let div = document.createElement("div");
div.classList.add("row", "row-cols-1", "row-cols-md-3", "g-4");
function render(arr = db) {
    div.innerHTML = "";
    arr.forEach((item) => {
        div.innerHTML += `<div class='col'><div class='card h-100 border-primary mb-3'> <img src='${item.img}' class='card-img-top'><div class='card-body'><h5 class='card-title'>${item.title}</h5><p class='card-text'> Category: ${item.category}</p>
    <p class='card-text'>Price: ${item.price}$</p>
    <p class='card-text'>${item.desc}</p></div> </div></div>`;
    });
}
render();
container.append(div);
let select = document.querySelector("select");
select.addEventListener("change", (e) => {
    if (e.target.value == "cars") {
        let cars = db.filter((item) => {
            if (item.category.indexOf(e.target.value) != -1) {
                return true;
            } else {
                return false;
            }
        });
        render(cars);
    }
    if (e.target.value == "fruits") {
        let fruits = db.filter((item) => {
            if (item.category.indexOf(e.target.value) != -1) {
                return true;
            } else {
                return false;
            }
        });
        render(fruits);
    }
    if (e.target.value == "electronics") {
        let electronics = db.filter((item) => {
            if (item.category.indexOf(e.target.value) != -1) {
                return true;
            } else {
                return false;
            }
        });
        render(electronics);
    }
    if (e.target.value == "all") {
        render();
    }
});

let input = document.querySelector("#search");
let button = document.querySelector(".searchBtn");

button.addEventListener("click", (e) => {
    console.log(input.value);
    let filtered = db.filter((item) => {
        if (item.title.toLowerCase().indexOf(input.value.toLowerCase()) != -1) {
            return true;
        } else {
            return false;
        }
    });
    if (filtered.length == 0) {
        let h2 = document.createElement("h2");
        h2.innerHTML = "there is no such item";
        container.append(h2);
    }

    render(filtered);
});
