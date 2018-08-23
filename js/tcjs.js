function findout(){

  if(document.getElementById('s1').value==""
  ||document.getElementById('s2').value==""
  ||document.getElementById('s3').value=="")
  {
    ts.ui.Notification.success("Input Error!!");
  }

else {
  var side1=parseInt(document.getElementById('s1').value);
  var side2=parseInt(document.getElementById('s2').value);
  var side3=parseInt(document.getElementById('s3').value);

  if(side1==side2 && side2==side3 && side3==side1)
    ts.ui.Notification.success("Equilateral Triangle");

  else if(side1==side2 || side2==side3 ||side3==side1)
    ts.ui.Notification.success("Isosceles Triangle");

  else
    ts.ui.Notification.success("Scalene Triangle");
  }

}
