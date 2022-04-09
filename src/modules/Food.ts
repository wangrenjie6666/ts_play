//定义食物类Food
class Food{
    //定义一个属性表示食物对应的元素
    element:HTMLElement;
    constructor(){
        //获取页面中的food元素并将其赋值给element
        this.element=document.getElementById('food')!;
        this.change();
    }
    //定义一个获取食物X轴坐标的方法
    get x(){
        return this.element.offsetLeft;
    }
    //定义一个获取食物Y轴坐标的方式
    get y(){
        return this.element.offsetTop;
    }

    //修改食物的位置
    change(){
        //生成一个随机的位置
        //食物的最小位置是0 最大是290
        //蛇移动的一次就是一格，一格的大小就是10，所以要求食物生成随机数
        let top=Math.round(Math.random()*29)*10;
        let left=Math.round(Math.random()*29)*10;
        this.element.style.left=left + 'px';
        this.element.style.top=top + 'px';
    }
}

export default Food;