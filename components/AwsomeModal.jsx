import React from 'react'
import Modal from 'react-modal'
const AwsomeModal = props =>class extends React.Component{
    render(){
        return(
            <Modal
            isOpen={props.isOpen}
            aria={{
                labelledby: "heading",
                describedby: "full_description"
            }}>
                {props.component}
            </Modal>
        )
    }
}
export default AwsomeModal