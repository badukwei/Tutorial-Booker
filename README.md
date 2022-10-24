## 專案名稱 : 教學媒合與訂閱系統

## 專案技能

React.js、Redux、React Router、React Schedular、ES6、SCSS、RWD

## 專案簡介

此專案為教師與學生媒合平台。使用React框架架構多頁式網站，並以Redux管理登入、預定資料、行事曆狀態。使用者可以以學生身分登入，查詢想學習
的科目以及教師，點擊教師頁面觀看行事曆，並進行預定。教師也可以以教師身分登入，更改上課日期，個人資料等。

## 專案技術

使用React框架架設網站  
使用Reacr Router建構多頁式動態路由  
使用Redux管理登入、預定資料、行事曆狀態  
使用React Hook Form控制用戶資料輸入  
串接Restful API(Google Auth2)  
使用SCSS設計響應式網頁、頁面動畫、網頁UI  

## 專案使用簡介

以學生身分註冊     

1.進入主頁後點擊右上角Signup   

warning : 因為此專案為純前端專案，因此並未真的存在註冊更新資料庫功能，因此重新整理後會遺失在頁面的所有更動  

![image](https://user-images.githubusercontent.com/109848154/197514292-3fd64416-d084-4d05-aa77-fd7188624532.png)  

2.輸入你想要用的帳戶名、email和密碼   

![image](https://user-images.githubusercontent.com/109848154/197514577-7d6754eb-7992-4c39-b57d-22502c3f1579.png)  

3.登入成功後會挑出顯示框，告知你已成功註冊，並詢問你要不要成為教師    

![image](https://user-images.githubusercontent.com/109848154/197514785-dee37fde-03da-47bd-bee1-a91654c18fb6.png)  

4.點擊Become a tutor會跳出以下資料填寫表格，填寫完畢後點擊submit就可以擁有教師身分了  

![image](https://user-images.githubusercontent.com/109848154/197514962-ff464637-35de-45f0-826d-5baeb6a80455.png)  
 
5.你也可以選擇不註冊，點擊navbar中的tutors開始尋找教師   
![image](https://user-images.githubusercontent.com/109848154/197515283-2b1d6786-508f-4112-b487-ada8aa03d0cc.png)  

6.進入後你會看訂頁面有不同的教師資訊以及一些filter  

(1)上方search box可以依照教師名稱進行搜尋  
(2)左方Price部分可以輸入最大值以最小值，以價格進行篩選  
(3)左下則是可以依照主題進行搜尋  

![image](https://user-images.githubusercontent.com/109848154/197515668-ed7da222-2d99-40e1-a3cb-ceaaaa2f5765.png)  

7.篩選過後找到喜歡的老師則可以點擊card下方的價格標籤進行預定  

![image](https://user-images.githubusercontent.com/109848154/197516094-d34b3561-f30a-45e7-a6a2-aa5e8b88d365.png)   

8.進入之後可以看到教師目前已經開課的時間段，你可以依照行事曆上面的時間進行預定  

![image](https://user-images.githubusercontent.com/109848154/197516449-f34a4e85-2789-43af-bd6b-19a3f4b1e023.png)  

以教師身分登入  

1.進入主頁後在右上角點擊Login  

![image](https://user-images.githubusercontent.com/109848154/197512133-268d0326-9eec-4568-af5c-c5b3d9bc60f7.png)  

2.進入之後按照以下資訊進行登入  

account name : BadukWei   
password : abc1234567  
大小寫有分  

![image](https://user-images.githubusercontent.com/109848154/197512326-5d78a807-bbd6-4a85-aeaf-18fddf38abe4.png)  

3.登入之後會回到主頁，右上角則會變成My Account字樣，點擊之後會顯示個人資料  

![image](https://user-images.githubusercontent.com/109848154/197512775-b09b82a6-2b2a-4864-ad6a-860fc37cb16e.png)  

4.點擊Profile會顯示教師基本資料  

![image](https://user-images.githubusercontent.com/109848154/197513763-b353a901-4d24-42ba-b916-d7a7d90b8cf1.png)  

5.點擊teaching schedule會顯示目前被預訂的時間與行事曆，時段會顯示學生名稱  

![image](https://user-images.githubusercontent.com/109848154/197513929-798ca031-5516-4377-8892-24b0137e0986.png)  

6.當然你也可以是一個學生，點擊learning schedule就可以找到你目前預定的課程  

![image](https://user-images.githubusercontent.com/109848154/197514067-c014d11f-5359-4603-96f1-00185f17e72d.png)  



