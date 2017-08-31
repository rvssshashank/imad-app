console.log('Loaded!');
// change the text from main-text id in index.html

var element= document.getElementById('main-text');

element.innerHTML = 'New value';

// make the picture move

var img= document.getElementById('madi');

/*img.onclick=function(){
    
    img.style.marginLeft = '100px';
};
*/
var marginLeft= 0;
// make img move like animation
function moveRight(){
    marginLeft= marginLeft+ 3;
    img.style.marginLeft= marginLeft+ 'px';
    
}
img.onclick=function(){
    var interval= setInterval(moveRight,50);
};


// submit username and password
   var submit= document.getElementById('submt_butn');
   submit.onclick =function(){
       
       //create a request object
       var request = new XMLHttpRequest();
       
       // Capture the response and store it in variable
       request.onreadystatechange= function()
     {
         if(request.readyState === XMLHttpRequest.DONE){
             //take some action
             if(request.status === 200){
                 alert('logged in success');
             }
             else if(request.status=== 403){
                 alert('incorrect credentials');
             }
             else if(request.status===500){
                 alert('Something went wrong');
             }
         }
     };
     
     var username = document.getElementById('username');
     var password = document.getElementById('password');
     console.log(username);
     console.log(password);
     request.open('POST','http://rsahshi57.imad.hasura-app.io/login',true);
     request.setRequestHeader('Content-Type','application/json');
     request.send(JSON.stringify({username:username, password:password}));
   };
