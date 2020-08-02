var btn = document.getElementById('btn');
var btnall = document.getElementById('btnall');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');
btn.onclick = () =>{
    //进行完整的计算
    //显示分类结果按钮
btnall.style.display="block";
}
btn1.onclick = () =>{
    window.open('./事故诊断子页面/始发事件诊断.html')
}
btn2.onclick = () =>{
    window.open('./事故诊断子页面/题头事件诊断.html')
}
btn3.onclick = () =>{
    window.open('./事故诊断子页面/一级事故序列诊断.html')
}
btn4.onclick = () =>{
    window.open('./事故诊断子页面/二级事故序列诊断.html')
}
btn5.onclick = () =>{
    window.open('./事故诊断子页面/源项估计.html')
}
