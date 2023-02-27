using Alura.LeilaoOnline.WebApp.Models;
using Alura.LeilaoOnline.WebApp.Dados;
using System.Collections.Generic;
using System.Linq;

namespace Alura.LeilaoOnline.WebApp.Services.Handlers
{
    public class ArquivoAdminService : IAdminService
    {
        IAdminService _defaultService;

        public ArquivoAdminService(ILeilaoDao dao)
        {
            _defaultService = new DefaultAdminService(dao);
        }

        public void CadastraLeilao(Leilao leilao)
        {
            _defaultService.CadastraLeilao(leilao);
        }

        public Leilao ConsultaLeilaoPorId(int id)
        {
            return _defaultService.ConsultaLeilaoPorId(id);
        }

        public IEnumerable<Leilao> ConsultaLeiloes()
        {
           return _defaultService
                    .ConsultaLeiloes()
                    .Where(leilao => leilao.Situacao != SituacaoLeilao.Arquivado);
        }

        public IEnumerable<Leilao> ConsultaPorTermo(string termo)
        {
            return _defaultService.ConsultaPorTermo(termo);
        }

        public IEnumerable<Categoria> ConsultarCategorias()
        {
            return _defaultService.ConsultarCategorias();
        }

        public void FinalizaPregaoDoLeilaoComId(int id)
        {
            _defaultService.FinalizaPregaoDoLeilaoComId(id);
        }

        public void IniciaPregaoDoLeilaoComId(int id)
        {
            _defaultService.IniciaPregaoDoLeilaoComId(id);
        }

        public void ModificaLeilao(Leilao leilao)
        {
            _defaultService.ModificaLeilao(leilao);
        }

        public void RemoveLeilao(Leilao leilao)
        {
            if(leilao != null && leilao.Situacao != SituacaoLeilao.Pregao)
            {
                leilao.Situacao = SituacaoLeilao.Arquivado;
                _defaultService.ModificaLeilao(leilao);
            }
        }
    }
}
