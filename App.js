const moreActivities = document.querySelector(".moreActivities");
const groupClasses = document.querySelector('.groupClasses');
const cardUnvisible = document.querySelectorAll('.cardUnvisible');

moreActivities.addEventListener("click",() =>{
    groupClasses.classList.toggle("changeHeight");
    cardUnvisible.forEach((card) =>{
        card.classList.toggle('visible');
    })
    moreActivities.classList.toggle('rotateArrow');
})