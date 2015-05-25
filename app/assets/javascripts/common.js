/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Ajax calling for email subscription

function subcribe_email()
{
    var email = document.getElementById('blogaddress').value;
    var rex =/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (email == "")
    {
      document.getElementById('blogaddress').style.borderColor="red";
    }
    else if(!rex.test(email))
    {
      document.getElementById('error_message').innerHTML = 'Please Enter Correct Email';
      document.getElementById('blogaddress').style.borderColor="red";
    }
    else
    {    
        $.ajax({
             type: "POST",
             data: "email="+ email,
             url: "/subcription",
             success: function(data){
                 if (data ==='insert')
                 {
                     document.getElementById('blog_error').innerHTML = 'Subcribed Successfully';
                     $('#blogaddress').hide();
                     $('#blog-sumit').hide();
                     $('#error_message').hide();
                 }
                 else if (data ==='notinsert'){
                     document.getElementById('blog_error').innerHTML = 'Error occure while subcribe';
                 }
                 else if (data ==='blank'){
                    document.getElementById('blog_error').innerHTML = 'Email Field Empty';
                  }
                 else if (data ==='already'){
                    document.getElementById('blog_error').innerHTML = 'Email Already Exist';
                 }
             }
       });
    }
      
}