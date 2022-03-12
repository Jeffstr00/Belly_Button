# Belly Button Biodiversity w/ Plotly

Webpage: [https://jeffstr00.github.io/Belly_Button/](https://jeffstr00.github.io/Belly_Button/)

## Overview

Does thinking about belly buttons and bacteria make you hungry?  Great!  The Improbable Beef compnay is looking for bacteria species that have the ability to synthesize proteins which taste like beef.  So far, labs have been able to synthesize meat from algea, fungi, and plant root microorganisms.  However, so far, those results have left tasters asking, "Where's the beef (flavor)?"  Improbably Beef is hoping that crazy amounts of lint won't be the only thing found in belly buttons; they believe that the elusive beef-flavored bacterial species may be residing in there as well.

As a result, they have gone navel gazing across the world, checking nout belly buttons of countless volunteers to see if anyone happens to have beefy belly button bacteria.  In order to assist on their quest, we aim to create a website which takes information from those studies and displays it in various easy-to-read tables and charts.  When the user selects the Test Subject ID from the dropdown menu, they will be provided with a table full of demographic information, both a horizontal bar chart and a bubble chart showing what bacteria they have, and a gauge chart showing how often they (claim to) wash their belly button.

## Creating Custom Table & Charts

![Sample 1443 Charts](https://github.com/Jeffstr00/Belly_Button/blob/main/resources/charts_1443.png)

### Demographic Table

After reading in the samples .json file, we grab its metadata using `var metadata = data.metadata`.  To select the metadata that goes with the selected sample number, we use `var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);`.  In order to create the dynamic table, we use .append() to add the information to the "sample-metadata" div in our index.html, like so: `Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);`.

### Top 10 Bacteria Cultures Horizontal Bar Chart

Before creating our charts, we read in the samples.json file, this time grabbing its .samples array, and once again filtering it so that it matches our Sample ID.  We then extracted the sample's otu_ids, otu_labels, and sample_values.  We set x = sample_values, hover text = otu_labels, and yticks = otu_ids.  Each time, we used .slice(0,10) to grab the top 10 results and .reverse() so that the results would appear in descending order.

### Bacteria Cultures Per Sample Bubble Chart

Since we already had the information we needed, creating the bubble chart was relatively straight forward.  This time, we used otu_ids for our x value (as well as the marker color), sample values were used for y (and marker size), and otu_labels were the hover text.  In the end, our bubbleData trace looked like this: `let bubbleData = [{
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: "markers",
      marker: {
        size: sample_values,
        color: otu_ids,
        colorscale: "Earth"
      }
    }];`

### Belly Button Washing Frequency Gauge Chart

Once again, we read in the metadata from the json, filtered it so that the id matched that of our selected sample, but this time we grabbed the washing frequnecy (and converted it from a string to a floating-point number using parseFloat).  When setting up the gauge chart, we simply used wfreq as the value.  To standardize the chart's appearance, we set the gauge's axis range from 0 to 10 and its steps as `{range: [0,2], color: "red"}`, with each range having its own specified color.

## Enhancing Webpage

![Belly Button Biodiversity Webpage](https://github.com/Jeffstr00/Belly_Button/blob/main/resources/webpage.png)

While we satiated Improbable Beef's hunger by providing them with a webpage that displayed information on samples' demographic information, belly button contents, and washing frequency through a series of tables and charts, we still wanted to make improvements to make things even more understandable and visually appealing.  Therefore, we made the following (hopeful) improvements:

* While it is (somewhat unfortunately) largely concealed by the contents of the webpage, we made the background of the page a yellowish:black radial gradient using `<body style="background-image: radial-gradient(black, #ad8c31, #f5c542);">`.  While mustardy yellow isn't everyone's favorite color, we used this so that the entire page represented an actual belly button, with a quasi-flesh color as the background and a black circle in the middle.

* To go along with the background color change, we kept the font color the same for the contrast, but we made a few other changes to keep things in line.  The jumbotron was colored a slightly brighter yellow using `style="background-color: #f5c542` and we similarly changed the header of the Demographic Info table from blue to black.

* We decided to include a image of Philadelphia Flyers mascot Gritty showing off his belly button (and then some...).  After all, when talking about what can be found lurking in one's belly button, who could possibly have a funkier belly button than Gritty??  To include the picture, we used `<img src="resources/grittys-belly-button.jpg" alt="Gritty's belly button" class="center">`.  The "center" class referenced our CSS page, which centered the image with `.center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }`.

* Finally, we included a blurb at the bottom of the page which explains its purpose.  While this was fairly straight forward, to make it both easier on the eyes and easy to read, we combined HTML and CSS to indent the paragraphs.  To accomplish this, we put the text inside of `<h4 class="indent">`, which referenced our CSS file where it essentially intended the first line of each paragraph using `h4.indent {
    text-indent: 30px;
}`.