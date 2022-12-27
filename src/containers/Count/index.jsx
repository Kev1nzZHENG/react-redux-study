import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    increment,
    decrement,
    incrementAsync
} from '../../redux/actions/count'
export default function Count() {

    const selectNumberRef = useRef()
    const dispatch = useDispatch();

    const sum = useSelector((state) => {
        return state.count.sum;
    })
    const personCount = useSelector((state) => {
        return state.persons.length;
    })

    //加法
    function handleIncrement() {
        const { value } = selectNumberRef.current;
        // this.props.increment(value * 1)
        dispatch(increment(value * 1));
    }
    //减法
    function handleDecrement() {
        const { value } = selectNumberRef.current;
        // this.props.decrement(value * 1)
        dispatch(decrement(value * 1))
    }
    //奇数再加
    function handleIncrementIfOdd() {
        const { value } = selectNumberRef.current;
        if (sum % 2 !== 0) {
            dispatch(increment(value * 1))
        }
    }
    //异步加
    function handleIncrementAsync() {
        const { value } = selectNumberRef.current;
        dispatch(incrementAsync(value * 1, 500))
    }

    return (
        <div>
            <h2>我是Count组件,下方组件总人数为:{personCount}</h2>
            <h4>当前求和为：{sum}</h4>
            <select ref={selectNumberRef}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>&nbsp;
            <button onClick={handleIncrement}>+</button>&nbsp;
            <button onClick={handleDecrement}>-</button>&nbsp;
            <button onClick={handleIncrementIfOdd}>当前求和为奇数再加</button>&nbsp;
            <button onClick={handleIncrementAsync}>异步加</button>&nbsp;
        </div>
    )
}
