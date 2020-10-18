const moreActivitiesBtn = document.querySelector('.moreActivitiesBtn');
const groupClasses = document.querySelector('.groupClasses');
const cardUnvisible = document.querySelectorAll('.cardUnvisible');
const cities = document.querySelectorAll('.cities');
const maps = document.querySelectorAll('.map');

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