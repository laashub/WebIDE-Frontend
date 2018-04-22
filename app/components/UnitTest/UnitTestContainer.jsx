import React, { Component } from 'react'
import { observer } from 'mobx-react'
import state from './state'

@observer
class UnitTestContainer extends Component {
  render () {
    return (
      <div className='unit-test-output'>
        <div className='sum'>
          错误 {state.testOutput.count.value} | 跳过 {state.testOutput.ignoreCount.value} | 运行时间 {state.testOutput.runTime.value}
        </div>
        {JSON.stringify(state.testOutput.failures)}
      </div>
    )
  }
}

export default UnitTestContainer
