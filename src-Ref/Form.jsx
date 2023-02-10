import React from 'react'

// export default function Form(props, ref) {
//   return (
//     <React.Fragment>
//       用户名：<input type="text" name='username' />
//       密码：<input type="password" name='password' />

//       <button onClick={() => {
//         console.log('props数据', props)
//         console.log('ref数据', ref)
//       }}>props打印</button>
//     </React.Fragment>
//   )
// }


export default React.forwardRef((props, ref) => {
  return (
    <form ref={ref}>
      用户名：<input type="text" name='username' />
      密码：<input type="password" name='password' />

      <button onClick={(e) => {
        e.preventDefault()
        console.log('props数据', props)
        console.log('ref数据', ref)
      }}>props打印</button>
    </form>
  )
})
