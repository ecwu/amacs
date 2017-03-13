window.onload = function(){
    var arrIcon = ['1.png','2.png'];
    var num = 0;
    var iNow = -1;
    var icon = document.getElementById('user_face_icon').getElementsByTagName('img');
    var btn = document.getElementById('btn');
    var text = document.getElementById('text');
    var content = document.getElementsByTagName('ul')[0];
    var img = content.getElementsByTagName('img');
    var span = content.getElementsByTagName('span');
    var day=new Date();
    var hour=day.getHours();
    var min=day.getMinutes();
    document.getElementById("time").innerHTML=hour+":"+min;
    setInterval(function () {
        var day=new Date();
        var hour=day.getHours();
        var min=day.getMinutes();
        document.getElementById("time").innerHTML=hour+":"+min;
    },1000);

    icon[0].onclick = function(){
        if(num==0){
            this.src = arrIcon[1];
            num = 1;
        }else if(num==1){
            this.src = arrIcon[0];
            num = 0;
        }
    };
    btn.onclick = function(){
        if(text.value ==''){
            alert("can't sent empty message.");
        }else {
            content.innerHTML += '<li><img src="'+arrIcon[num]+'"><span>'+text.value+'</span></li>';
            iNow++;
            if(num==0){
                img[iNow].className += 'imgright';
                span[iNow].className += 'spanright';
            }else {
                img[iNow].className += 'imgleft';
                span[iNow].className += 'spanleft';
            }
            text.value = '';
            content.scrollTop=content.scrollHeight;
        }
    };
    meizi1.onclick = function(){
        var meizi = '你很渴望升职加薪吧，要是得不到提拔你会不开心吗？';//引号里面写要妹子要说的内容
        content.innerHTML += '<li><img src="'+arrIcon[1]+'"><span>'+meizi+'</span></li>';
        iNow++;
        img[iNow].className += 'imgleft';
        span[iNow].className += 'spanleft';
        contentcontent.scrollTop=content.scrollHeight;
    };
    meizi2.onclick = function(){
        var meizi = '哎，给你说件最近的烦心事。(ㄒoㄒ)前几个星期我一直在写我的Business小组作业，花了很多心思，可结果要交的时候老师直接说不看了，让我们自己留着，我感觉我的付出付之东流了，好伤心啊。诶，你会不会因为一件你付出了很多的事情突然被取消了而控制不住自己的情绪呀？';//引号里面写要妹子要说的内容
        content.innerHTML += '<li><img src="'+arrIcon[1]+'"><span>'+meizi+'</span></li>';
        iNow++;
        img[iNow].className += 'imgleft';
        span[iNow].className += 'spanleft';
        contentcontent.scrollTop=content.scrollHeight;
    };
    meizi3.onclick = function(){
        var meizi = '还有最近我在和同学小组讨论，我提出了我自己的想法，结果给我的组长强烈反对了，有点小难过。万一你的想法被人家否定了，你应该伤心吗？';//引号里面写要妹子要说的内容
        content.innerHTML += '<li><img src="'+arrIcon[1]+'"><span>'+meizi+'</span></li>';
        iNow++;
        img[iNow].className += 'imgleft';
        span[iNow].className += 'spanleft';
        contentcontent.scrollTop=content.scrollHeight;
    };
    meizi4.onclick = function(){
        var meizi = '\\(^o^)/还有最后一个问题问你噢~~要是你很敬重的一个人对你的新想法置之不理，你会不会感到难过呀？会不会控制不住自己的情绪呢？';//引号里面写要妹子要说的内容
        content.innerHTML += '<li><img src="'+arrIcon[1]+'"><span>'+meizi+'</span></li>';
        iNow++;
        img[iNow].className += 'imgleft';
        span[iNow].className += 'spanleft';
        contentcontent.scrollTop=content.scrollHeight;
    }
    meizi5.onclick = function(){
        var meizi = '&nbsp;&nbsp;&nbsp;&nbsp;☄10s';//引号里面写要妹子要说的内容
        content.innerHTML += '<li><img src="'+arrIcon[1]+'"><span>'+meizi+'</span></li>';
        iNow++;
        img[iNow].className += 'imgleft';
        span[iNow].className += 'spanleft';
        contentcontent.scrollTop=content.scrollHeight;
    }
};
function hotKey(){
    var e=event.srcElement;
    if(event.keyCode==97 || event.keyCode==49){// Key Pad 1
        meizi1.onclick();
    }
    if(event.keyCode==98 || event.keyCode==50){// Key Pad 2
        meizi2.onclick();
    }
    if(event.keyCode==99 || event.keyCode==51){// Key Pad 3
        meizi3.onclick();
    }
    if(event.keyCode==100 || event.keyCode==52){// Key Pad 4
        meizi4.onclick();
    }
    if(event.keyCode==107){// Key Pad +
        meizi5.onclick();
    }
}
