import React from 'react'
import store from './store'
import { connect } from 'react-redux'
import { IncBtn,DecBtn,ResBtn } from './action'
import Styles from "../../styles/counter.module.css"


function index({value,IncBtn,DecBtn,ResBtn}) {
  return (
    <div className={Styles.bgContainer}>
        <div className={Styles.alignment}>
    <div className={Styles.counterCard}>
       
          
           <div className={Styles.counterText}>Count:<span style={{color:"orange"}}>{value}</span></div>
           <div style={{margin:"20px"}}>
           <button className={Styles.Btn} onClick={IncBtn}>Increment</button>
           <button className={Styles.Btn} onClick={ResBtn}>Reset</button>
           <button className={Styles.Btn} onClick={DecBtn}>Decrement</button>
           </div>
     
    </div>
    </div>
    </div>
  )
}
const mapStateToProps= state =>({
    value:state
})
export default connect (mapStateToProps,{IncBtn,DecBtn,ResBtn})(index)
