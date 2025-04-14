using System.ComponentModel.DataAnnotations;

namespace FilmesApi.Models
{
    public class Cinema
    {
        [Key]
        public int Id { get; set; } = 0;

        [Required(ErrorMessage = "O campo de nome é obrigatório")]
        public string Nome { get; set; } = "";

        public int EnderecoId { get; set; } = 0;

        /* Diz ao entity que essa entidade só tem somente 1 e apenas 01 endereço */
        public virtual Endereco Endereco { get; set; }

        public virtual ICollection<Sessao> Sessoes { get; set; }
    }
}
