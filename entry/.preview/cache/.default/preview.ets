struct preview{build(){Button(this.getCodeButtonText+'')
          .onClick(()=>{
            //验证码倒计时实现
            this.countDown--
            this.intervalId=setInterval(()=>{
              this.getCodeButtonEnabled=false
              this.getCodeButtonText=this.countDown+'s'
              if(this.countDown<0){
                clearInterval(this.intervalId)
                this.countDown=10
                this.intervalId=0
                this.getCodeButtonText='获取验证码'
                this.getCodeButtonEnabled=true
                return
              }
              this.countDown--
              
              //发送验证码实现
              
            },1000)
          })
          .width('40%')
          .enabled(this.getCodeButtonEnabled)}}