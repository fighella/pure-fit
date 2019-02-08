import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import AddToCalendar from 'react-add-to-calendar';

export class ClassModal extends Component {
  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            {this.props.yoga_class.class_name}
          </ModalHeader>
          <ModalBody>Full Class Info here</ModalBody>
          <ModalFooter>
            <AddToCalendar event={this.props.event} />
            <Button color="primary" onClick={this.toggle}>
              Do Something
            </Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
