using System;
class Programa {

    static void Main(string[] args){
        int idade = 16;
        int quantidadeDePessoas = 2;

        if(idade >= 18){
            Console.WriteLine("Pode entrar!");
        } else{
            if(quantidadeDePessoas >= 1){
                Console.WriteLine("Pode entrar!");
            } else{
                Console.WriteLine("Não pode entrar ");
            }
        }


        Console.WriteLine("Tecle enter para fechar...");
        Console.ReadLine();
        
    }
}