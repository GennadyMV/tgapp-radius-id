using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TgappWeb.RadiusAsync;

namespace TgappWeb.Controllers
{
    public class RadiusController : Controller
    {
        //
        // GET: /Radius/

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Radius()
        {
            return View();
        }

        public ActionResult GetAccessByLogin(string filial, string login, string datebgn, string dateend, int interval)
        {
            var radiusClient = new RadiusAsync.radius2Client("http");

            DateTime dbgn;
            DateTime dend;
            if (interval > 0)
            {
                dbgn = DateTime.Now.AddDays(-1 * interval);
                dend = DateTime.Now;
            }
            else
            {
                dbgn = DateTime.Parse(datebgn);
                dend = DateTime.Parse(dateend);
            }
            
            RadiusAsync.Get_Access_by_LoginResult theLoginResult;
            theLoginResult = radiusClient.Get_Access_by_Login(new Get_Access_by_LoginRequest()
            {
                Command = new MetaCommand()
                {
                    Operation = DbOperation.ExecuteQuery
                },
                Connection = new MetaConnection() { Connection = "*.*" },                
                Parameters =//параметры функции
                    new Get_Access_by_LoginInputParameters()
                    {
                        p_Date_Beg = dbgn,
                        p_Date_End = dend,
                        p_Login = login,
                        p_Filial = filial
                    }
            });
            ViewBag.ResultSet = theLoginResult.ResultSet;


            return View();
        }

        public ActionResult GetSessionsByLogin(string filial, string login, string datebgn, string dateend, int interval)
        {
            var radiusClient = new RadiusAsync.radius2Client("http");
            
            DateTime dbgn;
            DateTime dend;
            if (interval > 0)
            {
                dbgn = DateTime.Now.AddDays(-1 * interval);
                dend = DateTime.Now;
            }
            else
            {
                dbgn = DateTime.Parse(datebgn);
                dend = DateTime.Parse(dateend);
            }

            RadiusAsync.Get_Sessions_by_LoginResult theSessionResult;
            RadiusAsync.Get_Sessions_by_LoginRequest theSessionRequest = new RadiusAsync.Get_Sessions_by_LoginRequest();
            theSessionRequest.Command = new MetaCommand()
            {
                Operation = DbOperation.ExecuteQuery
            };
            theSessionRequest.Connection = new MetaConnection() { Connection = "*.*" };
            theSessionRequest.Parameters = new Get_Sessions_by_LoginInputParameters()
            {
                p_Date_Beg = dbgn,
                p_Date_End = dend,
                p_Login = login,
                p_Filial = filial
            };
            
            theSessionResult = radiusClient.Get_Sessions_by_Login(theSessionRequest);            
            ViewBag.ResultSet = theSessionResult.ResultSet;
            return View();
        }

        public ActionResult GetAccessByLoginSys(string filial, string login, decimal interval)
        {
            var radiusClient = new RadiusAsync.radius2Client("http");
            RadiusAsync.Get_Access_by_Login_SysResult theAccessSysResult;
            RadiusAsync.Get_Access_by_Login_SysRequest theAccessSysRequest = new RadiusAsync.Get_Access_by_Login_SysRequest();
            theAccessSysRequest.Command = new MetaCommand()
            {
                Operation = DbOperation.ExecuteQuery
            };
            theAccessSysRequest.Connection = new MetaConnection() { Connection = "*.*" };
            theAccessSysRequest.Parameters = new Get_Access_by_Login_SysInputParameters()
            {
                p_Interval = interval,
                p_Login = login,
                p_Filial = filial                
            };
            theAccessSysResult = radiusClient.Get_Access_by_Login_Sys(theAccessSysRequest);
            ViewBag.ResultSet = theAccessSysResult.ResultSet;

            return View();              
        }

    }
}
