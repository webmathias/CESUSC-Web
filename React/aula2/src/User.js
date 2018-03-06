import React, {Component} from 'react';


class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            cpf: '',
            loading: false
        }
        this.save = this.save.bind(this);
        this.onCPFChanged = this.onCPFChanged.bind(this);
        this.onNomeChanged = this.onNomeChanged.bind(this);
    }

    onCPFChanged(e) {
        this.setState({
            cpf: e.target.value
        });
    }

    onNomeChanged(e) {
        this.setState({
            nome: e.target.value
        });
    }

    save() {
        fetch('http://localhost:3001/user', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: this.state.nome,
                cpf: this.state.cpf
            })
        });
        return false;
    }

    componentDidMount() {

    }

    render() {
        return (<form onSubmit={this.save}>
            <label>CPF</label>
            <input value={this.state.cpf}
                   onChange={this.onCPFChanged}/>
            <label>Nome</label>
            <input value={this.state.nome}
                   onChange={this.onNomeChanged}/>
            <button type="submit">Salvar</button>
        </form>);
    }
}

export default User;
