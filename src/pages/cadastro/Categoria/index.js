import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../componentes/PagesDefault';
import Button from '../../../componentes/Button';
import FormField from '../../../componentes/FormField';

function CadastroCategoria() {
 
  const valoresIniciais = {
    nome:'',
    descricao:'',
    cor:'',
  }
  const[categorias, setCategorias] = useState([]);
  const [values, setValues] = useState('valoresIniciais');

  function setValue(chave, valor){
    setValues({
      ...values,
      [chave]: valor,
    })
  }
  function handleChange(infosDoEvento){
    setValue(infosDoEvento.target.getAttribute('name'),
     infosDoEvento.target.value
     );
  }

  useEffect(() =>{
   //  if(window.location.href.includes('localhost')) {
      console.log('olá Brasil');
      const URL_TOP = 'http://localhost:8080/categorias';
      fetch(URL_TOP)
       .then(async (respostaDoServidor) =>{
     //   if(respostaDoServer.ok) {
          const resposta = await respostaDoServidor.json();
          setCategorias([
            ...resposta,
          ]);
//return; 
    //    }
  //      throw new Error('Não foi possível pegar os dados');
  //     }
  });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>
      
      <form onSubmit={function handleSubmit(infosDoEvento){
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);
        setValues(valoresIniciais)
      }}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange= {handleChange}
        />
         <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange= {handleChange}
        />
        <FormField
          label="Cor"
          type = "color"
          name = "cor"
          value={values.cor}
          onChange= {handleChange}
        />
        <Button>
            Cadastrar
        </Button>
      </form> 

      {categorias.length === 0 && (
        <div>
        Loading...
      </div>
  )}

            <ul>
                {categorias.map((categoria) =>(
                    <li key={`${categoria.nome}`}>
                      {categoria.nome}
                    </li> 
                  ))}
            </ul>

      <Link to="/">
          <h2>Voltar para a tela inicial</h2>
      </Link>
    </PageDefault>
    )
  }
export default CadastroCategoria;