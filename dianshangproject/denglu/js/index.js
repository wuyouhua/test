$(function(){
	var test = [];
	var p1 = $('.main-container .main-container1 p'),
		p2 = $('.main-container .main-container2 p'),
		v1 = $('.main-container .main-container1 input'),
		v2 = $('.main-container .main-container2 input'),
		denlu = $('.main .main1 .main3 p');
	var reg1 = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/,
		reg2 = /^(13|15|17|18)\d{9}$/,
		reg3 = /^\w{6,20}$/
	
		v2.blur(function(){
			if(reg3.test(v2.val())){
				test[1]=true;
				p2.css({
					display:'none'
				})
			}else{
				test[1]=false;
				p2.css(
					{display:'block'}
				)
			};
		})
		v1.blur(function(){
			test[2]=true;
			if(reg1.test(v1.val()) || reg2.test(v1.val()) ){
				p1.css({
					display:'none'
				})
			}else{
				test[2]=false;
				p1.css(
					{display:'block'}
				)
			};
		});
		function testall(){
			if(!test.length==2) return false;
			for(var i=1;i < 3;i++){
				if(!test[i]){
					return false;
				}
			};
			return true;
		};
		denlu.click(function(){
			var uname = v1.val(),
				psw = v2.val();
				
				console.log(uname);
				console.log(psw);
			if(testall()==true){
//				$.ajax({
//					type:'post',
//					url:"http://192.168.55.25/dianshangproject/php/login.php",
//					data:{
//						account:uname,
//						password:psw
//					},
//					dataType:'json',
//					success: function(data){
//						if(data.status){
//							location = "http://192.168.55.25/dianshangproject/homepage/shouye.html"
//						}else{
//							alert(data.info);
//						}
//					},
//				});
//			}else{
//				alert('登录失败！')
//			}
                $.ajax({
					url: 'http://192.168.55.44/PC-Project-Admin/login.php',
					data: {
						account: uname,
						password: psw
					},
					dataType: 'jsonp',
					success: function(data){
					    alert(data.info);
					}
				});
			}
		})
})


