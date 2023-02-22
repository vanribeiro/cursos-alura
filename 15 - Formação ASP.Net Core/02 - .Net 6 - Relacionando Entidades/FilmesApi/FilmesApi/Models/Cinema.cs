using System.ComponentModel.DataAnnotations;

namespace FilmesApi.Models
{
    public class Cinema
    {
        [Key]
        public int Id { get; set; } = 0;

        [Required(ErrorMessage = "O campo de nome é obrigatório")]
        public string Nome { get; set; } = "";
    }
}
