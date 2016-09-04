
var xhr=new XMLHttpRequest();

xhr.onload=function(){
	if(xhr.status===200){
		var response=xhr.responseXML;
		var schedules=response.getElementsByTagName('schedule');
		for(var i=0; i<schedules.length;i++){
			
			var div,image,destination,city,newline1,newline2,newline3;
			div=document.createElement('div');
			div.className='destination';
			
			image=document.createElement('img');
			image.setAttribute('src',getNodeValue(schedules[i],'img'));
			image.setAttribute('alt',getNodeValue(schedules[i],'destination'));
			div.appendChild(image);
			
			destination=document.createElement('p');
			newline1=document.createElement('br');
			newline2=document.createElement('br');		
			newline3=document.createElement('br');
			
			destination.appendChild(document.createTextNode(getNodeValue(schedules[i],'destination')));
			destination.appendChild(newline1);	
			destination.appendChild(document.createTextNode(getNodeValue(schedules[i],'date')));
			destination.appendChild(newline2);
			destination.appendChild(document.createTextNode(getNodeValue(schedules[i],'price')));
			destination.appendChild(newline3);
			destination.appendChild(newline3);		
			div.appendChild(destination);
			
			document.getElementById('content').appendChild(div);
		}
	}

	function getNodeValue(obj,tag){
		return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
	}
};
xhr.open('GET','BusXmlData.xml',true);
xhr.send(null);

