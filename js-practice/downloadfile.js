<!DOCTYPE html> 
<html> 
<head> 
<!--https://www.jianshu.com/p/ebb483ef14e9-->
<!--https://www.jianshu.com/p/f42ae90bc4e8-->
  <meta charset="utf-8"> 
  <title>sample</title> 
</head> 
<body> 
  <button id='download'>下载</button> 
  <span id='status'></span> 
</body> 
<script> 
  var url = "http://localhost:8080/getFile"; 
  document.querySelector('#download').onclick = function() { 
    document.querySelector('#status').innerHTML = '文件下载中...'; 
    fetch(url).then(res => res.blob().then(blob => { 
      var a = document.createElement('a'); 
      var url = window.URL.createObjectURL(blob);   // 获取 blob 本地文件连接 (blob 为纯二进制对象，不能够直接保存到磁盘上)
      var filename = res.headers.get('Content-Disposition'); 
      a.href = url; 
      a.download = filename; 
      a.click(); 
      window.URL.revokeObjectURL(url); 
      document.querySelector('#status').innerHTML = '下载完成'; 
    })); 
  }; 
</script> 
</html>
