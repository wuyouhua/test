//导航判断
//获取元素
"use strict"
var banner = $('.banner');
//console.log(banner);
var top1 = banner.offset().top;
//console.log(top1);
$(window).scroll(function(){
			var scrollTop = $('body').scrollTop();			
			if(scrollTop>=top1){
				banner.addClass('banner-active');
			}else{
				banner.removeClass('banner-active');
			}
})
//选项卡
$(function(){
	var lis = $('.nav2 ul li'),
		divs = $('.nav3 div');
	lis.eq(0).addClass('active1');
	lis.click(function(){
		$(this).addClass('active1').siblings().removeClass('active1');
		var q = $(this).index();
		//console.log(q);
		divs.eq(q).css({
			display:'block'
		}).siblings().css({display:'none'})
	})
});

$(function(){
		var cart = {
			init: function(){
				this.initList();
				
				this.increase();
				this.decrease();
				this.input();
				
				this.deleteClick();
				this.deleteSelect();
				
				this.select();
				this.selectAll();
			},
			initList: function(){
				//通过ajax获取
				$.ajax({
					url: 'http://192.168.55.44/PC-Project-Admin/cartList.php',
					dataType: 'jsonp',
					success: function(result){
						//console.log(result.data[0]);
						var html = template('cart-list',result);
						$('.list-wrap').html(html);
					}
				});
			},
			increase: function(){
				var _this = this;
				$('.list-wrap').on('click','.option-increase',function(){
					//获取id、stock、amount
					var 
						id = $(this).parents('tr').data('id'),
						stock = $(this).prev().data('stock'),
						amount = $(this).prev().val();
					
					if(amount >= stock){
						return;
					}
					
					amount++;
					
					_this.update(id,amount);
				});
			},
			decrease: function(){
				var _this = this;
				$('.list-wrap').on('click','.option-decrease',function(){
					//获取id、stock、amount
					var 
						id = $(this).parents('tr').data('id'),
						amount = $(this).next().val();
					
					if(amount <= 1){
						return;
					}
					
					amount--;
					
					_this.update(id,amount);
				});
			},
			input: function(){
				var _this = this;
				$('.list-wrap').on('input','.option-input',function(){
					var 
						id = $(this).parents('tr').data('id'),
						stock = $(this).data('stock'),
						amount = $(this).val();
					
					if(amount >= stock){
						return;
					}
					
					_this.update(id,amount);
				});
			},
			deleteClick: function(){
				//保留对象
				var _this = this;
				$('.list-wrap').on('click','.delete',function(){
					//保留元素
					var self = this;
					var cfm = layer.confirm('确定删除宝贝吗？',['确定','取消'],function(){
						layer.close(cfm);
						var id = $(self).parents('tr').data('id');
						_this.delete(id);
					});
				});
			},
			deleteSelect: function(){
				var _this = this;
				$('.delete-select').click(function(){
					var select = $('input.select:checked');
					if(!select.length){
						layer.alert('请选择需要删除的记录！');
						return;
					}
					if(!confirm('确定删除选中的记录吗？')){
						return ;
					}
					var ids = [];
					select.each(function(){
						var id = $(this).parents('tr').data('id');
						ids.push(id);
					});
					_this.delete(ids);
				});
			},
			//单选
			select: function(){
				$('.list-wrap').on('change','input.select',function(){
					var 
						allTr = $('.list-wrap tr'),
						count = 0,
						totalMoney = 0;
					allTr.each(function(){
						var status = $(this).find('input').prop('checked');
						//当前行被选中了
						if(status){
							count++;
							var t = $(this).find('.goods-total').html();
							totalMoney += parseFloat(t);
						}
					});
					
					//更改选中商品的条数和总价
					$('.total-select').html(count);
					$('.total-money').html(totalMoney.toFixed(2));
					
					//处理选中状态
					var selectTotal = $('input.select:checked').length;
					var inputTotal = $('input.select').length;
					
					if(selectTotal != inputTotal){
						$('input.select-all').prop('checked',false);
					}else{
						$('input.select-all').prop('checked',true);
					}
				});
			},
			//全选
			selectAll: function(){
				$('input.select-all').click(function(){
					var status = $(this).prop('checked');
					$('input.select-all').prop('checked',status);
					$('input.select').prop('checked',status);
					
					//触发点击事件
					$('input.select').change();
				});
			},
			//删除  接口
			delete: function(id){
				var _this = this;
				$.ajax({
					url: 'http://192.168.55.44/PC-Project-Admin/cartDelete.php',
					data: {
						id: id
					},
					dataType: 'jsonp',
					success: function(){
						//数据同步
						_this.initList();
						//初始化总价和选中的总个数
						$('.total-select').html(0);
						$('.total-money').html('0.00');
					}
				});
			},
			update: function(id,amount){
				var _this = this;
				var ld = layer.load(2);
				$.ajax({
					url: 'http://192.168.55.44/PC-Project-Admin/cartUpdate.php',
					data: {
						id: id,
						amount: amount
					},
					dataType: 'jsonp',
					success: function(data){
						//layer.alert(data.info);
						layer.close(ld);
						//数据同步
						_this.initList();
					}
				});
			}
		};
		cart.init();
	});
