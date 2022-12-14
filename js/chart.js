// chart
new Chart(document.getElementById("radar-chart"), {
  type: "radar",
  data: {
    labels: ["HTML5", "CSS3", "JavaScript", "jQuery", "Unity"],
    datasets: [
      {
        label: "Click !",
        fill: false,
        borderColor: "#55B96D",
        backgroundColor: "rgba(62,135,74,.5)",
        radius: 3,
        pointRadius: 3,
        pointBorderWidth: 3,
        pointBackgroundColor: "#EC5D3B",
        pointBorderColor: "#F9D65B",
        // pointHoveBackgroundColor: "#55B96D",
        pointHoverRadius: 4,
        data: [4.8, 4.5, 4.2, 4, 2.5],
        hidden: true,
      },
    ],
  },

  options: {
    legend: {
      fullWidth: false,
      labels: {
        fontSize: 15,
        fontColor: "#fff",
        boxWidth: 0,
      },
    },
    scale: {
      angleLines: {
        color: "#6D6D6D",
      },
      gridLines: {
        color: "#6D6D6D",
        lineWidth: 1,
      },
      ticks: {
        min: 0,
        max: 5,
        stepSize: 1,
        display: false,
      },
      pointLabels: {
        fontSize: 20,
        fontColor: "#fff",
        // fontfamily: "Pretendard-Bold",
      },
      // legend: {
      //   labels: {
      //     padding: 10,
      //     fontSize: 14,
      //     lineHeight: 30,
      //   },
      // },
    },
  },
});
