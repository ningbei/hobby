$(function() {
	let huasearr = ["c", "d", "h", "s"];
	let arr = [];
	let sign = {};
//sign作为标记，如果里面有以前随机产生的牌，就不要放到arr里面
//	随机产生扑克的花色和数字
	while(arr.length < 52) {
		let shuzi = Math.ceil(Math.random() * 13);
		let huase = huasearr[Math.floor(Math.random() * huasearr.length)];
		if(!sign[shuzi + '_' + huase]) {
			sign[shuzi + '_' + huase] = true
			arr.push({ shuzi, huase });
		}
	}
	//	console.log(arr)
//随机发（画）上面的牌(思想：将每张牌放到li里面，每个加上唯一的id，目的是点击事件的时候被压住的牌不要让它点到和值value，目的是和为13的时候消牌)
	let n = 0;
	for(let i = 0; i < 7; i++) {
		for(let j = 0; j < i + 1; j++) {
			$('<li class="pai">').attr('id', i + "_" + j).attr('value', arr[n].shuzi).css("background-image", `url(img/${arr[n].shuzi}${arr[n].huase}.png)`).appendTo("ul").delay(n * 50).animate({
				left: 300 - 50 * i + 100 * j,
				top: 50 * i,
				opacity: 1,
			}, 400)
			n++;
		}
	}
//随机画下面的牌
	for(; n < 52; n++) {
		$('<li class="pai zuo">').attr('id', "7_" + n).attr('value', arr[n].shuzi).css("background-image", `url(img/${arr[n].shuzi}${arr[n].huase}.png)`).appendTo("ul").delay(n * 50).animate({

			left: 100,
			top: 470,
			opacity: 1,
		}, 400)

	}
	
	
	
	//点击消牌事件
	let currentobj = null;
	//消牌的时候，保存前一次的值
	$(".pai").click(function() {
		let x = $(this).attr('id').split('_')[0];
		let y = $(this).attr('id').split('_')[1];
		if($(`#${parseInt(x)+1}_${y}`).length == 1 || $(`#${parseInt(x)+1}_${parseInt(y)+1}`).length == 1) {
			return //如果点击的牌被压住不让它触发点击事件
		}else{
			$(this).toggleClass('active')
		}
		if(!currentobj) {//点击一次
			if($(this).attr('value') == 13) {
				$(this).animate({
					left: 600,
					top: 0
				}, 200).queue(function() {
					$(this).remove()
					currentobj = null
				})
			} else {
				currentobj = $(this);
			}
		} else {//点击多次

			if(parseInt(currentobj.attr('value')) + parseInt($(this).attr('value')) === 13) {
				$('.active').animate({
					left: 600,
					top: 0
				}, 200).queue(function() {
					$('.active').remove()
					currentobj = null
				})
			} else {
				setTimeout(function() {
					$('.active').removeClass('active')
				}, 600)
				currentobj = null
			}

		}

	})
	let index = 1;
	$('.right').click(function() {
		$('.zuo').last().addClass('you').removeClass('zuo').css('z-index', ++index).animate({
			left: 500,
		}, 400)
	})

	$('.left').click(function() {
		$('.you').addClass('zuo').removeClass('you').css('z-index', ++index).each(function(index) {
			$(this).delay(index * 50)
		}).animate({
			left: 100,
		}, 400)
	})

})