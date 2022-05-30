const express = require("express");
const { header } = require("express/lib/request");
const router = express.Router();

// controller path
const controller = require("../controller/controller-copy");

router.get("/home", controller.home);

// signupOne route
router.post('/signupone', controller.signupone);

// signupTwo route
router.post('/signuptwo', controller.signuptwo);

// signup route
router.post('/signup', controller.signup);

// forgotPasswordOne route
router.post('/forgotPasswordOne', controller.forgotPasswordOne);

// forgotPasswordTwo route
router.post('/forgotPasswordTwo', controller.forgotPasswordTwo);

// forgotPasswordThree route
router.post('/forgotPasswordThree', controller.forgotPasswordThree);

// login route
router.post('/login', controller.login);

// dashboard route
router.get('/dashboard', requiredToken , controller.dashboard);


// tableData route
router.get('/tableData/:m_id', controller.tableData);


// tableDataMeterId route
router.get('/tableDataMeterId/:m_id', controller.tableDataMeterId);


// showReport route
router.get('/showReport/:m_id', controller.showReport);


// sortDay route
router.get('/sortDay/:m_id', controller.sortDay);


// sortDaty2 route
router.get('/sortDay2/:m_id', controller.sortDay2);


// sortDay3 route
router.get('/sortDay3/:m_id', controller.sortDay3);


// sortDay4 route
router.get('/sortDay4/:m_id', controller.sortDay4);


// sortMonth route
router.get('/sortMonth/:m_id', controller.sortMonth);


// sortMonth2 route
router.get('/sortMonth2/:m_id', controller.sortMonth2);


// sortMonth3 route
router.get('/sortMonth3/:m_id', controller.sortMonth3);


// sortMonth4 route
router.get('/sortMonth4/:m_id', controller.sortMonth4);


// sortWeek route
router.get('/sortWeek/:m_id', controller.sortWeek);


// sortWeek2 route
router.get('/sortWeek2/:m_id', controller.sortWeek2);


// sortWeek3 route
router.get('/sortWeek3/:m_id', controller.sortWeek3);


// sortWeek4 route
router.get('/sortWeek4/:m_id', controller.sortWeek4);


// timeStampSort_day route
router.get('/timeStampSort_Day/:m_id', controller.timeStampSort_Day);



// timeStampSort_Hour route
router.get('/timeStampSort_Hour/:m_id', controller.timeStampSort_Hour);



// timeStampSort_Live route
router.get('/timeStampSort_Live/:m_id', controller.timeStampSort_Live);


// timeStampSort_Minute route
router.get('/timeStampSort_Minute/:m_id', controller.timeStampSort_Minute);


// timeStampSort_Month route
router.get('/timeStampSort_Month/:m_id', controller.timeStampSort_Month);


// timeStampSort_Week route
router.get('/timeStampSort_Week/:m_id', controller.timeStampSort_Week);


// uniqueCompanyName route
router.get('/uniqueCompanyName/:company_id', controller.uniqueCompanyName);


// uniqueEmail route
router.get('/uniqueEmail/:email', controller.uniqueEmail);


// uniqueMeterName route
router.get('/uniqueMeterName/:m_name', controller.uniqueMeterName);


// uniquePara route
router.get('/uniquePara/:data_type', controller.uniquePara);


// bar route
router.get('/bar/:m_id', controller.bar);


// chart route
router.get('/daychart/:m_id', controller.daychart);

// all day chart route
router.get('/alldaydata/:m_id', controller.alldaydata);


// displayMeter route
router.get('/displayMeter/:value', controller.displayMeter);


// displayMeterDetails route
router.get('/displayMeterDetails/:m_id', controller.displayMeterDetails);


// filterCompany route
router.get('/filterCompany', controller.filterCompany);


// getCompanyData route
router.get('/getCompanyData', controller.getCompanyData);


// getMeter route
router.get('/getMeter', controller.getMeter);


// getPara route
router.get('/getPara', controller.getPara);


// getReport route
router.get('/getReport/:value', controller.getReport);


// meter_CardData route
router.get('/meter_CardData/:value', controller.meter_CardData);


// addCard
router.get('/addCard/:value', controller.addCard);


// addParameter
router.post('/addParameter', controller.addParameter);


// addReport
router.post('/addReport', controller.addReport);


// line2
router.get('/line2chart/:m_id', controller.line2chart);


// line
router.post('/line', controller.line);


// deleteCard
router.delete('/deleteCard/:id', controller.deleteCard);


// deleteMeter
router.delete('/deleteMeter/:id', controller.deleteMeter);


// registration_meter
router.post('/registration_meter', controller.registration_meter);


// Meter_DetailsUpdate
router.post('/Meter_DetailsUpdate', controller.Meter_DetailsUpdate);


// Meter_DetailsUpdate1
router.post('/profile', controller.profile);


// profile_add
router.post('/profile', controller.profile);

// profile_update
router.post('/profile_update', controller.profile_update);

// profile_delete
router.delete('/profile_delete/:company', controller.profile_delete);

// profile_get
router.get('/get_profile/:value', controller.get_profile);



// Requireing token
function requiredToken(req, res, next){
    let headers = req.headers["token"];
    console.log(headers, "<--- token")

    if(typeof headers!==undefined && headers !==""){
        req.token = headers
        next();
    }else{
        res.send({
            status:false,       
            msg:"token required...."
        })
    }
}

module.exports = router;
module.exports = router;