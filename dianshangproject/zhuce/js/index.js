$(function(){
	var test = {
		Test :[ ],
		username : $('#username'),
		password : $('#password'),
		password2: $('#password2'),
		code     : $('#code'),
		phonecode: $('#phonecode'),
		reg1 : /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/,
		reg2 : /^(13|15|17|18)\d{9}$/,
		reg3 : /^\w{6,20}$/,
		input1:$('.main1 .main2 .main21 input'),
		input2:$('.main1 .main2 .main22 input'),
		zhuce1:$('.main1 .main3 input'),
		//初始化
		init:function(){
			this.testusername(),
			this.testpassword(),
			this.testpassword2(),
			this.fuzhi(),
			this.testcode(),
			this.testphonecode(),
			this.zhuce()
		},
		//验证账号
		testusername:function(){
			var that = this;
			//console.log(this.username);
			this.username.blur(function(){
				//console.log(1);
				if(that.reg1.test(that.username.val()) || that.reg2.test(that.username.val()) ){
					that.Test[1]=true;
				}else{
					that.username.parent().append("<b style='color:red;font-size:12px;font-weight:400;display:block;padding-left:84px;'>请输入正确的账号</b>");
					//console.log(that.username.closest(".input"));
					that.Test[1]=false;
				}
			});
			this.username.focus(function(){
				that.username.parent().find('b').remove();
			})
		},
		//验证密码
		testpassword:function(){
			var that = this;
			this.password.blur(function(){
				if(!that.reg3.test(that.password.val())){
					that.Test[2]=false;
					that.password.parent().append("<b style='color:red; font-size:12px;font-weight:400;display:block;padding-left:84px;'>请输入正确的密码</b>");
				}else{
					that.Test[2]=true;
				}	
			});
			this.password.focus(function(){
				that.password.parent().find('b').remove();
			})
		},
		//确认密码
		testpassword2:function(){
			var that = this;
			this.password2.blur(function(){
				if(that.password.val()!=that.password2.val()){
					that.Test[3]=false;
					that.password2.parent().append("<b style='color:red; font-size:12px;font-weight:400;display:block;padding-left:84px;'>两次密码输入不一致</b>");
				}else{
					that.Test[3]=true;
				}
			});
			this.password2.focus(function(){
				that.password2.parent().find('b').remove();
			})
		},
		//生成随机验证码
		getstr:function(len){
			var str="";
			for(;str.length<len;str+=Math.random().toString(36).substr(2));
			str = str.substr(0,len);
			var newStr="";
			for(var i=0;i<str.length;i++){
				newStr += str[i];
			}
			return newStr;
		},
		fuzhi:function(){
			//获得验证码的值
			this.input1.eq(1).val(this.getstr(4));
			this.input2.eq(1).val(this.getstr(4));
		},
		testcode:function(){
			var that = this;
			this.input1.eq(0).blur(function(){
				if(that.input1.eq(0).val()!=that.input1.eq(1).val()){
					that.Test[4]=false;
					that.input1.eq(0).parent().append("<b style='color:red; font-size:12px;font-weight:400;display:block;padding-left:84px;'>请输入正确的验证码</b>");
				}else{
					that.Test[4]=true;
				}
			});
			this.input1.eq(0).focus(function(){
				that.input1.eq(0).parent().find('b').remove();
			})
		},
		testphonecode:function(){
			var that = this;
			this.input2.eq(0).blur(function(){
				if(that.input2.eq(0).val()!=that.input2.eq(1).val()){
					that.Test[5]=false;
					that.input2.eq(0).parent().append("<b style='color:red; font-size:12px;font-weight:400;display:block;padding-left:84px;'>请输入正确的手机验证码</b>");
				}else{
					that.Test[5]=true;
				}
			});
			this.input2.eq(0).focus(function(){
				that.input2.eq(0).parent().find('b').remove();
			})
		},
		testall:function(){
			if(!this.Test.length==5) return false;
			for(var i=1;i < 6;i++){
				if(!this.Test[i]){
					return false;
				}
			};
			return true;
		},
		zhuce:function(){
			//console.log(this.zhuce1);
			var that = this;
			this.zhuce1.click(function(){
				var account = that.username.val(),
					password = that.password.val();
				if(that.testall()==true){
					//alert('注册成功！');
					/*$.ajax({
						type:'post',
						url: 'http://192.168.55.25/dianshangproject/php/register.php',
						data: {
							account :account ,
							password:password
						},
						dataType: 'json'
						
					})*/
					console.log(account);
					$.ajax({
						
						url: 'http://192.168.55.44/PC-Project-Admin/checkAccount.php',
						data: {
							account: account
						},
						dataType: 'jsonp',
						success: function(data){
							console.log(data);
							if(data.status){
							
							}else{
								
							}
						}
					});
					}else{
						alert('注册失败！');
					}
				})
	        }
	}
	test.init();
})	
