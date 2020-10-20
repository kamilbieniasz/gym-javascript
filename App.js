const moreActivitiesBtn = document.querySelector('.moreActivitiesBtn');
const groupClasses = document.querySelector('.groupClasses');
const cardUnvisible = document.querySelectorAll('.cardUnvisible');
const cities = document.querySelectorAll('.cities');
const maps = document.querySelectorAll('.map');
const expandLabel = document.querySelectorAll('.expand');
const passCard = document.querySelectorAll('.passCard');
const passInfo = document.querySelectorAll('.passInfo');
const hamburgerBtn = document.querySelector('.hamburgerBtnContainer');
const navbar = document.querySelector('.navbar');

console.log(cities);

moreActivitiesBtn.addEventListener("click",() =>{
    expand();
});

cities.forEach((city, key)=>{
    city.addEventListener("click", () =>{
        hiddenMap();
        showMap(key);
    });
});

passCard.forEach((value, key) =>{
    value.addEventListener("click", ()=>{
        passInfo[key].classList.toggle('showPassInfo');
        expandLabel[key].textContent = expandLabel[key].textContent == "Rozwiń"? "Zwiń": "Rozwiń";
    });
});

hamburgerBtn.addEventListener("click", () =>{
    hamburgerBtn.classList.toggle('hamburgerBtnActive');
    navbar.classList.toggle('showMenu');
})



const expand = () => {
    groupClasses.classList.toggle("changeHeight");
    cardUnvisible.forEach((card) =>{
        card.classList.toggle('visible');
    })
    moreActivitiesBtn.textContent = moreActivitiesBtn.textContent === "Rozwiń" ? "Zwiń" : "Rozwiń";
    console.log(moreActivitiesBtn.textContent);
}

const showMap = (key) => {
    maps[key].classList.add('showMap');
}

const hiddenMap = () => {
    maps.forEach((map)=>{
        map.classList.remove('showMap');
    });
}