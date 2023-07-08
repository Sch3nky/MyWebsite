import styles from "@/styles/Pages/404.module.scss"

import React,{ useEffect, useRef, useState} from "react";

interface BallOffset {
    left:number, bottom:number, direction: number
}

function Error404() {
    const speed = 6
    const Field = useRef<HTMLDivElement>(null)
    const Platform = useRef<HTMLDivElement>(null)
    const Ball = useRef<HTMLDivElement>(null) 

    const [platformOffset, changePlatformOffset] = useState(0)
    const [keyDown, changeKeyDownState] = useState<{state: boolean, key:string}>({state: false, key:""})

    const [gameActive, changeGameActive] = useState<boolean>(false)

    const [ballOffset, changeBallOffset] = useState<BallOffset>({left:0, bottom:0, direction: 1.5*Math.PI})

    const gameStart = (active: boolean) => {
        if (!active){
            changeBallOffset({left:0, bottom:0, direction: 0.5*Math.PI})
            changeGameActive(true)
            changePlatformOffset(0)
        }
    }

    const reset = () => {
        changeBallOffset({left:0, bottom:0, direction: 0.5*Math.PI})
        changeGameActive(false)
        changePlatformOffset(0)
    }

    const calculateDirection = () => {

    }

    const platformColision = (ballPosition:DOMRect) => {
        if (!Platform.current) return false
        const platformPosition = Platform.current.getBoundingClientRect()
        if (platformPosition.y  < ballPosition.y+50 && (platformPosition.x < ballPosition.x + ballPosition.width/2 && platformPosition.x  + platformPosition.width > ballPosition.x + ballPosition.width/2) && (ballOffset.direction < 2*Math.PI && ballOffset.direction > Math.PI)) {
            changeBallOffset({left:ballOffset.left - speed*Math.cos(ballOffset.direction), bottom:ballOffset.bottom + speed*Math.sin(ballOffset.direction), direction: 0.5*Math.PI})
            return true
        }

        return false
    }

    const ballUpdate = (ballOffset: BallOffset) => {
        if (!Ball.current || !Field.current) return

        const ballPosition = Ball.current.getBoundingClientRect()
        const fieldPosition = Field.current.getBoundingClientRect()
        
        if (platformColision(ballPosition)) return

        if ((ballPosition.x - 6 > fieldPosition.x && ballPosition.y - 6 > fieldPosition.y) && 
            (
                (ballPosition.y + ballPosition.height + 6 < fieldPosition.y + fieldPosition.height) && 
                (ballPosition.x + ballPosition.width + 6 < fieldPosition.x + fieldPosition.width)
            )
            ){
            
            return changeBallOffset({left:ballOffset.left + speed*Math.cos(ballOffset.direction), bottom:ballOffset.bottom + speed*Math.sin(ballOffset.direction), direction: ballOffset.direction})
        }
        else{
            if (ballPosition.y + ballPosition.height + 6 > fieldPosition.y + fieldPosition.height) {
                reset()
            }
            else if (ballPosition.x - 6 > fieldPosition.x){
                return changeBallOffset({left:ballOffset.left - speed*Math.cos(ballOffset.direction), bottom:ballOffset.bottom - speed*Math.sin(ballOffset.direction), direction: 1.5*Math.PI})
            }
            else if (ballPosition.y - 6 > fieldPosition.y){

            }
        }
    }

    useEffect(() => {
        window.addEventListener('focus', () => gameStart(gameActive));
        window.addEventListener('click', () => gameStart(gameActive));
        window.addEventListener('blur', () => changeGameActive(false));
        return () => {
            window.removeEventListener('focus', () => gameStart(gameActive));
            window.removeEventListener('click', () => gameStart(gameActive));
            window.removeEventListener('blur', () => changeGameActive(false));
        };
    }, [gameActive])

    useEffect(() => {
        const handleKeyPress = (e:globalThis.KeyboardEvent) => {
            if (!keyDown.state || keyDown.key != e.key){
                changeKeyDownState({state: true, key:e.key})
            } else return
        }
        const handleKeyUp = (e:globalThis.KeyboardEvent) => {
            changeKeyDownState({state: false, key:""})
        }
        window.addEventListener('keydown', handleKeyPress);
        window.addEventListener('keyup', handleKeyUp);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [keyDown])

    useEffect(() => {
        if (keyDown.state && Platform.current && gameActive) {
          const smoothMove = setInterval(() => {
            if (!Platform.current) return
            if (keyDown.key === "a") {
                if ((Platform.current.getBoundingClientRect().x - 2) > 0){changePlatformOffset((oldNumber) => oldNumber - 1)}
                
            }
            else if (keyDown.key === "d") {
                if ((Platform.current.getBoundingClientRect().right ) < window.innerWidth){changePlatformOffset((oldNumber) => oldNumber + 1)}
            }
            else{clearInterval(smoothMove)}
          }, 1);
  
          return () => {
            clearInterval(smoothMove);
          };
        }
    }, [keyDown, platformOffset, gameActive]);

    useEffect(() => {
        if (gameActive) {
          const ballMove = setInterval(() => {
            ballUpdate(ballOffset)
          }, 1000/60);
  
          return () => {
            clearInterval(ballMove);
          };
        }
    }, [gameActive, ballOffset]);

    return (
        <div className={styles.container}>
            <div className={styles.background}>
                
            </div>
            
            <div ref={Field} className={styles.game}>
                <div ref={Ball} style={{left:`calc(50% + ${ballOffset.left}px)`, bottom: `calc(50px + ${ballOffset.bottom}px)`}} className={styles.ball}>
                </div>

                <div ref={Platform} style={{left:`calc(50% + ${platformOffset}px)`}} className={styles.platform}>
                </div>
            </div>

            <div className={styles.gameFooter}>
                <div className={styles.score}>

                </div>

                <div className={styles.retun}>

                </div>

                <div className={styles.lives}>

                </div>
            </div>
        </div>
    );
}

export default Error404;