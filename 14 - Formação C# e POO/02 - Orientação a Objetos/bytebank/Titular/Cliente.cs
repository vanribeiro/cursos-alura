
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bytebank.Titular{
    public class Cliente{
        public string Cpf {get; set;} = "";
        public string Nome {get; set;} = "";
        public string Profissao {get; set;} = "";

        public Cliente (){}
        public Cliente (string cpf, string nome, string profissao){
            this.Cpf = cpf;
            this.Nome = nome;
            this.Profissao = profissao;
        }


    }
}