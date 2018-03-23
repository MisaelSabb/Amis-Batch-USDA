/**
 * class to manage to sync data to the original sources
 */
var ETLCaller = new function() {
	/**
	 * call the ETL Jobs
	 * @param  {string} countryLabel label of the country
	 * @return  NO RETURN	 
	 */
	 this.runETLJob = function(bool) {
 	   var options = {};
       options.headers = {"Authorization": "Basic " + Utilities.base64Encode(Config.ETLUser + ":" + Config.ETLPsw)};
       options.method="POST";
       options={
         "method":"GET",
         "headers":{"Authorization": "Basic " + Utilities.base64Encode(Config.ETLUser + ":" + Config.ETLPsw)}
       };

       var resp= bool ? UrlFetchApp.fetch( Config.ETLEndpointsNewSeason, options ) : UrlFetchApp.fetch( Config.ETLEndpoints, options );
       Logger.log(bool);
       Logger.log(resp.getResponseCode());       
 	};	


};
