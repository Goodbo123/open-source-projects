function validateForm()
{
  var n=document.getElementById('txt_name').value;
  if(n=="")
  {
    document.getElementById("name_validate").innerHTML="Please Enter your name"'
  }
  else
  {
    document.getElementById("name_validate").innerHTML="*";
  }
}
