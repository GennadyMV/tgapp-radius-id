using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DNTest.ServiceReference1;

namespace DNTest
{
    class Program
    {
        static void Main(string[] args)
        {
            var srv = new ServiceReference1.radiusClient("http");

            srv.Get_Access_by_LoginCompleted += (sender, eventArgs) => //евент завершения получения данных
            {
                //HandleError(eventArgs); здесь ловятся ошибки базы данных
                if (eventArgs.Error == null)
                {
                    //получение курсора
                    foreach (var item in eventArgs.Result.ResultSet)
                    {
                        Console.WriteLine(item.err_string);
                    }
                    //Console.WriteLine(eventArgs.Result.Parameters);


                }
            };
            //асинхронный вызов
            srv.Get_Access_by_LoginAsync(new Get_Access_by_LoginRequest()
            {
                Command = new MetaCommand()
                {
                    Operation = DbOperation.ExecuteQuery
                },
                Connection = new MetaConnection() { Connection = "*.*" },
                Parameters =//параметры функции
                    new Get_Access_by_LoginInputParameters()
                    {
                        p_Date_Beg = DateTime.Parse("01.12.2014"),
                        p_Date_End = DateTime.Parse("22.12.2014"),
                        p_Login = "pppoe-049439@prm",
                        p_Filial = "1"
                    }
            });
            Console.ReadLine();
        }
    }
}
