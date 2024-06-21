
let arr = [[0, 1, 2], [3, 4, 5], [6, 7, 8]]


let item_0 = document.querySelector("#item-0")
let select = item_0.querySelector("select")
item_0.addEventListener('click', () => {
    let el = item_0.querySelector('h2')
    arr[0][0] = select.value
    if (select.value == 0) {

        el.textContent = select.value
    }
    else {
        el.textContent = "×"
    }
})



let item_1 = document.querySelector("#item-1")
let select1 = item_1.querySelector("select")
item_1.addEventListener('click', () => {
    let el = item_1.querySelector('h2')
    arr[0][1] = select1.value

    if (select1.value == 0) {

        el.textContent = select1.value
    }
    else {
        el.textContent = "×"
    }
})

let item_2 = document.querySelector("#item-2")
let select2 = item_2.querySelector("select")
item_2.addEventListener('click', () => {
    let el = item_2.querySelector('h2')
    arr[0][2] = select2.value
    if (select2.value == 0) {

        el.textContent = select2.value
    }
    else {
        el.textContent = "×"
    }
})






let item_3 = document.querySelector("#item-3")
let select3 = item_3.querySelector("select")
item_3.addEventListener('click', () => {
    let el = item_3.querySelector('h2')
    arr[1][0] = select3.value
    if (select3.value == 0) {

        el.textContent = select3.value
    }
    else {
        el.textContent = "×"
    }
})

let item_4 = document.querySelector("#item-4")
let select4 = item_4.querySelector("select")
item_4.addEventListener('click', () => {
    let el = item_4.querySelector('h2')
    arr[1][1] = select4.value
    if (select4.value == 0) {

        el.textContent = select4.value
    }
    else {
        el.textContent = "×"
    }
})


let item_5 = document.querySelector("#item-5")
let select5 = item_5.querySelector("select")
item_5.addEventListener('click', () => {
    let el = item_5.querySelector('h2')
    arr[1][2] = select5.value
    if (select5.value == 0) {

        el.textContent = select5.value
    }
    else {
        el.textContent = "×"
    }
})


let item_6 = document.querySelector("#item-6")
let select6 = item_6.querySelector("select")
item_6.addEventListener('click', () => {
    let el = item_6.querySelector('h2')
    arr[2][0] = select6.value
    if (select6.value == 0) {

        el.textContent = select6.value
    }
    else {
        el.textContent = "×"
    }
})


let item_7 = document.querySelector("#item-7")
let select7 = item_7.querySelector("select")
item_7.addEventListener('click', () => {
    let el = item_7.querySelector('h2')
    arr[2][1] = select7.value
    if (select7.value == 0) {

        el.textContent = select7.value
    }
    else {
        el.textContent = "×"
    }
})


let item_8 = document.querySelector("#item-8")
let select8 = item_8.querySelector("select")

item_8.addEventListener('click', () => {
    let el = item_8.querySelector('h2')
    arr[2][2] = select8.value
    if (select8.value == 0) {

        el.textContent = select8.value
    }
    else {
        el.textContent = "×"
    }
})

console.log(arr)


let input_player=document.querySelector('#input_player')
let btn=document.querySelector('button')
let h=document.querySelector('h3')
let player2=document.getElementById('player2')
let player2_real_value
btn.addEventListener('click',()=>{
//    console.log(input_player.value)

   if(input_player.value==1){
   h.textContent=`PLAYER 1:×`
   player2.textContent=`PLAYER 2:0`
   player2_real_value=0
   }
   else{
    h.textContent=`PLAYER 1: 0`
   player2.textContent=`PLAYER 2:×`
   player2_real_value=1
   }
})



let final_result=document.querySelector('#final_result')
final_result.addEventListener('click',result)
  function result(){

        if(arr[0][2]==1 || arr[0][2]==0){

            if(arr[0][0]==arr[0][1] &&arr[0][0]==arr[0][2]){
                if(arr[0][0]==input_player.value)
                  {
                      window.alert('player 1 win')
                      console.log("player 1win")
                  }
                  else if(arr[0][0]==player2_real_value){
                  window.alert("player 2 win")
                  console.log("player 2win")
                  }
                  else{
                      console.log("match draw")
                      window.alert("MATCH DRAW")
                  }
              }
              else if(arr[1][0]==arr[1][1] &&arr[1][0]==arr[1][2]){
                if(arr[1][0]==input_player.value)
                    {
                        window.alert('player 1 win')
                        console.log("player 1win")
                    }
                    else if(arr[1][0]==player2_real_value){
                    window.alert("player 2 win")
                    console.log("player 2win")
                    }
                
              }
               else if(arr[2][0]==arr[2][1] &&arr[2][0]==arr[2][2]){
                if(arr[2][0]==input_player.value)
                    {
                        window.alert('player 1 win')
                        console.log("player 1win")
                    }
                    else if(arr[2][0]==player2_real_value){
                    window.alert("player 2 win")
                    console.log("player 2win")
                    }
               }
          
               else if(arr[0][0]==arr[1][0] &&arr[0][0]==arr[2][0]){
                if(arr[2][0]==input_player.value)
                    {
                        window.alert('player 1 win')
                        console.log("player 1win")
                    }
                    else if(arr[2][0]==player2_real_value){
                    window.alert("player 2 win")
                    console.log("player 2win")
                    }
               }
               else if(arr[0][1]==arr[1][1] &&arr[0][1]==arr[2][1]){
                if(arr[2][1]==input_player.value)
                    {
                        window.alert('player 1 win')
                        console.log("player 1win")
                    }
                    else if(arr[2][1]==player2_real_value){
                    window.alert("player 2 win")
                    console.log("player 2win")
                    }
               }
           
               
               else if(arr[0][2]==arr[1][2] &&arr[0][2]==arr[2][2]){
                if(arr[2][2]==input_player.value)
                    {
                        window.alert('player 1 win')
                        console.log("player 1win")
                    }
                    else if(arr[2][2]==player2_real_value){
                    window.alert("player 2 win")
                    console.log("player 2win")
                    }
               }
          
          
               else if(arr[0][0]==arr[1][1] &&arr[0][0]==arr[2][2]){
                if(arr[2][2]==input_player.value)
                    {
                        window.alert('player 1 win')
                        console.log("player 1win")
                    }
                    else if(arr[2][2]==player2_real_value){
                    window.alert("player 2 win")
                    console.log("player 2win")
                    }
               }
          
               else if(arr[0][2]==arr[1][1] &&arr[0][2]==arr[2][0]){
                if(arr[2][0]==input_player.value)
                    {
                        window.alert('player 1 win')
                        console.log("player 1win")
                    }
                    else if(arr[2][0]==player2_real_value){
                    window.alert("player 2 win")
                    console.log("player 2win")
                    }
               }
          
          
          
          else{
          window.alert("match draw")
          }

            
        }
        
        
        
    
        else{
            window.alert("play the game according to the rule fill all the boxes")
        }
        }
        
    










