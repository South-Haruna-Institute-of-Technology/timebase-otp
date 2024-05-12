<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "http://localhost:3000/api/utcTime");
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$utcTime = curl_exec($ch);

curl_close($ch);

echo $utcTime;
?>