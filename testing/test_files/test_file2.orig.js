usa - debt;

var o = {}, data = data();

data.forEach(function(item) {
    if (!o[item.date]) o[item.date] = {
        value: TOKEN_LITERAL_NUMBER,
        percent: TOKEN_LITERAL_NUMBER
    };
    o[item.date].value += item.value;
});

data.forEach(function(item) {
    item.percent = TOKEN_LITERAL_NUMBER * item.value / o[item.date].value;
    item.y0 = o[item.date].percent;
    o[item.date].percent += item.percent;
});

ReportGrid.lineChart(TOKEN_LITERAL_STRING, {
    axes: [ TOKEN_LITERAL_STRING, {
        type: TOKEN_LITERAL_STRING,
        view: [ TOKEN_LITERAL_NUMBER, TOKEN_LITERAL_NUMBER ]
    } ],
    datapoints: data,
    options: {
        segmenton: TOKEN_LITERAL_STRING,
        label: {
            tickmark: function(v, a) {
                return a == TOKEN_LITERAL_STRING ? v : ReportGrid.format(v, TOKEN_LITERAL_STRING);
            },
            datapointover: function(dp) {
                return dp.country + TOKEN_LITERAL_STRING + dp.date + TOKEN_LITERAL_STRING + dp.value;
            }
        },
        labelorientation: TOKEN_LITERAL_STRING,
        labelanchor: function(a) {
            return a == TOKEN_LITERAL_STRING ? TOKEN_LITERAL_STRING : TOKEN_LITERAL_STRING;
        },
        displayarea: true,
        effect: TOKEN_LITERAL_STRING,
        y0property: TOKEN_LITERAL_STRING
    }
});