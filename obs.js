(function() {
  window.mtz_obs = window.mtz_obs || [];
  var url = "https://bq-collector.dev.i.metricaz.com/collect";
  var xhr = new XMLHttpRequest();
  mtz_obs.ts = Date.now();
  
  xhr.open("POST", url, true);

  xhr.setRequestHeader(
    "Content-Type",
    "application/json;charset=UTF-8"
  );
  
  xhr.send(JSON.stringify(mtz_obs));
})();
