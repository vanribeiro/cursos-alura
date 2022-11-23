import styles from './Item.module.scss'; 
import { Prato } from 'types/Prato';
import TagsPrato from 'components/TagsPrato';
import { useNavigate } from 'react-router-dom';
import { memo } from 'react';

function Item(props: Prato) {
  const { id, title, description, photo } = props;
  const navigate = useNavigate();
  id === 1 && console.log(title);

  return (
    <div className={styles.item} onClick={() => navigate(`/prato/${id}`)}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2> {title} </h2>
          <p> {description} </p>
        </div>
        <TagsPrato {...props} />
      </div>
    </div>
  );
}
/**
 * Usos da Função memo(<Componente />)
 * 
 * - Listas
 * - Filtros
 * - Renderização condicional
 * 
 * - Não deve ser usado em qualquer componente
 * - Seu objetivo é melhorar performance e não a de previnir renderizações, 
 *   pois pode levar a bugs, segundo a documentação
 * 
 */

export default memo(Item);
// export default Item;