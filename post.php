<?php  
$name =  $_POST['name'];
$email =  $_POST['email'];
$mobile=  $_POST['mobile'];
$city =    (($_POST['city']) ? $_POST['city'] : '');
$country =  (($_POST['country']) ? $_POST['country'] : 'India');
$comments = (($_POST['message']) ? $_POST['message'] : '');
$url =  $_POST['url'];
$project_id  =  $_POST['project_id'];
$project_name =  $_REQUEST['project_name'];
$userid =  (($_POST['userid']) ? $_POST['userid'] : 1 );
$lead_source =  (($_POST['lead_source']) ? $_POST['lead_source'] :'Microsite' );
$country_region =  $_POST['country_region'];
$property_type =  (($_POST['property_type']) ? $_POST['property_type'] : 'Residential');
$budget =  (($_POST['budget']) ? $_POST['budget'] :'40-50' );
$campaign_name =  (($_POST['campaign_name']) ? $_POST['campaign_name'] : 'Website');
$source_media =  $_POST['source_media'];


$error = array();
if($name == ""):
    $error[]='Your Name';     
endif;

if(!checkemail("$email")):
        $error[]='Invalid email address.'; 
endif;

if(!checkmobile("$mobile")):
        $error[]='Invalid Mobile Number.'; 
endif;

if($project_id == ""):
    $error[]='Project ID or Name is Missing';     
endif;


if(isset($error)  &&  count($error) > 0  && $yn==0 ) {
         $x=1;
         echo "OOPS ! You have left the following mandatory fields:\n\n";
	     foreach ($error as $v){
	      echo "$x : $v\n";
	      $x++;
	     }      

}else {

$ip_address =  $_SERVER['REMOTE_ADDR'];
$data=array(
		'username' =>'kumayan',
		'password' =>'kumayaN@#$2017',     	
     	'name' =>$name,
		'mobile' => $mobile,
		'email' => $email,
		'city' => $city,
		'country' => $country,
		'comments' => $comments,
		'userid' => $userid,
		'project_id' => $project_id,
		'lead_source' => $lead_source,
		'url' => $url,
		'ip_address' => $ip_address,
		'country_region' => $country_region,
		'property_type' => $property_type,
		'campaign_name' => $campaign_name,
		'source_media' => $source_media,
		'project_name' => $project_name,
		'budget' => $budget);
		
$eurl = 'https://www.smcrealty.com/utils/api/NewCreate.php';		
$ch = curl_init($eurl);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response_json = curl_exec($ch);
curl_close($ch);
$response=json_decode($response_json, true);

if($response[status] == 200):
      echo '200';
else: 
    echo "$response[status_message]"; 
endif; 



} // end of if	



function checkemail($str) {
         return (!preg_match("/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ix", $str)) ? FALSE : TRUE;
}

function checkmobile($mobile){
    return preg_match('/^[0-9]{10}+$/', $mobile);
}

?>
