window.onload = function(){
	c = 0;
	s = document.getElementById('submit');
	p = 1;
	r = document.getElementsByTagName('input')[2];
	i = document.getElementsByTagName('input')[0];
	x = document.getElementById('status');
	
	document.getElementsByTagName('form')[0].action = "#";
	
	function n(value){ 
	  if((parseFloat(value) == parseInt(value)) && !isNaN(value))
		  return true;
	  else 
		  return false;
	}
	
	i.addEventListener('keydown', function (e) { if(e.keyCode==13) s.click(); });
	
	s.addEventListener('click', function() {
		g = i.value;    
				
		b = (t-g)/t;
		b = -b>0 ? -b :b;
		if(b>1) b = 1;
		if(b<0) b = 0;
		b = Math.round(b*255);
		
		w = (t-g)/t;
		w = -w>0 ? -w :w;
		w = 1-w;
		if(w<0) w = 0;
		if(w>1) w = 1;
		w = Math.round(w*255);
		
		x.style.backgroundColor="rgba("+w+",0,"+b+",0.8)";
		
		c = (t-g)/t;
		c = -c>0 ? -c : c;
		
		if(!n(g))
			x.innerHTML = '!Num';
		else{
			if(g == t)
				x.innerHTML = "Correct!";
			else{
				if(c < p)
					x.innerHTML = "Warmer";
				else
					x.innerHTML = "Colder";
			}
		}
				
		p = (t-g)/t;
		p = -p>0 ? -p : p;
	});
	
	r.addEventListener('click', function() {
		c = 0;
		p = 1;
		t=Math.floor((Math.random()*100)+1);
		x.innerHTML="...";
		x.style.backgroundColor="rgb(0,0,0)";
	});
	
	r.click();
}