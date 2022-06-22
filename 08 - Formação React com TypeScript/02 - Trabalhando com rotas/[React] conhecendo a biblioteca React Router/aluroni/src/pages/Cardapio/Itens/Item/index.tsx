import style from './Item.module.scss';
import itens from './../itens.json';
import classNames from 'classnames';

type Props = typeof itens[0];

const Item = (props: Props) => {
    const {
        title,
        description,
        category,
        price,
        serving,
        size,
        photo,
    } = props;

    return(
        <div className={style.item}>
            <figure className={style.item__imagem}> 
                <img src={photo} alt={title} />
            </figure>
            <article className={style.item__descricao}>
                <header className={style.item__titulo}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </header>
                <div className={style.item__tags}>
                    <div className={classNames({
                        [style.item__tipo]: true,
                        [style[`item__tipo__${category.label.toLowerCase()}`]]: true
                    })}>
                        {category.label}
                    </div>
                    <div className={style.item__porcao}>
                        {size}g
                    </div>
                    <div className={style.item__qtdpessoas}>
                        Serve {serving} pessoa{serving === 1? '' : 's'}
                    </div>
                    <div className={style.item__valor}>
                        {price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Item;