var React = require('react');
var ReactDOM = require('react-dom');
var target = document.getElementById('calculator');

class CalcRow extends React.Component {
    constructor() {
        super();
        this.state = {
            grade: null,
            weight: null,
            editable: true
        };
        // Fix this bindings on functions
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
    }
    
    edit (e) {
        this.setState({editable: true});
    }

    save () {
        this.setState({editable: false});
    }

    render() {
        if (this.state.editable) {
            return (<li>[input] [input] <button onClick={this.save}> [saveButton]</button></li>);
        }
        return (<li>[num] [num] <button onClick={this.edit}> [editButton]</button></li>);
    }
}

class Calculator extends React.Component {

    constructor() {
        super();
        this.state = {
            rows: [1,2,3]
        };
    }

    render(){
        let ret = [];
        this.state.rows.forEach(() => {
            ret.push(<CalcRow />);
        });
        return (<div>
                  <h1>This is the calculator component</h1>
                  {ret}
                </div>);

    }
}

ReactDOM.render(<Calculator />, target);
