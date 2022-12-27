/* 
    该文件专门为Count组件生成action对象
*/
import { INCREMENT, DECREMENT } from './constant'

export const CrateIncrementAction = (data) => {
    return { type: INCREMENT, data }
}

export const CrateDecrementAction = data => ({ type: DECREMENT, data })
