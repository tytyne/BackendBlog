$(function(){

    var $email=$('#email')
    var $password=$('#password')
    $('#signIn').on('click',function(){
    
    var user={
        email:$email.val(),
        password:$password.val()
    
    };
    
    $.ajax({
        type:'POST',
        dataType: 'json',
        data:JSON.stringify(user),
        contentType: 'application/json;charset=UTF-8',
        url:'/api/register',
     
        success:function(data){
            alert('login succesful!')
         
        },
       
        error: function(jqXHR) {  
            if(jqXHR.status&&jqXHR.status==400){
                 alert.error(jqXHR.responseText);
                
            }else{
                alert("Something went wrong");
            }
           
       }
       
    });
    
});
});