using System.ComponentModel.DataAnnotations;
namespace FilmesApi.Models;

public class Filme{
    //Data Annotations do C#
    [Key]
    [Required]
    public int Id { get; set; }

    [Required(ErrorMessage = "O título do filme é obrigatório")]
    public string Titulo { get; set; } = "";

    [Required(ErrorMessage = "O gênero do filme é obrigatório")]
    [MaxLength(50, ErrorMessage = "O tamanho do gênero nao pode exceder 50 caracteres")]
    public string Genero { get; set; } = "";

    [Required]
    [Range(70, 600, ErrorMessage = "A duração de ser entre 70 e 600 minutos")]
    public int Duracao { get; set; } = 0;

    public virtual ICollection<Sessao> Sessao { get; set; }

}


