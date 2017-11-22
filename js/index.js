$.ajax({
	url:"data.json",
	type:"get",
	success:function(e){
		var str=""
		for(var i in e){
			if(e[i].uid==1){
				str+="<figure><img src='images/"+e[i].img+"'><figcaption><h1><span>"+e[i].name+"</span>"+e[i].p1+"</h1><p>"+e[i].time+"</p></figcaption><img src='images/"+e[i].img2+"'></figure>"
			}
		}
		$(".box").html(str)
	}
})
$(".btn").click(function(){
	var id=$(this).attr('data-id');
	$(this).addClass("btnb").siblings('li').removeClass('btnb')
	$.ajax({
		url:"data.json",
		type:"get",
		success:function(e){
			var str=""
			for(var i in e){
				if(e[i].uid==id){
					str+="<figure><img src='images/"+e[i].img+"'><figcaption><h1><span>"+e[i].name+"</span>"+e[i].p1+"</h1><p>"+e[i].time+"</p></figcaption><img src='images/"+e[i].img2+"'></figure>"
				}
			}
			$(".box").html(str)
		}
	})
})