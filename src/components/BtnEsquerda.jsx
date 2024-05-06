import css from './BtnEsquerda.module.css'

export default function BtnEsquerda(){
    return(
        <div>
            <div className={css.divbtncireita}>
                <button className={css.btndireita}>Entrar</button>
            </div>
        </div>
    );
}