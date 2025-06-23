            const  sakfall = document.querySelector('.sakubox');   // 這行是抓取sakubox地個元素 把它丟進變數 sakfll 變成新的一個盒子
            let start = null;

            function  startsakura(){
            start = setInterval(() => {                             //這行是整個執行的邏輯核心 簡單講就是重複執行花瓣掉落的函數 每300毫秒=0.3秒重複執行
            const  saktime = document.createElement('div');        // 直接創造新的div 裝進變數saktime 這行應該是要讓櫻花無限產生的關鍵
            saktime.classList.add('sakucon')                      //變數div上一行定義了 = saktime 讓saktime這個變數增加.class 讓他能套用CSS事先建好的櫻花模板
            saktime.style.left = `${Math.random()*100}vw  `;     // 花瓣從左邊開始產生 從0~100% VW是寬度 換句話說 他會隨機在螢幕0~100%的寬度出現

            const size = Math.random()*20+10;                  //這邊決定花瓣的大小 亂數產生0~0.999999 乘20 = (0~19.99999)+10 等於每片大小介於10~30之間

            saktime.style.width = `${size}px`;            //變數寬 藉由上面的隨機產生給他
            saktime.style.height = `${size}px`;          //變數高也是同上   等於正式讓櫻花隨機大小

            const duration = Math.random() *3+4;           //讓花瓣維持秒數隨機 4~7秒

            saktime.style.animationDuration = `${duration}s`;  //4~7秒的隨機時間賦予每片櫻花

            saktime.style.animationDelay = `${Math.random()*2}s`  // 讓每個櫻花飄落的時間點都不同產生隨機

            sakfall.append(saktime); //一片櫻花完成 丟到盒子裡面 這個盒子就第一行設定的變數 sakfall

            setTimeout( ()=>{        //一段函數 可以讓某件事延遲發生
                saktime.remove();  // 刪除飄完的櫻花
            }, duration *1000 +2000  //毫秒轉成秒 並且+2秒 為了保證   動畫飄完沒問題

        );
        },300);  //0.3秒執行一次
        }

        startsakura(); //啟動櫻花函數

        const sun = document.querySelector('.sun') //抓到.sun 按鈕 掛上事件監聽
        const night = document.querySelector('.night') //抓到.night 按鈕 掛上事件監聽
        const btn = document.querySelector('.main_theme-switch') //抓到 按鈕外框 掛上事件監聽 直接對整個button掛上click 所以抓外框 

        btn.addEventListener('click',()=>{ 
            if(sun.classList.contains('active'))    //判斷sun的Classlist是否包含active
                {
               sun.classList.remove('active')     //上半部是停止功能 停止的時候要切換夜晚 要切換夜晚圖案就是add avtive
               night.classList.add('active')      //所以上面sun移除 下面night增加
                if (start){                      //if 迴圈裡是停止動畫 如果start有值表示在啟動
                clearInterval(start);           //停止定時器
                start = null ;                  //回傳空參數 停止動畫
        document.querySelectorAll('.sakucon').forEach(el =>el.remove()); //刪除所有.sakucon名稱的櫻花 (幾個不知道系統產生的)
                        }
                }
            
            else{                                      //如果開始
                night.classList.remove('active')    //夜晚圖案不顯示 改太陽圖案顯示
                sun.classList.add('active')           //太陽圖案要顯示表示啟動櫻花 表示加上active顯示
                if(!start){                             //如果Start沒有值 表示停止 停止不是我們要的所以要啟動!
                startsakura();                     //啟動動畫
                }
            }
            }
            );
 
 


