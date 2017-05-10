//angular
var app = angular.module("myApp", ["ui.router"]);
/*
 * 路由配置
 */
app.config(["$stateProvider" , "$urlRouterProvider" , function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state("main" , {
			url:"",
			templateUrl:"./main.html",
		})
		.state("main.qiujie" , {
			url:"/qiujie",
			templateUrl:"./qiujie.html",
			//controller: "home"
		})
		.state("main.fujin" , {
			url:"/fujin",
			templateUrl:"./fujin.html",
			//controller:"fujin"
		})
		.state("main.feilei" , {
			url:"/feilei",
			templateUrl:"./feilei.html",
			//controller:"feilei"
		})
		.state("main.home" , {
			url:"/home",
			templateUrl:"./home.html",
			//controller:"feilei"
		})
		.state("main.news" , {
			url:"/news",
			templateUrl:"./news.html",
			//controller:"news"
		})
		.state("main.myself" , {
			url:"/my",
			templateUrl:"./my.html",
			//controller:"my"
		})
}]);
app.controller("feilei" , ["$scope" , "$rootScope" , "$location" , function($scope , $rootScope , $location){
	var data = null;
	
}])

 app.controller("main" ,  ["$scope" , "$rootScope" ,"$location" , function($scope , $rootScope , $location){
   	var data = null;
   	//获取数据首页
   	$.getJSON("../json/xiangqing.json" , function(data){
   		//var data = data1;
   		//console.log(data.data.content);
   		$scope.goodlist = data.data.content;
   		for(var i in data.data.content){
   			//console.log(data.data.content[i].images[0].origin );
   			data.data.content[i].images[0].origin = 'http://www.mojoy.cc' + data.data.content[i].images[0].origin;
   			//console.log(data.data.content[i].images[0].origin);
   		}
   		//把数据渲染到页面上
   		$scope.$apply();
   	});
   	//获得数据分类左
	$.getJSON("../json/feilei1.json" , function(data1){
		console.log(data1.data);
		//console.log(data1);
		$scope.liList = data1.data;
		for(var i in data1.data){
			for(var j in data1.data[i].classification1){
				//console.log(data1.data[i].classification1[j]);
				//console.log(data1.data[i].classification1[j]);
				data1.data[i].classification1[j].icon = 'http://www.mojoy.cc' + data1.data[i].classification1[j].icon;
				//console.log(data1.data[i].classification1[j].icon);
			}
   			//console.log(data1.data[i].classification1[i].icon);
   		}
		$scope.liListq = data1.data[0].classification1;
		$scope.liListw = data1.data[1].classification1;
		$scope.liListe = data1.data[2].classification1;
		$scope.liListr = data1.data[3].classification1;
		$scope.liListt = data1.data[4].classification1;
		$scope.liListy = data1.data[5].classification1;
		$scope.liListu = data1.data[6].classification1;
		//console.log(data1.data[0].classification1[0].icon);
	})
	
   	//获得数据
	$.getJSON("../json/feilei2.json" , function(data2){
		//console.log(data2.data);
		console.log(data2);
		$scope.liList2 = data2.data.content;
		for(var i in data2.data.content){
   			//console.log(data.data.content[i].images[0].origin );
   			data2.data.content[i].images[0].origin = 'http://www.mojoy.cc' + data2.data.content[i].images[0].origin;
   			//console.log(data2.data.content[i].images[0].origin);
   		}
	})
	
	$.getJSON("../json/feilei3.json" , function(data3){
		//console.log(data2.data);
		console.log(data3);
		$scope.liList3 = data3.data.content;
		for(var i in data3.data.content){
   			//console.log(data.data.content[i].images[0].origin );
   			data3.data.content[i].images[0].origin = 'http://www.mojoy.cc' + data3.data.content[i].images[0].origin;
   			//console.log(data3.data.content[i].images[0].origin);
   		}
	})
	
	$.getJSON("../json/feilei4.json" , function(data4){
		//console.log(data2.data);
		console.log(data4);
		$scope.liList4 = data4.data.content;
		for(var i in data4.data.content){
   			//console.log(data.data.content[i].images[0].origin );
   			data4.data.content[i].images[0].origin = 'http://www.mojoy.cc' + data4.data.content[i].images[0].origin;
   			//console.log(data3.data.content[i].images[0].origin);
   		}
	})
	
	$.getJSON("../json/feilei5.json" , function(data5){
		//console.log(data2.data);
		console.log(data5);
		$scope.liList5 = data5.data.content;
		for(var i in data5.data.content){
   			//console.log(data.data.content[i].images[0].origin );
   			data5.data.content[i].images[0].origin = 'http://www.mojoy.cc' + data5.data.content[i].images[0].origin;
   			//console.log(data3.data.content[i].images[0].origin);
   		}
	})
	
	$.getJSON("../json/feilei6.json" , function(data6){
		//console.log(data2.data);
		console.log(data6);
		$scope.liList6 = data6.data.content;
		for(var i in data6.data.content){
   			//console.log(data.data.content[i].images[0].origin );
   			data6.data.content[i].images[0].origin = 'http://www.mojoy.cc' + data6.data.content[i].images[0].origin;
   			//console.log(data3.data.content[i].images[0].origin);
   		}
	})
	
	$.getJSON("../json/feilei7.json" , function(data7){
		//console.log(data2.data);
		console.log(data7);
		$scope.liList7 = data7.data.content;
		for(var i in data7.data.content){
   			//console.log(data.data.content[i].images[0].origin );
   			data7.data.content[i].images[0].origin = 'http://www.mojoy.cc' + data7.data.content[i].images[0].origin;
   			//console.log(data3.data.content[i].images[0].origin);
   		}
	})
	
	$.getJSON("../json/feilei8.json" , function(data8){
		//console.log(data2.data);
		console.log(data8);
		$scope.liList8 = data8.data.content;
		for(var i in data8.data.content){
   			//console.log(data.data.content[i].images[0].origin );
   			data8.data.content[i].images[0].origin = 'http://www.mojoy.cc' + data8.data.content[i].images[0].origin;
   			//console.log(data3.data.content[i].images[0].origin);
   		}
	})
	
	$.getJSON("../json/fujin.json" , function(data9){
		//console.log(data2.data);
		console.log(data9);
		$scope.liList9 = data9.data.content;
		for(var i in data9.data.content){
   			//console.log(data.data.content[i].images[0].origin );
   			data9.data.content[i].images[0].origin = 'http://www.mojoy.cc' + data9.data.content[i].images[0].origin;
   			//console.log(data3.data.content[i].images[0].origin);
   		}
	})
	
	$.getJSON("../json/qiujie.json" , function(data10){
		//console.log(data2.data);
		console.log(data10);
		$scope.liList10 = data10.data.content;
//		for(var i in data10.data.content){
// 			//console.log(data.data.content[i].images[0].origin );
// 			data9.data.content[i].images[0].origin = 'http://www.mojoy.cc' + data9.data.content[i].images[0].origin;
// 			//console.log(data3.data.content[i].images[0].origin);
// 		}
	})
	
 	//页面跳转
	$rootScope.page = {};
	//var active=$location.url();
	$scope.goPage = function(url){
		$location.path(url);
	}
	
}])
 
//首页中的mui选项卡js
app.controller("home", ["$scope", "$rootScope" , "$location" , function($scope , $rootScope , $location) {

	//swiper轮播
//	setTimeout(function() {
//		var swiper = new Swiper(".swiper-container", {
//			autoplay: 3000,
//			loop: true,
//			pagination: ".swiper-pagination",
//				observer: true
//			});
//	}, 500)

	
}])
/*
 	幻灯片模块控制器
 * */
app.directive("swiperBox", function() {
	return {
		templateUrl: "./swiperModule.html",
		controller: "swiperBox",
		replace: true
	}
});
app.controller("swiperBox" , ["$scope" , function($scope){
	//swiper轮播
	setTimeout(function(){
		var swiper = new Swiper(".swiper-container", {
			autoplay: 3000,
			loop: true,
			pagination: ".swiper-pagination",
			observer: true
		});
		
	},300)
	
} ])