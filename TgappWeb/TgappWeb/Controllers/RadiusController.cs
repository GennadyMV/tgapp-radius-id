﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TgappWeb.RadiusAsync;
using System.Globalization;

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

        public ActionResult Radius(string mode="view", int filial=423, string login="", string date_beg="", string date_end="", int period=0 )
        {
            var radiusClient = new radius2Client("http");
            RadiusAsync.FilialsResult theFilialsResult;
            theFilialsResult = radiusClient.Filials(new FilialsRequest()
            {
                Id = filial,
                Command = new MetaCommand()
                {
                    Operation = DbOperation.ExecuteQuery
                },
                Connection = new MetaConnection() { Connection = "*.*" }
            });
            
            ViewBag.ResultSet = theFilialsResult.ResultSet;

            switch (filial)
            {
                case 421:
                    ViewBag.Filial = "Хабаровский филиал";
                    break;
                case 423:
                    ViewBag.Filial = "Приморский филиал";
                    break;
                default:
                    ViewBag.Filial = "Филиал не определён по номеру: " + filial.ToString();
                    break;
            }
            ViewBag.Mode = mode.ToUpper() ;
            ViewBag.FilialCode = filial;
            ViewBag.Login = login;
            ViewBag.DateBgn = date_beg;
            ViewBag.DateEnd = date_end;
            ViewBag.Period = period;

            return View();
        }

        public ActionResult GetAccessByLogin(string filial, string login, string datebgn, string dateend, int interval)
        {
            var radiusClient = new RadiusAsync.radius2Client("http");

            DateTime dbgn;
            DateTime dend;
            if (interval > 0)
            {
                dbgn = DateTime.Now.AddMinutes(-1 * interval);
                dend = DateTime.Now;
            }
            else
            {
                dbgn = DateTime.ParseExact(datebgn, "dd.MM.yyyy", new CultureInfo("en-US"));
                dend = DateTime.ParseExact(dateend, "dd.MM.yyyy", new CultureInfo("en-US"));
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
                dbgn = DateTime.Now.AddMinutes(-1 * interval);
                dend = DateTime.Now;
            }
            else
            {
                dbgn = DateTime.ParseExact(datebgn, "dd.MM.yyyy", new CultureInfo("en-US"));
                dend = DateTime.ParseExact(dateend, "dd.MM.yyyy", new CultureInfo("en-US"));
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

        public ActionResult GetTrafficByLogin(string filial, string login, string datebgn, string dateend, int interval, int interval2=24)
        {
            var radiusClient = new RadiusAsync.radius2Client("http");
            try
            {
                DateTime dbgn;
                DateTime dend;
                if (interval > 0)
                {
                    dbgn = DateTime.Now.AddMinutes(-1 * interval);
                    dend = DateTime.Now;
                }
                else
                {
                    dbgn = DateTime.ParseExact(datebgn, "dd.MM.yyyy", new CultureInfo("en-US"));
                    dend = DateTime.ParseExact(dateend, "dd.MM.yyyy", new CultureInfo("en-US"));
                }

                RadiusAsync.Get_Traffic_by_LoginResult theTrafficResult;
                RadiusAsync.Get_Traffic_by_LoginRequest theTrafficRequest = new RadiusAsync.Get_Traffic_by_LoginRequest();
                theTrafficRequest.Command = new MetaCommand()
                {
                    Operation = DbOperation.ExecuteQuery
                };
                theTrafficRequest.Connection = new MetaConnection() { Connection = "*.*" };
                theTrafficRequest.Parameters = new Get_Traffic_by_LoginInputParameters()
                {
                    p_Date_Beg = dbgn,
                    p_Date_End = dend,
                    p_Login = login,
                    p_Filial = filial,
                    p_Interval = interval2
                };

                theTrafficResult = radiusClient.Get_Traffic_by_Login(theTrafficRequest);
                ViewBag.ResultSet = theTrafficResult.ResultSet;

                Dictionary<string, ulong> dictionary_in = new Dictionary<string, ulong>();
                Dictionary<string, ulong> dictionary_out = new Dictionary<string, ulong>();
                UInt64 total_bytes_in = 0;
                UInt64 total_bytes_out = 0;
                foreach(var item in theTrafficResult.ResultSet)
                {
                    if (item.bytes_in == null) item.bytes_in = 0;
                    if (item.bytes_out == null) item.bytes_out = 0;

                    total_bytes_in += (ulong)item.bytes_in;                    
                    total_bytes_out += (ulong)item.bytes_out;

                    if (!dictionary_in.ContainsKey(item.code_value))
                    {
                        dictionary_in.Add(item.code_value, 0);
                    }
                    dictionary_in[item.code_value] += (ulong) item.bytes_in;

                    if (!dictionary_out.ContainsKey(item.code_value))
                    {
                        dictionary_out.Add(item.code_value, 0);
                    }
                    dictionary_out[item.code_value] += (ulong)item.bytes_out;
                }
                ViewBag.TotalBytesIn = total_bytes_in;
                ViewBag.TotalBytesOut = total_bytes_out;
                ViewBag.DictionaryIn = dictionary_in;
                ViewBag.DictionaryOut = dictionary_out;
                
                ViewBag.TrafficTitle = String.Format("Полный трафик {0} за период с {1} по {2} , с разбиением на интервалы по ", 
                    login, dbgn.ToShortDateString(), dend.ToShortDateString());

                ViewBag.Interval2 = interval2;
                ViewBag.Filial = filial;
                ViewBag.Login = login;
                ViewBag.DateBgn = datebgn;
                ViewBag.DateEnd = dateend;
                ViewBag.Interval = interval;
            }
            catch (Exception ex)
            {
                ViewBag.Error = ex.Message;
            }

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

        public ActionResult CheckProfile(string filial, string login)
        {
            var radiusClient = new RadiusAsync.radius2Client("http");
            Check_ProfileRequest theCheckProfileRequest;
            theCheckProfileRequest = new Check_ProfileRequest();
            theCheckProfileRequest.Command = new MetaCommand()
            {
                Operation = DbOperation.ExecuteQuery
            };
            theCheckProfileRequest.Connection = new MetaConnection() { Connection = "*.*" };
            theCheckProfileRequest.Parameters = new Check_ProfileInputParameters()
            {
                p_Filial = filial.ToString(),
                p_Login = login
            };

            Check_ProfileResult theCheckProfileResult;
            theCheckProfileResult = radiusClient.Check_Profile(theCheckProfileRequest);

            return View();
        }

        public ActionResult StopRadiusSession(string filial, string login)
        {
            var radiusClient = new RadiusAsync.radius2Client("http");
            
            RadiusAsync.Stop_Radius_SessionRequest theStopRadiusSessionRequest;
            theStopRadiusSessionRequest = new Stop_Radius_SessionRequest();
            theStopRadiusSessionRequest.Command = new MetaCommand()
            {
                Operation = DbOperation.ExecuteQuery
            };
            theStopRadiusSessionRequest.Connection = new MetaConnection() { Connection = "*.*" };
            theStopRadiusSessionRequest.Parameters = new Stop_Radius_SessionInputParameters()
            {
                p_Filial = filial.ToString(),
                p_Login = login
            };

            Stop_Radius_SessionResult theStopRadiusSessionResult;
            theStopRadiusSessionResult = radiusClient.Stop_Radius_Session(theStopRadiusSessionRequest);

            return View();
        }

        public ActionResult ChangePassword(string filial, string login, string new_pass)
        {
            ViewBag.StatusString = "Смена пароля завершена успешна";            
            try
            {
                var radiusClient = new RadiusAsync.radius2Client("http");

                RadiusAsync.Change_PasswordRequest theChangePasswordRequest;
                theChangePasswordRequest = new Change_PasswordRequest();
                theChangePasswordRequest.Command = new MetaCommand()
                {
                    Operation = DbOperation.ExecuteQuery
                };
                theChangePasswordRequest.Connection = new MetaConnection() { Connection = "*.*" };
                theChangePasswordRequest.Parameters = new Change_PasswordInputParameters()
                {
                    p_Filial = filial.ToString(),
                    p_Login = login,
                    p_New_Pass = new_pass
                };
                Change_PasswordResult theChangePasswordResult;
                theChangePasswordResult = radiusClient.Change_Password(theChangePasswordRequest);
            }
            catch (Exception ex)
            {
                ViewBag.StatusString = ex.Message;
            }

            return View();
        }

        

    }
}
