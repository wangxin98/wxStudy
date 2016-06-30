onload=function(){

	/*案例*/
	var allAnli = anli_bottom_top.getElementsByTagName('li');
	var allDiv  = anli_bottom_bottom.getElementsByTagName('p');
	var allIndex = 0;
	var timer = null;
	time();
	anli_bottom.onmouseover = function(){
		clearInterval(timer);
	};
	anli_bottom.onmouseout = function(){
		time();
	}
	for(var i = 0;i < allAnli.length;i++){
		allAnli[i].index = i;
		allAnli[i].onmouseover = function(){
			for(var i = 0; i < allAnli.length;i++){
				allAnli[i].className = '';
				allDiv[i].style.display = 'none';
			}
			allDiv[this.index].style.display = 'block';
			this.className = 'active';
			allIndex = this.index;
		}
	};
	function startMove(){
		for(var i = 0; i < allAnli.length;i++){
				allAnli[i].className = '';
				allDiv[i].style.display = 'none';
			}

		allDiv[allIndex].style.display = 'block';
		allAnli[allIndex].className = 'active';
	}
	function time(){
		timer = setInterval(function(){
			allIndex++;
			if(allIndex == allAnli.length)allIndex=0;
			startMove();
		},1000);
	}
    /*案例结束*/

	/*专业技能*/
    var allJineng=jineng_bottom.getElementsByTagName('li');
    for (var i=0;i<allJineng.length;i++){
		allJineng[i].index = i;
		allJineng[i].onmouseover = function(){
			for(var i = 0; i < allJineng.length;i++){
				allJineng[i].getElementsByTagName('p')[1].className = '';
				allJineng[i].getElementsByTagName('p')[2].className = '';
				allJineng[i].getElementsByTagName('p')[0].children[0].className=' ';
				allJineng[i].getElementsByTagName('p')[0].children[0].src='images/imgs'+i+'.jpg';	
			}
			allJineng[this.index].getElementsByTagName('p')[1].className = 'blue_color';
			allJineng[this.index].getElementsByTagName('p')[2].className = 'blue_color';
			allJineng[this.index].getElementsByTagName('p')[0].children[0].src='images/imgs4'+this.index+'.png';
			allJineng[this.index].getElementsByTagName('p')[0].children[0].className='move';

		}
    }
    //function yunduo(){
	//    setTimeout(function(){
	//	  tu_er.className='move_two';
	//      yunduo()
	//    },10)
	//}
	//yunduo()

}
 