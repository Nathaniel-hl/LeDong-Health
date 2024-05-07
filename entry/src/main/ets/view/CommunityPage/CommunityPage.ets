import bottomChooser from '../../bottomChooser'
import CommunityServiceCard from './communityServiceCard'
import router from '@ohos.router'

@Entry
@Component
struct CommunityPage {
  @State message: string = 'Hello World'
  @State user_community_name:string='智慧社区'
  build() {
    Column() {
      //list容器用于页面滑动
      List({space:10}){

        ListItem(){
          Column(){
            Blank(30)
          }
        }

        //显示社区名称
        ListItem(){
          Column() {
            Row() {
              Text('社区  ')
                .fontSize(30)
                .fontColor(Color.Black)

              Image('/view/CommunityPage/GPS_Pic.png')
                .objectFit(ImageFit.Fill)
                .size({width:20,height:25})
              Text(' 切换')
                .fontSize(20)
                .fontColor(Color.Black)
            }
            .alignItems(VerticalAlign.Bottom)
            .width('90%')

            Row() {
              Text('我的社区')
                .fontSize(20)
                .margin({right:'10%'})
                .fontColor(Color.Black)
              Text(this.user_community_name)
                .fontSize(40)
                .fontWeight(600)
                .fontColor(Color.Black)
            }
            .alignItems(VerticalAlign.Bottom)
            .width('90%')
          }
          .width('90%')
          .padding({left:'5%'})
          .backgroundColor(Color.White)
          .borderRadius(20)
        }

        //社区活动预告文字
        ListItem(){
          Row(){
            Text('社区活动预告')
              .fontSize(25)
              .fontColor(Color.Black)
          }
          .width('90%')
        }

        //社区活动预告图片
        ListItem(){
          Image('/view/CommunityPage/temp_activity.png')
            .interpolation(ImageInterpolation.High)
            .onClick(()=>{
              router.pushUrl({url:"view/CommunityPage/CommunityPage2"})
            })
        }

        //我的预约文字
        ListItem(){
          Row(){
            //喇叭图标
            Image('/view/ExercisePagePackage/trumpetPic.png')
              .objectFit(ImageFit.Fill)
              .height('30')
              .interpolation(ImageInterpolation.Medium)

            //我的预约文字
            Text('   我的预约')
              .fontSize(20)
              .fontColor(Color.Black)

            Blank()

            //跳转文字
            Text('>')
              .fontSize(30)
              .opacity(0.7)
              .fontColor(Color.Black)
          }
          .width('90%')
          .backgroundColor(Color.White)
          .borderRadius(20)

        }

        //社区服务文字
        ListItem(){
          Row(){
            Text('社区服务')
              .fontSize(25)
              .fontColor(Color.Black)
          }
          .width('90%')
        }

        //社区服务图标
        ListItem(){
          List({space:15}){
            ListItem(){
              CommunityServiceCard({index:0})
            }
            ListItem(){
              CommunityServiceCard({index:1})
            }
            ListItem(){
              CommunityServiceCard({index:2})
            }
          }
          .listDirection(Axis.Horizontal)
        }

      }
      .width('100%')
      .height('85%')
      .alignListItem(ListItemAlign.Center)

      //底部页面跳转
      bottomChooser({ isCommunityPage: true })
    }
    .height('100%')
    .width('100%')
    .backgroundColor($r('app.color.background_color'))
  }
}