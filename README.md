## HƯỚNG DẪN PHÔNG BẠT TRÊN GITHUB CHỈ VỚI 40 - 70 DÒNG CODE :))

> [!NOTE]
 Đây là một cách thử nghiệm và vọc vạch khi mình thấy 1 bài viết nào đó trên *Phở Bò* và mình cũng có tạo thêm một file `script.js` và `app.js` có thể tối ưu các bạn cũng có thể thử nhé!<br>Link bài viết mình tham khảo và làm theo: `https://www.facebook.com/groups/devoiminhdidauthe/permalink/27728130173497324/`

Trong thời gian vừa rồi mình có tìm kiếm các thư viện hay của NPMJS thì mình tình cờ biết được 1 thư viện là simple-git. Đây là một thư viện chạy các git command trên nodejs. Và rồi mình nghĩ ngay đến cái biểu đồ contributions trên Github, có cách nào làm cho cái biểu đồ này thật xanh không? Và thế là bài viết này ra đời kkk.
Khởi tạo dự án Node.JS và cài đặt các thư viện cần thiết.

```javascript
npm init // sau đó cài đặt gói package.json theo hướng dẫn của NPMJS
npm install jsonfile moment random simple-git.
```

Tại root của dự án tạo thêm 1 file là `data.json` để lưu lại sự thay đổi khi commit code mới

- Tạo một file `data.json`
  Tạo file javascript với nội dung file như hình bên dưới
- Tạo một file `index.js`
  Cuối cùng khởi tạo git repository + chạy file `index.js` vừa tạo

```javascript
git init // sau đó thực hiện thêm thao tác git add . và git commit
node index.js
```

> Bạn cứ mỗi ngày chăm chỉ vào chạy `node index.js` rồi commit lên Github của bạn rồi contributions của bạnbạn sẽ trở thành thành xanh <(") - muốn màu xanh đậm hay nhạt là tùy vào các bạn..
=> Push repository vừa được tạo lên Github + tận hưởng thành quả :))

