<?php  
$name =  $_POST['name'];
$email =  $_POST['email'];
$mobile=  $_POST['mobile'];
$comments = (($_POST['message']) ? $_POST['message'] : '');
 

$to = "botmediadigitalmarketing@gmail.com";
$subject = "HTML email";

$message = "
<html>
<head>
<title>HTML email</title>
</head>
<body>
<p>This email contains HTML Tags!</p>
<table>
<tr>Name&#58; $name</tr>
<tr>Email&#58; $email</tr>
<tr>Mobile&#58; $mobile</tr>
<tr>Message&#58; $comments</tr>
 
</table>
</body>
</html>
";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <no_reply@botmediadigital.com>' . "\r\n";
$headers .= 'Cc: ' . "\r\n";



if(mail($to,$subject,$message,$headers)) //Send an Email. Return true on success or false on error


{
    echo "<script>
 
    window.location.href='thankuPage.html'
    
    ;
    </script>";
}
else
{
echo "<script>
alert('Plz Try Agian');
window.location.href='index.html'

;
</script>";
}
?>