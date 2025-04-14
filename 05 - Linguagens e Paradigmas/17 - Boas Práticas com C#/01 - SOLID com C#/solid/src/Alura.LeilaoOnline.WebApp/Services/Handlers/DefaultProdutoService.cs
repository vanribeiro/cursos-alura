using System.Collections.Generic;
using System.Linq;
using Alura.LeilaoOnline.WebApp.Models;
using Alura.LeilaoOnline.WebApp.Dados;
using Alura.LeilaoOnline.WebApp.Dados.EfCore;

namespace Alura.LeilaoOnline.WebApp.Services.Handlers
{
    public class DefaultProdutoService: IProdutoService
    {
        readonly ILeilaoDao _leilaoDao;
        readonly ICategoriaDao _categoriaDao;

        public DefaultProdutoService(ILeilaoDao leilaoDao, ICategoriaDao categoriaDao)
        {
            _leilaoDao = leilaoDao;
            _categoriaDao = categoriaDao;
        }

        public IEnumerable<Leilao> PesquisaLeiloesEmPregaoPorTermo(string termo)
        {
            var termoNormalized = termo.ToUpper();
            var leiloes = _leilaoDao.BuscarTodos()
            .Where(leilao => string.IsNullOrWhiteSpace(termo) ||
                leilao.Titulo.ToUpper().Contains(termoNormalized) ||
                leilao.Descricao.ToUpper().Contains(termoNormalized) ||
                leilao.Categoria.Descricao.ToUpper().Contains(termoNormalized)
            );
            return leiloes;
        }

        public IEnumerable<CategoriaComInfoLeilao> ConsultaCategoriaComTotalDeLeiloesEmPregao()
        {
            var todasAsCategorias = _categoriaDao.BuscarTodos()
                .Select(categoria => new CategoriaComInfoLeilao
                {
                    Id = categoria.Id,
                    Descricao = categoria.Descricao,
                    Imagem = categoria.Imagem,
                    EmRascunho = categoria.Leiloes.Where(leilao => leilao.Situacao == SituacaoLeilao.Rascunho).Count(),
                    EmPregao = categoria.Leiloes.Where(leilao => leilao.Situacao == SituacaoLeilao.Pregao).Count(),
                    Finalizados = categoria.Leiloes.Where(leilao => leilao.Situacao == SituacaoLeilao.Finalizado).Count(),
                });
            return todasAsCategorias;
        }

        public Categoria ConsultaCategoriaPorIdComLeiloesEmPregao(int id)
        {
            return _categoriaDao.BuscarPorId(id);
        }
    }
}
