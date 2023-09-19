import React, { useState, useEffect } from 'react'
import Modal from 'react-modal';
import '../Create/create.css'



function Create() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const modalContent = (
    <div className='crea'>
      <h2>Создание публикации</h2>
      <p>Перетащите сюда фото и видео</p>

    </div>
  );
  useEffect(() => {
    openModal();

  }, [])

  return (
    <>
      <div>

        <Modal className='create' isOpen={modalIsOpen} onRequestClose={closeModal}>
          {modalContent}
          <div className="btns">
            <input className='create-input' type="file" />
            <button className='create-close' onClick={closeModal}>✖</button>
          </div>

        </Modal>
      </div>
    </>
  )
}


export default Create
