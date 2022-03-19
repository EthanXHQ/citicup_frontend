var index1=0
var index2=0
var index3=0
var index4=0
function creatTable(data,target,index){
    var tableData="<tr>"
    var implemented_code=""
    for(var j=0;j<6-data[2].length;++j)
    implemented_code+="0"
    implemented_code+=data[2]
    for(var i=0;i<data.length;i++){
        if(i==1)
        {
            tableData+="<td><a id=\""+implemented_code+"\" href=\"javascript:void(0);\">"+data[1]+"</a></td>"
            continue
        }
        else if (i==2)
        {
            tableData+="<td>"+implemented_code+"</td>"
            continue
        }
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
            //console.log(data)
            ls=data
            //TO DO:  here to finish the rank
            ls1=ls
            ls2=ls
            ls3=ls
            ls4=ls
            //here
            for (var i =0 ;i < 10;++i)
            {
                arry=[index1+1,ls1[i]["Com_name"],ls1[i]["Stock_code"],ls1[i]["Industry"],ls1[i]["ESG_Rating"]]
                creatTable(arry,".default table",index1)
                ++index1
            }
            for (var i =0 ;i < 10;++i)
            {
                arry=[index2+1,ls2[i]["Com_name"],ls2[i]["Stock_code"],ls2[i]["Industry"],ls2[i]["Environmental_Rating"]]
                creatTable(arry,".E table",index2)
                ++index2
            }
            for (var i =0 ;i < 10;++i)
            {
                arry=[index3+1,ls3[i]["Com_name"],ls3[i]["Stock_code"],ls3[i]["Industry"],ls3[i]["Social_Rating"]]
                creatTable(arry,".S table",index3)
                ++index3
            }
            for (var i =0 ;i < 10;++i)
            {
                arry=[index4+1,ls4[i]["Com_name"],ls4[i]["Stock_code"],ls4[i]["Industry"],ls4[i]["Governance_Rating"]]
                creatTable(arry,".G table",index4)
                ++index4
            }
            $('a').click(function(){
                Jump2Cm_info($(this).attr("id"))
            })
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
        arry=[index1+1,ls1[i]["Com_name"],ls1[i]["Stock_code"],ls1[i]["Industry"],ls1[i]["ESG_Rating"]]
        creatTable(arry,".default table",index1)
        ++index1
    }
    $('a').click(function(){
        Jump2Cm_info($(this).attr("id"))
    })
})

$(".bt2").click(function(){
    var cur=index2
    for (var i =cur ;i < cur+10;++i)
    {
        arry=[index2+1,ls2[i]["Com_name"],ls2[i]["Stock_code"],ls2[i]["Industry"],ls2[i]["Environmental_Rating"]]
        creatTable(arry,".E table",index2)
        ++index2
    }
    $('a').click(function(){
        Jump2Cm_info($(this).attr("id"))
    })
})

$(".bt3").click(function(){
    var cur=index3
    for (var i =cur ;i < cur+10;++i)
    {
        arry=[index3+1,ls3[i]["Com_name"],ls3[i]["Stock_code"],ls3[i]["Industry"],ls3[i]["Social_Rating"]]
        creatTable(arry,".S table",index3)
        ++index3
    }
    $('a').click(function(){
        Jump2Cm_info($(this).attr("id"))
    })
})

$(".bt4").click(function(){
    var cur=index4
    for (var i =cur ;i < cur+10;++i)
    {
        arry=[index4+1,ls4[i]["Com_name"],ls4[i]["Stock_code"],ls4[i]["Industry"],ls4[i]["Governance_Rating"]]
        creatTable(arry,".G table",index4)
        ++index4
    }
    $('a').click(function(){
        Jump2Cm_info($(this).attr("id"))
    })
})

$(".bt-1").click(function(){
    $(".default table").html('<tr class="default head"><th>排名</th><th>公司名称</th><th>证券代码</th><th>产业类别</th><th>ESG综合得分</th></tr>')
    index1=0
})
$(".bt-2").click(function(){
    $(".E table").html('<tr class="default head"><th>排名</th><th>公司名称</th><th>证券代码</th><th>产业类别</th><th>E 得分</th></tr>')
    index2=0
})
$(".bt-3").click(function(){
    $(".S table").html('<tr class="default head"><th>排名</th><th>公司名称</th><th>证券代码</th><th>产业类别</th><th>S 得分</th></tr>')
    index3=0
})
$(".bt-4").click(function(){
    $(".G table").html('<tr class="default head"><th>排名</th><th>公司名称</th><th>证券代码</th><th>产业类别</th><th>G 得分</th></tr>')
    index4=0
})
//here to realize the jump
//first , all the com_name is bounded to a link

//console.log($("a"))

function Jump2Cm_info(id)
{
    console.log(id)
    let params = {
        "id": id,
    };
    window["filter"] = params;
    window.open("../html/cminfo.html#"+id);
}