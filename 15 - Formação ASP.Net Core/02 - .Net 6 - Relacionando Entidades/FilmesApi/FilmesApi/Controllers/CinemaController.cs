using AutoMapper;
using FilmesApi.Data.DTOs;
using FilmesApi.Data;
using FilmesApi.Models;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;

namespace FilmesApi.Controllers;

[ApiController]
[Route("[controller]")]
public class CinemaController : ControllerBase
{

    private readonly FilmeContext _context;
    private readonly IMapper _mapper;

    public CinemaController(FilmeContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    /// <summary>
    /// Adiciona um Cinema ao banco de dados
    /// </summary>
    /// <param name="filmeDto">Objeto com os campos necessários para criação de um Cinema</param>
    /// <returns>IActionResult</returns>
    /// <response code="201">Caso inserção seja feita com sucesso</response>
    [HttpPost]
    [ProducesResponseType(StatusCodes.Status201Created)]
    public IActionResult AdicionarCinema([FromBody] CreateCinemaDTO cinemaDTO)
    {
        Cinema cinema = _mapper.Map<Cinema>(cinemaDTO);
        _context.Cinemas.Add(cinema);
        _context.SaveChanges();
        return CreatedAtAction(nameof(ObterCinemaPorId), new { id = cinema.Id }, cinema);
    }

    [HttpGet]
    public IEnumerable<ReadCinemaDTO> ObterCinemasComPaginacao([FromQuery] int skip = 0, [FromQuery] int take = 50)
    {
        return _mapper.Map<List<ReadCinemaDTO>>(_context.Cinemas.Skip(skip).Take(take));
    }

    [HttpGet("{id}")]
    public IActionResult ObterCinemaPorId(int id)
    {
        var cinema = _context.Cinemas.FirstOrDefault(cinema => cinema.Id == id);
        if (cinema == null) return NotFound();
        var cinemaDTO = _mapper.Map<ReadCinemaDTO>(cinema);
        return Ok(cinemaDTO);
    }

    [HttpPut("{id}")]
    public IActionResult AtualizaCinema(int id, [FromBody] UpdateCinemaDTO cinemaDTO)
    {
        var cinema = _context.Cinemas.FirstOrDefault(cinema => cinema.Id == id);
        if (cinema == null) return NotFound();
        _mapper.Map(cinemaDTO, cinema);
        _context.SaveChanges();
        return NoContent();
    }

    [HttpPatch("{id}")]
    public IActionResult AtualizaCinemaParcial(int id, JsonPatchDocument<UpdateCinemaDTO> patch)
    {
        var cinema = _context.Cinemas.FirstOrDefault(cinema => cinema.Id == id);
        if (cinema == null) return NotFound();
        var cinemaParaAtualizar = _mapper.Map<UpdateCinemaDTO>(cinema);
        patch.ApplyTo(cinemaParaAtualizar, ModelState);
        if (!TryValidateModel(cinemaParaAtualizar))
        {
            return ValidationProblem(ModelState);
        }
        _mapper.Map(cinemaParaAtualizar, cinema);
        _context.SaveChanges();
        return NoContent();
    }


    [HttpDelete("{id}")]
    public IActionResult DeletaCinema(int id)
    {
        var cinema = _context.Cinemas.FirstOrDefault(cinema => cinema.Id == id);
        if (cinema == null) return NotFound();
        _context.Remove(cinema);
        _context.SaveChanges();
        return NoContent();
    }
}
    

