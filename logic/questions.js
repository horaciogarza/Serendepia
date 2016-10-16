

var id = []

for (var i = 1; i <= 40; i++) {
	id.push("#" + String(i))
}

var answers = [[]]

answers.push(['B', 'A', 'C'])
answers.push(['A', 'C', 'B'])
answers.push(['B', 'A', 'C'])
answers.push(['C', 'B', 'A'])
answers.push(['C', 'B', 'A'])
answers.push(['B', 'A', 'C'])
answers.push(['A', 'B', 'C'])
answers.push(['B', 'A', 'C'])
answers.push(['A', 'C', 'B'])
answers.push(['C', 'B', 'A'])
answers.push(['B', 'A', 'C'])
answers.push(['B', 'C', 'A'])
answers.push(['C', 'A', 'B'])
answers.push(['A', 'B', 'C'])
answers.push(['B', 'A', 'C'])
answers.push(['A', 'C', 'B'])
answers.push(['C', 'B', 'A'])
answers.push(['C', 'A', 'B'])
answers.push(['A', 'B', 'C'])
answers.push(['A', 'C', 'B'])
answers.push(['B', 'C', 'A'])
answers.push(['C', 'A', 'B'])
answers.push(['A', 'B', 'C'])
answers.push(['B', 'A', 'C'])
answers.push(['A', 'B', 'C'])
answers.push(['C', 'B', 'A'])
answers.push(['B', 'A', 'C'])
answers.push(['C', 'B', 'A'])
answers.push(['B', 'C', 'A'])
answers.push(['C', 'B', 'A'])
answers.push(['B', 'A', 'C'])
answers.push(['C', 'A', 'B'])
answers.push(['A', 'C', 'B'])
answers.push(['B', 'A', 'C'])
answers.push(['B', 'C', 'A'])
answers.push(['A', 'C', 'B'])
answers.push(['A', 'B', 'C'])
answers.push(['B', 'C', 'A'])
answers.push(['B', 'C', 'A'])
answers.push(['C', 'A', 'B'])
answers.shift();



$(document).ready(function(){
    $("#boton").click(function(){

    	
    	var visual = 0
    	var auditivo = 0
    	var cinestesico = 0

    	for (var index = 0 ;  index <=1 ; index++) {

    		var valueFromRadio = $('input[name=answer]:checked', id[index]).val().toUpperCase()
    	
	    	//alert($('input[name=answer]:checked', id[index]).val())

	    	var miniArray = answers[index]
	    	console.log(miniArray)
	    	
	    	var determinated = miniArray.indexOf(valueFromRadio)+1
	    	
	    	switch (determinated){
	    		case 1: 
	    			visual++;
	    			break;
	    		case 2: 
	    		auditivo++
	    			break;
	    		case 3: 
	    			cinestesico++
	    			break;

	    		
	    	}
    	}

    	console.log("v: " + visual + ", aud: " + auditivo + "cin: " + cinestesico)
    	var index = 0;
    	

    	


    });
});