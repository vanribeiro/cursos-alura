using System;
class Programa {

    static void Main(string[] args){
        int idade = 27;
        double salario = 1283.18;
        double divisao = 7.0 / 4;
        char letra = 'a'; // char usa aspas simples
        char codigoDaLetraA = (char)65;
        char calculandoAletraB = (char)(65 + 1);
        string nome = "Vanessa"; // string usa aspas duplas
        string frutas = "\nbanana\nmaça\ngoiaba";

        short z = 15000;
        int x = 100000;
        long y = 2000000000000000000;

        float altura = 1.52f;


        //casting
        double nota01 = 8.5;
        int nota02 = (int)nota01;


        Console.WriteLine("[idade]: " + idade);
        Console.WriteLine("[salario]: " + salario);
        Console.WriteLine("[divisao]: " + divisao);
        Console.WriteLine("[nota02]: " + nota02);
        Console.WriteLine("[z]: " + z);
        Console.WriteLine("[x]: " + x);
        Console.WriteLine("[y]: " + y);
        Console.WriteLine("[altura]: " + altura);
        Console.WriteLine("[letra]: " + letra);
        Console.WriteLine("[codigoDaLetraA]: " + codigoDaLetraA);
        Console.WriteLine("[calculandoAletraB]: " + calculandoAletraB);
        Console.WriteLine("[nome]: " + nome);
        Console.WriteLine("[frutas]: " + frutas);

        Console.WriteLine("Tecle enter para fechar...");
        Console.ReadLine();
        
    }
}