class Snake {
    //表示蛇头的元素
    head: HTMLElement;
    //蛇的身体(包括蛇头)
    bodies: HTMLCollection;
    element: HTMLElement;

    constructor() {
        this.element = document.getElementById('snake')!;
        this.head =<HTMLElement>document.querySelector('#snake >div');
        this.bodies = document.getElementById('snake')!.getElementsByTagName('div');

    }
    //获取蛇的坐标(蛇头坐标)
    get X() {
        return this.head.offsetLeft;
    }

    //获取蛇的Y轴坐标
    get Y() {
        return this.head.offsetTop;
    }
    //设置蛇头的坐标
    set X(value: number) {
        //如果新值和旧值不再相同，则直接返回不再修改
        if (this.X === value) {
            return;
        }
    
        
        // X的值合法范围在0~290
        if (value < 0 || value > 290) {
            throw new Error('说明蛇撞墙了');
        }
        //不能掉头处理
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            if (value > this.X) {
                value = this.X - 10

            } else {
                value = this.X + 10
            }
        }

        this.moveBody();
        this.head.style.left = value + 'px';
        this.checkHeadBody();
    }
    set Y(value: number) {
        //如果新值和旧值不再相同，则直接返回不再修改
        if (this.Y === value) {
            return;
        }
        // y的值合法范围在0~290
        if (value < 0 || value > 290) {
            throw new Error('说明蛇撞墙了');
        }

        //不能掉头处理
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            if (value > this.Y) {
                value = this.Y - 10

            } else {
                value = this.Y + 10
            }
        }

        this.moveBody();
        this.head.style.top = value + 'px';
        this.checkHeadBody();
    }

    //蛇增加身体的方法
    addBody() {
        //向ELement 中添加一个div
        console.log(this.element,'hahaha');
        
        this.element.insertAdjacentHTML('beforeend', "<div></div>")
    }

    //添加一个蛇身体移动的方法
    moveBody() {
        for (let i: number = this.bodies.length - 1; i > 0; i--) {
            //获取前边身体的位置
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;


            //将值设置到当前身体上
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';

        }
    }
    //检查蛇头是否撞到身体的方法
    checkHeadBody(){
        for(let i=1;i<this.bodies.length;i++){
            let bd=this.bodies[i] as HTMLElement

            if(this.X === bd.offsetLeft && this.Y ===bd.offsetTop){
                //进入判断说明蛇头进入身体了 游戏结束
                throw new Error('撞到自己了')
            }
        }
    }
}
export default Snake;