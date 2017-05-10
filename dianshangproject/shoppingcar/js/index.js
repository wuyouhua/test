		//导航判断
//获取元素
"use strict"
var banner = $('.banner');
//console.log(banner);
var top1 = banner.offset().top;
//console.log(top1);
$(window).scroll(function(){
			var scrollTop = $('body').scrollTop();
			//console.log($('body').scrollLeft());
			//console.log(scrollTop);
			if(scrollTop>=top1){
				banner.addClass('banner-active');
			}else{
				banner.removeClass('banner-active');
			}
})
//放大镜  淡出淡入轮播
$(function(){
	var banner = {
			large: $('.large'),
			big :$('.big'),
			imgs : $('.large ul li img'),
			now : 0,
			next : 0,
			images:$('.bottom ol li img'),
			filter:$('.filter'),
			bigimg:$('.car .big img'),
			
			//初始化
			init :function(){
				
				this.clickImg();
				this.move();
			},
			//图片透明度变化
			imgSwitch : function(){
				var that = this;
				//console.log(that.next);
				this.imgs.eq(this.now).stop(true).animate({opacity: 0});
				this.imgs.eq(this.next).stop(true).animate({opacity: 1});
				this.now = this.next;
				this.imgs.eq(that.next).animate({opacity: 1}).siblings().animate({opacity: 0});
			},			
			//点哪张图片就切换哪张图片
			clickImg:function(){
				//console.log(this.images);
				var that = this;
				this.images.click(function(){
					that.next = that.images.index(this);
					that.imgSwitch();
					console.log(that.images);
				 var url = $(this).attr('data-url');
				 console.log(url);
					that.bigimg.attr({
						src:url
					})
				});
			},
			//滤镜划入显现画出隐藏加移动
			move : function(){
				//console.log(this.big);
				var that = this;
				this.large.on("mouseenter",function(){
					that.big.show(0);
					that.filter.show(0);
				})
				this.large.on("mouseleave",function(){
					that.big.hide(0);
					that.filter.hide(0);
				})
				this.large.on("mousemove",function(e){
					e = e || window.event;
					var l = e.clientX,
						t = e.clientY,
						l1 = that.large.offset().left,
						height = parseInt(document.body.scrollTop),
						t2 = that.large.offset().top - height,
						x = l - l1 - 120,
						y = t - t2 - 160;
						x = x < 0 ? 0 : (x>240? 240 : x);
						y = y < 0 ? 0 : (y>320? 320 : y);
						//console.log(document.body.scrollTop);
						that.filter.css({
							left:x,
							top:y
						});
						that.bigimg.css({
							left:-2*x,
							top:-2*y
						})
				})
			}
			
	};
	banner.init();	
	//banner.clickImg();
	
})
//倒计时
$(function(){
	function showTime(){
		var lis = $('.time ul li');
		var date = new Date();
		var futuredate = new Date('2017/3/23');
		var date1 = futuredate - date;
		var d = parseInt(date1/24/60/60/1000);
		var h = parseInt(date1/60/60/1000%24);
    	var m = parseInt(date1/60/1000%60);
    	var s = parseInt(date1/1000%60);
    	lis[0].innerHTML = d;
    	lis[2].innerHTML = h;
    	lis[4].innerHTML = m;
    	lis[6].innerHTML = s;
	}
	showTime();
	setInterval(showTime,1000);
})

//购物车
$(function(){
	var detail = {
		lis : $('.car .right .num li'),
		price: $('.car .right h3 span'),
		liol:$('.car .right ol li'),
		index:0,
		
		//初始化
		init:function(){
			this.initData();
		
		},
		//获取数据
		initData:function(){
			var that = this;
			$.ajax({
				url: 'http://192.168.55.44/PC-Project-Admin/goods.php',
				dataType: 'jsonp',
				success: function(data){
					that.selectType(data);
					that.increase(data);
					that.decrease(data);
					that.input(data);
					that.addcar(data);
					console.log(data);
				}
			});
		},
		//价格
		selectType:function(data){
			var that = this;
			this.lis.click(function(){
				that.index = $(this).index();
				that.price.html(data[that.index].goods_price);
			})
		},
		//数量增加
		increase:function(data){
			var that = this;
			this.liol.eq(2).click(function(){
				var stock = data[that.index].goods_stock;
				var amount = parseInt($(this).prev().find('input').val());
				if(amount >= stock){
					return;
				}
				amount++;
				//console.log(amount,stock,amount >= stock)
				$(this).prev().find('input').val(amount);
			})
		},
		//数量减少
		decrease:function(data){
			var that = this;
			this.liol.eq(0).click(function(){
			var stock = data[that.index].goods_stock;
				var amount = parseInt($(this).next().find('input').val());
				if(amount >= stock){
					return;
				}
				amount--;
				$(this).next().find('input').val(amount = amount <= 0 ? 1 : amount);
			})
		},
		//直接输入数量 
		input:function(data){
			var that = this;
			//实时监控 事件监听
			this.liol.eq(1).find('input').on('input',function(){
				var amount = $(this).val(),
				stock = data[that.index].goods_stock;
				amount = parseInt(amount) || 1;
				if(amount >= stock){
					amount = stock;
				}
				$(this).val(amount);
			})
		},
		//点击加入购物车
		addcar:function(data){
			var that = this;
			$('.right .add').click(function(){
				//获取id和商品数量
				var id = data[that.index].id,
					amount = that.liol.eq(1).find('input').val();
				$.ajax({
					url: 'http://192.168.55.44/PC-Project-Admin/addToCart.php',
					dataType: 'jsonp',
					data: {
							id: id,
							amount: amount
							},
					success: function(data){
						layer.alert(data.info);
					}
				});	
			})
		}
	}
	detail.init();
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
