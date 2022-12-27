// 引入Count UI组件
import CountUI from '../../components/Count'
// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

import { CreateIncrementAction, CreateDecrementAction, CreateIncrementAsyncAction } from '../../redux/count_action'

/* 
    1、mapStateToProps函数返回的是一个对象；
    2、函数的第一个参数为store.getState()
    3、返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value；
    4、mapStateToProps用于传递状态
*/ 
function mapStateToProps(state) {
    return { count: state }
}

/* 
    1、mapDispatchToProps函数返回的是一个对象；
    2、函数的第一个参数为store.dispatch
    3、返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value；
    4、mapStateToProps用于传递操作状态的方法(action)
*/

function mapDispatchToProps(dispatch) {
    return {
        jia: number => dispatch(CreateIncrementAction(number)),
        jian: number => dispatch(CreateDecrementAction(number)),
        jiaAsync: (number,time) => dispatch(CreateIncrementAsyncAction(number,time)),
    }
}


// 使用connect()()创建并暴露一个Count的容器组件
const CountContainer = connect(mapStateToProps, mapDispatchToProps)(CountUI);

export default CountContainer;
