/*
//this enetire function isn't needed if js file is called at the bottom of index.html
document.addEventListener('DOMContentLoaded', () => {
    const bird = document.querySelector('.bird');
    const gameDisplay = document.querySelector('.game-container');
    const ground = document.querySelector('.ground')

    let birdLeft = 220; //these are in pixels
    let birdBottom = 100;
    let gravity = 2;
    let isGameOver = false

    function startGame() {
        birdBottom -= gravity;
        bird.style.bottom = birdBottom + 'px';
        bird.style.left = birdLeft + 'px';
    }
    let gameTimerId = setInterval(startGame, 20);

    function control(e) {
        if (e.keyCode === 32) { //spacebar number
            jump()
        }
    }

    function jump() {
        if (birdBottom < 500) birdBottom += 50; //if the bird is under 500px that's when we jump so we're not jumping out of the screen
        bird.style.bottom = birdBottom + 'px';
        console.log(birdBottom);
    }

    document.addEventListener('keyup', control);

    function generateObstacle() {
        let obstacleLeft = 500;
        let randomHeight = Math.random() * 60;
        let obstacleBottom = randomHeight;
        const obstacle = document.createElement('div');
        if (!isGameOver) obstacle.classList.add('obstacle');
        gameDisplay.appendChild(obstacle) //placing div into game container
        //positioning obstacle where we want it
        obstacle.style.left = obstacleLeft + 'px';
        obstacle.style.bottom = obstacleBottom + 'px';

        function moveObstacle(){
            obstacleLeft -= 2;
            obstacle.style.left = obstacleLeft;
    
            if(obstacleLeft === -60) {
                clearInterval(timerId);
                gameDisplay.removeChild(obstacle);
            }
            if(
                obstacleLeft > 200 && obstacleLeft < 280 && birdLeft === 220 ||
                birdBottom < obstacleBottom + 153 ||
                birdBottom === 0){
                gameOver()
                clearInterval(timerId) //stops the obstacles from moving
            }
        }
    
        let timerId = setInterval(moveObstacle, 20);
        if (!isGameOver) setTimeout(generateObstacle, 3000) //every 3 seconds
    }
    
    generateObstacle()

    function gameOver(){
        clearInterval(gameTimerId)
        isGameOver = true;
        document.removeEventListener('keyup', control) //prevents spacebar from working
        console.log('game over')
    }
})
*/

document.addEventListener('DOMContentLoaded' , () => {
    const bird = document.querySelector('.bird')
    const gameDisplay = document.querySelector('.game-container')
    const ground = document.querySelector('.ground-moving')

    let birdLeft = 220
    let birdBottom = 100
    let gravity = 3
    let isGameOver = false
    let gap = 430


    function startGame() {
        birdBottom -= gravity
        bird.style.bottom = birdBottom + 'px'
        bird.style.left = birdLeft + 'px'
    }
    let gameTimerId = setInterval(startGame, 20)

    function control(e) {
        if (e.keyCode === 32) {
            jump()
        }
    }

    function jump() {
        if (birdBottom < 500) birdBottom += 50
        bird.style.bottom = birdBottom + 'px'
        console.log(birdBottom)
    }
    document.addEventListener('keyup', control)


    function generateObstacle() {
        let obstacleLeft = 500
        let randomHeight = Math.random() * 60
        let obstacleBottom = randomHeight
        const obstacle = document.createElement('div')
        const topObstacle = document.createElement('div')
        if (!isGameOver) {
            obstacle.classList.add('obstacle')
            topObstacle.classList.add('topObstacle')
        }
        gameDisplay.appendChild(obstacle)
        gameDisplay.appendChild(topObstacle)
        obstacle.style.left = obstacleLeft + 'px'
        topObstacle.style.left = obstacleLeft + 'px'
        obstacle.style.bottom = obstacleBottom + 'px'
        topObstacle.style.bottom = obstacleBottom + gap + 'px'

        function moveObstacle() {
            obstacleLeft -=2
            obstacle.style.left = obstacleLeft + 'px'
            topObstacle.style.left = obstacleLeft + 'px'

            if (obstacleLeft === -60) {
                clearInterval(timerId)
                gameDisplay.removeChild(obstacle)
                gameDisplay.removeChild(topObstacle)
            }
            if (
                obstacleLeft > 200 && obstacleLeft < 280 && birdLeft === 220 &&
                (birdBottom < obstacleBottom + 153 || birdBottom > obstacleBottom + gap -200)||
                birdBottom === 0 
                ) {
                gameOver()
                clearInterval(timerId)
            }
        }
        let timerId = setInterval(moveObstacle, 20) 
        if (!isGameOver) setTimeout(generateObstacle, 3000)

    }
    generateObstacle()


    function gameOver() {
        clearInterval(gameTimerId)
        console.log('game over')
        isGameOver = true
        document.removeEventListener('keyup', control)
        ground.classList.add('ground')
        ground.classList.remove('ground-moving')
    }


})