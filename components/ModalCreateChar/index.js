import React from 'react'

import * as S from './styled'

function ModalCreateChar({closeModal}) {
  return (
    <S.ModalBackground>
      <S.ModalCard>
        <S.ModalCardCloseButton>
          <S.CloseIcon size={40} onClick={closeModal}/>
        </S.ModalCardCloseButton>

        <S.ModalCardTitle>New Character</S.ModalCardTitle>
        <S.ModalCardFormLabel>Name</S.ModalCardFormLabel>
        <S.ModalCardFormInput type="text"/>
        <S.ModalCardFormLabel>Race</S.ModalCardFormLabel>
        <S.ModalCardFormInput type="text"/>
        
        <S.ModalCardFormLabel>Class</S.ModalCardFormLabel>
        <S.ModalCardFormInput type="text"/>
        <S.ModalCardFormLabel>Level</S.ModalCardFormLabel>
        <S.ModalCardFormInput type="phone" maxLength={2}/>

        <S.ModalCardInteractionWrapper>
          <a>Delete</a>
          <a>Create</a>
        </S.ModalCardInteractionWrapper>
        
      </S.ModalCard>      
    </S.ModalBackground>
  )
}

export default ModalCreateChar
