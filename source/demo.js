function mouseWheel(){
    // 动态获取inner的子元素的数量，而且分别为inner和它的子元素动态设置高度百分比
    var inner = document.querySelectorAll(".inner")[0];
    var innerChildren = inner.children;
    inner.style.height = (100 * innerChildren.length)+'%';
    for(let x =0;x<innerChildren.length;x++)
    {
        innerChildren[x].style.height = (100/innerChildren.length) + '%';
    }

    // 为下面动态修改top值做准备,先获取每一个子元素的具体height值
    var height = window.getComputedStyle(innerChildren[0]).height;
    height = parseInt(height);

    // 动态生成相对应数量的li(右侧的小球)
    // （1）判断是否有.navList_ul
    var navList_ul = document.querySelectorAll(".navList_ul")[0];
    if(navList_ul)
    {
        // var li = innerChildren;
        // （2）动态生成小球(li)
        for(let x=0;x<innerChildren.length;x++)
        {
            navList_ul.appendChild(document.createElement("li"));
        }
        // (3)为第一个小球初始为选中状态
        navList_ul.children[0].classList.add("current");
    }

    document.getElementsByClassName("inner")[0].addEventListener('wheel',function(e){
        var _this = this;
        setTimeout(function(){
            // 向下滚
            if(e.deltaY > 0 && _this.dataset.page!=innerChildren.length)
            { 
                _this.style.top = -height*_this.dataset.page+'px';
                // 渐进特效
                if(innerChildren[_this.dataset.page].children[0])
                {
                    innerChildren[_this.dataset.page].children[0].style.animation = "h1Move 2s";
                }
                

                _this.dataset.page++;
                // 小圆球随页面滑动而滑动的特效
                if(innerChildren.length && navList_ul)
                {
                    for(let x = 0;x<innerChildren.length;x++)
                    {
                        navList_ul.children[x].classList.remove("current");
                    }
                    navList_ul.children[_this.dataset.page-1].classList.add("current");
                }
            }
            if(e.deltaY > 0 && _this.dataset.page==innerChildren.length)
            {
                return;
            }
            // 向上滚
            if(e.deltaY < 0 && _this.dataset.page!=1)
            {
                _this.dataset.page--;
                _this.style.top = -height*(_this.dataset.page-1)+'px';
                // 小圆球随页面滑动而滑动的特效
                if(innerChildren.length && navList_ul)
                {
                    for(let x = 0;x<innerChildren.length;x++)
                    {
                        navList_ul.children[x].classList.remove("current");
                    }
                    navList_ul.children[_this.dataset.page-1].classList.add("current");
                }
            }
            if(e.deltaY < 0 && _this.dataset.page==1)
            {
                return;
            }
        },500); 
    });
}
module.exports = mouseWheel;