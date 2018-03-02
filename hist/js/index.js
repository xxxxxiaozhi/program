window.onload=function() {
    	var oCar=document.getElementById('carol');
        var oUl=oCar.getElementsByTagName('ul')[0];
        var aLiUl=oUl.getElementsByTagName('li');
        var aPic=oCar.getElementsByTagName('img');
        for(var i=0;aLiUl.length;i++){
            aLiUl[i].index=i;
            aLiUl[i].onmouseover=function () {
              for (var i=0;i<aLiUl.length;i++){
                  aLiUl[i].className='';  
                  aPic[i].style.display='none';
              }
                this.className='active'; 
                aPic[this.index].style.display='block';
            };
        }
};
	function displaySubMenu(li) {
		    var subMenu = li.getElementsByTagName("ul")[0];
		 
		    subMenu.style.display = "block";
		 
		}
		 
		function hideSubMenu(li) {
		 
		    var subMenu = li.getElementsByTagName("ul")[0];
		 
		    subMenu.style.display = "none";
		 
		}
