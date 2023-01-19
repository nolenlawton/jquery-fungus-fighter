$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

function onReady() {
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    $('.attack-btn').on('click', attack)
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM

}

let AP = 100
let HP = 100

function attack() {
    if($(this).hasClass('arcane-sceptre')){
        HP -= 14
        AP -= 12
        console.log(`Attacked with Arcane Sceptre. HP: ${HP} AP: ${AP}`)
    }
    else if($(this).hasClass('entangle')){
        HP -= 9
        AP -= 23
        console.log(`Attacked with Entangle. HP: ${HP} AP: ${AP}`)
    }
    else if($(this).hasClass('dragon-blade')){
        HP -= 47
        AP -= 38
        console.log(`Attacked with Dragon Blade. HP: ${HP} AP: ${AP}`)
    }
    else if($(this).hasClass('star-fire')){
        HP -= 25
        AP -= 33
        console.log(`Attacked with Star Fire. HP: ${HP} AP: ${AP}`)
    }

    if(HP < 0) {
        HP = 0
    }

    if(AP < 0) {
        AP = 0
    }

    console.log(`HP: ${HP}, AP: ${AP}`)

    render()
}

function render() {
    $()
}