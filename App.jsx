const domContainer = document.querySelector('#root');

class TableItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: props.value,
        }
    }
    render(){
        const {value} = this.props;
        return (
        <tr>
        <td>{value[0]}</td>
        <td>{value[1]}</td>
        <td>{value[2]}</td>
        <td><button>Delete</button></td>
        </tr>
        );
    }
}
class Table extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {tdata} = this.props;
        return (
             tdata.map( (item,index)=><TableItem value={item} key={index} index={index}/>) 
        );
    }
}

class App extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            tableData: [],
            firstName: '',
            lastName:'',
            gender:''
        } 
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);  
    } 
    changeHandler(event){
        const {name,value} = event.target;
        this.setState({[name]:value});
    }
    submitHandler(event){
        event.preventDefault();
        const {tableData,firstName,lastName,gender} = this.state
        let middleArr=[];
        middleArr.push(firstName);
        middleArr.push(lastName);
        middleArr.push(gender);
        tableData.push(middleArr)
        console.log(tableData)
        this.setState({
            tableData,
            firstName: '',
            lastName:'',
            gender:'' 
        });
    }

    render(){
        return (
            <div>
        <div style={styles.container}  >
            <form style={styles.forms} onSubmit={this.submitHandler}>
            <label>Last Name:</label>
                <input style={styles.textInput} name="firstName" value={this.state.firstName} onChange={this.changeHandler} autoComplete="off" type="text"/>
            <label>First Name:</label>
                <input style={styles.textInput} name="lastName" value={this.state.lastName} onChange={this.changeHandler} autoComplete="off" type="text"/>
            <label>Gender:</label>
                <input style={styles.textInput} name="gender" value={this.state.gender} onChange={this.changeHandler} autoComplete="off" type="text"/>
                <button style={styles.addButton} type="submit">Add</button>
            </form>
       </div>
      
      <table>
  <tr>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Gender</th>
    <th>Delete ?</th>
  </tr>
   <Table tdata={this.state.tableData}/>
</table> 
        </div>
       )
    }
}

const styles={
    container: {
        display:'flex',
        alignItems: 'center',
        flexDirection:'column',
        marginBottom:'10px'
    },
    "textInput":{
        display:'block'
    },
    addButton:{
        'width':'100%'
    } 
}
ReactDOM.render(<App/>, domContainer);  