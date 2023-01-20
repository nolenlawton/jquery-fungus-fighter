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
   
    setInterval(fungusGainHP, 1000)

}

let AP = 100
let HP = 100
let fungusAnimation = 'walk'

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
        fungusAnimation = 'dead';
    }

    if(AP < 0) {
        AP = 0
        fungusAnimation = 'jump'
    }

    console.log(`HP: ${HP}, AP: ${AP}`)
    render()
}


function fungusGainHP() {
    if(HP < 50 && HP > 0) {
        HP++
    }
    render()
}

function render() {
    
    // disabling weapons
    if(AP < 38){
        $('.dragon-blade').prop('disabled', true)
        console.log('Dragon Blade offline')
    }
    if(AP < 33){
        $('.star-fire').prop('disabled', true)
        console.log('Star Fire offline')
    }
    if(AP < 23){
        $('.entangle').prop('disabled', true)
        console.log('Entangle offline')
    }
    if(AP < 12){
        $('.arcane-sceptre').prop('disabled', true)
        console.log('Arcane Sceptor offline')
    }

    // changing HP and AP bar and number
    $(`.ap-text`).text(AP + ' AP')
    $(`.hp-text`).text(HP + ' HP')
    $(`#ap-meter`).val(AP)
    $(`#hp-meter`).val(HP)

    // win
    if(HP === 0) {
        $(`.walk`).attr(`class`, `freaky-fungus ${fungusAnimation}`)
    }
    // lose
    if(AP === 0) {
        $(`.walk`).attr(`class`, `freaky-fungus ${fungusAnimation}`)
    }

}