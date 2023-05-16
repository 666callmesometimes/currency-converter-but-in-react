class App extends React.Component{

    state = {
        valuermb: null,
        valuepln: null,
        valueusd: null,
        checkbox: localStorage.getItem('checkbox') === 'true' ? true : false

    }

    rmbConvert = (e) => {

        this.setState({
            valuermb: e.target.value,
            valuepln: (e.target.value * 0.63).toFixed(2),
            valueusd: (e.target.value * 0.15).toFixed(2),
        })
    }

    plnConvert = (e) => {

        this.setState({
            valuermb: (e.target.value * 1.61).toFixed(2),
            valuepln: e.target.value,
            valueusd: (e.target.value * 0.23).toFixed(2),
        })
    }

    usdConvert = (e) => {

        this.setState({
            valuermb: (e.target.value * 6.88).toFixed(2),
            valuepln: (e.target.value * 4.29).toFixed(2),
            valueusd: e.target.value,
        })
    }

    handleClick = () => {
        const checkbox = !this.state.checkbox;
        this.setState({ checkbox });
        localStorage.setItem('checkbox', checkbox);
    }

    componentDidMount() {
        const checkbox = localStorage.getItem('checkbox') === 'true' ? true : false;
        this.setState({ checkbox });
      }

    render(){

        return(
            <>
            <div className={this.state.checkbox ? 'clicked' : ''}>
            RMB: <input className={this.state.checkbox ? 'dark' : ''} type="number" id="rmb" placeholder="Insert value" value={this.state.valuermb} onChange={this.rmbConvert}/>¥
            <br/>
            PLN: <input className={this.state.checkbox ? 'dark' : ''} type="number" id="pln" placeholder="Insert value" value={this.state.valuepln} onChange={this.plnConvert} />zł
            <br/>
            USD: <input className={this.state.checkbox ? 'dark' : ''} type="number" id="usd" placeholder="Insert value" value={this.state.valueusd} onChange={this.usdConvert}/>$
            <br/><br/>
            <label><input type="checkbox" checked={this.state.checkbox} onClick={this.handleClick} className={'switch'}/>Darkmode/lightmode</label>
            </div>
            </>
        );
    }
}

ReactDOM.render(<App/> , document.querySelector("#root"));
