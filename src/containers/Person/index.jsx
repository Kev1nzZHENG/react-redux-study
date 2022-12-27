import React, { useRef } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { addPerson } from '../../redux/actions/person'


function Person(props) {
	const nameNode = useRef();
	const ageNode = useRef();

	function addPerson() {
		const name = nameNode.current.value
		const age = ageNode.current.value * 1
		const personObj = { id: nanoid(), name, age }
		props.addPerson(personObj)
		nameNode.value = ''
		ageNode.value = ''
	}

	return (
		<div>
			<h2>我是Person组件,上方组件求和为{props.count}</h2>
			<input ref={nameNode} type="text" placeholder="输入名字" />
			<input ref={ageNode} type="text" placeholder="输入年龄" />
			<button onClick={addPerson}>添加</button>
			<ul>
				{
					props.persons.map((p) => {
						return <li key={p.id}>{p.name}--{p.age}</li>
					})
				}
			</ul>
		</div>
	)
}


/* class Person extends Component {

	addPerson = () => {
		const name = this.nameNode.value
		const age = this.ageNode.value * 1
		const personObj = { id: nanoid(), name, age }
		this.props.addPerson(personObj)
		this.nameNode.value = ''
		this.ageNode.value = ''
	}

	render() {
		return (
			<div>
				<h2>我是Person组件,上方组件求和为{this.props.count}</h2>
				<input ref={c => this.nameNode = c} type="text" placeholder="输入名字" />
				<input ref={c => this.ageNode = c} type="text" placeholder="输入年龄" />
				<button onClick={this.addPerson}>添加</button>
				<ul>
					{
						this.props.persons.map((p) => {
							return <li key={p.id}>{p.name}--{p.age}</li>
						})
					}
				</ul>
			</div>
		)
	}
} */

export default connect(
	state => ({
		persons: state.persons,
		count: state.count.sum
	}),//映射状态
	{ addPerson }//映射操作状态的方法
)(Person)
