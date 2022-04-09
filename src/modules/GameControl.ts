import Food from "./Food"
import ScorePanel from "./ScorePanel"
import Snake from "./Snake"

class GameControl {
    food: Food;
    scorePanel: ScorePanel;
    snake: Snake;
    //创建一个属性来储存蛇的移动方向(也就是按键的方向)
    direction: string = "";
    // 创建一个属性来记录游戏是否结束
    isLive = true;

    constructor() {
        this.food = new Food();
        this.scorePanel = new ScorePanel(10,2);
        this.snake = new Snake();
        this.init();
    }
    //游戏初始化方法，调用后开始游戏
    init() {
        //绑定键盘按键按下的事件
        document.addEventListener('keydown', this.keydownHandler.bind(this));
        //调用run方法
        this.run();
    }

    /**
     * ArrorUp UP
     * ArrorDown Down
     * ArrorLeft Left
     * ArrorRight Right
     * @param event 
     */
    //创造一个按出键盘的响应函数
    keydownHandler(event: KeyboardEvent) {
        
        this.direction = event.key;
        
    }

    //创建一个控制蛇移动的方法
    /**
     * 根据按键方向使蛇的方向改变
     * top
     * left
     * right
     * down
     */
    run() {
        let X = this.snake.X;
        let Y = this.snake.Y;
        console.log(this.direction);
        
        //根据按键方向来修改x值和y值
        switch (this.direction) {
            case "ArrowUp":

            // case "UP":
                //向上移动top减少
                Y -= 10;
                break;

            case "ArrowDown":
            // case "Down":
                //case向下移动top增加
                Y += 10;
                break;

            case "ArrowLeft":
            // case "Left":
                //向左移动lef减少
                X -= 10;
                break;
            case "ArrowRight":

            // case "Right":
                X += 10;
                break;

        }

        //检查蛇是否吃到了食物
        this.checkEat(X,Y);

        //修改蛇的X值和Y值
        try {
            this.snake.X = X
            this.snake.Y = Y
        } catch (e:any) {
            alert(e.message + 'Game+Over!')
            this.isLive=false;

        }
            //开始一个定时调用
            this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);



    }
    checkEat(X:number,Y:number){
        console.log(X,Y);
        
        console.log(this.food.x,333);
        console.log(this.food.y,333);
        if(X === this.food.x && Y=== this.food.y){
            this.food.change();
            this.scorePanel.addScore();
            this.snake.addBody();  
            
        }
    }



}

export default GameControl;
