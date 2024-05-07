
@Entry
@Component
struct LoginPage_register {
  @State message: string = 'Hello World'
  //倒计时初始值
  @State countDown: number=10
  //定时器序号
  intervalId:number=0
  //获取按钮文字
  @State getCodeButtonText:String='获取验证码'
  //按钮是否可用状态
  @State getCodeButtonEnabled:boolean=true
  build() {
    Column({space:10}){
      //登录文字
      Text('登录')
        .fontSize(50)
        .fontWeight(FontWeight.Bold)
      Divider()

      //输入手机号码
      TextInput({placeholder:'请输入手机号码:'})
        .width('80%')
        .type(InputType.Number)

      //输入验证码和获取验证码
      Row({space:10}){
        TextInput({placeholder:'请输入验证码:'})
          .width('55%')
          .type(InputType.Number)

        //获取验证码
        Button(this.getCodeButtonText+'')
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
          .enabled(this.getCodeButtonEnabled)
      }
      .width('80%')
      .justifyContent(FlexAlign.SpaceBetween)

      //登录与注册按钮
      Row(){
        Button('登录')
          .margin({right:'10%'})

        Button('注册')
          .margin({left:'10%'})
      }
    }
    .height('100%')
    .width('100%')
    .backgroundColor($r('app.color.background_color'))
    .justifyContent(FlexAlign.Center)
  }
}