import React, { PropTypes } from 'react';
import Modal from 'react-bootstrap/lib/Modal';

const { Header, Title, Body, Footer } = Modal;

const { bool, func, node } = PropTypes;

const propTypes = {
  children:  node,
  onCancel:  func.isRequired,
  animation: bool,
  footer:    node,
  header:    node,
  show:      bool
};

function BodyModal( props ) {

  const { animation, header, footer, onCancel, children, show } = props;
  const showModal = show || typeof show === 'undefined';

  return (
    <Modal
      {...props}
      animation    = {animation || false}
      container    = {document.getElementById( 'twola-content' )}
      enforceFocus = {false}
      onHide       = {onCancel}
      show         = {showModal}
    >
      <Header>
        <Title>{header}</Title>
      </Header>
      <Body className="bsstatusmodal">{children}</Body>
      <Footer>{footer || ''}</Footer>
    </Modal>
  );
}

BodyModal.propTypes = propTypes;

export default BodyModal;
