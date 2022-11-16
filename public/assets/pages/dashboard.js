
/*
 Template Name: Agroxa - Responsive Bootstrap 4 Admin Dashboard
 Author: Themesbrand
 File: Dashboard init js
 */

!function($) {
    "use strict";
    var Dashboard = function() {};
    $.ajax({
        type:"GET",
        url:"/trafica/json/tp_graph/denpasar/badung",
        data:{},
        beforeSend:function(){

        },
        success:function(data){   
            var series = [{
                name: 'TRAFFIC',
                data: data.data.TRAFFIC,
                yAxis:0,
                color: 'red'
            }, {
                name: 'PAYLOAD',
                data: data.data.PAYLOAD,
                yAxis:1
            }]
            //setHighChart(data.data.TGL,series);
        }
    });
    //creates area chart
    Dashboard.prototype.createAreaChart = function (element, pointSize, lineWidth, data, xkey, ykeys, labels, lineColors) {
        Morris.Area({
            element: element,
            pointSize: 0,
            lineWidth: 0,
            data: data,
            xkey: xkey,
            ykeys: ykeys,
            labels: labels,
            resize: true,
            gridLineColor: '#eee',
            hideHover: 'auto',
            lineColors: lineColors,
            fillOpacity: .7,
            behaveLikeLine: true
        });
    },

    //creates line chart
    Dashboard.prototype.createLineChart = function (element, pointSize, lineWidth, data, xkey, ykeys, labels, lineColors) {
        Morris.Line({
            element: element,
            pointSize: 0,
            lineWidth: 0,
            data: data,
            xkey: xkey,
            ykeys: ykeys,
            labels: labels,
            colors: ['#0b62a4'],
            pointFillColors: ['#0b62a4']
        });
    },

    //creates Donut chart
    Dashboard.prototype.createDonutChart = function (element, data, colors) {
        Morris.Donut({
            element: element,
            data: data,
            resize: true,
            colors: colors
        });
    },

    //pie
    $('.peity-pie').each(function () {
        $(this).peity("pie", $(this).data());
    });

    //donut
    $('.peity-donut').each(function () {
        $(this).peity("donut", $(this).data());
    });

    Dashboard.prototype.init = function() {
        //creating area traffic payload revenue chart
        $.ajax({
            type:"GET",
            url:"/trafica/json/tpr_graph",
            data:{},
            beforeSend:function(){

            },
            success:function(data){   
                //setHighChart(data.data.TGL,series);
            }
        });

        var $areaData = [
            {y: '2020-01-01', a: 0, b: 0, c:0},
            {y: '2020-01-02', a: 150, b: 45, c:15},
            {y: '2020-01-03', a: 60, b: 150, c:195},
            {y: '2020-01-04', a: 180, b: 36, c:21},
            {y: '2020-01-05', a: 90, b: 60, c:360},
            {y: '2020-01-06', a: 75, b: 240, c:120},
            {y: '2020-01-07', a: 30, b: 30, c:30}
        ];
        this.createAreaChart('morris-area-example', 0, 0, $areaData, 'y', ['a', 'b', 'c'], ['Traffic', 'Payload', 'Revenue'], ['red', 'blue', 'orange']);

        //creating donut chart
        var $donutData = [
            {label: "Download Sales", value: 12},
            {label: "In-Store Sales", value: 30},
            {label: "Mail-Order Sales", value: 20}
        ];
        this.createDonutChart('morris-donut-example', $donutData, ['#f0f1f4', '#f16c69', '#28bbe3']);

    },
    //init
    $.Dashboard = new Dashboard, $.Dashboard.Constructor = Dashboard
}(window.jQuery),

//initializing 
function($) {
    "use strict";
    $.Dashboard.init();
}(window.jQuery);