$(document).ready(function(){
	var database=[
     {id:"song1",name:"刚好遇见你",src:"music/李玉刚刚好遇见你.mp3",icon:"img/1.jpg",bigimg:"img/big1.jpg",author:"李玉刚",zhuanji:"刚好遇见你",lyrics:[
{time:'00:00.27',lyric:'刚好遇见你 - 李玉刚'},
{time:'00:05.35',lyric:'作词：高进'},
{time:'00:09.92',lyric:'作曲：高进'},
{time:'00:13.10',lyric:'编曲：关天天'},
{time:'00:14.58',lyric:'我们哭了'},
{time:'00:15.85',lyric:'我们笑着'},
{time:'00:19.00',lyric:'我们抬头望天空'},
{time:'00:21.83',lyric:'星星还亮着几颗'},
{time:'00:25.00',lyric:'我们唱着'},
{time:'00:27.98',lyric:'时间的歌'},
{time:'00:31.07',lyric:'才懂得相互拥抱'},
{time:'00:33.73',lyric:'到底是为了什么'},
{time:'00:37.04',lyric:'因为我刚好遇见你'},
{time:'00:40.39',lyric:'留下足迹才美丽'},
{time:'00:43.61',lyric:'风吹花落泪如雨'},
{time:'00:46.67',lyric:'因为不想分离'},
{time:'00:49.72',lyric:'因为刚好遇见你'},
{time:'00:52.67',lyric:'留下十年的期许'},
{time:'00:55.85',lyric:'如果再相遇'},
{time:'00:59.07',lyric:'我想我会记得你'},
{time:'01:14.34',lyric:'我们哭了'},
{time:'01:17.09',lyric:'我们笑着'},
{time:'01:20.10',lyric:'我们抬头望天空'},
{time:'01:22.87',lyric:'星星还亮着几颗'},
{time:'01:26.19',lyric:'我们唱着'},
{time:'01:29.16',lyric:'时间的歌'},
{time:'01:32.25',lyric:'才懂得相互拥抱'},
{time:'01:35.24',lyric:'到底是为了什么 '},
{time:'01:38.24',lyric:'因为我刚好遇见你'},
{time:'01:41.90',lyric:'留下足迹才美丽'},
{time:'01:44.86',lyric:'风吹花落泪如雨'},
{time:'01:47.96',lyric:'因为不想分离'},
{time:'01:51.18',lyric:'因为刚好遇见你'},
{time:'01:54.25',lyric:'留下十年的期许'},
{time:'01:57.18',lyric:'如果再相遇'},
{time:'02:00.31',lyric:'我想我会记得你'},
{time:'02:03.77',lyric:'因为刚好遇见你'},
{time:'02:06.44',lyric:'留下足迹才美丽'},
{time:'02:09.35',lyric:'风吹花落泪如雨'},
{time:'02:12.52',lyric:'因为不想分离'},
{time:'02:15.51',lyric:'因为刚好遇见你'},
{time:'02:18.74',lyric:'留下十年的期许'},
{time:'02:21.64',lyric:'如果再相遇'},
{time:'02:24.77',lyric:'我想我会记得你'},
{time:'02:30.68',lyric:'因为我刚好遇见你'},
{time:'02:33.78',lyric:'留下足迹才美丽'},
{time:'02:36.99',lyric:'风吹花落泪如雨'},
{time:'02:40.00',lyric:'因为不想分离'},
{time:'02:42.69',lyric:'因为刚好遇见你'},
{time:'02:46.03',lyric:'留下十年的期许'},
{time:'02:49.23',lyric:'如果再相遇'},
{time:'02:52.31',lyric:'我想我会记得你'}
]
    
     },
     {id:"song2",name:"暗香",src:"music/沙宝亮暗香.mp3",icon:"img/2.jpg",bigimg:"img/big2.jpg",author:"沙宝亮",zhuanji:"此间的少年",lyrics:[
    {time:'00:00.27',lyric:'歌手:沙宝亮'},
    {time:'00:07.92',lyric:'专辑:直接影响2 三宝影视音乐精选'},
    {time:'00:09.10',lyric:'沙宝亮 - 暗香'},
    {time:'00:10.83',lyric:'作词：陈涛'},
	{time:'00:11.69',lyric:'作曲：三宝'},
	{time:'00:14.04',lyric:'当花瓣离开花朵 暗香残留'},
	{time:'00:28.29',lyric:'香消在风起雨后 无人来嗅'},
	{time:'00:41.79',lyric:'如果爱告诉我走下去'},
	{time:'00:48.67',lyric:'我会拼到爱尽头'},
	{time:'00:55.33',lyric:'心若在灿烂中死去'},
	{time:'01:02.08',lyric:'爱会在灰烬里重生'},
	{time:'01:09.13',lyric:'难忘缠绵细语时'},
	{time:'01:13.89',lyric:'用你笑容为我祭奠'},
	{time:'01:22.64',lyric:'让心在灿烂中死去'},
	{time:'01:29.33',lyric:'让爱在灰烬里重生'},
	{time:'01:36.18',lyric:'烈火烧过青草痕'},
	{time:'01:41.52',lyric:'看看又是一年春风'},
	{time:'01:50.52',lyric:'当花瓣离开花朵 暗香残留'},
	{time:'02:34.82',lyric:'当花瓣离开花朵 暗香残留'},
	{time:'02:51.40',lyric:'香消在风起雨后 无人来嗅'},
	{time:'02:56.76',lyric:'如果爱告诉我走下去'},
	{time:'03:12.12',lyric:'我会拼到爱尽头'},
	{time:'03:18.86',lyric:'心若在灿烂中死去'},
	{time:'03:25.46',lyric:'爱会在灰烬里重生'},
	{time:'03:32.35',lyric:'难忘缠绵细语时'},
	{time:'03:37.57',lyric:'用你笑容为我祭奠'},
	{time:'03:45.85',lyric:'让心在灿烂中死去'},
	{time:'03:52.68',lyric:'让爱在灰烬里重生'},
	{time:'03:59.59',lyric:'烈火烧过青草痕'},
	{time:'04:04.78',lyric:'看看又是一年春风'},
	{time:'04:12.27',lyric:'当花瓣离开花朵 暗香残留'}
	]},
	
     {id:"song3",name:"三生三世",src:"music/张杰三生三世.mp3",icon:"img/3.jpg",bigimg:"img/big3.jpg",author:"张杰",zhuanji:"三生三世十里挑花",lyrics:[
    {time:'00:00.00',lyric:'三生三世-(电视剧《三生三世十里桃花》主题曲) - 张杰'},
    {time:'00:20.59',lyric:'作词：代岳东&谭旋'},
    {time:'00:22.59',lyric:'作曲：谭旋'},
    {time:'00:26.07',lyric:'编曲：可可'},
    {time:'00:30.06',lyric:'握不紧那段过往'},
    {time:'00:33.36',lyric:'冥灭了结魄光芒'},
    {time:'00:36.60',lyric:'那一滴离别的泪'},
 	{time:'00:40.14',lyric:'灼烧着我的胸膛'},
 	{time:'00:43.88',lyric:'爱在天地中流转'},
 	{time:'00:48.98',lyric:'一颗心为谁奔忙'},
 	{time:'00:51.38',lyric:'四海八荒 身在何方'},
 	{time:'00:53.87',lyric:'岁月该如何安放'},
 	{time:'00:57.50',lyric:'听风声在沙沙作响'},
 	{time:'01:01.09',lyric:'敲打着谁的愁肠'},
 	{time:'01:04.51',lyric:'思念在一瞬间生长'},
 	{time:'01:08.16',lyric:'才忘了夜多漫长'},
 	{time:'01:11.44',lyric:'掌心的泪握到滚烫'},
 	{time:'01:14.91',lyric:'只愿为你三生痴狂'},
 	{time:'01:18.67',lyric:'落花满天 又闻琴香'},
 	{time:'01:22.23',lyric:'与你天地间徜徉'},
	{time:'01:25.65',lyric:'如果爱太荒凉 我陪你梦一场'},
	{time:'01:29.23',lyric:'赎回你所有泪光'},
	{time:'01:32.74',lyric:'这一路有多远 这三世有多长'},
	{time:'01:34.47',lyric:'执手到地老天荒'},
	{time:'01:39.65',lyric:'风凄凄雾茫茫 雨滚滚雪漫漫'},
	{time:'01:43.30',lyric:'一步步都陪你同往'},
	{time:'01:46.78',lyric:'牵着手 别惊慌 管明天会怎样'},
	{time:'01:50.25',lyric:'哪怕注定流浪 哪怕海角天涯'},
	{time:'02:25.42',lyric:'听风声在沙沙作响'},
	{time:'02:28.81',lyric:'敲打着谁的愁肠'},
	{time:'02:32.39',lyric:'思念在一瞬间生长'},
	{time:'02:36.03',lyric:'才忘了夜多漫长'},
	{time:'02:39.65',lyric:'掌心的泪握到滚烫'},
	{time:'02:42.92',lyric:'只愿为你三生痴狂'},
	{time:'02:46.34',lyric:'落花满天 又闻琴香'},
	{time:'02:50.04',lyric:'与你天地间徜徉'},
	{time:'02:53.54',lyric:'如果爱太荒凉 我陪你梦一场'},
	{time:'02:57.10',lyric:'赎回你所有泪光'},
	{time:'03:00.45',lyric:'这一路有多远 这三世有多长'},
	{time:'03:04.10',lyric:'执手到地老天荒'},
	{time:'03:07.38',lyric:'风凄凄雾茫茫 雨滚滚雪漫漫'},
	{time:'03:11.20',lyric:'一步步都陪你同往'},
	{time:'03:14.60',lyric:'牵着手 别惊慌 管明天会怎样'},
	{time:'03:18.18',lyric:'哪怕注定流浪'},
	{time:'03:21.57',lyric:'手牢牢不放 爱念念不忘'},
	{time:'03:25.19',lyric:'人生何须多辉煌'},
	{time:'03:28.71',lyric:'浮华的终成空 执着的都随风'},
	{time:'03:32.54',lyric:'情路何须多跌宕'},
	{time:'03:35.16',lyric:'要遇多少风浪 心不再摇晃'},
	{time:'03:40.34',lyric:'一起细数这过往'},
	{time:'03:41.90',lyric:'陪你等 风停了 雾散了 雨住了 雪化了'},
	{time:'03:47.60',lyric:'再见绝美月光'},
	{time:'03:49.54',lyric:'还有我在你身旁'}
	
     ]},
     {id:"song4",name:"成都",src:"music/赵雷成都.mp3",icon:"img/4.jpg",bigimg:"img/big4.jpg",author:"赵雷",zhuanji:"我是歌手第三期",lyrics:[
    {time:'00:00.00',lyric:'成都'},
    {time:'00:04.43',lyric:'作词：赵雷'},
	{time:'00:12.50',lyric:'作曲：赵雷'},
	{time:'00:21.12',lyric:'编曲：赵雷,喜子'},
	{time:'00:23.71',lyric:'演唱：赵雷'},
	{time:'00:33.59',lyric:'让我掉下眼泪的'},
	{time:'00:37.21',lyric:'不止昨夜的酒'},
	{time:'00:41.09',lyric:'让我依依不舍的'},
	{time:'00:45.11',lyric:'不止你的温柔'},
	{time:'00:49.02',lyric:'余路还要走多久'},
	{time:'00:52.73',lyric:'你攥着我的手'},
	{time:'00:56.84',lyric:'让我感到为难的'},
	{time:'01:00.64',lyric:'是挣扎的自由'},
	{time:'01:06.58',lyric:'分别总是在九月'},
	{time:'01:10.54',lyric:'回忆是思念的愁'},
	{time:'01:14.41',lyric:'深秋嫩绿的垂柳'},
	{time:'01:17.97',lyric:'亲吻着我额头'},
	{time:'01:22.03',lyric:'在那座阴雨的小城里'},
	{time:'01:26.08',lyric:'我从未忘记你'},
	{time:'01:29.85',lyric:'成都 带不走的 只有你'},
	{time:'01:37.82',lyric:'和我在成都的街头走一走 喔…'},
	{time:'01:45.42',lyric:'直到所有的灯都熄灭了也不停留'},
	{time:'01:53.10',lyric:'你会挽着我的衣袖'},
	{time:'01:56.88',lyric:'我会把手揣进裤兜'},
	{time:'02:01.05',lyric:'走到玉林路的尽头'},
	{time:'02:12.05',lyric:'坐在小酒馆的门口'},
	{time:'02:44.15',lyric:'分别总是在九月'},
	{time:'02:47.95',lyric:'回忆是思念的愁'},
	{time:'02:51.66',lyric:'深秋嫩绿的垂柳'},
	{time:'02:55.40',lyric:'亲吻着我额头'},
	{time:'02:59.51',lyric:'在那座阴雨的小城里'},
	{time:'03:03.36',lyric:'我从未忘记你'},
	{time:'03:07.28',lyric:'成都 带不走的 只有你'},
	{time:'03:16.15',lyric:'和我在成都的街头走一走 喔…'},
	{time:'03:23.36',lyric:'直到所有的灯都熄灭了也不停留'},
	{time:'03:30.61',lyric:'你会挽着我的衣袖'},
	{time:'03:34.18',lyric:'我会把手揣进裤兜'},
	{time:'03:38.05',lyric:'走到玉林路的尽头'},
	{time:'03:42.14',lyric:'坐在小酒馆的门口'},
	{time:'03:50.45',lyric:'和我在成都的街头走一走 喔…'},
	{time:'03:57.78',lyric:'直到所有的灯都熄灭了也不停留'},
	{time:'04:05.58',lyric:'你会挽着我的衣袖'},
	{time:'04:25.33',lyric:'我会把手揣进裤兜'},
	{time:'04:29.53',lyric:'走到玉林路的尽头'},
	{time:'04:33.82',lyric:'走过小酒馆的门口'},
	{time:'04:48.29',lyric:'和我在成都的街头走一走 喔…'},
	{time:'04:54.99',lyric:'直到所有的灯都熄灭了也不停留'}
     
    ]}
     ]
	var list=$(".list>ul:nth-of-type(2)").get(0)
	$(database).each(function(index,val){
//		console.log(index,val)
        var li=$('<li>')
        li.attr('id',val.id)
        li.html(`<span></span><span>${$(val).get(0).author}</span>
		<span>${$(val).get(0).name}</span>
		<span>${$(val).get(0).zhuanji}</span>
		<span class=icon-shanchu></span>`).appendTo(list)
		if(index==0){
           li.addClass("active")//默认给第一个加选中的状态
       }
	})
	
//	播放
	var audio=$('audio').get(0)
	var current=0
	var play=$('.play>span')
	play.click(function(){
		if(audio.paused){
    		audio.play()
            play.removeClass("icon-bofang")
            play.addClass("icon-weibiaoti1")
            list.children[current].children[0].classList.add("icon-yinle")//给第二个ul
    	}else{
    		audio.pause()
            play.removeClass("icon-weibiaoti1")
            play.addClass("icon-bofang")
            list.children[current].children[0].classList.remove("icon-yinle")
    	}
	})
	
//	加载条
    audio.oncanplay=function(){
       $('.load').css('width','100%') 
    }
    //歌词
	let lyriclist=document.querySelector("#lyric");
	let lyricul=lyriclist.querySelector('ul');
	
	for(let i=0;i<database[0].lyrics.length;i++){
		database[0].lyrics[i].id=`gc${i}`;
		let lyli=document.createElement("li");
		lyli.innerHTML=database[0].lyrics[i].lyric;
		lyli.id=database[0].lyrics[i].id;
		lyricul.appendChild(lyli);
	}
	let lylis=lyricul.querySelectorAll("li");
	
	
	
//	改变时间和进度条
    var jindu=$('.progress>.jindu').get(0)
    audio.ontimeupdate=function(){
  	    var nowtime=getTime(audio.currentTime)
        var totalTime=getTime(audio.duration)
  	    var time=$(".time")
  	    time.children().eq(0).html(nowtime)
        time.children().eq(2).html(totalTime)
  	    $('.progress>.jindu>.circle').css('left',audio.currentTime/audio.duration*jindu.offsetWidth-8)
  	    $('.progress>.jindu>.played').css('width',audio.currentTime/audio.duration*jindu.offsetWidth)
  	    
  	    
	//歌词的改变
	
	database[current].lyrics.forEach((value,index)=>{
		if(value.time.slice(0,-3)==getTime(audio.currentTime)){
			
			let i=index;
			if(index<=4){
               index=0;
           }else{
               index=index-4;
               i=i-index;
           }
         //重绘
        lyricul.innerHTML='';
        for(let j=index;j<database[current].lyrics.length;j++){
			let lyli=document.createElement("li");
			lyli.innerHTML=database[current].lyrics[j].lyric;
			lyli.id=database[current].lyrics[j].id;
			lyricul.appendChild(lyli);
		}
			lyricul.children[i].classList.add('active');
		}
	})    
    
  	    
    }
	
	
	
	
	function  getTime(time){
   	    var  m=Math.trunc(time/60)>=10 ? Math.trunc(time/60):"0"+Math.trunc(time/60)
   	    var  n=Math.trunc(time)%60>=10 ? Math.trunc(time)%60:"0"+Math.trunc(time)%60
   	    return m+ ":" +n
    }
	//拖动进度条
	jindu.onclick=function(e){
	   	audio.currentTime=e.offsetX/jindu.offsetWidth*audio.duration
	}
	//是否静音
	var volume=$(".volume>span")
    var currentvolume=1
    volume.click(function(){
  		if(audio.volume){
  			audio.volume=0
  			volume.removeClass("icon-yinliang")
  			volume.addClass("icon-jingyin")
  		}else{
            audio.volume=currentvolume
            volume.removeClass("icon-jingyin")
  		    volume.addClass("icon-yinliang")
  		}  
    })
	
	//现在声音
	var jindu2=$('.tiao>.jindu').get(0)
	audio.onvolumechange=function(){
        var current=audio.volume
        $('.tiao>.jindu>.circle').css('left',current*jindu2.offsetWidth-8)
  	    $('.tiao>.jindu>.played').css('width',current*jindu2.offsetWidth)
    }
	//调声音
	jindu2.onclick=function(e){
	   audio.volume=e.offsetX/jindu2.offsetWidth
	}

	//点击播放
	list.ondblclick=function(e){
    	var obj=e.target
        var num
    	if(obj.nodeName=='SPAN'&&obj.className!='icon-shanchu'){
        //当点击的是span并且不是删除的span时，才进行状态的切换
    		var id=obj.parentNode.id
    	    num=database.findIndex((val)=>{
    			return val.id==obj.parentNode.id
    		})
        // console.log(num)返回满足条件（因为要切换，所以得获取4个li,与数据库中的进行对比）的下标
        //重绘
			lyricul.innerHTML='';
			for(let i=0;i<database[current].lyrics.length;i++){
				database[current].lyrics[i].id=`gc${i}`;
				let lyli=document.createElement("li");
				lyli.innerHTML=database[current].lyrics[i].lyric;
				lyli.id=database[current].lyrics[i].id;
				lyricul.appendChild(lyli);
			}
        
        
        
            current=num
    		document.body.style.backgroundImage=`url(${database[num].bigimg})`;
    		audio.src=`${database[num].src}`;
    		var icon=$(".icon").get(0);
    		icon.style.backgroundImage=`url(${database[num].icon})`;
    		$('.author>span').eq(0).html(`${database[num].name}`)
    		$('.author>span').eq(2).html(`${database[num].author}`)
            play.removeClass("icon-bofang")
            play.addClass("icon-weibiaoti1") 
            audio.play();
            // console.log([...obj.parentNode.parentNode.children])
            [...obj.parentNode.parentNode.children].forEach(function(value){
           //对所有span的父元素li进行操作，不能是obj.parentNode进行操作，因为是对所有的li进行
          //操作，而是对span的爷爷的儿子(即所有的li)进行操作
                value.children[0].classList.remove("icon-yinle")
                //将所有的li的第一个孩子移除播放状态,当选中的时候再加上
                value.classList.remove("active")
                //将所有的li移除选中状态,当选中的时候再加上
            })
            obj.parentNode.children[0].classList.add("icon-yinle")
            obj.parentNode.classList.add("active")
        
        }else if(obj.nodeName=="SPAN"&&obj.className=='icon-shanchu'){
            num=database.findIndex(function(value,index){
            return obj.parentNode.id==value.id;
            })//当选中li（要将li删除）时，找出数据库中与它拼配id的索引值，让索引值所在的对象删除
            if(num==current){
            return ;
        }
          //当要删除的li对应的num和正在播放的current相等时，不让它删除，return
          //即底下代码的都不执行
           list.removeChild(obj.parentNode);
           database.splice(num,1);
//        console.log(num)
//        console.log(current)//current指的是当前哪个处于播放状态
            if(num<current){
               current--;
            }
        }
    }
    //下一首
    $('.next>span').click(function(){
    	current++
        if(current>=database.length){
            current=0
        }
    	document.body.style.backgroundImage=`url(${database[current].bigimg})`;
		audio.src=`${database[current].src}`;
		var icon=$(".icon").get(0);
		icon.style.backgroundImage=`url(${database[current].icon})`;
		$('.author>span').eq(0).html(`${database[current].name}`)
		$('.author>span').eq(2).html(`${database[current].author}`)
        play.removeClass("icon-bofang")
        play.addClass("icon-weibiaoti1") 
        audio.play();
    	var li=$('li',list).get();
    	[...li].forEach(function(value,index){
                value.children[0].classList.remove("icon-yinle")
                value.classList.remove("active")
            })
        li[current].children[0].classList.add("icon-yinle")
        li[current].classList.add("active")
    })
	//上一首
	
	$('.previous>span').click(function(){
    	current--
	    if(current<0){
            current=database.length-1
        }
	    document.body.style.backgroundImage=`url(${database[current].bigimg})`;
		audio.src=`${database[current].src}`;
		var icon=$(".icon").get(0);
		icon.style.backgroundImage=`url(${database[current].icon})`;
		$('.author>span').eq(0).html(`${database[current].name}`)
		$('.author>span').eq(2).html(`${database[current].author}`)
        play.removeClass("icon-bofang")
        play.addClass("icon-weibiaoti1") 
        audio.play();
    	var li=$('li',list).get();
    	[...li].forEach(function(value,index){
                value.children[0].classList.remove("icon-yinle")
                value.classList.remove("active")
               
            })
        li[current].children[0].classList.add("icon-yinle")
        li[current].classList.add("active")
	})
	// 上一首播放完下一首自动播放
	audio.onended=function(){
        $('.next>span').click()
    }
	//mune的切换
	$('.menu>span').click(function(){
		$('.list').toggleClass('actives');
		$("#lyric").toggleClass('lyric');
	})
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	


})
