import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index' 

function Shop() {
  const dispatch = useDispatch()
  const {depositeMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch);
  const balance = useSelector(state => state.amount);

  return (
    <div>
        <h2 className="my-3">Deposite/Withdraw Money</h2>
        {/* Without Using BindActionCrerators */}
        
        {/* <button className="btn btn-primary my-2 mx-2" onClick={()=>{dispatch(actionCreators.depositeMoney(100))}}> + </button>
        Update Balance
        <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}> - </button> */}

        {/* With Bind Action Creters  */}

        <button className="btn btn-primary my-2 mx-2" onClick={()=>{depositeMoney(100)}}> + </button>
        Update Balance {balance}
        <button className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(100)}}> - </button>
    </div>
  )
}

export default Shop