using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TgappWeb.RadiusAsync;
using System.Globalization;

namespace TgappWeb.Controllers
{
    [Serializable]
    public class GetAccessArrayWrap
    {
        [System.Xml.Serialization.XmlArray("Autorizations")]
        public RadiusAsync.Get_Access_SysdateEntity[] Autorizations;
    }

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
                case 424:
                    ViewBag.Filial = "Сахалинский филиал";
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
                
                ViewBag.TrafficTitle = String.Format("Полный трафик {0} за период с {1} по {2}, с разбиением на интервалы по ", 
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

        public ActionResult GetTrafficByServices(string filial, string login, string datebgn, string dateend, int interval, string group="month", int last=0)
        {
            try
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

                RadiusAsync.Get_Traffic_by_ServicesResult theTrafficResult;
                theTrafficResult = radiusClient.Get_Traffic_by_Services(new Get_Traffic_by_ServicesRequest()
                {
                    Command = new MetaCommand()
                    {
                        Operation = DbOperation.ExecuteQuery
                    },
                    Connection = new MetaConnection() { Connection = "*.*" },
                    Parameters =//параметры функции
                        new Get_Traffic_by_ServicesInputParameters()
                        {
                            p_Date_Beg = dbgn,
                            p_Date_End = dend,
                            p_Login = login,
                            p_Filial = filial,
                            p_Group = group,
                            p_Last = last
                        }
                });
                ViewBag.ResultSet = theTrafficResult.ResultSet;

                ViewBag.TrafficTitle = String.Format("Тарифицированный трафик {0} по услугам за период с {1} по {2}.",
                        login, dbgn.ToShortDateString(), dend.ToShortDateString());

                ViewBag.Filial = filial;
                ViewBag.Login = login;
                ViewBag.DateBgn = datebgn;
                ViewBag.DateEnd = dateend;
                ViewBag.Interval = interval;
                ViewBag.Group = group;
                ViewBag.Last = last;
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
                
        public JsonResult GetAccessSysdate(string login="", string mac="", string nas="", decimal interval=0)
        {
            Models.Autorizations theList = new Models.Autorizations();
            theList._Autorizations = new List<Models.Autorization>();
            try
            {
                var radiusClient = new RadiusAsync.radius2Client("http");
                RadiusAsync.Get_Access_SysdateRequest theAccessSysdateRequest;
                theAccessSysdateRequest = new Get_Access_SysdateRequest();

                theAccessSysdateRequest.Command = new MetaCommand()
                {
                    Operation = DbOperation.ExecuteQuery
                };
                theAccessSysdateRequest.Connection = new MetaConnection() { Connection = "*.*" };
                theAccessSysdateRequest.Parameters = new Get_Access_SysdateInputParameters()
                {
                    p_Login = login,
                    p_Interval = interval,
                    p_MAC = mac,
                    p_NAS_port_ID = nas
                };
                RadiusAsync.Get_Access_SysdateResult theAccessSysdateResult;
                theAccessSysdateResult = radiusClient.Get_Access_Sysdate(theAccessSysdateRequest);
                                
                foreach (var item in theAccessSysdateResult.ResultSet)
                {
                    Models.Autorization theAutorization = new Models.Autorization();
                    theAutorization.login = item.login;
                    theAutorization.nas = item.nas_ip;
                    theAutorization.nas_port = item.nas_port_id;
                    theAutorization.mac_addr = item.mac_addr;
                    theAutorization.zone_date = (DateTime)item.zone_date;

                    theList._Autorizations.Add(theAutorization);                    
                }

                /*
                string tab = "";
                foreach (var item in theAccessSysdateResult.ResultSet)
                {
                    tab += String.Format("{0}\t{1}\t{2}\t{3}\t{4}\t{5}\n",
                        item.login,
                        item.nas_name+" "+item.nas_ip,
                        item.nas_port_id,
                        item.mac_addr,
                        item.err_code,
                        item.err_string);
                }
                @ViewBag.Tab = tab;
                 * */
                /*
                Response.Write(tab);
                Response.ContentType = "text/txt; charset=utf-8";
                Response.AddHeader("Content-Disposition", "attachment; filename=test.tab");
                Response.End();
                
                */

                
                /*
                ViewBag.ResultSet = theAccessSysdateResult.ResultSet;
                ViewBag.Mac = mac;
                ViewBag.Nas = nas;
                ViewBag.Login = login;
                ViewBag.Interval = interval;
                 * */
                
            }
            catch (Exception ex)
            {
                ViewBag.StatusString = ex.Message;
            }
            return Json(theList._Autorizations, JsonRequestBehavior.AllowGet);
        }

        public ActionResult GetUserParams(string filial, string login)
        {
            try
            {
                var radiusClient = new RadiusAsync.radius2Client("http");
                RadiusAsync.Get_User_ParamsRequest theUserRequest;

                theUserRequest = new Get_User_ParamsRequest();
                theUserRequest.Command = new MetaCommand()
                {
                    Operation = DbOperation.ExecuteQuery
                };
                theUserRequest.Connection = new MetaConnection() { Connection = "*.*" };
                theUserRequest.Parameters = new Get_User_ParamsInputParameters()
                {
                    p_Login = login,
                    p_Filial = filial
                };
                RadiusAsync.Get_User_ParamsResult theUserResult;
                theUserResult = radiusClient.Get_User_Params(theUserRequest);

                ViewBag.ResultSet = theUserResult.ResultSet;

                RadiusAsync.Get_User_ServicesRequest theUserServiceRequest;
                theUserServiceRequest = new RadiusAsync.Get_User_ServicesRequest();
                theUserServiceRequest.Command = new MetaCommand()
                {
                    Operation = DbOperation.ExecuteQuery
                };
                theUserServiceRequest.Connection = new MetaConnection() { Connection = "*.*" };
                theUserServiceRequest.Parameters = new Get_User_ServicesInputParameters()
                {
                    p_Filial = filial,
                    p_Login = login
                };
                RadiusAsync.Get_User_ServicesResult theUserServiceResult;
                theUserServiceResult = radiusClient.Get_User_Services(theUserServiceRequest);
                ViewBag.ServiceResultSet = theUserServiceResult.ResultSet;

                RadiusAsync.Get_Service_AtrsRequest theServiceAtrsRequest;
                theServiceAtrsRequest = new Get_Service_AtrsRequest();
                theServiceAtrsRequest.Command = new MetaCommand()
                {
                    Operation = DbOperation.ExecuteQuery
                };
                theServiceAtrsRequest.Connection = new MetaConnection() { Connection = "*.*" };
                theServiceAtrsRequest.Parameters = new Get_Service_AtrsInputParameters()
                {
                    p_Filial = filial,
                    p_Login = login
                };
                RadiusAsync.Get_Service_AtrsResult theServiceAtrsResult;
                theServiceAtrsResult = radiusClient.Get_Service_Atrs(theServiceAtrsRequest);
                ViewBag.ServiceAtrsResultSet = theServiceAtrsResult.ResultSet;

                RadiusAsync.Get_BlockingRequest theBlockingRequest;
                theBlockingRequest = new Get_BlockingRequest();
                theBlockingRequest.Command = new MetaCommand()
                {
                    Operation = DbOperation.ExecuteQuery
                };
                theBlockingRequest.Connection = new MetaConnection() { Connection = "*.*" };
                theBlockingRequest.Parameters = new Get_BlockingInputParameters()
                {
                    p_Filial = filial,
                    p_Login = login
                };
                RadiusAsync.Get_BlockingResult theBlockingResult;
                theBlockingResult = radiusClient.Get_Blocking(theBlockingRequest);
                ViewBag.BlockingResultSet = theBlockingResult.ResultSet;                     
            }
            catch (Exception ex)
            {
                ViewBag.Error = ex.Message;
            }
            return View();
        }

        

    }
}
