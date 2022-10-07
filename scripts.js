var div_array = document.querySelectorAll(".block");
var random_number
var previous_random_number = 0
var score = 0
var level = 1
var initial_speed = 1500
var trigger = true //bool
var health = 5
var difficulty = 1

//--------------------BUTTON--------------------//

//test_button.addEventListener("click", countdown)

//--------------------BUTTON--------------------//


//----------------------funkcja testowa----------------------------//
function test_function() {
    document.querySelector("#title_start").style.fontSize = "200%"
}
//----------------------------------------------------------------//

document.onload = load()

function load() {
    document.querySelector("#score_div").innerHTML = `Hits: ${score}`
    document.querySelector("#level").innerHTML = `Level: ${level}`

    button_difficulty_1.style.display = "none"
    button_difficulty_2.style.display = "none"
    button_start.style.display = "block"
    button_info.style.display = "block"
    title_container.style.display = "none"

    button_restart.addEventListener("click", function(){window.location.reload();})
}




button_start.addEventListener("click", function(){
    button_difficulty_1.style.display = "block"
    button_difficulty_2.style.display = "block"
    this.style.display = "none"
    button_info.style.display = "none"
})

button_info.addEventListener("click", function(){
    about_container.style.display = "flex"
    about_back.addEventListener("click", function(){
        about_container.style.display = "none"})
    })

button_difficulty_1.addEventListener("click", function(){
    difficulty = 1
    health = 10
    menu_cover.style.display = "none"
    countdown()
    })

button_difficulty_2.addEventListener("click", function(){
    difficulty = 2
    health = 5
    menu_cover.style.display = "none"
    countdown()
    })





function countdown() {
    let title_start = document.querySelector("#title_start")
    title_container.style.display = "flex"
    title_start.innerHTML = "3"
    setTimeout(function(){ title_start.innerHTML = "2"; title_start.style.fontSize = "150%"}, 500)
    setTimeout(function(){ title_start.innerHTML = "1"; title_start.style.fontSize = "200%"}, 1000)
    setTimeout(function(){ title_start.innerHTML = "GO!"; title_start.style.fontSize = "250%"}, 1500)
    setTimeout(flow, 2000)
    setTimeout(function(){title_container.style.display = "none"}, 2000)
}




function flow() {

    speed = initial_speed - ((level * 100) - 100)


    random_div_generator();

    if (trigger == true && health > 0) {

        trigger = false

        setTimeout(flow, speed)
        level = Math.floor(score/10 + 1)
        document.querySelector("#level").innerHTML = `Level: ${level}`

    } else if (trigger == false && health > 0) {

        health -= 1

        setTimeout(flow, speed)
        level = Math.floor(score/10 + 1)
        document.querySelector("#level").innerHTML = `Level: ${level}`


        if (difficulty == 1) {
            let x = health*10
            health_ammount.style.width = `${x}%`
        } else if ( difficulty == 2) {
            let x = health*20
            health_ammount.style.width = `${x}%`
        }



    } else {

        document.querySelector("#cover").style.display = "flex"
        document.querySelector("#result").innerHTML = `Result: ${score}!`


    }


}



function random_div_generator() {
    

    div_array[previous_random_number].removeEventListener("click", clicked_div)
    
    div_array[previous_random_number].className = "block"
    random_number = Math.floor((Math.random() * 25))

    if (random_number == previous_random_number) {
        random_div_generator()
    }

    previous_random_number = random_number

    if (difficulty == 1) {
        div_array[random_number].className = "block-child"
    } else if (difficulty == 2) {
        div_array[random_number].className = "block-child-hard"
    }
    
    div_array[random_number].addEventListener("click", clicked_div)
}


function clicked_div(){
        trigger = true
        score += 1
        div_array[random_number].removeEventListener("click", clicked_div)
        document.querySelector("#score_div").innerHTML = `Hits: ${score}`
        div_array[previous_random_number].className = "block"
}






