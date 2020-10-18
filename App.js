const moreActivities = document.querySelector('.moreActivities');
const groupClasses = document.querySelector('.groupClasses');
const cardUnvisible = document.querySelectorAll('.cardUnvisible');
const cities = document.querySelectorAll('.cities');
const maps = document.querySelectorAll('.map');

console.log(cities);

moreActivities.addEventListener("click",() =>{
    expand();
});

cities.forEach((city, key)=>{
    city.addEventListener("click", () =>{
        hiddenMap();
        showMap(key);
        //maps[key].classList.add('showMap');
    });
});


const expand = () => {
    groupClasses.classList.toggle("changeHeight");
    cardUnvisible.forEach((card) =>{
        card.classList.toggle('visible');
    })
    moreActivities.classList.toggle('rotateArrow');
}

const showMap = (key) => {
    maps[key].classList.add('showMap');
}

const hiddenMap = () => {
    maps.forEach((map)=>{
        map.classList.remove('showMap');
    });
}