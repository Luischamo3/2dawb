using System;
using System.Collections.Generic;

namespace ConsoleApp2
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int>lst = new List<int>();

            lst.Add(1); lst.Add(2); lst.Add(3);

            int r= 0;

            foreach (int i in lst)
            {
                r = r + i;
            }
            Console.WriteLine("El resultado es: " + r);
            Console.ReadLine();

        }
    }
}