﻿using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CasaDoCodigo.Models;

namespace CasaDoCodigo.Controllers
{
    public class PedidoController : Controller
    {
        public IActionResult Cadastro()
        {
            return View();
        }

        public IActionResult Carrinho()
        {

            return View();
        }

        public IActionResult Carrossel()
        {

            return View();
        }
        public IActionResult Resumo()
        {

            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
