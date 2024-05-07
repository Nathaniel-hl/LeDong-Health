import HashMap from '@ohos.util.HashMap';
/*
 * 运动数据卡片
 * 传入参数：
 * 运动数据名称
 * 运动数据
 * */
@Preview
@Component
export default struct ExerciseDataCard {
  //单位
  units:HashMap<string,string>=new HashMap()
  //运动数据索引号
  unit:string='公里'
  //运动数据
  num: number = 1.23
  //运动名称
  name:string = '步行'

  async aboutToAppear(){
    //在hashmap中添加名称和对应的单位
    await this.units.set('步行', '公里')
    await this.units.set('跑步', '公里')
    await this.units.set('舞蹈', '分钟')
    await this.units.set('游泳', '米')
    this.units.set('骑行', '公里')

    //通过名称得到对应的单位储存在unit中
    this.unit=this.units.get(this.name)
    console.log('aaa')
  }

  build() {
    Column() {
      //累计文字
      Row() {
        Text('累计' + this.name)
          .fontSize(20)
          .fontWeight(600)
      }.width('100%')
      .padding({ left: 10, top: 10 })


      Row() {
        Text(this.num + '')
          .fontSize(100)
          .fontColor(Color.White)

        //显示单位
        Text(this.unit)
          .fontSize(30)
          .fontColor(Color.White)
      }.alignItems(VerticalAlign.Bottom)

      Row() {

        //热身按钮
        Button('热身')
          .width('30%')
          .fontSize(30)
          .fontColor(Color.Black)
          .backgroundColor(Color.White)
          .fontWeight(400)
          .height('20%')

        //开始按钮
        Button('开始')
          .width('30%')
          .fontSize(30)
          .fontColor(Color.Black)
          .backgroundColor(Color.White)
          .fontWeight(400)
          .height('20%')

        //音乐按钮
        Button('音乐')
          .width('30%')
          .fontSize(30)
          .fontColor(Color.Black)
          .backgroundColor(Color.White)
          .fontWeight(400)
          .height('20%')
      }
      .justifyContent(FlexAlign.SpaceAround)
      .width('100%')
      .padding({ top: '5%' })

    }
    .height('30%')
    .width('90%')
    .backgroundImage('view/ExercisePagePackage/exerciseCardBackgroundPic.png')
    .backgroundImageSize({ width: '100%', height: '150%' })
    .backgroundImagePosition({ y: -200 })
    .borderRadius(20)

  }
}

class exerciseData {
  name: string
  unit: string

  constructor(name: string, unit: string) {
    this.name = name
    this.unit = unit
  }
}

