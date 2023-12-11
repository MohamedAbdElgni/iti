const webDesigner = {
    name: 'YOUR NAME',
    yearsAlive: [1992, 2022],
    imgSrc: 'user.jpg',
    skills: ['Photoshop', 'HTML', 'CSS', 'JS'],
    diet: {
        food: 'Indomi',
        drinks: ['Coffee', 'Nescafe', 'tea', 'water']
    }
}
let { name, yearsAlive, imgSrc, skills, diet } = webDesigner
//write your name instead of the YOUR NAME placeholder
name = 'Mohamed Ahmed'
console.log('Name ----> ' + name)

/*write a getAge function that takes the years alive array and returns your age,
 save the value you return in a const of name age*/
const age = get_age(yearsAlive)

function get_age(yearsAlive) {
    return yearsAlive[1] - yearsAlive[0]
}

/*Divide the Webdesign skills into designSkills and developmentskills using ES6*/
let designSkills = skills.slice(0, 2)
console.log('designSkills ----> ' + designSkills)
let developmentskills = skills.slice(2,)
console.log('developmentskills ----> ' + developmentskills)

/*add Those extra skills to the developmentskills array ['ES6', 'ES2015'] and add all of them into a new updatedDevSkills const*/
developmentskills.push('ES6', 'ES2015')

console.log('developmentskills updated ----> ' + developmentskills)

const updatedDevSkills = developmentskills

console.log('updatedDevSkills all ----> ' + updatedDevSkills)

/*destructure the diet object and using new ES6 write a function that returns drinks that contain the letter t*/
drinks = [...webDesigner.diet.drinks]
drinkst = drinks.filter((a) => a.startsWith('t'))
console.log(drinkst)

function buildID() {
    const userID = `
  <div class="inner-container">
    <img src="user.jpg" alt="">
    <div class="info">
      <h1>${name}</h1>
      <p><span class="text-grey">Age:</span> ${age}</p>
      <p><span class="text-grey">Design Skills:</span>${designSkills} </p>
      <p><span class="text-grey">Dev Skills:</span> ${developmentskills}</p>
      <p><span class="text-grey">Food:</span> ${diet.food}</p>
      <p><span class="text-grey">Drinks:</span>${diet.drinks}</p>
    </div>
  </div>
  `;
    return userID
}


let card = document.querySelector('.card')
card.innerHTML = buildID()

printSy(x = 6)

function printSy(x = 0) {
    let str = '*'
    for (let i = 0; i < x; i++) {
        console.log(str)
        str += '*'

    }
}


