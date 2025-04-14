using System.ComponentModel.DataAnnotations;
namespace FilmesApi.Data.DTOs;

public class CreateFilmeDTO{

    [Required(ErrorMessage = "O título do filme é obrigatório")]
    public string Titulo { get; set; } = "";

    [Required(ErrorMessage = "O gênero do filme é obrigatório")]
    [StringLength(50, ErrorMessage = "O tamanho do gênero nao pode exceder 50 caracteres")]
    public string Genero { get; set; } = "";

    [Required]
    [Range(70, 600, ErrorMessage = "A duração de ser entre 70 e 600 minutos")]
    public int Duracao { get; set; } = 0;

}


