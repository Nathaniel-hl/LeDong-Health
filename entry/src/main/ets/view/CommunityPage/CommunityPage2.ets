import bottomChooser from '../../bottomChooser'
import postCard from './postCard'
import router from '@ohos.router'

//文字统一样式
@Extend(Text) function textPattern(){
  .fontSize(25)
  .fontWeight(400)
}

@Entry
@Component
struct CommunityPage2 {
  @State message: string = 'Hello World'

  build() {
    Column() {
      //顶部title和返回按钮
      Row(){
        Text('<')
          .fontSize(50)
          .fontColor(Color.Black)
          .onClick(()=>{
            router.back()
          })
        Blank()
        Text('社区')
          .fontSize(30)
          .fontWeight(400)
          .fontColor(Color.Black)
          .padding({right:20})
        Blank()

      }
      .width('100%')
      .backgroundColor(Color.White)
      .height('10%')

      //中间帖子展示页面
      List({space:10}){

        //社区圈子+去发帖文字
        ListItem(){
          Row(){
            Text('社区圈子')
              .textPattern()
              .fontColor(Color.Black)

            Blank()

            Text('去发帖')
              .textPattern()
              .fontColor(Color.Black)
          }
          .width('100%')
          .margin({top:10})
        }

        //我的爱好群
        ListItem(){
          Row(){
            Image('/view/CommunityPage/group_PIc.png')
              .objectFit(ImageFit.Fill)
              .width(40)

            Text('我的爱好群')
              .textPattern()
              .margin({left:10})
              .fontColor(Color.Black)

            Blank()

            Text('>')
              .fontSize(40)
              .fontWeight(600)
              .fontColor(Color.Black)
          }
          .width('100%')
          .backgroundColor(Color.White)
          .borderRadius(20)
          .height('10%')
        }

        //推文
        ListItem(){
          postCard({index:0})
        }

        ListItem(){
          postCard({index:1,isFollowed:false})
        }

        ListItem(){
          postCard({index:2})
        }
      }
      .width('90%')
      .height('77%')
      //底部页面跳转
      Blank()
      bottomChooser({ isCommunityPage: true })
    }
    .height('100%')
    .width('100%')
    .backgroundColor($r('app.color.background_color'))
  }
}
