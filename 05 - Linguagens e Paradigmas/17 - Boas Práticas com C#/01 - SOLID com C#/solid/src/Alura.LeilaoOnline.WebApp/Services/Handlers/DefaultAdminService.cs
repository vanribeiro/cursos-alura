using System;
using System.Linq;
using System.Collections.Generic;
using Alura.LeilaoOnline.WebApp.Dados;
using Alura.LeilaoOnline.WebApp.Dados.EfCore;
using Alura.LeilaoOnline.WebApp.Models;

namespace Alura.LeilaoOnline.WebApp.Services.Handlers
{
    public class DefaultAdminService : IAdminService
    {
        readonly ILeilaoDao _leilaoDao;
        readonly ICategoriaDao _categoriaDao;
        readonly DateTime dataAtual = DateTime.Now;

        public DefaultAdminService(ILeilaoDao leilaoDao)
        {
            _leilaoDao = leilaoDao;
        }

        public DefaultAdminService(ILeilaoDao leilaoDao, ICategoriaDao categoriaDao)
        {
            _leilaoDao = leilaoDao;
            _categoriaDao = categoriaDao;
        }

        public IEnumerable<Leilao> ConsultaLeiloes()
        {
            return _leilaoDao.BuscarTodos();
        }

        public IEnumerable<Categoria> ConsultarCategorias()
        {
            return _categoriaDao.BuscarTodos();
        }

        public IEnumerable<Categoria> ConsultaCategorias()
        {
            return _categoriaDao.BuscarTodos();
        }

        public IEnumerable<Leilao> ConsultaPorTermo(string termo)
        {
           return _leilaoDao.BuscarTodos()
                .Where(leilao => string.IsNullOrWhiteSpace(termo) ||
                    leilao.Titulo.ToUpper().Contains(termo.ToUpper()) ||
                    leilao.Descricao.ToUpper().Contains(termo.ToUpper()) ||
                    leilao.Categoria.Descricao.ToUpper().Contains(termo.ToUpper())
                );
        }

        public void CadastraLeilao(Leilao leilao)
        {
            _leilaoDao.Incluir(leilao);
        }

        public void ModificaLeilao(Leilao leilao)
        {
            _leilaoDao.Alterar(leilao);
        }


        public void RemoveLeilao(Leilao leilao)
        {
            if(leilao != null && leilao.Situacao != SituacaoLeilao.Pregao)
            {
                _leilaoDao.Excluir(leilao);
            }
        }

        public Leilao ConsultaLeilaoPorId(int id)
        {
            return _leilaoDao.BuscarPorId(id);
        }
        
        public void IniciaPregaoDoLeilaoComId(int id)
        {
            var leilao = _leilaoDao.BuscarPorId(id);
            leilao.Situacao = SituacaoLeilao.Pregao;
            leilao.Inicio = dataAtual;
            _leilaoDao.Alterar(leilao);
        }

        public void FinalizaPregaoDoLeilaoComId(int id)
        {
            var leilao = _leilaoDao.BuscarPorId(id);
            leilao.Situacao = SituacaoLeilao.Finalizado;
            leilao.Termino = dataAtual;
            _leilaoDao.Alterar(leilao);
        }

    }
}
