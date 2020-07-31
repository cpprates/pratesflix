import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';


function CadastroCategoria() {

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }

    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor, // nome: 'valor'
        })
    }

    function handleChange(infos) {
        // pega o valor da variável (direita) e coloca como nome da var
        const { getAttribute, value } = infos.target;
        setValue(
            getAttribute('name'),
            value
        );
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome} </h1>

            <form onSubmit={function handleSubmit(infosEvento) {
                infosEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);

                setValues(valoresIniciais);
            }} >

                {/* Nome da categoria */}

                {/* <FormField
                    label="Descricão"
                    type="???"
                    name="descricao"
                    value={values.nome}
                    onChange={handleChange} /> */}

                <div>
                    <label>
                        Descricão:
                        <textarea type="text"
                            name="descricao"
                            value={values.descricao}
                            onChange={handleChange} />
                    </label>
                </div>

                <div>
                    <label>
                        Cor:
                        <input type="color"
                            name="cor"
                            value={values.cor}
                            onChange={handleChange} />
                    </label>
                </div>

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`} >
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to='/'>
                Voltar para Home
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;