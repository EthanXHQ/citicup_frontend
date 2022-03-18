var index=0
function creatTable(data,target){
    var tableData="<tr>"

    for(var i=0;i<data.length;i++){
      tableData+="<td>"+data[i]+"</td>"
    }
  
    tableData+="</tr>"
    var my_table=$(target)
    my_table.html(my_table.html()+tableData)
    ++index
  }
var arry=[]
var div = $('.test-slide');
div.hide()
div.fadeIn("slow"); // 在3秒钟内逐渐向上消失


var dic
$.ajax({
    url: "http://124.223.97.89:8080/com/list",
    type: 'GET',
    //contentType: "application/json; charset=utf-8",
    dataType: 'JSON',//here
    success: function (data) {
        dic=data
        //console.log(data);
        //alert("success");
    },
    error:function(res,StatusText){
        console.log(StatusText)
        console.log(res)
}
});

function ESG_add_ten(url_str)
{
$.ajax(
    {
        url:url_str,
        type: "GET",
        dataType: "JSON",
        success:function(data){
            var cur=index
            for (var i =cur ;i < cur+10;++i)
            {
                arry=[index+1,data[i]["Stock_code"],data[i]["Com_name"],data[i]["Industry"],data[i]["ESG_Rating"]]
                creatTable(arry,".default table")
            }
        },
        error:function(res,StatusText)
        {
            console.log(StatusText)
            alert("list1 load fail")
        }
    }
)
}
ESG_add_ten("http://124.223.97.89:8080/esgrating/list")