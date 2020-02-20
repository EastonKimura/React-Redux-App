import React from "react"
import { connect } from "react-redux"
import { getData } from "../actions"

let i = 1;

const CharacterForm = props => {
  const handleGetData = e => {
    i += 1;
    e.preventDefault();
    props.getData(i)
  
  return (
    <>
      {props.isFetchingData ? (
        <div> Loading character </div>
      ) : (
          //searchform
          <button onClick={handleGetData}> Next Character</button>
        )}
    </>
  )
}
const mapStateToProps = state => {
  return {
    isFetchingData: state.isFetchingData
  }
}
export default connect(
  mapStateToProps,
  { getData }
)(CharacterForm)
}