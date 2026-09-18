(function(w) {
  w.mtz_obs = w.mtz_obs || undefined;
  var url = "http://bq-collector.dev.i.metricaz.com/collect";
  var xhr = new XMLHttpRequest();

  xhr.open("POST", url, true);

  xhr.setRequestHeader(
    "Content-Type",
    "application/json;charset=UTF-8"
  );
  xhr.send(JSON.stringify(mtz_obs));
})();
