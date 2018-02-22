/**
 * class to manage to sync data to the original sources
 */
var ETLCaller = new function() {
	/**
	 * call the ETL Jobs
	 * @param  {string} countryLabel label of the country
	 * @return  NO RETURN	 
	 */
	 this.runETLJob = function(countryLabel) {
 	   var options = {};
       options.headers = {"Authorization": "Basic " + Utilities.base64Encode(Config.ETLUser + ":" + Config.ETLPsw)};
       options.method="POST";
       options={
         "method":"GET",
         "headers":{"Authorization": "Basic " + Utilities.base64Encode(Config.ETLUser + ":" + Config.ETLPsw)}
       };

       var resp= UrlFetchApp.fetch( Config.ETLEndpoints, options );
       Logger.log(resp);
       Logger.log(resp.getResponseCode());       
 	};	


};
