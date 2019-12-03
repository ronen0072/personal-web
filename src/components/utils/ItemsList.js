import React, {Component} from 'react';
import Icons from './Icons'
import { connect } from 'react-redux'
class ItemsList extends Component {
    remove = (e)=>{
        let list, listName;
        if(this.props.id === 'languages_list'){
            list = this.props.languages;
            listName = 'languages';
        }
        else{
            list = this.props.libraries;
            listName = 'libraries';
        };
        this.props.removeItem(listName, list, e.target.title)
    }
   
    render(){
        let list;
        if(this.props.id === 'languages_list'){
            list = this.props.languages;
        }
        else{
            list = this.props.libraries;
        }
        if(list && list.length > 0){
            return(
                <ul className="collection">
                    {list.map( (item, index)=>{
                        console.log(item.name);
                        return(
                            <li className="collection-item" key={index}>
                                <a className="btn-floating btn-small"><Icons name={item} className='brand'/></a>
                                <span className='padding-left'>{item}</span>
                                <a className="btn-floating btn-small red remove" onClick={this.remove}><i  title={item} className="material-icons ">remove</i></a>
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
}
const mapStateToProps = (state) => {
    return {
      languages: state.itemsList.languages,
      libraries: state.itemsList.libraries
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
      removeItem: (listName, list, item) => dispatch({ type: 'REMOVE_ITEM', listName, list, item })
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(ItemsList);