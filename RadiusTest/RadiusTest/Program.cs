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
            
            Radius2.FilialsResult theFilialsResult;
            Radius2.FilialsRequest theFilialsRequest = new Radius2.FilialsRequest();
            theFilialsRequest.Command = new MetaCommand()
            {
                Operation = DbOperation.ExecuteQuery
            };
            theFilialsRequest.Connection = new MetaConnection() { Connection = "*.*" };
            theFilialsRequest.Id = 423;


            theFilialsResult = radiusClient.Filials(theFilialsRequest);

            //получение курсора
            foreach (var item in theFilialsResult.ResultSet)
            {
                Console.WriteLine(item.Name);
            }

            Console.ReadLine();
        }
    }
}
