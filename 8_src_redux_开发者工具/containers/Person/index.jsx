import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { createAddPersonAction } from '../../redux/actions/person'

class Person extends Component {

    addPerson = () => {
        const name = this.NameNode.value;
        const age = this.AgeNode.value;
        const personObj = { id: nanoid(), name, age };
        this.props.addPerson(personObj);
        this.NameNode.value = '';
        this.AgeNode.value = '';
    }

    render() {
        return (
            <div>
                <h2>我是Person组件</h2>
                <h3>上面组件求和为：{this.props.sum}</h3>
                <input type="text" placeholder='输入名字' ref={c => this.NameNode = c} />
                <input type="text" placeholder='输入年龄' ref={c => this.AgeNode = c} />
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
}

export default connect(
    state => ({ persons: state.person, sum: state.count }), //映射状态
    { addPerson: createAddPersonAction }
)(Person)
