import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';

// Página do formulário de cadastro
const CadastroPage = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [idade, setIdade] = useState('');
  const [cartaoCredito, setCartaoCredito] = useState('');
  const [validadeCartao, setValidadeCartao] = useState('');
  const [cvv, setCvv] = useState('');
  const [opcaoSelecionada, setOpcaoSelecionada] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Cadastro realizado com sucesso!');
  };

  return (
    <div className="cadastro-page">
      <Link to="/home">
        <button className="voltar-home">Voltar para Home</button>
      </Link>
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>CPF:</label>
          <input
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Idade:</label>
          <input
            type="number"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Cartão de Crédito:</label>
          <input
            type="text"
            value={cartaoCredito}
            onChange={(e) => setCartaoCredito(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Validade do Cartão:</label>
          <input
            type="month"
            value={validadeCartao}
            onChange={(e) => setValidadeCartao(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>CVV:</label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Por que vc quer ser boostado?</label>
          <select value={opcaoSelecionada} onChange={(e) => setOpcaoSelecionada(e.target.value)} required>
            <option value="">Selecione</option>
            <option value="opcao1">causar inveja nos meus amigos</option>
            <option value="opcao2">ter um elo maior para betar mulheres no ARAM</option>
            <option value="opcao3">sou rico e prefiro dar dinheiro pros crias do que doar para alguma ONG</option>
            <option value="opcao4">me obrigaram a fazer isso (nao sei do q vc esta falando) ps: nao temos mais vagas para agiotas </option>
            <option value="opcao5">fui corneado pela webnamorada e quero fazer ela se arrepender disso fazendo ela se sentir inferior(in game)</option>
          </select>
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

// Página Quem Somos (Agora com os dois vídeos novos)
const QuemSomosPage = () => {
  return (
    <div className="quem-somos-page">
      <h4> conheca nossos jobbers</h4>

      {/* Contêiner para os vídeos lado a lado */}
      <div className="video-container">
        <div className="video-item">
          <h2>xPedrorj</h2>
          <video controls muted >
            <source src="/video/pedrozed.mp4" type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video>
        </div>

        <div className="video-item">
          <h2>Cabra</h2>
          <video controls muted >
            <source src="/video/cabrayetz.mp4" type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video>
        </div>
      </div>

      <Link to="/home">
        <button className="voltar-home">Voltar para Home</button>
      </Link>
    </div>
  );
};

// Página de Perguntas Frequentes
const PerguntasFrequentesPage = () => {
  return (
    <div className="perguntas-frequentes-page">
      <Link to="/home">
        <button className="voltar-home">Voltar para Home</button>
      </Link>
      <h1>Perguntas Frequentes</h1>
      <div>
        <h3> Porque caralhos tem que botar o cartao no cadastro se nem comprei nada ainda?</h3>
        <p>Resposta: uhmm... ern... digamos que precisamos desses dados para promocoes futuras</p>
      </div>
      <div>
        <h3> Qual é o preço para o boost?</h3>
        <p>Resposta: depende do quao afundado e ruim vc e</p>
      </div>
      <div>
        <h3> Quantos dias demora pra finalizar o job?</h3>
        <p>Resposta: como respondido na pergunda a cima, se vc tiver mt afundado e ganhando 10 pontos e perdendo 30, sera atribuidos custos adicionais pela sua ruindade sobrehumana, alem disso o prazo de entrega aumentara, se for uma conta normal demora entre 5-7 dias, esse valor diminui em relacao a vontade de comer do jobber</p>
      </div>
      <div>
        <h3> Como posso confiar na empresa?</h3>
        <p>Resposta: a elojorge crias depende 100% da cconfianca cliente-jobers por isso oferecemos diversos bonus para quem recomenda a empresa e descontos de fidelidade, se alguem te recomendou certamente ele gostou do trabalho e n foi ameacado de ir de vala</p>
      </div>
      <div>
        <h3> Existe algum tipo de garantia?</h3>
        <p>Resposta: concerteza, se o jober falhar no processo do seu job, alem de ficar 3 dias sem comer no porao da empresa e sem direito a represalias, o valor do job sera devolvido e/ou outro jober entrara em cena e upara divisoes adicionais</p>
      </div>
    </div>
  );
};

// Página inicial
const HomePage = () => {
  return (
    <div className="home-page">
      <div className="background-gif"></div>
      <div className="content">
        <h1>Bem Vindo a Elojorge Crias</h1>
        <div className="buttons-home">
          <Link to="/cadastro">
            <button>Ir para Cadastro</button>
          </Link>

          <Link to="/quem-somos">
            <button>Quem são vocês?</button>
          </Link>

          <Link to="/perguntas-frequentes">
            <button>Perguntas Frequentes</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/quem-somos" element={<QuemSomosPage />} />
        <Route path="/perguntas-frequentes" element={<PerguntasFrequentesPage />} />
      </Routes>
    </Router>
  );
};

export default App;