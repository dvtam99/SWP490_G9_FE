import request from "./request";

var apis = {};

var path = {
  login: "/api/login",
  logout: "/api/user/logout",
  changePassword: "/api/user/change-password",
  changePhonenumber: "/api/otp/change-phone",
  checkChangePhonenumber: "/api/user/check-change-phone-otp",
  register: "/api/register",
  getAllRole: "/api/role/get-all",
  getOtp: "/api/otp/register",
  checkOtp: "/api/OTP/check-register",
  getPondOwnerByTraderId: "/api/pondOwner/getAll", //method GET
  // updateUser: "/api/update",
  createPO: "/api/pondOwner/create",
  updatePO: "/api/pondOwner/update",
  deletePO: "/api/pondOwner/delete",
  getFTByTraderID: "/api/fishtype/getlastall", // method get, FT: fish type
  createFT: "/api/fishtype/create", // method post need param
  getUserInfo: "/api/getUserInfo",
  updateUser: "/api/user/update",
  updateFT: "/api/fishtype/update",
  deleteFT: "/api/fishtype/delete",
  getBasketByTraderId: "/api/basket/getall",
  createBasket: "/api/basket/create",
  getTruckByTrarderID: "/api/truck/getall", //method get
  updateBasket: "/api/basket/update",
  deleteBasket: "/api/basket/delete",
  getTruck: "/api/truck/getall",
  createTruck: "/api/truck/create",
  updateTruck: "/api/truck/update",
  deleteTruck: "/api/truck/delete",

  // Purchase Management
  createPurchase: "/api/purchase/create",
  getPurchases: "/api/purchase/getall", // GET
  deletePurchase: "/api/purchase/delete",
  updatePurchase: "/api/purchase/update",

  // purchase  detail
  createPurchaseDetail: "/api/purchasedetail/create",
  getAllPurchaseDetail: "/api/purchasedetail/getall", // GET
  deletePurchaseDetail: "/api/purchasedetail/delete", // POST body: PurchaseDetailId

  // Drum management
  getDrumByTraderId: "/api/drum/getall",
  createDrum: "/api/drum/create",
  getAllDrumByTruckID: "/api/drum/getall", //GET param : truckId
  updateDrum: "/api/drum/update",
  deleteDrum: "/api/drum/delete",

  //anhnbt
  getEmployees: "/api/employee/getallemp", //method GET
  createEmployee: "/api/employee/create/",
  updateEmployee: "/api/employee/update",
  deleteEmployee: "/api/employee/delete",
  getDetailEmployee: "/api/employee/detail/{empId}",

  //Time keeping
  updateTimeKeeping: "/api/timeKeeping/update",
  createTimeKeeping: "/api/timeKeeping/create",
  getTimeKeepingByTraderWithDate: "/api/timeKeeping/getByTrader/date",
  getTimeKeepingByTraderWithMonth: "/api/timeKeeping/getByTrader/month",
  deleteTimeKeepingByTrader: "/api/timeKeeping/delete",

  //anhnbt
  getCostIncurred: "/api/costincurred/getall",
  createCostIncurred: "/api/costincurred/create",
  updateCostIncurred: "/api/costincurred/update",
  deleteCostIncurred: "/api/costincurred/delete",
  getDetailCostIncurred: "/api/costincurred/detail/{incurredId}",

  //anhnbt
  getBuyers: "/api/buyer/getall",
  createBuyer: "/api/buyer/create",
  updateBuyer: "/api/buyer/update",
  deleteBuyer: "/api/buyer/delete",
  getDetailBuyer: "/api/buyer/detail/{buyerId}",
};

Object.keys(path).forEach(function (key) {
  apis[key] = async function (data = {}, method = "POST", param = "") {
    let url = path[key];
    if (param) {
      url = path[key] + "/" + param;
    }
    let result = await request.request(url, data, {}, method);
    return result;
  };
}, this);

export default apis;
