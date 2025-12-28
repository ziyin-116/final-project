function drawMeme() {
  let num = parseInt(document.getElementById("num").value);

  // 梗圖陣列
  let imgs = [
    "https://applealmond.com/wp-content/uploads/2025/07/1753858764-1d75159b8228e62014a01db93e7b4b14.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyf-KNXbym_blp2QyJVTKUhive3pKyYr6qGg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToxfC9RG5X1mxGMeik4ALtBpHQ8rY_gsdrkw&s",
    "https://stickershop.line-scdn.net/stickershop/v1/product/35298/LINEStorePC/main.png?v=1",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpFzAO3EBCWJ-7e-Dwr64JNSmUcSFnS9PV8Q&s",
    "https://2024-dailyview.s3.ap-northeast-1.amazonaws.com/shared_image/2024/8/4d1735ed78aa812ee7aeed051d892a042e2bc385acb8e1f85afd020c5f20118e.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZLgZqij91mz9_3fy0KceujWucMPHtJsIWuA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVjVnLodCuvv4YWHeib6qQDeWfxmHjrPVRrA&s",
    "https://truth.bahamut.com.tw/s01/202408/forum/39114/309ce13d40bcdf18b453d43836a68636.JPG",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0WEPqu2JzCItcPoBS2e8VVIW_ouGLISn-dA&s"
  ];

  // 搞笑文字陣列（對應每一張圖）
  let texts = [
    "台灣人都用我去跟外國人打招呼",
    "注意看後面!!!!!",
    "跟你打招呼要記得說嗨",
    "買飲料一定都要",
    "旋轉!旋轉!旋轉!",
    "當你不知道你看了什麼時",
    "我真的沒事（真的）",
    "給你一個尷尬又不失禮貌的微笑",
    "你剛剛說什麼?",
    "學生時期一定聽過的話"
  ];

  // 驗證輸入
  if (isNaN(num) || num < 1 || num > 10) {
    alert("❌ 請輸入 1~10 的數字！");
    return;
  }

  // 顯示圖片
  document.getElementById("memeImg").src = imgs[num - 1];

  // 跳出視窗
  alert("🎉 梗圖抽抽樂 🎉\n" + "你今天抽到的是......\n\n" + texts[num - 1]);
}