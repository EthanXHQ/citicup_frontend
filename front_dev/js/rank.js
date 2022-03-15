$('#test-ul li[name=book]').text(); // 'Java & JavaScript'
$('#test-ul li[name=book]').html(); // 'Java &amp; JavaScript'
var j1 = $("#test-ul li[name=book]");
var j2 = $("#test-ul li[name=book]");
j1.html('<span style = "color:green">JavaScript</span>');
j2.text('JavaScript & ECMAScript');
j1.html('<span style = "color:green">JavaScript</span>')

