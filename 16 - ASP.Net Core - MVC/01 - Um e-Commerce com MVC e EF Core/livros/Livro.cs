namespace livros{
    
    class Livro{
        public string Codigo { get; set; }
        public string Nome { get; set; }
        public decimal Preco { get; set; }
        
        public Livro(string codigo, string nome, decimal preco){
            this.Codigo = codigo;
            this.Nome = nome;
            this.Preco = preco;
        }

    }
}