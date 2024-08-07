using bytebank.Titular;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bytebank.Contas{
    public class ContaCorrente{
        public static int TotalDeContasCriadas { get; private set; }
        private int numero_agencia;
        public int Numero_Agencia {
            get { return this.numero_agencia;}
            set { if(value > 0) this.numero_agencia = value; }
        }
        private string conta = "";
        public string Conta { get ; set; } = "";
        
        public Cliente Titular { get ; set; } = new Cliente();
        
        private double saldo = 100;

        public ContaCorrente(int numeroAgencia, string conta) {
            this.Numero_Agencia = numeroAgencia;
            this.Conta = conta;
            TotalDeContasCriadas += 1;
        }

        public void Depositar(double valor){
            this.saldo += valor;
        }

        public bool Sacar(double valor){
            if(valor <= this.saldo){
                this.saldo -= valor;
                return true;
            } else{
                return false;
            }
        }

        public bool Transferir(double valor, ContaCorrente destino){
            if(this.saldo < valor){
                return false;
            } else{
                this.Sacar(valor);
                destino.Depositar(valor);
                return true;
            }
        }

        public void SetSaldo(double valor) {
            if(valor < 0 ) {
                return;
            } else {
                this.saldo = valor;
            }
        }

        public double GetSaldo () {
            return this.saldo;
        }
    }
}