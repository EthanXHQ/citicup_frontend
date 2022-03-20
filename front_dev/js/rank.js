var index1=0
var index2=0
var index3=0
var index4=0
var ratee=0.33
var rates=0.33
var rateg=0.33
var Industry="empty"
var this_href=window.location.href
var dic={"1":"农林牧渔","2":"采矿","3":"制造","4":"电力热力燃气","5":"建筑","6":"批发零售","7":"交通运输仓储邮政","8":"住宿餐饮","9":"信息软件信息技术服务","10":"金融","11":"房地","12":"租赁商务服务","13":"科学研究和技术服务","14":"水利环境公共设施管理","15":"居民服务修理服务","16":"教育","17":"卫生社会","18":"文化体育娱乐"}
function similar(str)
{
    if (str==undefined)
        {
            return 0
        }
    var count=0
    var len=Industry.length
    for(var i=0;i<len;++i)
        for(var j=0;j<str.length;++j)
        {
            if (Industry[i]==str[j])
                count+=1
        }
    return (1.0*count)/len
}
for(var i =0 ;i < this_href.length-1;++i)
{
    if(this_href[i]=="#")
    {
        ratee=0.1
        rateg=0.1
        rates=0.1
        fir=this_href[i+1]
        sec=this_href[i+2]
        var temp=""
        for(var j=i+3;j<this_href.length;++j)
            {
                temp+=this_href[j]
            }
        Industry=dic[temp]
        if(fir=="s")
            rates+=0.5
        else if(fir=="e")
            ratee+=0.5
        else rateg+=0.5

        if(sec=="s")
            rates+=0.2
        else if(sec=="e")
            ratee+=0.2
        else rateg+=0.2
        break
    }
}

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


var dic
$.ajax({
    url: "http://124.223.97.89:8080/com/list",
    type: 'GET',
    //contentType: "application/json; charset=utf-8",
    dataType: 'JSON',//here
    success: function (data) {
        dic=data
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
            var rates={"AAA":9,"AA":8,"A":7,"BBB":6,"BB":5,"B":4,"CCC":3,"CC":2,"C":1}
            ls=data
            //TO DO:  here to finish the rank
            ls1=ls.concat("")
            ls1.sort(function(a,b){
                score1=ratee*parseFloat(a["ENV_SCORE"])+rates*parseFloat(a["SCO_SCORE"])+rateg*parseFloat(a["GOV_SCORE"])+similar(a["Industry"])*200+rates[a["ESG_Rating"]]*2
                score2=ratee*parseFloat(b["ENV_SCORE"])+rates*parseFloat(b["SCO_SCORE"])+rateg*parseFloat(b["GOV_SCORE"])+similar(b["Industry"])*200+rates[b["ESG_Rating"]]*2
                if (score1<score2)
                    return 1
                else if (score1>score2)
                    return -1
                else return 0
            })

            ls2=ls.concat("")
            ls2.sort(function(a,b){
                score1=parseFloat(a["ENV_SCORE"])+similar(a["Industry"])*200+rates[a["Environmental_Rating"]]*2
                score2=parseFloat(b["ENV_SCORE"])+similar(b["Industry"])*200+rates[b["Environmental_Rating"]]*2
                if (score1<score2)
                    return 1
                else if (score1>score2)
                    return -1
                else return 0
            })
            //console.log(ls2)
            ls3=ls.concat("")
            ls3.sort(function(a,b){
                score1=parseFloat(a["SCO_SCORE"])+similar(a["Industry"])*200+rates[a["Social_Rating"]]*2
                score2=parseFloat(b["SCO_SCORE"])+similar(b["Industry"])*200+rates[b["Social_Rating"]]*2
                if (score1<score2)
                    return 1
                else if (score1>score2)
                    return -1
                else return 0
            })
            ls4=ls.concat("")
            ls4.sort(function(a,b){
                score1=parseFloat(a["GOV_SCORE"])+similar(a["Industry"])*200+rates[a["Governance_Rating"]]*2
                score2=parseFloat(b["GOV_SCORE"])+similar(b["Industry"])*200+rates[b["Governance_Rating"]]*2
                if (score1<score2)
                    return 1
                else if (score1>score2)
                    return -1
                else return 0
            })
            //here
            for (var i =0 ;i < 10;++i)
            {
                arry=[index1+1,ls1[i]["Com_name"],ls1[i]["Stock_code"],ls1[i]["Industry"],ls1[i]["ESG_Rating"],ls1[i]["Environmental_Rating"],ls1[i]["Social_Rating"],ls1[i]["Governance_Rating"]]
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
        arry=[index1+1,ls1[i]["Com_name"],ls1[i]["Stock_code"],ls1[i]["Industry"],ls1[i]["ESG_Rating"],ls1[i]["Environmental_Rating"],ls1[i]["Social_Rating"],ls1[i]["Governance_Rating"]]
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

function Jump2Cm_info(id)
{
    console.log(id)
    let params = {
        "id": id,
    };
    window["filter"] = params;
    window.open("../html/cminfo.html#"+id);
}
