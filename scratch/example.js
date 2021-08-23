const MyFunc = () => {
  console.log('foo')
  const myOtherFunc = () => {
    console.log('bar')
  }
  myOtherFunc()

  console.log('end')
}

MyFunc()
