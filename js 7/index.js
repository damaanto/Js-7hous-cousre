// docunent.getElementById("count-el").innerText = 5

// let count = 0 

// let count be 0

// console.log(count)

// let myage = 15
// console.log(myage)
/*
let fristBatch = 5 
let secondBatch = 7
let hello = fristBatch + secondBatch
console.log(hello)
*/
/*
let myAge = 15
let humanDogRatio = 7 
let myDogAge = myAge * humanDogRatio 
console.log(myDogAge)
*/
// let count = 5
// count + 1
// count = count +1 // 5 + 1 = 5 

// console.log(count)

// let bonuspoint = 50
// console.log(bonuspoint)
// bonuspoint = bonuspoint + 50
// console.log(bonuspoint)
// bonuspoint = bonuspoint - 75
// console.log(bonuspoint)
// bonuspoint = bonuspoint + 45 
// console.log(bonuspoint)

// function increment () {


// }

// function countdown () {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }
// countdown()
// countdown()

// function call42 (){
//     console.log(42)
// }
// call42()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36
// function sum (){
//  let sumoflap = lap1 + lap2 + lap3
// console.log(sumoflap)
// }
// sum()
// console.log(sumoflap)//not able to log because it is inside function

// let lapsCompleted  = 0 
// function lapsCompleted1 (){
//     let laps = lapsCompleted + 1
//     console.log(laps)
//     console.log(laps)
//     console.log(laps)

// }

// console.log(lapsCompleted)

/*
let countEl = document.getElementById("count-el")

let count = 0

document

function increment(){
    count = count + 1 
    countEl.innerText = count

}

increment()

function restto0 () {
    count = 0 
    countEl.innerText = 0
}
restto0()
*/



// let hello ='per'
// let message = 'you have tree new notfocations'
// console.log(message + hello)
// console.log(message + "," + hello + "!")
// let messageTouser = message + "," + hello + "!"
// console.log(messageTouser)
// let name = "Adam Elamine"
// let greeting = "Hi my name is"
// let myGreeting = greeting +" "+ name
// console.log(myGreeting)
/*
let welcomeEl = document.getElementById('welcome-el')
let name = " adam "
let greet = " welcome back" 
welcomeEl.innerText = greet + name
welcomeEl.innerText = welcomeEl.innerText + '😊'
welcomeEl.innerText + = '😊'
*/
/*
let countEl = document.getElementById("count-el")

let saveEl = document.getElementById("save-el")

let count = 0

document

function increment(){
    count += 1 
    countEl.textContent = count

}

function save() {
let countStr = count + " - "
saveEl.textContent += countStr
count =0
countEl.textContent = 0
}
*/
/*
let firstName ="Adam"
let lastName ="El-amine"
let fullName = firstName +' '+ lastName
console.log(fullName)
*/ 
/*
let name = "Linda"
let greeting = "Hi there"

function greetlinda(){
console.log(greeting + ", " + name + "!")
}
greetlinda()
*/
/*
let myPoints = 3 

function add3Points()
{
    myPoints += 3
}
function remove1Point(){
    myPoints += -1
}
add3Points()
add3Points()
remove1Point()
remove1Point()
add3Points()
console.log(myPoints)
*/
/*
let el = document.getElementById("error")
let errormeaasge = 'sorry somrthing went wrong'

function buy(){
    el.textContent = 'sorry somrthing went wrong'
}
*/
/*
let numl = 8
let num2 = 2 

document.getElementById ("numl-el"). textContent = numl
document.getElementById("num2-el").textContent = num2
let sumel = document.getElementById("sum-el")
function add() {
let re = numl +num2
    sumel.textContent= "Sum:"+re

}
function subtract(){
    let re = numl -num2
    sumel.textContent= "Sum:"+re

}
function divide(){
let re = numl /num2
    sumel.textContent= "Sum:"+re
    }

function multiply(){
    let re = numl *num2
    sumel.textContent= "Sum:"+re
}
*/
/*
let firstcard = 3
let secondcard = 10
let sum = firstcard + secondcard

if (sum < 21) {
    console.log("Do you want to draw a new card?😀")
} else if (sum === 21){
console.log("Whohoo! You have got a Blackjack😎")
}else {
    console.log("You are out of the game!🤣")
}
*/
/*
let age = 22
if (age < 21){
    console.log("You can not enter the house!")
}else {console.log('Welocme !')}
*/
/*
let age = 100
if (age < 100){
    console.log("no")
}else if (age === 100){
    console.log("ok")
}else 
{console.log("you have one")
}
*/



//Blackjack game 
/*
let player = {
    name : 'Adam',
    chips: 147,
}
let cards = [] //array = an order lists of items
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let sumEl = document.querySelector('#sum-el')//another way to type (document.getElementById())
let messageEl = document.getElementById('message-el')
let cardsEl = document.getElementById('cards-el')
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name+ ": $" + player.chips

function getRandomCard(){
    let randomCard = Math.floor(Math.random()*13) + 1
    if (randomCard > 10){
        return 10
    }else if( randomCard === 1){
        return 11
    }else {
        return randomCard
    }
}

function startGame(){
    isAlive = true
    let firstcard = getRandomCard()
    let secondcard = getRandomCard()
    cards = [firstcard  , secondcard]
    sum =  firstcard + secondcard 
    renderGame()
}

function renderGame (){
    if (sum <=20){
    message = "Do you want to draw a new card?"
} else if(sum === 21)  {
    message = "You have got a Blackjack"
    hasBlackjack = true
}else {
    isAlive = false
    message = 'You are out of the game!'
}

messageEl.textContent = message
sumEl.textContent = "Sum:" +  sum
cardsEl.textContent = "Cards: "  
for (let  i = 0 ; i < cards.length ; i++){
    cardsEl.textContent += cards [i]+ " "
}

}

function newcard(){
    if (isAlive === true && hasBlackjack === false){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}
}
*/

/*
let adam =  ["I know html ", "I know css" , "I know js"]
console.log(adam.length)
console.log(adam[0])

let me = ["Adam El-amine",15,true]

let cards = [7,4]
cards.push(6)
console.log(cards)

let message =  ['hello','heyy','i want icecream']
let newmessage = 'ok'
message.push(newmessage)    
console.log(message)

message.pop()//opp of push
console.log(message)
*/
/*
for (let count =1; count <11; count +=1){
    console.log(count)
}

for (let i = 1; i < 11; i+=1){
    console.log(i)
}
*/
/*
for (let i = 10 ; i < 101 ; i +=10){
    console.log(i)
}
console.log(i)//this does not work since the i is only inside the for()
*/
/*
let cards = [7 , 3, 9]

for (let i = 0 ; i <cards.length; i ++){
console.log(cards[i])
}
*/
/*
let sentence =  ['hello','my','name','is', 'Adam']
let greetingeEL = document.getElementById('greeting-el')

for (let i =  0; i < sentence.length ; i+=1 ){

    greetingeEL.textContent += sentence[i] + ' '
}
*/

/*
let player1time =102
let player2time=107
function getFastPlayer(){
    if (player1time <player2time){
        return player1time
    }else if (player2time < player1time){
        return player2time
    }else {
        return player1time
    }

    function getTotalRaceTime(){
        return player2time + player1time
    }
let totaTime = getTotalRaceTime()
console.log(totaTime)
*/
/*
let randomNumber = Math.random() 
console.log(randomNumber)
//a Matsh.random generate a random number between 0 and 1 (not including of 1(0.000->0.999))

let randomnumber = Math.random() * 6 ///a Matsh.random * 6  generate a random number between 0 and 6(not including of 6(0.000->6.999))
console.log(randomnumber)

let floorNumber  = Math.floor(3.2541865464168) //floor remove thr decimal number
console.log(floorNumber)

let RandomNumber = Math.floor(Math.random()*7)
console.log(RandomNumber)

function rollDice(){
    let hellorandom =  Math.floor(Math.random()*7)
    return hellorandom
}
console.log(rollDice())
*/

/*
let hasCompletedGame = false
let givehello = true

if ( hasCompletedGame === true  || givehello === true ){
    generatehello()
}
//(||) means or (&&) means 

function generatehello (){
    console.log('hello world')
}

let likesDocumnetaries = true
let likeStartups = false

if (likesDocumnetaries === true || likeStartups === true){
recommendMovie()
}

function recommendMovie(){
console.log('Hey, check out this new film we think you will like !')    
}
*/

/*
let couse = {
    title:'learn css grid for free',
    lessons:16,
    creator :'adam elamine',
    length:63,
    level:2,
    isfree: true,
    tags:   ['html','css']
}

console.log(couse.tags[1])
console.log(couse.creator)

let house  = {
    title:'live like a king',
    price: 100,
    issuperhost:true,
    image:  ['dowland.jpg']
}
console.log(house.title)
*/
/*
let person = {
    name:'Adam',
    age : 15,
    country:'Lebnon'
}
function logData(){
    console.log(person.name + ' is ' + person.age + " years old and lives in " + person.country)
}
logData()
*/
/*
let age = 15

if (age < 6 ){
    console.log('free')
}else if (age < 18 ){
    console.log('child discount')
}else if ( age < 27){
    console.log('student discount')
}else if (age < 67){
console.log('full price')
}else  {
    console.log("senior citizen discount")
}
*/
/*
let largeCountries = [ 'china' ,'india','usa','indoensia','pasktane']
console.log('the 5 largest countries in th ewoworld')
for (let i = 0 ; i < largeCountries.length;i ++){
    console.log("- "+largeCountries [i])
}
*/

/*
let largeCountries = ["Tuvalu","India", "USA", "Indonesia", "Monaco"] 
largeCountries.pop()
largeCountries.push('Pakstan')
largeCountries.shift()//shift() means remove the first thing in the array
largeCountries.unshift('China')//unshift add the thing to the first of the array
console.log(largeCountries)
*/

/*
let dayofMonth = 13
let weekday = "Friday"

if (dayofMonth === 13 && weekday === "Friday"){
    console.log('spooky face')
}
*/
/*
let hands = ["rock", "paper", "scissor"] 
    function gethand(){
    let random = Math.floor(Math.random() *3)
    return hands    [random ]
}
console.log(gethand())
*/
/*
let fruit = ['aplle','oranges','aplle','aplle','oranges']
let aplleShelf = document.getElementById('apple-shelf')
let oranges  = document.getElementById('orange-shelf') 

function help(){
    for (let i = 0; i < fruit.length ; i++ ){
    if(fruit[i] === 'aplle'){
    aplleShelf.textContent += ' apple '
    }else if (fruit[i] === 'oranges' ) {
    oranges.textContent+=' oranges '
    }
    }
}

help()
*/

//chrome 



//myLeads = JSON.parse(myLeads)
//myLeads.push('jdgtyu')
//myLeads = JSON.stringify(myLeads)//tranfer a array to stringe
//console.log( typeof myLeads)
let myLeads = []
const inputBtn = document.getElementById('input-btn')
const inputEl = document.getElementById('inputel') 
const ulEl = document.getElementById('ul-el')
const leadsFromLocalStroge = JSON.parse (localStorage.getItem('myLeads'))
const deleteBtn = document.getElementById('delete-btn')
const tabBtn = document.getElementById('tab-btn')

//localStorage.setItem("myLeads",'www.example.lead.com')
//console.log(localStorage.getItem('myLeads'))

if (leadsFromLocalStroge){ // is it true the code will tun / but if it is false the code will not run
    myLeads = leadsFromLocalStroge
    render(myLeads)
}

tabBtn.addEventListener('click' ,function (){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tab[0].url)
        localStorage.setItem('myLeads' , JSON.stringify(myLeads))
        render(myLeads)
    })
})

deleteBtn.addEventListener('dblclick' , function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})


inputBtn.addEventListener('click' , function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem('myLeads' , JSON.stringify(myLeads))
    render(myLeads)
}
)

function render(leads){
let listItems = ""
for (let i = 0 ; i < leads.length ; i ++){
    // listItems += "<li><a traget = 'blank' herf ='" = myLeads[i] + "'>" + myLeads[i] + "</a></li>"
    //ulEl.innerHTML += '<li> + myLeads[i] + </li>'
    //const li = document.createElement('li')//this is a sceond way to make innerHTML
    //li.textContent = myLeads[i]
    //ulEl.append(li)
    listItems += `
    <li>
    <a target='_blank' href='${leads[i]}'>
    ${leads[i]}
    </a>
    </li>`
    // `write noraml html her`
}

ulEl.innerHTML = listItems
}

// false value
// 0
//""
// null (is how as a developer say empty)
// undefied ( is how js say empty)
// NaN

//console.log(Boolean('hello'))//Boolean() is use to know if a avarible is true or false

//Apllication for Bollean
//console.log( Boolean ("0"))// true
//console.log( Boolean (null))// false
//console.log( Boolean ([0]))// true
//console.log( Boolean(-0))// false
//console.log( Boolean(""))//false
//console.log( Boolean(100))//true


/*
let boxEl = document.getElementById('box')
boxEl.addEventListener('click',function(){
    console.log('I want to open the box!')
})
*/

/*
let myLeads = []
//the diifernrt between a (let) and (const) is the (let) can be reassigend but (const) can not be reassigened
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
//inputEl = "hello" <== This code will not work,since we are reassinging the const 
inputBtn.addEventListener('click',function(){
    console.log('Button clicked')
})
*/


/*
const container = document.getElementById("container")
container.innerHTML = "<button onclick='buy()'>Buy!</button>"

function buy(){
    container.innerHTML += "<p> Thank you for buying </p>"
}
*/

/*
const reipient = "James"
const sender = 'Adam'
const email =  `
hey ${reipient}!
How is it going ?
Cheers ${sender}
`
console.log(email)
*/

/*
localStorage.setItem('Adam','www.helloworld.com')
console.log(localStorage.getItem('Adam'))
localStorage.clear()
*/

/*
const welcomeEl = document.getElementById('welcome-el')

function greetUser(greeting , name,face) {
    welcomeEl.textContent = `${greeting}
    , ${name} ${face}`
}

greetUser('hello' , 'adam','👍😉')

function add( number1 , number2 ) {
    return number1 + number2
}
console.log(add(3,4))
console.log(add(9,102))

//arguments are outside the function
//parametes are inside of the function

function getFirst(arr){
    return arr[0]
}
let firstcard = getFirst([10,2,5])

console.log(firstcard)
*/
