

var buttonColors= ["red", "blue", "green", "yellow"];
var gamePattern= [];
var userClickedPattern= [];
var started=false;
var level=0;

function checkAnswer(currentLevel) {
    if(userClickedPattern[currentLevel]==gamePattern[currentLevel])
    {
        console.log("Success");
        if(userClickedPattern.length==gamePattern.length)
        {
            setTimeout(function()
            {
                nextSequence();
            },1000);
        }
    }
    else
    {
        console.log("wrong");
        playSound("wrong");
        setTimeout(function()
        {
            $("body").addClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
        
        
    }

    
}
$(document).keypress(function()
{
    if(!started)
    {
        $("body").removeClass("game-over");
        $("#level-title").text("Level "+level);
        nextSequence();
        started=true;          
    }
    
       
        
        
})



function animatePress(currentColor)
{
    $("#"+currentColor).addClass("pressed");
    setTimeout(function()
    {
        $("#"+currentColor).removeClass("pressed")

    },100)
}
function playSound(name)
{
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
}
$(".btn").click(function()
    {
       
        var userChosenColor=$(this).attr("id");
        userClickedPattern.push(userChosenColor);
        console.log(userChosenColor);
        playSound(userChosenColor);
        animatePress(userChosenColor);
        checkAnswer(userClickedPattern.length-1);

    });

function nextSequence()
{
    userClickedPattern = [];

    level++;
    $("#level-title").text("Level "+level);


    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor= buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    //var audio=new Audio("sounds/"+randomChosenColor+".mp3");
    //audio.play();
    playSound(randomChosenColor);
    //started=started+1;
    //$("#level-title").text("Level "+started);
    



}
function startOver()
{
    level=0;
    gamePattern=[];
    started=false;
    
    
}


