$(".chat").click(function(){
     location.href = "chat.html";
});

 $("#profile_pic").click(function() {
    $('<input type="file">').on('change', function () {
      console.log(this.files[0]);
        
        var reader = new FileReader();
        reader.onload = function (e) {
      $('#p_pic').attr('src', e.target.result);
    }
       reader.readAsDataURL(this.files[0]);
    }).click();        
});