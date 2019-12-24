import React, {Component} from 'react';
import Icons from './Icons'
class ItemsList extends Component {
    state={
        list:[],
        toAdd:""
    }
    handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        });
      }
    componentWillReceiveProps= (nextProps) =>{
        this.setState({
            list: nextProps.list
        });
        console.log(nextProps.list);
      }
    remove = (e)=>{
        let removeItem, listName;
        listName = this.props.listName;
        removeItem = e.target.title;
        let newList = this.state.list.filter((item)=>{return removeItem !== item});
        this.setState({
          list: newList
        });
        this.props.remove(listName, removeItem);
    }
    add = () => {
        let addItem, listName;
        listName = this.props.listName;
        addItem = this.state.toAdd;
        console.log("to add this item: ", addItem);
        console.log(this.state.list);
        let newList = [...(this.state.list), addItem];
        this.setState({
            list: newList
        })
        this.props.add(listName, addItem);
    }
    displayTheList(){
        let list =this.state.list;
        if(list && list.length > 0){
            return(       
                <ul className="collection">
                    {list.map( (item, index)=>{
                        //console.log(item.name);
                        return(
                            <li className="collection-item" key={index}>
                                <button className="btn-floating btn-small"><Icons name={item} className='brand'/></button>
                                <span className='padding-left'>{item}</span>
                                <button className="btn-floating btn-small red remove" onClick={this.remove}><i  title={item} className="material-icons ">remove</i></button>
                            </li> 
                        )
                    })}

                </ul>
            )
        }
        else{
            return(
                <div></div>
            );
        }
    }

    render(){
        return(
            <div>
                <div className="input-field col s11 m5 no-padding">
                    <textarea id="toAdd" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    <label htmlFor="language_to_add">Language</label>           
                    {this.displayTheList()}
                </div>
                <div className="input-field col s1">
                    <span onClick={this.add} className="btn-floating pink"><i className="material-icons">add</i></span>
                </div>
            </div>
        )
    }
}

export default ItemsList;