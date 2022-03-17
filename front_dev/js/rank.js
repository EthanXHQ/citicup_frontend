$('#test-ul li[name=book]').text(); // 'Java & JavaScript'
$('#test-ul li[name=book]').html(); // 'Java &amp; JavaScript'
var j1 = $("#test-ul li[name=book]");
var j2 = $("#test-ul li[name=book]");
j1.html('<span style = "color:green">JavaScript</span>');
j2.text('JavaScript & ECMAScript');
j1.html('<span style = "color:green">JavaScript</span>')

function creatTable(data){
    var tableData="<tr>"

    for(var i=0;i<data.length;i++){
      tableData+="<td>"+data[i]+"</td>"
    }
  
    tableData+="</tr>"
    var my_table=$(".default table")
    my_table.html(my_table.html()+tableData)
  }
var arry = [1,2,3,4]
for(var i=0;i<10;++i)
{
    creatTable(arry)
}

