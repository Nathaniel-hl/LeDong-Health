@Component
export default struct searchHeader {
  build() {
    Row() {
      Search({ placeholder: '24式太极拳' })
        .textFont({ size: 18 })
        .searchButton('搜索')
        .placeholderColor(Color.White)
        .backgroundColor(Color.Black)

    }
    .width('65%')
  }
}