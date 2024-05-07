@Component
export default struct Progressbar{
  value:number=0
  build(){
    Progress({ value: this.value })
      .size({ width: '90%' })
      .color($r('app.color.themes_color'))
      .backgroundColor($r('app.color.bottom_chooser_color'))
      .style({ strokeWidth: 18 })
      .padding({top:30})
  }
}