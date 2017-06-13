var box = document.getElementById('box');
			var bli = box.getElementsByTagName('li');
			var bsp = box.getElementsByTagName('span');
			var f = document.getElementById('f');
			var f1 = 0;
//			var ting = null;
			function dong(){
				var start = Math.floor(Math.random()*bli.length);
				console.log(start);
				for (var i=0;i<bsp.length;i++) {
					bsp[i].style.display = 'none';
				}
				bsp[start].innerHTML = "<img src='img/images/dishu.gif'/>";
				bsp[start].style.pointerEvents = 'all';
				
				bsp[start].style.display = 'block';
				bsp[start].onclick = function(){
					
					bsp[start].innerHTML = "<img src='img/images/shang.gif'/>";
					f1 += 10;
//					console.log(f1);
//					clearInterval(ting);
//						dong();
					bsp[start].style.pointerEvents = 'none';
				}
				
				f.innerHTML = "积分:"+f1;
			}
				
			
			ting = window.setInterval(function(){
				dong();
			},1000);