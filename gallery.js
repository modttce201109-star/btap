function upDate(previewPic) {
    console.log("Event triggered: upDate");
    console.log("Alt:", previewPic.alt);
    console.log("Source:", previewPic.src);

    // Thay đổi tiêu đề/text và ảnh nền của khối preview
    document.getElementById("image").innerHTML = previewPic.alt;
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    console.log("Event triggered: undo");
    // Đưa khung hiển thị về trạng thái ban đầu
    document.getElementById("image").style.backgroundImage = "";
    document.getElementById("image").innerHTML = "Hover over or focus on an image below.";
}

function addTabIndexes() {
    console.log("Page loaded. Adding tabindex attributes...");
    
    // Lấy tất cả các ảnh có class là 'preview'
    let images = document.querySelectorAll(".preview");
    
    // Dùng vòng lặp for để thêm thuộc tính tabindex cho từng ảnh
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", i + 1);
        console.log("Added tabindex " + (i + 1) + " to image " + (i + 1));
    }
}