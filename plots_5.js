// creates dropdown menu of ID numbers dynamically
function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}
  
  init();
  
  // takes in an argument, named newSample, and logs it to the browser console
  function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
  }

  // when a dropdown menu is selected, the ID number is passed in as sample
  function buildMetadata(sample) {
      // pulls in entire dataset contained in samples.json and refers to it as data
      d3.json("samples.json").then((data) => {
          // metadata array in the dataset data.metadata is assigned variable 'metadata'
          var metadata = data.metadata;
          // filter() method is called to filter so that an object in the array whose id property matches ID number passed in as sample
          var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
          // first item in the array is selected and assigned the variable 'result'
          var result = resultArray[0];
          // selects div 'sample-metadata' and assigns it the variable 'PANEL'
          var PANEL = d3.select("#sample-metadata");
          
          // ensures that the contents of the panel are cleared when another ID number is chosen from dropdown menu
          PANEL.html("");
          // append() and text() methods are chained to append a H6 heading to the panel and print the location of the volunteer to the panel
          PANEL.append("h6").text("ID: " + result.id);
          PANEL.append("h6").text("ETHNICITY: " + result.ethnicity);
          PANEL.append("h6").text("GENDER: " + result.gender);
          PANEL.append("h6").text("AGE: " + result.age);
          PANEL.append("h6").text("LOCATION: " + result.location);
          PANEL.append("h6").text("BBTYPE: " + result.bbtype);
          PANEL.append("h6").text("WFREQ: " + result.wfreq);

          // {"id": 940, "ethnicity": "Caucasian", "gender": "F", "age": 24.0, "location": "Beaufort/NC", "bbtype": "I", "wfreq": 2.0},
      });
  }