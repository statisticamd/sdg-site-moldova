// Add any custom javascript here.
opensdg.chartConfigAlter(function(config) {
  // Citește national_geographical_coverage din metadatele deja încărcate pe pagină
  var geoCoverage = null;

  // Open SDG pune metadatele în window.pageData sau window.opensdg.data
  // Încearcă ambele locuri posibile
  if (window.pageData && window.pageData.national_geographical_coverage) {
    geoCoverage = window.pageData.national_geographical_coverage;
  } else if (window.opensdg && window.opensdg.pageData && window.opensdg.pageData.national_geographical_coverage) {
    geoCoverage = window.opensdg.pageData.national_geographical_coverage;
  }

  if (!geoCoverage) return; // dacă nu găsim nimic, nu facem nimic

  // Înlocuiește oriunde apare textul lung ca label pe grafic
  if (config.data && config.data.datasets) {
    config.data.datasets.forEach(function(dataset) {
      if (dataset.label === geoCoverage) {
        dataset.label = 'Total';
      }
    });
  }
});