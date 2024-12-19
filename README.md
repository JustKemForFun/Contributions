HƯỚNG DẪN PHÔNG BẠT TRÊN GITHUB CHỈ VỚI 40 DÒNG CODE :))
--------------------------------------------------------------------------------------
Trong thời gian vừa rồi mình có tìm kiếm các thư viện hay của npm thì mình tình cờ biết được 1 thư viện là simple-git . Đây là một thư viện chạy các git command trên nodejs. Và rồi mình nghĩ ngay đến cái biểu đồ contributions trên github, có cách nào làm cho cái biểu đồ này thật xanh không? Và thế là bài viết này ra đời kkk.
Khởi tạo dự án Nodejs và cài đặt các thư viện cần thiết
npm init
npm install jsonfile moment random simple-git.
Tại root của dự án tạo thêm 1 file là data.json để lưu lại sự thay đổi khi commit code mới
touch data.json
Tạo file javascript với nội dung file như hình bên dưới
touch index.js
Cuối cùng khởi tạo git repo + chạy file index.js vừa tạo
git init
node index.js
=> Push repo vừa được tạo lên github + tận hưởng thành quả :))