import React from 'react'
import Modal from 'react-modal'
const AwsomeModal = props =>(
        <Modal
      isOpen={props.isOpen}
      aria={{
          labelledby: "heading",
          describedby: "full_description"
      }}>
      {props.children}
      </Modal>
  )
export default AwsomeModal