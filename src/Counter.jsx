import { Component, useState } from "react"

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      cnt: 0
    }
  }
  render() {

    const Increses = () => {
      this.setState((pur) => ({ cnt: pur.cnt + 1 }))
    }

    const Decreses = () => {
      if (this.state.cnt > 0) {
        this.setState((pur) => ({ cnt: pur.cnt - 1 }))
      }
    }

    const reset = () => {
      this.setState((pur) => ({ cnt: pur.cnt = 0 }))
    }

    return (
      <>
        <h1>Counter app</h1>
        <div>
          <button type="button" className="btn btn-success m-3" onClick={Increses} style={{ width: "80px" }}>+</button>
          <button type="button" className="btn" style={{ background: "lightpink", width: "100px" }}>{this.state.cnt}</button>
          <button type="button" className="btn btn-success m-3" onClick={Decreses} style={{ width: "80px" }}>-</button>
        </div>
        <button type="button" className="btn btn-success" onClick={reset}>Reset</button>
      </>
    )
  }
}


export default Counter