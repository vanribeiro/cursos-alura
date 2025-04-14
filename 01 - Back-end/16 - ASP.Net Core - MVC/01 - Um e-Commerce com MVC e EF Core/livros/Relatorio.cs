using Microsoft.AspNetCore.Http;

namespace livros{
    
    class Relatorio: IRelatorio{
        private readonly ICatalogo catalogo;

        public Relatorio(ICatalogo catalogo){
            this.catalogo = catalogo;
        }

        public async Task Imprimir(HttpContext context){
            foreach (var livro in catalogo.GetLivros()){
                await context.Response.WriteAsync($"{livro.Codigo, -10}{livro.Nome, 10}{livro.Preco, 20}\r\n");
            }
        }

    }
}