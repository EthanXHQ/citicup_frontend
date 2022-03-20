var Industry="empty"
var fir="s"
var sec="s1"
var dic={"农、林、牧、渔业":1,"采矿业":2,"制造业":3,"电力、热力、燃气供应业":4,"建筑业":5,"批发和零售业":6,"交通运输、仓储和邮政业":7,"住宿和餐饮业":8,"信息传输、软件和信息技术服务业":9,"金融业":10,"房地产业":11,"租赁和商务服务业":12,"科学研究和技术服务业":13,"水利、环境和公共设施管理业":14,"居民服务、修理和其他服务业":15,"教育":16,"卫生和社会工作":17,"文化、体育和娱乐业":18}
$(".select").change(function(){
    index=$(".select option:selected").text()
    Industry=dic[index]
    //alert(Industry)
})



$("input:radio[name='radio']").click(function(){
    fir = $('input:radio[name="radio"]:checked').attr("id");
    //alert(fir) 
})

$("input:radio[name='radio1']").click(function(){
    sec = $('input:radio[name="radio1"]:checked').attr("id");
    //alert(sec) 
})

$(".confirm").click(function(){
    var str=fir+sec[0]+Industry
    window.open("../html/home.html#"+str);
})