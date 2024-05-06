import css from './BtnDireita.module.css'

export default function BtnDireita(){
    return(
        <div>
            <div className={css.divbtndireita}>
                <button className={css.btnDireita}>Cadastrar</button>
            </div>
        </div>
    );
}