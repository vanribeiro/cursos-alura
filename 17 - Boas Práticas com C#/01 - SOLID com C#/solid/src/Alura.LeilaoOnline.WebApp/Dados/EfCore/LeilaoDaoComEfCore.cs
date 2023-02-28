using System.Linq;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Alura.LeilaoOnline.WebApp.Models;

namespace Alura.LeilaoOnline.WebApp.Dados.EfCore
{
    public class LeilaoDaoComEfCore : ILeilaoDao
    {
        readonly AppDbContext _context;

        public LeilaoDaoComEfCore()
        {
            _context = new AppDbContext();
        }

        public Leilao BuscarPorId(int id)
        {
            return _context.Leiloes.First(leilao => leilao.Id == id);
        }

        public IEnumerable<Leilao> BuscarTodos()
        {
            return _context.Leiloes.Include(leilao => leilao.Categoria);
        }

        public void Incluir(Leilao leilao)
        {
            _context.Leiloes.Add(leilao);
            _context.SaveChanges();
        }

        public void Alterar(Leilao leilao)
        {
            _context.Leiloes.Update(leilao);
            _context.SaveChanges();
        }

        public void Excluir(Leilao leilao)
        {
            _context.Leiloes.Remove(leilao);
            _context.SaveChanges();
        }

    }
}
