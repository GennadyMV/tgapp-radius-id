using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using RadiusTest.Radius2;

namespace RadiusTest
{
    class Program
    {
        static void Main(string[] args)
        {
            var radiusClient = new Radius2.radius2Client("http1");
            /*
            radiusClient.Get_Traffic_by_LoginCompleted += (sender, eventArgs) => //евент завершения получения данных
            {
                //HandleError(eventArgs); здесь ловятся ошибки базы данных
                if (eventArgs.Error == null)
                {
                    //получение курсора
                    Console.WriteLine("Login\t\tCodeText\tBytesIn");
                    foreach (var item in eventArgs.Result.ResultSet)
                    {
                        Console.WriteLine(item.login + "\t\t" + item.code_text + "\t" + item.bytes_in);
                    }
                    


                }
            };
            //асинхронный вызов
            radiusClient.Get_Traffic_by_LoginAsync(new Get_Traffic_by_LoginRequest()
            {
                Command = new MetaCommand()
                {
                    Operation = DbOperation.ExecuteQuery
                },
                Connection = new MetaConnection() { Connection = "*.*" },
                Parameters =//параметры функции
                    new Get_Traffic_by_LoginInputParameters()
                    {
                        p_Date_Beg = DateTime.Parse("12.01.2015"),
                        p_Date_End = DateTime.Parse("15.01.2015"),
                        p_Login = "pppoe-049439@prm",
                        p_Filial = "423",
                        p_Interval = 24
                    }
            });

            */
            Radius2.Get_Traffic_by_LoginResult theTrafficResult;
            Radius2.Get_Traffic_by_LoginRequest theTrafficRequest = new Radius2.Get_Traffic_by_LoginRequest();
            theTrafficRequest.Command = new MetaCommand()
            {
                Operation = DbOperation.ExecuteQuery
            };
            theTrafficRequest.Connection = new MetaConnection() { Connection = "*.*" };
            theTrafficRequest.Parameters = new Get_Traffic_by_LoginInputParameters()
            {
                p_Date_Beg = DateTime.Parse("12.01.2015"),
                p_Date_End = DateTime.Parse("15.01.2015"),
                p_Login = "pppoe-049439@prm",
                p_Filial = "423",
                p_Interval = 24
            };

            theTrafficResult = radiusClient.Get_Traffic_by_Login(theTrafficRequest);

            //получение курсора
            Console.WriteLine("Login\t\tCodeText\tBytesIn");
            foreach (var item in theTrafficResult.ResultSet)
            {
                Console.WriteLine(item.login + "\t\t" + item.code_text + "\t" + String.Format("{0:N0}",(int)item.bytes_in));
            }

            Console.ReadLine();
        }
    }
}
