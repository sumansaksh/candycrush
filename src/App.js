import "./App.css";
import React from "react";
import redCandy from "./images/red-candy.png";
import purpleCandy from "./images/purple-candy.png";
import blueCandy from "./images/blue-candy.png";
import greenCandy from "./images/red-candy.png";
import yellowCandy from "./images/yellow-candy.png";
import orangeCandy from "./images/orange-candy.png";
import blank from "./images/blank.png";

import ScoreBoard from "./components/ScoreBoard";
import Footer from "./components/Footer";
const width = 8;
const candyColors = [
  redCandy,
  purpleCandy,
  blueCandy,
  greenCandy,
  yellowCandy,
  orangeCandy,
];
function App() {
  
  const [currentColorArengement, setCurrentColorArengement] = React.useState([])
    const [squareBeingDragged, setSquareBeingDragged] = React.useState(null)
    const [squareBeingReplaced, setSquareBeingReplaced] = React.useState(null)
    const [score, setScore] = React.useState(0)

    const checkForColoumnOfFour = () => {
        for (let i = 0; i <= 39; i++) {
            const columnOfFour = [i, i + width, i + width * 2, i + width * 3]
            const decidedColor = currentColorArengement[i]
            const isBlank = currentColorArengement[i] === blank

            if (columnOfFour.every(square => currentColorArengement[square] === decidedColor && !isBlank)) {
                setScore((score) => score + 4)
                columnOfFour.forEach(square => currentColorArengement[square] = blank)
                return true
            }
        }
    }

    const checkForRowOfFour = () => {
        for (let i = 0; i < 64; i++) {
            const rowOfFour = [i, i + 1, i + 2, i + 3]
            const decidedColor = currentColorArengement[i]
            const notValid = [5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55, 62, 63, 64]
            const isBlank = currentColorArengement[i] === blank

            if (notValid.includes(i)) continue

            if (rowOfFour.every(square => currentColorArengement[square] === decidedColor && !isBlank)) {
                setScore((score) => score + 4)
                rowOfFour.forEach(square => currentColorArengement[square] = blank)
                return true
            }
        }
    }

    const checkForColoumnOfThree = () => {
        for (let i = 0; i <= 47; i++) {
            const columnOfThree = [i, i + width, i + width * 2]
            const decidedColor = currentColorArengement[i]
            const isBlank = currentColorArengement[i] === blank

            if (columnOfThree.every(square => currentColorArengement[square] === decidedColor && !isBlank)) {
                setScore((score) => score + 3)
                columnOfThree.forEach(square => currentColorArengement[square] = blank)
                return true
            }
        }
    }

    const checkForRowOfThree = () => {
        for (let i = 0; i < 64; i++) {
            const rowOfThree = [i, i + 1, i + 2]
            const decidedColor = currentColorArengement[i]
            const notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64]
            const isBlank = currentColorArengement[i] === blank

            if (notValid.includes(i)) continue

            if (rowOfThree.every(square => currentColorArengement[square] === decidedColor && !isBlank)) {
                setScore((score) => score + 3)
                rowOfThree.forEach(square => currentColorArengement[square] = blank)
                return true
            }
        }
    }

    const moveIntoSquareBelow = () => {
        for (let i = 0; i <= 55; i++) {
            const firstRow = [0, 1, 2, 3, 4, 5, 6, 7]
            const isFirstRow = firstRow.includes(i)

            if (isFirstRow && currentColorArengement[i] === blank) {
                let randomNumber = Math.floor(Math.random() * candyColors.length)
                currentColorArengement[i] = candyColors[randomNumber]
            }

            if ((currentColorArengement[i + width]) === blank) {
                currentColorArengement[i + width] = currentColorArengement[i]
                currentColorArengement[i] = blank
            }
        }
    }

    const dragStart = (e) => {
        setSquareBeingDragged(e.target)
    }
    const dragDrop = (e) => {
        setSquareBeingReplaced(e.target)
    }
    const dragEnd = () => {
        const squareBeingDraggedId = parseInt(squareBeingDragged.getAttribute('data-id'))
        const squareBeingReplacedId = parseInt(squareBeingReplaced.getAttribute('data-id'))

        currentColorArengement[squareBeingReplacedId] = squareBeingDragged.getAttribute('src')
        currentColorArengement[squareBeingDraggedId] = squareBeingReplaced.getAttribute('src')

        const validMoves = [
            squareBeingDraggedId - 1,
            squareBeingDraggedId - width,
            squareBeingDraggedId + 1,
            squareBeingDraggedId + width
        ]

        const validMove = validMoves.includes(squareBeingReplacedId)

        const isAColumnOfFour = checkForColoumnOfFour()
        const isARowOfFour = checkForRowOfFour()
        const isAColumnOfThree = checkForColoumnOfThree()
        const isARowOfThree = checkForRowOfThree()

        if (squareBeingReplacedId &&
            validMove &&
            (isARowOfThree || isARowOfFour || isAColumnOfFour || isAColumnOfThree)) {
            setSquareBeingDragged(null)
            setSquareBeingReplaced(null)
        } else {
            currentColorArengement[squareBeingReplacedId] = squareBeingReplaced.getAttribute('src')
            currentColorArengement[squareBeingDraggedId] = squareBeingDragged.getAttribute('src')
            setCurrentColorArengement([...currentColorArengement])
        }
    }


    const createBoard = () => {
        const randomColorArrangement = []
        for (let i = 0; i < width * width; i++) {
            const randomColor = candyColors[Math.floor(Math.random() * candyColors.length)]
            randomColorArrangement.push(randomColor)
        }
        setCurrentColorArengement(randomColorArrangement)
    }

    React.useEffect(() => {
        createBoard()
    }, [])

    React.useEffect(() => {
        const timer = setInterval(() => {
            checkForColoumnOfFour()
            checkForRowOfFour()
            checkForColoumnOfThree()
            checkForRowOfThree()
            moveIntoSquareBelow()
            setCurrentColorArengement([...currentColorArengement])
        }, 100)
        return () => clearInterval(timer)
    }, [checkForColoumnOfFour, checkForRowOfFour, checkForColoumnOfThree, checkForRowOfThree, moveIntoSquareBelow, currentColorArengement])

  return (
    <>
   
    <ScoreBoard score={score}/>
    <div className="App">
    
      <div className="game">
        {currentColorArengement.map((candyColor, index) => {
          return (
            <img
              key={index}
              alt={candyColor}
              src={candyColor}
              data-id={index}
              draggable={true}
              onDragStart={dragStart}
              onDragOver={(e) => e.preventDefault()}
              onDragEnter={(e) => e.preventDefault()}
              onDragLeave={(e) => e.preventDefault()}
              onDrop={dragDrop}
              onDragEnd={dragEnd}
            />
          );
        })}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default App;
