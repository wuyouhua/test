//导航判断
//获取元素

var banner = $('.banner');
var top1 = banner.offset().top;
var scrollTop = $('body').scrollTop();
console.log(scrollTop);//获取的只是打开页面时的浏览器高度  要获取动态的要给Window添加滚动条事件
$(window).scroll(function() {
		var scrollTop = $('body').scrollTop();
		//console.log($('body').scrollLeft());
		//console.log(scrollTop);
		if(scrollTop >= top1) {
			banner.addClass('banner-active');
		} else {
			banner.removeClass('banner-active');
		}
	})
	//无缝滑动轮播
$(function() {
		var banner = {
			large: $('.banner2-large'),
			imgs: $('.banner2-large ol li'),
			big: $('.big'),
			ul: $('.big .ul'),
			lis: $('.big ul li'),
			index: 0,
			timer: null,
			but1: $('.but1'),
			but2: $('.but2'),
			small: $('.small'),
			//初始化
			init: function() {
				this.click();
				this.autoPlay();
				this.mouse();
				this.clickCircle();
			},
			//图片移动
			imgSwitch: function() {
				if(this.index >= 5) {
					this.small.css({
						left: 0
					})
					this.index = 1;
				};
				if(this.index < 0) {
					this.small.css({
						left: -this.large.width() * 4
					})
					this.index = 3;
				};
				this.small.stop(true).animate({
					left: -this.index * this.large.width()
				});
				this.lis.eq(this.index >= 4 ? 0 : this.index).addClass('active').siblings()
					.removeClass('active');
			},
			//点击事件
			click: function() {
				//console.log(this.imgSwitch);
				var that = this;
				this.but2.click(function() {
					//console.log(1);
					that.index++;

					that.imgSwitch();
				});
				this.but1.click(function() {
					that.index--;
					that.imgSwitch();
				})
			},
			//自动轮播
			autoPlay: function() {
				var that = this;
				this.timer = setInterval(function() {
					that.index++;
					that.imgSwitch();
				}, 5000);
			},
			//鼠标划上划出
			mouse: function() {
				var that = this;
				this.large.mouseenter(function() {
					clearInterval(that.timer);
					//console.log(1);
				})
				this.large.mouseleave(function() {
					that.autoPlay();
				})
			},
			//点击小圈圈 
			clickCircle: function() {
				var that = this;
				this.lis.click(function() {
					console.log(this);
					that.index = $(this).index();
					//console.log(that.next);
					that.imgSwitch();
				})
			}
		}
		banner.init();
	})
	//判断bg的margin-top
$(function() {
	"use strict"
	var bg = $('.bg');
	//console.log(bg);
	//console.log(scrollTop);
	$(window).scroll(function() {
		var scrollTop = $('body').scrollTop();
		scrollTop = scrollTop > 446 ? 0 : scrollTop;
		//console.log(-78 - scrollTop);
		bg.css({
			top: -78 - scrollTop
		})
	})
});
//选项卡
$(function() {
	"use strict"
	var lis = $('.bottom ul li'),
		imgs = $('.bottom img');

	//console.log(imgs);
	$(lis).click(function() {
		var self = $(this);
		//console.log(self);
		self.addClass('active1').siblings().removeClass('active1');
		var url = self.attr('data-url');
		//console.log(url);
		imgs.attr({
			src: url
		})
	})
});

//京东楼层
$(function() {
	var loucheng = $('.loucheng');
	var lis = $('.loucheng ul li');
	var Top1 = $(".news1").offset().top,
		Top2 = $(".news2").offset().top,
		Top3 = $(".news3").offset().top,
		Top4 = $(".news4").offset().top,
		Top5 = $(".news5").offset().top,
		Top6 = $(".news6").offset().top,
		Top7 = $(".news7").offset().top,
		Top8 = 0;
	var top = [Top1, Top2, Top3, Top4, Top5, Top6, Top7, Top8];
	lis.click(function() {
		var index = $(this).index();
		//注意权重
		$(this).addClass('active2').siblings().removeClass('active2');
		$("html,body").animate({
			scrollTop: top[index] - 100
		});
	});
	$(window).scroll(function() {
		var news1 = $(".news1"),
			news2 = $(".news2"),
			news3 = $(".news3"),
			news4 = $(".news4"),
			news5 = $(".news5"),
			news6 = $(".news6"),
			news7 = $(".news7");
		var news = [news1, news2, news3, news4, news5, news6, news7];
		var top = $(this).scrollTop();
		if(top > 484) {
			loucheng.css({
				display: 'block'
			})
		} else {
			loucheng.css({
				display: 'none'
			})
		};
		$.each(news, function(index) {
			var x = $(this).prev().height();
			x = x > 0 ? x : $(this).height();
			var scrollTop = $(this).position().top + x / 2;
			if(scrollTop > top) { //找到满足的提交 立刻终止
				lis.eq(index).addClass("active2").siblings().removeClass("active2");
				return false;
			}
		})
	})
})

//首页购物车
$(function() {
	var lis = $('.shoppingcar .mycar ul li'),
		p = $('.shoppingcar .mycar ul li p'),
		ewm = $('.ewm'),
		gwc = $('.shoppingcar .mycar ul .gwc');
	lis.mouseenter(function() {
		//console.log($(this).find(p));
		$(this).find(ewm).stop(true).show();
		$(this).find(ewm).stop(true).animate({
			right: '40px'
		});
		$(this).find(p).show();
		$(this).find(p).animate({
			left: '-80px'
		});
	})
	lis.mouseleave(function() {
		//$(this).find(p).hide();
		$(this).find(p).stop(true).animate({
			left: '0px'
		});
		$(this).find(ewm).stop(true).animate({
			right: '-136px'
		});
	})
	gwc.click(function() {
		var x = $('.shoppingcar').position().left;
		if(x > 1123) {
			console.log(1);
			$('.shoppingcar').stop(true).animate({
				right: "0px"
			})
		} else {
			$('.shoppingcar').stop(true).animate({
				right: "-224px"
			})
		}

	})

})