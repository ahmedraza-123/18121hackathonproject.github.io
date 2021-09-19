let popped = 0;


document.addEventListener('mouseover', function(e){
    
    if (e.target.className === "balloon"){
        
                e.target.style.backgroundColor = "white";
                e.target.style.color= "red";
                e.target.textContent = "POP!";
                e.target.style.fontSize = "50px";

               

                popped++;
                removeEvent(e);
                checkAllPopped();
    }   
});

function removeEvent(e){
    e.target.removeEventListener('mouseover', function(){
        
    })
};

function checkAllPopped(){
    if (popped === 57){
        window.location.href="round1completemsg.html";
        let gallery = document.querySelector('.balloon-gallery');
        let message = document.querySelector('#yay-no-balloons');
        gallery.innerHTML = '';
        message.style.display = 'block';
    }
};

setTimeout(function() { alert("Press Blue Color"); }, 5000);


setTimeout(function() { alert("Press darkcyan Color"); }, 10000);
setTimeout(function() { alert("Press red Color"); }, 20000);
setTimeout(function() { alert("Press aqua Color"); }, 30000);
setTimeout(function() { alert("Press purple Color"); },40000 );
setTimeout(function() { alert("Press orange Color"); }, 50000);
setTimeout(function() { alert("Press orangered Color"); },60000 );
setTimeout(function() { alert("Press orchid Color"); }, 70000); 
setTimeout(function() { alert("Press Black Color"); }, 80000 );
setTimeout(function() { alert("Press firebrick Color"); }, 90000 );
setTimeout(function() { alert("Press cornflowerblue Color"); },100000);







