import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactplosiveModal from 'reactplosive-modal';

import { useAppDispatch } from '../../redux/redux-hooks';
import { clearBasket } from '../../redux/basket/basket';

interface IModalProps {
  isModalVisible: boolean;
  setIsModalVisible: (isModalVisible: boolean) => void;
}

const Modal: FC<IModalProps> = ({ isModalVisible, setIsModalVisible }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const closeModal = () => {
    setIsModalVisible(false);
    dispatch(clearBasket());
    navigate('/');
  };

  return (
    <ReactplosiveModal title={<h4>Aaccent</h4>} isVisible={isModalVisible} onClose={closeModal}>
      <p> Sucsess</p>
    </ReactplosiveModal>
  );
};

export default Modal;
