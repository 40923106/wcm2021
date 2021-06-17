var tipuesearch = {"pages": [{'title': 'About', 'text': 'This is  https://github.com/mdecourse/cmstemplate \n 目前的 cmsimde 在編輯器下方新增一個 csave 按鈕, 意即 collabrative save, 當動態網際管理系統在多人同時維護登入維護網頁內容時, 編輯各頁面時段, 該頁面可能已經改版, 因此使用 csave 按鈕存檔時, 會導入當下最新的該頁面內容, 並試圖與編輯中的頁面內容進行合併. \n 使用 csave 按鈕存檔無法刪除頁面資料. \n 使用 Edit All 模式, 無法使用 csave 按鈕（尚未測試). \n', 'tags': '', 'url': 'About.html'}, {'title': '每周進度', 'text': '', 'tags': '', 'url': '每周進度.html'}, {'title': 'W1 W2', 'text': '建立WCM2021的倉儲 \n \n', 'tags': '', 'url': 'W1 W2.html'}, {'title': 'W3', 'text': '到 mde tw 的 cmstemplate 的網站中 \n 即可了解到建立倉儲中常見的問題 \n \n', 'tags': '', 'url': 'W3.html'}, {'title': 'W4', 'text': '學校的課程相關主機為\xa0 https://qry.nfu.edu.tw/ \n 查詢各班課表用\xa0 https://qry.nfu.edu.tw/class.php \n 再使用spring v2 ipv6 去拉出四設計一甲班及課表 \n \n', 'tags': '', 'url': 'W4.html'}, {'title': 'W5', 'text': '學習如何設定用ssh對github連線 \n 雖然在大一上學期的cp2020中已經講解過ssh(如下面的網址) \n http://mde.tw/cp2020/content/SSH.html \n 也說過如何設置ssh對github連線， 不過因不熟悉如何操作，所以在本周重新再設定一次( 如下面的網址 ) \n http://mde.tw/cd2021/content/SSH%20%E4%BA%86%E6%B2%92.html \n 下列為老師所拍攝的教學影片 \n \n \n \n 4/1 在heroku上創建一個帳號，去a.kmol.info.88，下載heroku.7z至隨身系統中，如下面網址操作 \n http://mde.tw/lab/content/Heroku.html \n \n', 'tags': '', 'url': 'W5.html'}, {'title': 'W6W7', 'text': '操作heroku使其跟github同步 \n', 'tags': '', 'url': 'W6W7.html'}, {'title': 'W8', 'text': '開始製作分組專題 \n 先了解Topic0  http://mde.tw/wcm2021/content/Topic%200.html \xa0中怎麼從學校教務主機拉出我們班四設計一甲的課表 \n 也拉出實驗室排時間的課表\xa0 http://mde.tw/wcm2021/content/W7.html \xa0如此網址所述。 \n', 'tags': '', 'url': 'W8.html'}, {'title': 'W9', 'text': '期中分組報告 \n', 'tags': '', 'url': 'W9.html'}, {'title': 'W10', 'text': '設定ssh\xa0 \n', 'tags': '', 'url': 'W10.html'}, {'title': 'W11 W12', 'text': '下載robodk這個程式 \n', 'tags': '', 'url': 'W11 W12.html'}, {'title': 'W13', 'text': '開始使用 Google Meet 遠距上課 \n', 'tags': '', 'url': 'W13.html'}, {'title': 'W14', 'text': '操作robodk這個程式，並看看能不能正常運作 \n', 'tags': '', 'url': 'W14.html'}, {'title': 'W15', 'text': '小組錄製討論畫面 \n 並放到分組網站上 \n', 'tags': '', 'url': 'W15.html'}, {'title': 'W16', 'text': '操作fossil，建立靜態網頁，使其與github同步 \n \n', 'tags': '', 'url': 'W16.html'}, {'title': '網路環境', 'text': '之前在學校都是利用學校網路進行更新， 因為遠距教學，所以需要改網路才能夠push \n \n \n 因為是使自己的網路，所以需要把proxy 的選項改為None \n \n \n \n', 'tags': '', 'url': '網路環境.html'}, {'title': 'Heroku 網站', 'text': '步驟1: \xa0 ( 建立 Heroku 帳號 ) 進入 \xa0 https://heroku.com , 利用學校的 @gm 註冊一個 Heroku 帳號 \n 步驟2: \xa0 ( 建立 Heroku app ) 登入 Heroku 後，先以 s + 學號 建立第一個 app \n 步驟三: \xa0 (下載 Heroku CLI) 從 \xa0 http://a.kmol.info:88/heroku.7z \xa0 下載 Heroku cli 程式檔案，解開至隨身碟 Y: 所在位置 \n 步驟四: \xa0 ( 修改命令搜尋路徑 ) 修改隨身系統的啟動批次檔案, 讓 Windows 的命令視窗中可以執行 heroku.exe，重新啟動已經納入可執行 heroku.exe 的隨身碟 start_ipv6.bat 或 start_ipv4.bat中 \n 步驟五: \xa0 ( 測試 heroku 執行 ) 重新打開start_ipv6.bat，在命令列中執行輸入 heroku version，如果有回應表示有設定成功 \n \n 步驟六: \xa0 ( 設定 heroku 代理主機 ) 在 y:\\home_ipv6 下的 .giconfig 中， 以 git config --global http.proxy "http://your_proxy:port" 進行設定. \n 在 start_ipv6.bat 中加入: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n \n \n \n REM  for   heroku login \n REM set HTTP_PROXY=http: //[2001:288:6004:17::53]:3128 \n REM set HTTPS_PROXY=http: //[2001:288:6004:17::53]:3128 \n \n \n \n \n \n 因為是用自己得網路，所以要在前面打REM \n \n \n \n \n \n 步驟七: \xa0 ( 設定同步倉儲 ) 針對利用 Heroku 同步 Github Pages 上的網站內容, 只需要透過 git remote add (Heroku 指令為 heroku git:remote -a heroku_倉儲_名稱, 之後只要在 heroku login 狀態下, 可以直接利用 git push) 在近端設定一個連線到 Heroku 倉儲的代號, 就能在每次更新 Github Pages 倉儲後, 再將內容同步至 Heroku.\xa0 \n \n 步驟八: \xa0 ( 以 git 進行提交推送 ) 利用 heroku git:remote -a 設定的同步倉儲其推送名稱內定為 "heroku", 使用者只要使用 git push heroku 就可以將改版內容推送到對應的 Heroku app 倉儲. \n \n', 'tags': '', 'url': 'Heroku 網站.html'}, {'title': '網路直播', 'text': '點選右上角的進行直播 \n \n \n \n \n 第一次進行直播需要等24小時才能啟用完成 \n \n \n \n \n \n \n 輸入標題及其他一些設定 \n \n \n \n \n \n 即可進行直播 \n \n \n \n \n', 'tags': '', 'url': '網路直播.html'}, {'title': 'Fossil', 'text': '小組操作影片網址 \n https://www.youtube.com/watch?v=qg9JmMrDFNw \n https://www.youtube.com/watch?v=b4gaPmvRxHM \n https://www.youtube.com/watch?v=vZg9ktF6GQ \n \n 以下為fossil的操作指令 \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'Fossil.html'}, {'title': 'Robodk', 'text': '\n \n 我是用自己的網路操作Robodk，所以要先找到ipv4的位置，打ipconfig /all，即可找到自己ipv4的位置。 \n \n \n \n \n \n \n 接著把robodk522_protable>example>pick_and_place裡面的pick_and_place.py拉到SciTE裡，在Robolink裡打入自己的ipv4位置 \n \n \n \n \n \n \n \n 打開Robodk.exe，按左上角的資料夾圖案，選取example中除了pick_and_place.py之外的其他檔案後開啟 \n \n \n \n \n \n \n 按工具>選項 \n \n \n \n \n \n 打開選項後，勾取允許外部API \n \n \n \n \n \n 點選API服務器IP後，確定網路位置正確後按OK \n \n \n \n \n 回到pick_and_place.py的SciTE中點選Tools Go，即可啟用Robodk \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'Robodk.html'}]};