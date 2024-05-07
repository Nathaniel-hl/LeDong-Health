import router from '@ohos.router'

@Preview
@Component
export default struct bottomNextStep {
  //是否含有上一步，默认为有
  hasBefore: Boolean = true
  //是否含有下一步，默认为有，如果没有则是最后一面
  hasNext: Boolean = true
  //当前页面索引号
  index:number = 0
  //url数组，存储数据选择中的所有跳转页面
  urls: string[]=[
    'view/GuidancePagePackage/GuidancePage',
    'view/GuidancePagePackage/DataChoice_Gender_Age',
    'view/GuidancePagePackage/DataChoice_height_weight',
    'view/GuidancePagePackage/DataChoicePage_condition',
    'view/GuidancePagePackage/DataChoicePage_like',
    'view/HomePagePackage/HomePage'
  ]
  build() {
    Row() {
      //上一页按钮
      Text(this.hasBefore ? '<     ' : '      ')
        .fontSize(40)
        .padding({ left: 15 })
        .onClick(()=>{
          if(this.hasBefore){
            router.clear()
            router.pushUrl({url:this.urls[this.index-1]})
          }
        })

      //语音输入按钮
      Image($r('app.media.speakInputIcon'))
        .width('31%')
        .height('72%')
        .objectFit(ImageFit.Contain)
        .padding({ bottom: 10 })

      //下一页按钮
      Row() {
        Text(this.hasNext ? '下一步' : ' 完成 ')
          .fontSize(20)

        Text('>')
          .fontSize(40)
          .padding({ right: 15 })
      }.onClick(() => {
        router.clear()
        router.pushUrl({url:this.urls[this.index+1]})
      })
    }
    .width('100%')
    .height('20%')
    .backgroundColor($r('app.color.bottom_chooser_color'))
    .alignItems(VerticalAlign.Center)
    .justifyContent(FlexAlign.SpaceBetween)
  }
}