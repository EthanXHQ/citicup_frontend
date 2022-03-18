var index1=0
function creatTable(data,target,index){
    var tableData="<tr>"

    for(var i=0;i<data.length;i++){
      tableData+="<td>"+data[i]+"</td>"
    }
    
    tableData+="</tr>"
    var my_table=$(target)
    my_table.html(my_table.html()+tableData)
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

var ls
function ESG_Init(url_str)
{
$.ajax(
    {
        url:url_str,
        type: "GET",
        dataType: "JSON",
        success:function(data){
            ls=data
            var cur=0
            for (var i =cur ;i < cur+10;++i)
            {
                arry=[i+1,data[i]["Stock_code"],data[i]["Com_name"],data[i]["Industry"],data[i]["ESG_Rating"]]
                creatTable(arry,".default table",index1)
                ++index1
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



ESG_Init("http://124.223.97.89:8080/esgrating/list")

$(".bt1").click(function(){
    var cur=index1
    for (var i =cur ;i < cur+10;++i)
    {
        arry=[index1+1,ls[i]["Stock_code"],ls[i]["Com_name"],ls[i]["Industry"],ls[i]["ESG_Rating"]]
        creatTable(arry,".default table",index1)
        ++index1
    }
    //window.open("../html/cminfo.html")
})

$(".bt-1").click(function(){
    $(".default table").html('<tr class="default head"><th>排名</th><th>公司名称</th><th>证券代码</th><th>产业类别</th><th>ESG综合得分</th></tr>')
    index1=0
})
