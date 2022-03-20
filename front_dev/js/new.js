var index=0
function creatTable(data,target)
{
    var tableData="<tr>"
    var implemented_code=""
    for(var j=0;j<6-data[2].length;++j)
    implemented_code+="0"
    implemented_code+=data[2]
    for(var i=0;i<data.length;i++)
    {
        if(i==3)
        {
            tableData+="<td><a href='"+data[i]+"'>"+data[i]+"</a></td>"
            continue
        }
        tableData+="<td>"+data[i]+"</td>"
    }
    
    tableData+="</tr>"
    var my_table=$(target)
    my_table.html(my_table.html()+tableData)
}
var ls
$.ajax(
    {
        url:"http://124.223.97.89:8080/news/list",
        type: "GET",
        dataType: "JSON",
        success:function(data){
            ls=data
            for (var i =0 ;i < 10 && i<ls.length;++i)
            {
                arry=[ls[i]["No"],ls[i]["Area"],ls[i]["Title"],ls[i]["Href"]]
                creatTable(arry,".table")
                ++index
            }
        },
        error:function(res,StatusText)
        {
            console.log(StatusText)
            alert("data load fail")
        }
    }
)
$(".bt1").click(function(){
    var cur=index
    for (var i =cur ;i < cur+10 && i<ls.length;++i)
    {
        arry=[ls[i]["No"],ls[i]["Area"],ls[i]["Title"],ls[i]["Href"]]
        creatTable(arry,".table")
        ++index
    }
})